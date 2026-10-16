
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

    // 1. Notificación para vos
    const notificacion = await resend.emails.send({
      from: 'Coherencia Interior <onboarding@resend.dev>',
      to: ['senderoterapias@gmail.com'],
      subject: 'Nueva inscripción a la primera etapa',
      text: `Nueva persona registrada en Coherencia Interior.

Nombre: ${nombre}
Correo: ${email}`,
    })

    if (notificacion.error) {
      console.error('Error en la notificación:', notificacion.error)
      return new Response('No pudimos procesar el formulario. Intentá nuevamente.', {
        status: 500,
      })
    }

    // 2. Correo de bienvenida para la persona
    const bienvenida = await resend.emails.send({
      from: 'Coherencia Interior <onboarding@resend.dev>',
      to: [email],
      subject: 'Bienvenido/a a Coherencia Interior · Tu clase gratuita',
      html: `
        <div style="background:#F3EFE6;padding:24px;font-family:Arial,sans-serif;color:#51483D;">
          <div style="max-width:600px;margin:0 auto;background:#FAF8F2;padding:32px;border-radius:8px;line-height:1.65;">
            <h1 style="font-size:26px;font-weight:normal;text-align:center;">Coherencia Interior</h1>
            <p>Hola ${nombre.replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c] ?? c))},</p>
            <p>Me alegra que estés acá y que te hayas acercado a este espacio.</p>
            <p>Quiero darte la bienvenida a Coherencia Interior y agradecerte por tu interés en este proceso.</p>
            <p>Preparé esta primera etapa para compartirte algunas de las bases que considero importantes para comprender nuestro camino interior y empezar a llevar esa comprensión a nuestra vida cotidiana.</p>
            <p style="text-align:center;margin:32px 0;">
              <a href="https://coherencia-interior-3.vercel.app/primera-etapa" style="background:#69745E;color:#FFFFFF;text-decoration:none;padding:14px 24px;border-radius:6px;display:inline-block;font-weight:bold;">ACCEDER A LA CLASE GRATUITA</a>
            </p>
            <p>Guardá este correo para volver a ella cuando quieras.</p>
            <p>Y si mientras recorrés el material te surge una pregunta, o algo de lo que comparto te resuena especialmente, podés escribirme. Me interesa que este espacio no sea solamente contenido que recibís, sino también una oportunidad para acercarnos y conversar.</p>
            <h2 style="font-size:20px;font-weight:normal;margin-top:32px;">Si sentís que querés profundizar en este camino…</h2>
            <p>Coherencia Interior es un proceso de cuatro etapas que creé para acompañarte a integrar lo que comprendés de vos mismo y de tu dimensión espiritual en la forma en que vivís, elegís y te relacionás con tu día a día.</p>
            <p>Podés recorrerlo a tu ritmo, con las clases y los materiales grabados, o participar en las ediciones en vivo, con acompañamiento durante el proceso.</p>
            <p>En ambos casos, el recorrido incluye un encuentro individual conmigo para acompañarte en tu integración. También podés sumar sesiones individuales si sentís que necesitás profundizar en algún aspecto particular de tu proceso.</p>
            <p>Si querés conocer más, o simplemente conversar conmigo para ver si este camino tiene sentido para vos, podés escribirme directamente por WhatsApp.</p>
            <p style="text-align:center;margin:28px 0;">
              <a href="https://wa.me/59897792729" style="background:#A66B4F;color:#FFFFFF;text-decoration:none;padding:14px 24px;border-radius:6px;display:inline-block;font-weight:bold;">ESCRIBIRME POR WHATSAPP</a>
            </p>
            <p>Si llegaste a través de esta clase gratuita, tengo un beneficio especial para quienes quieran continuar con el proceso completo y prefieran contactarme directamente.</p>
            <p>No hace falta que tengas todo claro ni que sepas exactamente qué estás buscando. Podemos conversar y ver qué necesitás en este momento.</p>
            <p>Gracias por estar acá.</p>
            <p>Un abrazo,<br><strong>Adrián Patrone</strong><br>Escuela del Ser · Coherencia Interior</p>
          </div>
        </div>
      `,
    })

    if (bienvenida.error) {
      console.error('Error en el correo de bienvenida:', bienvenida.error)
      return new Response(
        'Tu inscripción se registró, pero no pudimos enviar el correo de bienvenida.',
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
