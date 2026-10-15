
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const nombre = String(formData.get('nombre') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const privacidad = formData.get('privacidad')

    if (!nombre || !email || privacidad === null) {
      return new Response('Por favor, completá todos los campos requeridos.', {
        status: 400,
      })
    }

    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      console.error('Falta configurar RESEND_API_KEY')
      return new Response('Error de configuración del servidor.', {
        status: 500,
      })
    }

    const resend = new Resend(apiKey)

    const resultado = await resend.emails.send({
      from: 'Coherencia Interior <onboarding@resend.dev>',
      to: ['senderoterapias@gmail.com'],
      subject: 'Nueva inscripción a la primera etapa',
      text: `Nueva persona registrada en Coherencia Interior.

Nombre: ${nombre}
Correo: ${email}`,
    })

    if (resultado.error) {
      console.error('Error de Resend:', resultado.error)
      return new Response(
        'No pudimos procesar el formulario. Intentá nuevamente.',
        { status: 500 },
      )
    }

    return NextResponse.redirect(
      new URL('/primera-etapa', request.url),
      303,
    )
  } catch (error) {
    console.error('Error al procesar el formulario:', error)

    return new Response(
      'Ocurrió un error al procesar el formulario. Intentá nuevamente.',
      { status: 500 },
    )
  }
}
