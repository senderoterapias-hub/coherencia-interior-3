import { CtaLink } from '@/components/cta-link'
import { Handwritten, Sparkle } from '@/components/doodles'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import {
  FULL_PROCESS_PRICE,
  HOTMART_URL,
} from '@/lib/site'

const stages = [
  {
    number: '01',
    eyebrow: 'COMPRENDER',
    title:
      'Comprendé por qué experimentás la vida de la forma en que lo hacés.',
    intro:
      'Aprendé a ser maestro de tu mundo interior y a comprender cómo funciona tu manera única de experimentar la vida.',
    points: [
      'Autorregular tu sistema nervioso.',
      'Volver al centro y a la claridad en el día a día, incluso en momentos de crisis.',
      'Percibir las distintas partes de tu ser: alma, mente, sentimiento y cuerpo.',
      'Comprender cómo interactúan entre sí.',
      'Descubrir tu manera única de experimentar la vida.',
    ],
    closing:
      'Así como no existen dos huellas dactilares iguales, no existen dos auras iguales. En esta etapa comenzás a conocer tu propio mundo interno de una manera mucho más profunda y simple.',
  },
  {
    number: '02',
    eyebrow: 'LIBERAR',
    title: 'Liberá eso que te ata a lo que ya no sos.',
    intro:
      'Una vez que empezás a comprender tu mundo interno, aparece el siguiente paso: liberar aquello que pertenece a una versión anterior de vos.',
    points: [
      'Reconocer programas mentales antiguos.',
      'Liberar creencias vinculadas a viejas identidades.',
      'Aprender a reprogramarte de forma simple y consciente.',
      'Llevar tu nueva consciencia al mundo externo con mayor seguridad.',
      'Trabajar sobre tu campo energético.',
      'Liberar cargas y ataduras kármicas del alma.',
    ],
    quote:
      'No se trata de luchar contra quien fuiste. Se trata de dejar de vivir desde una identidad que ya cumplió su función, para que pueda nacer tu verdadero ser.',
    closing:
      'La transformación no tiene que ser un proceso doloroso. Puede ser simple y poderosa.',
  },
  {
    number: '03',
    eyebrow: 'ESCUCHAR',
    title: 'Escuchá tu voz interior.',
    intro:
      'Después de conocerte y liberar aquello que ya no corresponde, llega una pregunta más profunda:',
    question: '¿Qué voz estoy escuchando?',
    points: [
      'Diferenciar la voz del ego de la voz de tu ser espiritual.',
      'Reconocer tu guía interior.',
      'Interpretar las sincronías.',
      'Leer las señales que aparecen en tu camino.',
      'Comprender el mapa que la vida va mostrando delante tuyo.',
    ],
    quote:
      'Cuando aprendés a escucharte, empezás también a reconocer cómo la vida te responde.',
  },
  {
    number: '04',
    eyebrow: 'CREAR',
    title: 'Una Vida alineada a tu Propósito',
    intro:
      'A lo largo de Coherencia Interior vas a descubrir tu propósito actual, en esta etapa es donde lográs plasmarlo.',
    points: [
      'Acá integrás el proceso vivido y lo llevás hacia una nueva etapa y consciencia.',
      'Y aprendés a manifestar de forma simple con una herramienta poderosa.',
    ],
  },
]

export default function Page() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* HERO */}
        <section
          id="inicio"
          className="relative overflow-hidden px-5 pb-16 pt-12 sm:pb-20 sm:pt-16 md:pb-28 md:pt-24"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 top-10 size-72 rounded-full bg-[#eadcc6]/60 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 bottom-0 size-80 rounded-full bg-[#dfe4c8]/50 blur-3xl"
          />
