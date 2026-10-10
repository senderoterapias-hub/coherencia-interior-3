import { CtaLink } from '@/components/cta-link'
import { Handwritten } from '@/components/doodles'
import { ArrowDown, Headphones, NotebookPen, Play, Video } from 'lucide-react'
import {
  DEEP_EXPERIENCE_WHATSAPP_URL,
  HOTMART_URL,
  FULL_PROCESS_PRICE,
} from '@/lib/site'

export default function PrimeraEtapaPage() {
  return (
    <main className="min-h-screen">
      {/* INTRO */}
      <section className="px-5 pb-14 pt-14 md:pb-20 md:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <Handwritten className="rotate-1">
            Coherencia Interior
          </Handwritten>

          <h1 className="mx-auto mt-4 max-w-3xl font-serif font-soft text-[2.6rem] leading-[1.03] text-balance md:text-6xl">
            Bienvenido a la primera etapa de
            <span className="mt-2 block italic text-primary">
              Coherencia Interior
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl font-serif font-soft text-xl leading-[1.45] text-balance md:text-2xl">
            La puerta de entrada a un proceso que puede transformar la forma en
            que te comprendés y vivís.
          </p>

          <p className="mx-auto mt-7 max-w-lg font-serif font-soft text-lg leading-[1.5] text-foreground text-pretty md:text-xl">
            Esta primera fase es el primero de 4 pasos esenciales.
          </p>

          {/* LO QUE TE LLEVÁS */}
          <div className="mx-auto mt-11 max-w-xl text-left">
            <p className="text-center font-serif font-soft text-xl text-foreground md:text-2xl">
              La primera fase te ayudará a:
            </p>

            <ul className="mt-6 space-y-5 text-[15px] leading-[1.7] text-muted-foreground md:text-base">
              <li className="flex gap-4">
                <span className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Volver a tu centro sin importar las circunstancias.
                </span>
              </li>

              <li className="flex gap-4">
                <span className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Comprender cómo funcionás de forma simple.
                </span>
              </li>

              <li className="flex gap-4">
                <span className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Encontrar respuestas a preguntas que seguramente te
                  acompañan hace tiempo.
                </span>
              </li>
            </ul>
          </div>

          <ArrowDown
            aria-hidden="true"
            className="mx-auto mt-11 size-5 text-primary"
            strokeWidth={1.5}
          />
        </div>
      </section>

      {/* EXPERIENCIA */}
      <div className="relative overflow-hidden">
        {/* TRANSICIÓN DE ENTRADA */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-40 bg-gradient-to-b from-background via-[#F1E7D7]/80 to-[#EDE2D0]"
        />

        {/* ATMÓSFERA SUTIL */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-25"
          style={{
            backgroundImage:
              'radial-gradient(circle at 15% 20%, rgba(95,107,58,0.10) 0, transparent 24%), radial-gradient(circle at 88% 72%, rgba(200,121,90,0.08) 0, transparent 26%)',
          }}
        />

        <div className="relative z-10 bg-[#EDE2D0]">
          {/* 01 — MIRAR */}
          <section
            id="mirar"
            aria-labelledby="mirar-title"
            className="scroll-mt-6 px-4 pb-16 pt-28 md:pb-24 md:pt-32"
          >
            <div className="mx-auto max-w-5xl">
              <div className="mb-10 text-center">
                <span className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.18em] text-primary uppercase">
                  <Video className="size-4" strokeWidth={1.5} />
                  01 · Mirar
                </span>

                <h2
                  id="mirar-title"
                  className="mt-3 font-serif font-soft text-[2.1rem] leading-[1.1] text-balance md:text-5xl"
                >
                  La clase
                </h2>

                <p className="mx-auto mt-5 max-w-xl leading-[1.8] text-muted-foreground text-pretty md:text-lg">
                  Comenzá por la clase. Es el punto de partida para comprender
                  dónde estás y empezar a observar tu propia experiencia.
                </p>
              </div>

              <div className="overflow-hidden rounded-[1.75rem] bg-card p-2 shadow-sm ring-1 ring-foreground/5 md:p-3">
                <div className="aspect-video overflow-hidden rounded-[1.25rem] bg-black">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/2iMcHiU-DqA"
                    title="Clase 1 de Coherencia Interior: La Consciencia"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 02 — EXPERIMENTAR */}
          <section
            aria-labelledby="experimentar-title"
            className="bg-[#E7DBC8]/55 px-4 py-16 md:py-24"
          >
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.18em] text-primary uppercase">
                <Headphones className="size-4" strokeWidth={1.5} />
                02 · Experimentar
              </span>

              <h2
                id="experimentar-title"
                className="mt-3 font-serif font-soft text-[2.1rem] leading-[1.1] text-balance md:text-5xl"
              >
                La meditación
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-[1.8] text-muted-foreground text-pretty md:text-lg">
                Después de la clase, podés continuar con esta práctica.
                Buscá un momento tranquilo y permitite experimentar sin apuro.
              </p>

              <div className="mx-auto mt-10 max-w-xl rounded-[1.75rem] bg-card p-7 ring-1 ring-foreground/5 md:p-10">
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-butter">
                  <Play
                    aria-hidden="true"
                    className="ml-0.5 size-5"
                    fill="currentColor"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="mt-5 font-serif font-soft text-2xl md:text-3xl">
                  Meditación guiada
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Una práctica para llevar la experiencia de la clase a tu
                  propio espacio interior.
                </p>

                <audio
                  className="mt-7 w-full"
                  controls
                  preload="metadata"
                >
                  <source
                    src="/Meditacio%CC%81n%20Guiada.m4a"
                    type="audio/mp4"
                  />
                  Tu navegador no puede reproducir este audio.
                </audio>

                <p className="mt-4 text-xs text-muted-foreground">
                  Podés escucharla cuando quieras y volver a ella las veces que
                  necesites.
                </p>
              </div>
            </div>
          </section>

          {/* 03 — INTEGRAR */}
          <section
            aria-labelledby="integrar-title"
            className="px-4 py-16 md:py-24"
          >
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.18em] text-primary uppercase">
                <NotebookPen className="size-4" strokeWidth={1.5} />
                03 · Integrar
              </span>

              <h2
                id="integrar-title"
                className="mt-3 font-serif font-soft text-[2.1rem] leading-[1.1] text-balance md:text-5xl"
              >
                La bitácora
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-[1.8] text-muted-foreground text-pretty md:text-lg">
                La bitácora es un espacio para registrar lo que vas
                descubriendo, poner en palabras tu experiencia y profundizar el
                proceso.
              </p>

              <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-[1.75rem] bg-card ring-1 ring-foreground/5">
                <div className="aspect-[3/4] bg-background">
                  <iframe
                    className="h-full w-full"
                    src="/Bitacora%20de%20acompan%CC%83amiento.pdf"
                    title="Bitácora de acompañamiento"
                  />
                </div>

                <div className="flex flex-col items-center gap-4 p-6 sm:flex-row sm:justify-center">
                  <a
                    href="/Bitacora%20de%20acompan%CC%83amiento.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Abrir bitácora
                  </a>

                  <a
                    href="/Bitacora%20de%20acompan%CC%83amiento.pdf"
                    download
                    className="inline-flex items-center justify-center rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium transition-colors hover:bg-card"
                  >
                    Descargar
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* COMPRENDER ES EL PRIMER PASO */}
          <section
            aria-labelledby="primer-paso-title"
            className="px-4 pb-16 pt-8 md:pb-20 md:pt-12"
          >
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto h-px w-12 bg-primary/30" />

              <h2
                id="primer-paso-title"
                className="mt-9 font-serif font-soft text-[2.25rem] leading-[1.08] text-balance md:text-5xl"
              >
                Comprender es el primer paso.
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-base leading-[1.8] text-muted-foreground text-pretty md:text-lg">
                Lo que sigue es llevar esa comprensión a tu vida.
              </p>

              <div className="mx-auto mt-8 flex max-w-md flex-col gap-3">
                <a
                  href="#mirar"
                  className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-[0_4px_0_0_rgba(59,42,31,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#535e31]"
                >
                  VIVIR LA ETAPA 1
                </a>

                <a
                  href="#siguientes-etapas"
                  className="inline-flex min-h-14 w-full items-center justify-center rounded-full border border-foreground/15 bg-card/60 px-7 py-4 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-card"
                >
                  DESPUÉS DE DAR EL PASO
                  <span className="ml-2">↓</span>
                </a>
              </div>
            </div>
          </section>

          {/* SIGUIENTES ETAPAS */}
          <section
            id="siguientes-etapas"
            aria-labelledby="siguientes-title"
            className="scroll-mt-8 px-4 pb-20 pt-8 md:pb-28 md:pt-14"
          >
            <div className="mx-auto max-w-3xl text-center">
              <Handwritten className="rotate-1">
                las siguientes etapas
              </Handwritten>

              <h2
                id="siguientes-title"
                className="mt-4 font-serif font-soft text-[2.2rem] leading-[1.08] text-balance md:text-5xl"
              >
                Las siguientes etapas te acompañan a:
              </h2>

              <div className="mx-auto mt-9 max-w-2xl space-y-4 text-left">
                <div className="rounded-[1.35rem] border border-foreground/10 bg-card/65 px-5 py-5 text-[15px] leading-[1.7] text-muted-foreground md:px-6 md:text-base">
                  <span className="mr-3 font-serif text-lg text-primary">
                    01
                  </span>
                  Liberarte de aquello que no te permite avanzar como deseás.
                </div>

                <div className="rounded-[1.35rem] border border-foreground/10 bg-card/65 px-5 py-5 text-[15px] leading-[1.7] text-muted-foreground md:px-6 md:text-base">
                  <span className="mr-3 font-serif text-lg text-primary">
                    02
                  </span>
                  Despertar una mayor conexión con tu Guía Superior y aprender a
                  fluir verdaderamente con ella.
                </div>

                <div className="rounded-[1.35rem] border border-foreground/10 bg-card/65 px-5 py-5 text-[15px] leading-[1.7] text-muted-foreground md:px-6 md:text-base">
                  <span className="mr-3 font-serif text-lg text-primary">
                    03
                  </span>
                  Manifestar una realidad consciente y coherente con quien sos
                  hoy.
                </div>
              </div>

              <div className="mx-auto mt-11 max-w-xl">
                <p className="font-serif font-soft text-xl leading-[1.5] text-foreground md:text-2xl">
                  De comprenderte a transformarte.
                  <br />
                  De conectarte a vivir en coherencia.
                </p>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Ese es el recorrido de las 4 etapas.
                </p>
              </div>
            </div>
          </section>

          {/* SESIÓN 1 A 1 */}
          <section
            aria-labelledby="sesion-title"
            className="px-4 pb-24 pt-4 md:pb-32 md:pt-8"
          >
            <div className="mx-auto max-w-3xl">
              <div className="relative overflow-hidden rounded-[2rem] bg-card p-7 text-center shadow-sm ring-1 ring-primary/15 md:p-12">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-primary"
                />

                <span className="inline-flex items-center rounded-full bg-butter px-4 py-2 text-[0.68rem] font-semibold tracking-[0.16em] text-foreground uppercase ring-1 ring-foreground/10">
                  Incluido en el proceso completo
                </span>

                <Handwritten className="mt-7 rotate-1">
                  un espacio para vos
                </Handwritten>

                <h2
                  id="sesion-title"
                  className="mx-auto mt-4 max-w-2xl font-serif font-soft text-[2rem] leading-[1.08] text-balance md:text-4xl"
                >
                  Además de las 4 etapas, tenés una sesión 1 a 1 conmigo.
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.8] text-muted-foreground text-pretty md:text-lg">
                  Una sesión personalizada para conocer tu proceso y
                  profundizar en lo que estés atravesando.
                </p>

                <p className="mx-auto mt-6 max-w-xl font-serif font-soft text-lg leading-snug text-foreground md:text-xl">
                  Esta sesión ya está incluida al acceder al proceso completo.
                </p>

                <CtaLink
                  href={HOTMART_URL}
                  variant="primary"
                  className="mt-8 w-full sm:w-auto"
                >
                  Quiero continuar con Coherencia Interior
                </CtaLink>

                <p className="mt-4 text-sm text-muted-foreground">
                  4 etapas · WhatsApp · 1 sesión individual 1 a 1
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* TRANSICIÓN DE SALIDA */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-background via-[#F1E7D7]/80 to-transparent"
        />
      </div>

      {/* CIERRE */}
      <section className="px-5 pb-20 pt-12 md:pb-28 md:pt-20">
        <div className="mx-auto max-w-2xl text-center">
          <Handwritten>
            Coherencia Interior
          </Handwritten>

          <h2 className="mt-4 font-serif font-soft text-[2.1rem] leading-[1.1] text-balance md:text-5xl">
            Un proceso para llevar lo que comprendés a tu vida.
          </h2>

          <p className="mx-auto mt-6 max-w-lg leading-[1.8] text-muted-foreground text-pretty md:text-lg">
            Cuatro etapas que recorren un mismo proceso de transformación,
            acompañándote a profundizar cada vez más en tu propia experiencia.
          </p>

          <div className="mx-auto mt-9 max-w-md">
            <CtaLink
              href={HOTMART_URL}
              variant="primary"
              className="w-full sm:w-auto"
            >
              Continuar con Coherencia Interior
            </CtaLink>

            <p className="mt-4 text-sm text-muted-foreground">
              {FULL_PROCESS_PRICE} · proceso completo
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-md border-t border-foreground/10 pt-8">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Si querés conocer la posibilidad de acompañar el proceso con
              sesiones 1 a 1, también podés escribirme directamente.
            </p>

            <a
              href={DEEP_EXPERIENCE_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium transition-colors hover:bg-card"
            >
              Consultar por sesiones 1 a 1
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
