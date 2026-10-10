import { CtaLink } from '@/components/cta-link'
import { Handwritten } from '@/components/doodles'
import { ArrowDown, ChevronDown, Headphones, NotebookPen, Play, Video } from 'lucide-react'
import { HOTMART_URL, FULL_PROCESS_PRICE } from '@/lib/site'

export default function PrimeraEtapaPage() {
  return (
    <main className="min-h-screen">
      {/* INTRO */}
      <section className="px-5 pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <Handwritten className="rotate-1">
            Coherencia Interior
          </Handwritten>

          <h1 className="mt-3 font-serif font-soft text-[2.35rem] leading-[1.05] text-balance md:text-6xl">
            Bienvenido a la primera fase de{' '}
            <span className="italic text-primary">
              Coherencia Interior
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl font-serif font-soft text-xl leading-snug text-balance md:text-2xl">
            La puerta de entrada a un proceso que puede transformar la forma en que te comprendés y vivís.
          </p>

          <p className="mx-auto mt-5 max-w-lg leading-[1.8] text-muted-foreground text-pretty md:text-lg">
            Esta primera fase es un paso. No busca darte todas las respuestas, sino abrir una nueva comprensión desde la cual puedas comenzar a mirar tu vida de otra manera.
          </p>

          <div className="mx-auto mt-8 max-w-md rounded-[1.5rem] bg-card/80 p-6 text-left ring-1 ring-foreground/8 backdrop-blur-sm">
            <p className="font-serif font-soft text-xl text-foreground">
              La primera fase te ayuda a:
            </p>

            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              <li>• Volver del caos al centro.</li>
              <li>• Comprender tus luchas internas y comenzar a ordenarte.</li>
              <li>• Autorregularte para entrar en coherencia.</li>
            </ul>

            <p className="mt-6 font-serif font-soft text-xl text-foreground">
              Y abre la puerta a lo que sigue:
            </p>

            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              <li>• Liberarte de aquello que no te permite avanzar.</li>
              <li>• Despertar una mayor conexión con tu Guía Superior.</li>
              <li>• Manifestar una realidad más consciente y coherente.</li>
            </ul>
          </div>

          <ArrowDown
            aria-hidden="true"
            className="mx-auto mt-10 size-5 text-primary"
            strokeWidth={1.5}
          />
        </div>
      </section>

      {/* AULA */}
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-48 bg-gradient-to-b from-background via-[#E8D9C2]/85 to-transparent"
        />

        <div className="absolute inset-0 bg-[#D8C4A8]" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(
                ellipse 75% 45% at 12% 18%,
                rgba(247, 238, 221, 0.72) 0%,
                rgba(247, 238, 221, 0.30) 34%,
                transparent 68%
              ),
              radial-gradient(
                ellipse 65% 50% at 88% 28%,
                rgba(122, 91, 63, 0.18) 0%,
                rgba(122, 91, 63, 0.08) 38%,
                transparent 72%
              ),
              radial-gradient(
                ellipse 70% 55% at 18% 78%,
                rgba(188, 150, 108, 0.34) 0%,
                rgba(188, 150, 108, 0.12) 40%,
                transparent 72%
              ),
              radial-gradient(
                ellipse 75% 55% at 88% 86%,
                rgba(95, 72, 52, 0.20) 0%,
                rgba(95, 72, 52, 0.08) 40%,
                transparent 75%
              )
            `,
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply"
          style={{
            backgroundImage: `
              radial-gradient(
                circle at 20% 30%,
                rgba(59, 42, 31, 0.22) 0,
                transparent 1.2px
              ),
              radial-gradient(
                circle at 70% 60%,
                rgba(255, 250, 240, 0.35) 0,
                transparent 1.4px
              )
            `,
            backgroundSize: '7px 7px, 11px 11px',
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[#E7D7BF]/20"
        />

        <div className="relative z-10">
          {/* 01 — MIRAR */}
          <section
            aria-labelledby="mirar-title"
            className="px-4 pb-12 pt-28 md:pb-16 md:pt-32"
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
                  Comenzá por la clase. Es el punto de partida para comprender dónde estás y empezar a observar tu propia experiencia.
                </p>
              </div>

              <div className="overflow-hidden rounded-[1.75rem] bg-card/95 p-2 shadow-[0_18px_50px_rgba(59,42,31,0.10)] ring-1 ring-foreground/10 backdrop-blur-sm md:p-3">
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
          <section className="px-4 py-5 md:py-8">
            <div className="mx-auto max-w-3xl">
              <details className="group overflow-hidden rounded-[1.5rem] bg-card/75 shadow-[0_14px_40px_rgba(59,42,31,0.07)] ring-1 ring-foreground/10 backdrop-blur-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 md:px-7 md:py-6 [&::-webkit-details-marker]:hidden">
                  <div className="flex items-center gap-3 text-left">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-butter text-foreground">
                      <Headphones className="size-4" strokeWidth={1.5} />
                    </span>

                    <div>
                      <span className="block text-xs font-medium tracking-[0.16em] text-primary uppercase">
                        02 · Experimentar
                      </span>

                      <span className="mt-1 block font-serif font-soft text-xl leading-tight md:text-2xl">
                        Meditación guiada
                      </span>

                      <span className="mt-1 block text-sm text-muted-foreground">
                        Llevá lo que comprendiste a la experiencia.
                      </span>
                    </div>
                  </div>

                  <ChevronDown
                    className="size-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-180"
                    strokeWidth={1.5}
                  />
                </summary>

                <div className="border-t border-foreground/8 px-5 pb-6 pt-6 md:px-7">
                  <p className="max-w-xl leading-[1.8] text-muted-foreground text-pretty md:text-base">
                    Después de la clase, podés continuar con esta práctica. Te recomiendo practicarla en la mañana y antes de ir a dormir.
                  </p>

                  <div className="mt-6 rounded-[1.5rem] bg-background/70 p-5 ring-1 ring-foreground/5 md:p-7">
                    <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-butter">
                      <Play
                        className="ml-0.5 size-4"
                        fill="currentColor"
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3 className="mt-4 text-center font-serif font-soft text-2xl md:text-3xl">
                      Meditación guiada
                    </h3>

                    <p className="mx-auto mt-2 max-w-lg text-center text-sm leading-relaxed text-muted-foreground md:text-base">
                      Una práctica para llevar la experiencia de la clase a tu propio espacio interior.
                    </p>

                    <audio
                      className="mt-6 w-full"
                      controls
                      preload="metadata"
                    >
                      <source
                        src="/Meditacio%CC%81n%20Guiada.m4a"
                        type="audio/mp4"
                      />
                      Tu navegador no puede reproducir este audio.
                    </audio>

                    <p className="mt-4 text-center text-xs text-muted-foreground">
                      Podés escucharla cuando quieras y volver a ella las veces que necesites.
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </section>

          {/* 03 — INTEGRAR */}
          <section className="px-4 py-5 md:py-8">
            <div className="mx-auto max-w-3xl">
              <details className="group overflow-hidden rounded-[1.5rem] bg-card/75 shadow-[0_14px_40px_rgba(59,42,31,0.07)] ring-1 ring-foreground/10 backdrop-blur-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 md:px-7 md:py-6 [&::-webkit-details-marker]:hidden">
                  <div className="flex items-center gap-3 text-left">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-butter text-foreground">
                      <NotebookPen className="size-4" strokeWidth={1.5} />
                    </span>

                    <div>
                      <span className="block text-xs font-medium tracking-[0.16em] text-primary uppercase">
                        03 · Integrar
                      </span>

                      <span className="mt-1 block font-serif font-soft text-xl leading-tight md:text-2xl">
                        Bitácora de acompañamiento
                      </span>

                      <span className="mt-1 block text-sm text-muted-foreground">
                        Dale un espacio a aquello que comenzó a moverse en vos.
                      </span>
                    </div>
                  </div>

                  <ChevronDown
                    className="size-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-180"
                    strokeWidth={1.5}
                  />
                </summary>

                <div className="border-t border-foreground/8 px-5 pb-6 pt-6 md:px-7">
                  <p className="max-w-xl leading-[1.8] text-muted-foreground text-pretty md:text-base">
                    La bitácora es un espacio para registrar lo que vas descubriendo, poner en palabras tu experiencia y profundizar el proceso.
                    <br />
                    <br />
                    Te recomiendo descargarla luego de ver la clase y trabajar con ella durante la semana. Te ayudará a ser más consciente de tus propios procesos internos.
                  </p>

                  <div className="mt-6 overflow-hidden rounded-[1.5rem] bg-background/70 ring-1 ring-foreground/5">
                    <div className="h-56 bg-background md:h-64">
                      <iframe
                        className="h-full w-full"
                        src="/Bitacora%20de%20acompan%CC%83amiento.pdf"
                        title="Bitácora de acompañamiento"
                      />
                    </div>

                    <div className="flex flex-col items-center gap-3 p-5 sm:flex-row sm:justify-center">
                      <a
                        href="/Bitacora%20de%20acompan%CC%83amiento.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-[0_3px_0_0_rgba(59,42,31,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#535e31] hover:shadow-[0_5px_0_0_rgba(59,42,31,0.18)] sm:w-auto"
                      >
                        ABRIR BITÁCORA
                      </a>

                      <a
                        href="/Bitacora%20de%20acompan%CC%83amiento.pdf"
                        download
                        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-butter px-7 py-3 text-sm font-medium text-foreground shadow-[0_3px_0_0_rgba(59,42,31,0.14)] ring-1 ring-foreground/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3dc9f] hover:shadow-[0_5px_0_0_rgba(59,42,31,0.14)] sm:w-auto"
                      >
                        DESCARGAR BITÁCORA
                      </a>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </section>

          {/* NUEVA NARRATIVA */}
          <section className="px-4 pb-24 pt-20 md:pb-32 md:pt-28">
            <div className="mx-auto max-w-4xl">

              {/* PRIMER PASO */}
              <div className="text-center">
                <Handwritten className="rotate-1">
                  este es el primer paso
                </Handwritten>

                <h2 className="mt-4 font-serif font-soft text-[2.2rem] leading-[1.08] text-balance md:text-5xl">
                  Lo que acabás de hacer tiene un propósito.
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.85] text-muted-foreground text-pretty md:text-lg">
                  La clase te permitió comprender. La meditación te permitió experimentar. La bitácora te permitió integrar.
                </p>

                <p className="mx-auto mt-5 max-w-xl font-serif font-soft text-xl leading-snug text-foreground md:text-2xl">
                  Pero esto es solamente el primer paso.
                </p>
              </div>

              {/* 4 PASOS */}
              <div className="mt-20 text-center md:mt-28">
                <span className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
                  El proceso completo
                </span>

                <h2 className="mt-3 font-serif font-soft text-[2.15rem] leading-[1.08] text-balance md:text-5xl">
                  Cuatro pasos. Un mismo proceso.
                </h2>

                <p className="mx-auto mt-6 max-w-2xl leading-[1.8] text-muted-foreground text-pretty md:text-lg">
                  Coherencia Interior no son cuatro etapas separadas. Son cuatro pasos de un mismo proceso, y cada uno prepara el terreno para el siguiente.
                </p>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-4">
                {[
                  [
                    '01',
                    'Comprender',
                    'Volver al centro y comprender lo que sucede dentro tuyo.',
                  ],
                  [
                    '02',
                    'Liberar',
                    'Reconocer y liberar aquello que todavía condiciona tu manera de vivir.',
                  ],
                  [
                    '03',
                    'Escuchar',
                    'Profundizar la conexión con tu guía interior y espiritual.',
                  ],
                  [
                    '04',
                    'Crear',
                    'Llevar esa nueva consciencia a tu realidad y comenzar a vivir desde mayor coherencia.',
                  ],
                ].map(([number, title, text]) => (
                  <div
                    key={number}
                    className="rounded-[1.5rem] bg-card/85 p-5 text-center ring-1 ring-foreground/8 backdrop-blur-sm md:p-6"
                  >
                    <span className="text-xs font-medium tracking-[0.16em] text-primary">
                      {number}
                    </span>

                    <h3 className="mt-2 font-serif font-soft text-2xl">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-[1.7] text-muted-foreground">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              {/* METÁFORA DEL AUTO */}
              <div className="mx-auto mt-16 max-w-3xl rounded-[2rem] bg-card/90 p-7 text-center shadow-[0_20px_60px_rgba(59,42,31,0.10)] ring-1 ring-foreground/8 md:mt-20 md:p-12">
                <Handwritten className="rotate-1">
                  una forma simple de entenderlo
                </Handwritten>

                <h2 className="mt-4 font-serif font-soft text-[2rem] leading-[1.1] text-balance md:text-4xl">
                  Quedarte solamente en la primera etapa sería como aprender a prender un auto, pero no aprender a manejarlo.
                </h2>

                <p className="mx-auto mt-6 max-w-2xl leading-[1.85] text-muted-foreground text-pretty md:text-lg">
                  Podés entender cómo funciona. Podés saber dónde está cada cosa. Podés incluso encenderlo.
                </p>

                <p className="mx-auto mt-5 max-w-2xl font-serif font-soft text-xl leading-snug text-foreground md:text-2xl">
                  Pero todavía no estás recorriendo el camino.
                </p>

                <p className="mx-auto mt-5 max-w-2xl leading-[1.85] text-muted-foreground text-pretty md:text-lg">
                  Las cuatro fases existen para llevar esa comprensión a tu experiencia, atravesar lo que necesita ser transformado y permitir que esa nueva consciencia empiece a expresarse en tu vida.
                </p>
              </div>

              {/* RESULTADOS */}
              <div className="mt-20 text-center md:mt-28">
                <Handwritten>
                  cuando las cuatro fases se integran
                </Handwritten>

                <h2 className="mt-4 font-serif font-soft text-[2.15rem] leading-[1.08] text-balance md:text-5xl">
                  ¿Qué empieza a cambiar?
                </h2>

                <div className="mx-auto mt-8 max-w-2xl rounded-[1.75rem] bg-background/50 p-6 text-left ring-1 ring-foreground/6 md:p-9">
                  <ul className="space-y-4 leading-[1.75] text-muted-foreground md:text-lg">
                    <li>• Comprender con mayor claridad lo que te sucede.</li>
                    <li>• Dejar de repetir patrones que ya reconocés.</li>
                    <li>• Regularte emocionalmente y volver a tu centro.</li>
                    <li>• Escuchar con mayor claridad tu guía interior.</li>
                    <li>• Tomar decisiones desde un lugar más consciente.</li>
                    <li>• Llevar tu mundo interior a tu vida cotidiana.</li>
                    <li>• Ver cómo tu realidad comienza a reflejar aquello que estás transformando dentro tuyo.</li>
                  </ul>
                </div>
              </div>

              {/* ORIGEN DEL PROCESO */}
              <div className="mx-auto mt-20 max-w-3xl text-center md:mt-28">
                <span className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
                  El origen del proceso
                </span>

                <h2 className="mt-3 font-serif font-soft text-[2.05rem] leading-[1.1] text-balance md:text-4xl">
                  Un solo proceso en cuatro fases.
                </h2>

                <p className="mx-auto mt-6 leading-[1.85] text-muted-foreground text-pretty md:text-lg">
                  Cuando canalicé este proceso, no apareció como cuatro caminos diferentes. Apareció como un solo proceso compuesto por cuatro fases consecutivas.
                </p>

                <p className="mx-auto mt-5 leading-[1.85] text-muted-foreground text-pretty md:text-lg">
                  Cada fase tiene un propósito y prepara el terreno para la siguiente. Por eso Coherencia Interior no fue creado para que hagas una etapa aislada, sino para acompañarte a recorrer el proceso completo.
                </p>
              </div>

              {/* SESIÓN 1 A 1 */}
              <div className="mx-auto mt-20 max-w-3xl md:mt-28">
                <div className="relative overflow-hidden rounded-[2rem] bg-card p-7 text-center shadow-[0_24px_70px_rgba(59,42,31,0.16)] ring-1 ring-primary/20 md:p-12">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1.5 bg-primary"
                  />

                  <span className="inline-flex items-center rounded-full bg-butter px-4 py-2 text-[0.68rem] font-semibold tracking-[0.16em] text-foreground uppercase ring-1 ring-foreground/10">
                    Incluido en el proceso completo
                  </span>

                  <Handwritten className="mt-7 rotate-1">
                    un espacio para vos
                  </Handwritten>

                  <h2 className="mx-auto mt-4 max-w-2xl font-serif font-soft text-[2rem] leading-[1.1] text-balance md:text-4xl">
                    Además de las 4 etapas, tenés una sesión 1 a 1 conmigo.
                  </h2>

                  <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.8] text-muted-foreground text-pretty md:text-lg">
                    Tu proceso no es igual al de otra persona. En esta sesión conectamos con tu proceso actual para profundizar en aquello que estés atravesando, reconocer qué necesita tu alma en este momento de tu recorrido y encontrar una dirección para avanzar.
                  </p>

                  <div className="mx-auto mt-7 max-w-xl rounded-2xl bg-background/70 px-5 py-4 ring-1 ring-foreground/5">
                    <p className="text-sm leading-relaxed text-foreground md:text-base">
                      También contás con{' '}
                      <strong className="font-medium">
                        acompañamiento por WhatsApp
                      </strong>{' '}
                      durante el recorrido.
                    </p>
                  </div>

                  <p className="mx-auto mt-6 max-w-xl font-serif font-soft text-lg leading-snug text-foreground md:text-xl">
                    No se trata solamente de recibir más información. Se trata de poder llevar el proceso a tu experiencia.
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

              {/* CIERRE */}
              <div className="mx-auto mt-16 max-w-xl text-center md:mt-20">
                <p className="font-serif font-soft text-xl leading-snug text-foreground md:text-2xl">
                  Este fue tu primer paso.
                </p>

                <p className="mt-3 leading-[1.8] text-muted-foreground">
                  Ahora ya conocés la puerta. El siguiente paso es decidir si querés atravesar el proceso completo.
                </p>

                <CtaLink
                  href={HOTMART_URL}
                  variant="butter"
                  className="mt-7 w-full sm:w-auto"
                >
                  Continuar con Coherencia Interior
                </CtaLink>

                <p className="mt-4 text-sm text-muted-foreground">
                  {FULL_PROCESS_PRICE} · proceso completo
                </p>
              </div>
            </div>
          </section>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-48 bg-gradient-to-t from-background via-[#E8D9C2]/85 to-transparent"
        />
      </div>
    </main>
  )
}import { CtaLink } from '@/components/cta-link'
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
      <section className="px-5 pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <Handwritten className="rotate-1">
            Coherencia Interior
          </Handwritten>

          <h1 className="mt-3 font-serif font-soft text-[2.5rem] leading-[1.05] text-balance md:text-6xl">
            Primera etapa
            <span className="block italic text-primary">
              gratuita
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl font-serif font-soft text-xl leading-snug text-balance md:text-2xl">
            Una primera experiencia para comenzar a mirar, experimentar e integrar.
          </p>

          <p className="mx-auto mt-5 max-w-lg leading-[1.8] text-muted-foreground text-pretty md:text-lg">
            Recorré esta etapa a tu ritmo. No necesitás hacer todo de una vez.
            Permitite vivir cada parte de la experiencia y observar qué sucede
            dentro tuyo.
          </p>

          <ArrowDown
            aria-hidden="true"
            className="mx-auto mt-10 size-5 text-primary"
            strokeWidth={1.5}
          />
        </div>
      </section>

      {/* AULA */}
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-48 bg-gradient-to-b from-background via-[#E8D9C2]/85 to-transparent"
        />

        <div className="absolute inset-0 bg-[#D8C4A8]" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(
                ellipse 75% 45% at 12% 18%,
                rgba(247, 238, 221, 0.72) 0%,
                rgba(247, 238, 221, 0.30) 34%,
                transparent 68%
              ),
              radial-gradient(
                ellipse 65% 50% at 88% 28%,
                rgba(122, 91, 63, 0.18) 0%,
                rgba(122, 91, 63, 0.08) 38%,
                transparent 72%
              ),
              radial-gradient(
                ellipse 70% 55% at 18% 78%,
                rgba(188, 150, 108, 0.34) 0%,
                rgba(188, 150, 108, 0.12) 40%,
                transparent 72%
              ),
              radial-gradient(
                ellipse 75% 55% at 88% 86%,
                rgba(95, 72, 52, 0.20) 0%,
                rgba(95, 72, 52, 0.08) 40%,
                transparent 75%
              )
            `,
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply"
          style={{
            backgroundImage: `
              radial-gradient(
                circle at 20% 30%,
                rgba(59, 42, 31, 0.22) 0,
                transparent 1.2px
              ),
              radial-gradient(
                circle at 70% 60%,
                rgba(255, 250, 240, 0.35) 0,
                transparent 1.4px
              )
            `,
            backgroundSize: '7px 7px, 11px 11px',
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[#E7D7BF]/20"
        />

        <div className="relative z-10">
          {/* 01 — MIRAR */}
          <section
            aria-labelledby="mirar-title"
            className="px-4 pb-16 pt-28 md:pb-24 md:pt-32"
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

              <div className="overflow-hidden rounded-[1.75rem] bg-card/95 p-2 shadow-[0_18px_50px_rgba(59,42,31,0.10)] ring-1 ring-foreground/10 backdrop-blur-sm md:p-3">
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
            className="relative px-4 py-16 md:py-24"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-foreground/5"
            />

            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.18em] text-primary uppercase">
                <Headphones className="size-4" strokeWidth={1.5} />
                02 · Experimentar
              </span>

              <h2
                id="experimentar-title"
                className="mt-3 font-serif font-soft text-[2.1rem] leading-[1.1] text-balance md:text-5xl"
              >
                Acompañá tus días con esta Meditación Guiada
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-[1.8] text-muted-foreground text-pretty md:text-lg">
                Después de la clase, podés continuar con esta práctica.
                Te recomiendo practicarla en la mañana y antes de ir a dormir.
              </p>

              <div className="mx-auto mt-10 max-w-xl rounded-[1.75rem] bg-card/95 p-7 shadow-[0_18px_50px_rgba(59,42,31,0.08)] ring-1 ring-foreground/10 backdrop-blur-sm md:p-10">
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
                  Una práctica para llevar la experiencia de la clase a tu propio
                  espacio interior.
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
                  Podés escucharla cuando quieras y volver a ella las veces que necesites.
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
                La bitácora es un espacio para registrar lo que vas descubriendo,
                poner en palabras tu experiencia y profundizar el proceso.
                <br />
                <br />
                Te recomiendo descargarla luego de ver la clase y trabajar con ella
                durante la semana. Te ayudará a ser más consciente de tus propios
                procesos internos.
              </p>

              <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-[1.75rem] bg-card/95 shadow-[0_18px_50px_rgba(59,42,31,0.08)] ring-1 ring-foreground/10 backdrop-blur-sm">
                <div className="h-56 bg-background md:h-64">
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
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-[0_3px_0_0_rgba(59,42,31,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#535e31] hover:shadow-[0_5px_0_0_rgba(59,42,31,0.18)]"
                  >
                    ABRIR BITÁCORA
                  </a>

                  <a
                    href="/Bitacora%20de%20acompan%CC%83amiento.pdf"
                    download
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-butter px-7 py-3 text-sm font-medium text-foreground shadow-[0_3px_0_0_rgba(59,42,31,0.14)] ring-1 ring-foreground/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3dc9f] hover:shadow-[0_5px_0_0_rgba(59,42,31,0.14)]"
                  >
                    DESCARGAR BITÁCORA
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* TARJETA — SESIÓN 1 A 1 */}
          <section
            aria-labelledby="sesion-title"
            className="px-4 pb-20 pt-4 md:pb-28 md:pt-8"
          >
            <div className="mx-auto max-w-3xl">
              <div className="relative overflow-hidden rounded-[2rem] bg-card p-7 text-center shadow-[0_24px_70px_rgba(59,42,31,0.16)] ring-1 ring-primary/20 md:p-12">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1.5 bg-primary"
                />

                <span className="inline-flex items-center rounded-full bg-butter px-4 py-2 text-[0.68rem] font-semibold tracking-[0.16em] text-foreground uppercase ring-1 ring-foreground/10">
                  Incluido en el proceso completo
                </span>

                <Handwritten className="mt-7 rotate-1">
                  un espacio para vos
                </Handwritten>

                <h2
                  id="sesion-title"
                  className="mx-auto mt-3 max-w-2xl font-serif font-soft text-[2.15rem] leading-[1.08] text-balance md:text-4xl"
                >
                  Además de las 4 etapas, tenés una sesión 1 a 1 conmigo.
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.8] text-muted-foreground text-pretty md:text-lg">
                  Una sesión personalizada para conocer tu proceso, profundizar
                  en lo que estés atravesando y acompañarte desde tu experiencia.
                </p>

                <div className="mx-auto mt-7 max-w-xl rounded-2xl bg-background/70 px-5 py-4 ring-1 ring-foreground/5">
                  <p className="text-sm leading-relaxed text-foreground md:text-base">
                    También contás con{' '}
                    <strong className="font-medium">
                      acompañamiento por WhatsApp
                    </strong>{' '}
                    durante el recorrido.
                  </p>
                </div>

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

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-48 bg-gradient-to-t from-background via-[#E8D9C2]/85 to-transparent"
        />
      </div>

      {/* CIERRE */}
      <section className="px-5 pb-20 pt-16 md:pb-32 md:pt-24">
        <div className="mx-auto max-w-2xl text-center">
          <Handwritten>cuando termines</Handwritten>

          <h2 className="mt-3 font-serif font-soft text-[2.1rem] leading-[1.1] text-balance md:text-5xl">
            Ahora dejá que la experiencia
            <span className="block italic text-primary">
              decante.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-lg leading-[1.8] text-muted-foreground text-pretty md:text-lg">
            No necesitás sacar conclusiones inmediatamente. Observá qué
            apareció, qué comprendiste y qué empezó a moverse en vos.
          </p>

          <div className="mx-auto mt-10 max-w-md rounded-[1.75rem] bg-primary px-6 py-9 text-primary-foreground md:px-10">
            <p className="font-serif font-soft text-xl leading-snug md:text-2xl">
              Si sentís que querés continuar profundizando este camino,
              podés conocer el proceso completo.
            </p>

            <CtaLink
              href={HOTMART_URL}
              variant="butter"
              className="mt-7 w-full sm:w-auto"
            >
              Continuar con Coherencia Interior
            </CtaLink>

            <p className="mt-4 text-sm text-primary-foreground/70">
              {FULL_PROCESS_PRICE} · proceso completo
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-md rounded-[1.75rem] bg-card p-7 ring-1 ring-foreground/5 md:p-8">
            <h3 className="font-serif font-soft text-2xl leading-snug md:text-3xl">
              ¿Querés vivirlo con mayor profundidad?
            </h3>

            <p className="mt-4 leading-[1.8] text-muted-foreground text-pretty md:text-base">
              Si querés vivir el proceso de Coherencia Interior con mayor
              profundidad, te recomiendo acompañarlo con sesiones 1 a 1 conmigo.
            </p>

            <a
              href={DEEP_EXPERIENCE_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-foreground/15 px-6 py-3 text-center text-sm font-medium transition-colors hover:bg-background"
            >
              Quiero saber más sobre la experiencia profunda
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
