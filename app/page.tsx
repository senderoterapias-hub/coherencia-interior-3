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

          <div className="relative mx-auto max-w-4xl text-center">
            <Handwritten>
              despertar · integración · expansión
            </Handwritten>

            <h1 className="mt-4 font-serif font-soft text-[3rem] leading-[0.95] text-balance text-[#3b2a1f] sm:text-[4rem] md:text-6xl">
              Coherencia{' '}
              <span className="italic text-primary">Interior</span>
            </h1>

            <h2 className="mx-auto mt-7 max-w-3xl font-serif font-soft text-[1.75rem] leading-[1.15] text-[#4d392b] text-balance sm:text-[2.2rem] md:text-[2.75rem]">
              El mapa para navegar tu mundo y crear un{' '}
              <span className="italic text-primary">Puente</span> entre tu
              Interior y tu Vida.
            </h2>

            <div className="mx-auto mt-8 max-w-2xl space-y-5 text-[1rem] leading-[1.75] text-[#5b4737] text-balance sm:text-[1.05rem] md:mt-9 md:text-lg">
              <p>
                Los cambios que buscás no llegan con logros externos y
                esfuerzo.
              </p>

              <p>
                Se crean cuando lográs{' '}
                <strong className="font-semibold text-[#3f3025]">SER</strong>{' '}
                eso que deseás y sostenerlo en coherencia.
              </p>
            </div>

            <p className="mx-auto mt-7 font-serif text-[1.2rem] leading-[1.45] text-[#5b4737] sm:text-[1.35rem] md:mt-8 md:text-2xl">
              Conexión · Liviandad · Claridad · Propósito
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-muted-foreground sm:mt-8">
              <span>4 etapas</span>
              <span aria-hidden="true">·</span>
              <span>Online</span>
              <span aria-hidden="true">·</span>
              <span>A tu ritmo</span>
            </div>
          </div>
        </section>

        {/* PARA QUIÉN ES */}
        <section
          aria-labelledby="para-quien-title"
          className="bg-card px-5 py-20 md:py-28"
        >
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <Handwritten>
                <span className="text-[1.3rem] sm:text-[1.4rem] md:text-[1.5rem]">
                  antes de seguir avanzando
                </span>
              </Handwritten>

              <h2
                id="para-quien-title"
                className="mt-5 font-serif font-soft text-[2.25rem] leading-[1.08] text-balance md:text-[3rem]"
              >
                Quiero saber si este proceso es para vos:
              </h2>
            </div>

            {/* CARRUSEL EN MÓVIL / 2 COLUMNAS EN DESKTOP */}
            <div className="mt-12 -mx-5 flex w-[calc(100%+40px)] gap-4 overflow-x-auto px-5 pb-4 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:w-auto md:grid-cols-2 md:gap-8 md:overflow-visible md:px-0 md:pb-0">
              {/* ES PARA VOS */}
              <div className="w-[calc(100vw-56px)] min-w-[calc(100vw-56px)] shrink-0 snap-start rounded-[1.75rem] border border-primary/20 bg-[#f8f2e8] p-7 shadow-[0_10px_30px_rgba(72,52,36,0.05)] md:w-auto md:min-w-0 md:shrink md:p-9">
                <h3 className="font-serif font-soft text-2xl text-[#3f3025] md:text-3xl">
                  Coherencia Interior es para quienes:
                </h3>

                <ul className="mt-7 space-y-4">
                  <li className="flex gap-3 text-[1.05rem] leading-[1.7] text-[#5b4737] md:text-lg">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      Están dispuestos a ver hacia adentro con compasión,
                      apertura y honestidad.
                    </span>
                  </li>

                  <li className="flex gap-3 text-[1.05rem] leading-[1.7] text-[#5b4737] md:text-lg">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      Están dispuestos a hacer pequeñas prácticas diarias para
                      transformar su vida.
                    </span>
                  </li>

                  <li className="flex gap-3 text-[1.05rem] leading-[1.7] text-[#5b4737] md:text-lg">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      Desean que su vida externa refleje su mundo interior y
                      espiritualidad de forma natural.
                    </span>
                  </li>

                  <li className="flex gap-3 text-[1.05rem] leading-[1.7] text-[#5b4737] md:text-lg">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      Sienten un llamado interno a ser parte del cambio y
                      desean conocer cómo cumplir su propósito.
                    </span>
                  </li>
                </ul>
              </div>

              {/* NO ES PARA VOS */}
              <div className="w-[calc(100vw-56px)] min-w-[calc(100vw-56px)] shrink-0 snap-start rounded-[1.75rem] border border-[#8e765d]/20 bg-[#eee5d7] p-7 shadow-[0_10px_30px_rgba(72,52,36,0.05)] md:w-auto md:min-w-0 md:shrink md:p-9">
                <h3 className="font-serif font-soft text-2xl text-[#3f3025] md:text-3xl">
                  Coherencia Interior NO es para quienes:
                </h3>

                <ul className="mt-7 space-y-4">
                  <li className="flex gap-3 text-[1.05rem] leading-[1.7] text-[#5b4737] md:text-lg">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-[#9b7650]" />
                    <span>
                      Buscan conexión espiritual y despertar dones solo por
                      curiosidad.
                    </span>
                  </li>
