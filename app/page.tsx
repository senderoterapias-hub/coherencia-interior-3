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
    title: 'Llevá todo esto a tu vida.',
    intro:
      'Todo lo anterior tiene que poder vivirse. Esta etapa trabaja sobre tu propósito y sobre cómo llevar todo este proceso de coherencia hacia pasos concretos.',
    points: [
      'Reconocer hacia dónde querés dirigir tu vida.',
      'Tomar decisiones desde una consciencia nueva.',
      'Avanzar con mayor confianza.',
      'Convertir tu mundo interior en acciones concretas.',
      'Crear una vida alineada con tus deseos conscientes.',
    ],
    quote:
      'Porque despertar no es solamente descubrir quién sos. Es empezar a vivir desde ese lugar.',
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
          className="relative overflow-hidden px-5 pb-20 pt-16 md:pb-28 md:pt-24"
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
            <Handwritten>despertar · integración · expansión</Handwritten>

            <h1 className="mt-4 font-serif font-soft text-[3.4rem] leading-[0.95] text-balance text-[#3b2a1f] sm:text-[4.5rem] md:text-7xl">
              Coherencia{' '}
              <span className="italic text-primary">Interior</span>
            </h1>

            <h2 className="mx-auto mt-7 max-w-3xl font-serif font-soft text-[2rem] leading-[1.08] text-[#4d392b] text-balance sm:text-3xl md:text-5xl">
              El proceso que crea un{' '}
              <span className="italic text-primary">Puente</span> entre tu Ser
              interior y tu Vida.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-[1.8] text-[#5b4737] text-balance md:text-lg">
              Una gran transformación puede comenzar con herramientas simples y
              sostenibles en el Tiempo.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.8] text-[#5b4737] text-balance md:text-lg">
              No es necesario cambiar todo de un día para otro.
            </p>

            <p className="mx-auto mt-7 max-w-3xl font-serif text-xl leading-[1.55] text-[#5b4737] text-balance md:text-2xl">
              Cuando comprendés cómo funciona tu Ser, descubrís que eso que
              tanto te afectó podría ser una herramienta poderosa.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>4 etapas</span>
              <span aria-hidden="true">·</span>
              <span>Online</span>
              <span aria-hidden="true">·</span>
              <span>A tu ritmo</span>
            </div>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CtaLink
                href="/primera-etapa"
                className="w-full shadow-[0_0_25px_rgba(112,122,61,0.22)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(112,122,61,0.38)] sm:w-auto"
                pulse
              >
                Comenzá de forma Gratuita
              </CtaLink>

              <a
                href="#etapas"
                className="inline-flex min-h-14 w-full items-center justify-center rounded-full border border-[#8e765d]/30 bg-transparent px-7 py-4 text-sm font-medium text-[#5b4737] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card sm:w-auto"
              >
                Conocer las 4 etapas
                <span className="ml-2 text-base">→</span>
              </a>
            </div>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Empezá por la primera etapa y experimentá el proceso desde
              adentro.
            </p>
          </div>
        </section>

        {/* PROMESA */}
        <section
          aria-labelledby="promesa-title"
          className="bg-card px-5 py-20 md:py-28"
        >
          <div className="mx-auto max-w-3xl text-center">
            <Handwritten>un proceso para volver a vos</Handwritten>

            <h2
              id="promesa-title"
              className="mt-4 font-serif font-soft text-[2.3rem] leading-[1.08] text-balance md:text-5xl"
            >
              Hay mucho más disponible en vos de lo que quizás hoy lográs ver.
            </h2>

            <div className="mx-auto mt-8 max-w-2xl space-y-5 text-base leading-[1.8] text-muted-foreground text-pretty md:text-lg">
              <p>
                Coherencia Interior es un proceso para comenzar a comprender
                tu mundo interno, liberar aquello que ya no corresponde a tu
                etapa actual y aprender a escuchar la guía que existe dentro
                tuyo.
              </p>

              <p>
                No se trata solamente de incorporar más información espiritual.
              </p>

              <p>
                Se trata de <strong className="text-foreground">vivir</strong>{' '}
                aquello que empezás a comprender.
              </p>
            </div>

            <Sparkle className="mx-auto mt-9 size-6 text-primary" />

            <p className="mx-auto mt-7 max-w-2xl font-serif text-xl leading-relaxed text-[#5b4737] md:text-2xl">
              Comprensión - Liberación - Guía - Expansión
            </p>
          </div>
        </section>

        {/* MAPA DEL PROCESO */}
        <section
          id="etapas"
          aria-labelledby="mapa-title"
          className="px-5 py-20 md:py-28"
        >
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <Handwritten>el recorrido</Handwritten>

              <h2
                id="mapa-title"
                className="mt-4 font-serif font-soft text-[2.3rem] leading-[1.08] text-balance md:text-5xl"
              >
                Cuatro etapas. Un mismo proceso de transformación.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl leading-[1.8] text-muted-foreground md:text-lg">
                Cada etapa profundiza un aspecto diferente de tu experiencia
                hasta llevar esa nueva consciencia a tu vida cotidiana.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-4">
              {stages.map((stage) => (
                <a
                  key={stage.number}
                  href={`#etapa-${stage.number}`}
                  className="group rounded-[1.5rem] border border-[#8e765d]/20 bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_12px_30px_rgba(72,52,36,0.08)]"
                >
                  <span className="font-serif text-sm italic text-primary">
                    {stage.number}
                  </span>

                  <p className="mt-3 text-sm font-semibold tracking-[0.14em] text-[#5b4737]">
                    {stage.eyebrow}
                  </p>

                  <span className="mx-auto mt-5 block h-px w-10 bg-[#8e765d]/30 transition-all duration-300 group-hover:w-16 group-hover:bg-primary/50" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ETAPAS */}
        <section
          aria-labelledby="etapas-title"
          className="bg-card px-5 py-20 md:py-28"
        >
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <Handwritten>las cuatro etapas</Handwritten>

              <h2
                id="etapas-title"
                className="mt-4 font-serif font-soft text-[2.3rem] leading-[1.08] text-balance md:text-5xl"
              >
                El proceso comienza dentro tuyo y termina transformando la
                forma en que vivís.
              </h2>
            </div>

            <div className="mt-14 space-y-8">
              {stages.map((stage, index) => (
                <article
                  key={stage.number}
                  id={`etapa-${stage.number}`}
                  className="group relative scroll-mt-24 overflow-hidden rounded-[2.25rem] border border-[#8e765d]/20 bg-[#f8f2e8] shadow-[0_14px_45px_rgba(72,52,36,0.06)] transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_55px_rgba(72,52,36,0.09)]"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-primary/10 blur-3xl transition-transform duration-[1800ms] group-hover:scale-125"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-[#d9c4a8]/20 blur-3xl transition-transform duration-[2200ms] group-hover:scale-110"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-0 select-none font-serif text-[9rem] font-light leading-none text-primary/[0.055] sm:right-8 sm:text-[11rem]"
                  >
                    {stage.number}
                  </div>

                  <div className="relative grid md:grid-cols-[170px_1fr]">
                    <div className="relative flex min-h-[150px] items-end border-b border-[#8e765d]/15 p-7 md:min-h-full md:items-start md:border-b-0 md:border-r md:p-8">
                      <div>
                        <span className="font-serif text-6xl italic leading-none text-primary/70 md:text-7xl">
                          {stage.number}
                        </span>

                        <div className="mt-5 flex items-center gap-3">
                          <span className="h-px w-8 bg-primary/40" />

                          <p className="text-[11px] font-semibold tracking-[0.2em] text-[#6f583f]">
                            {stage.eyebrow}
                          </p>
                        </div>
                      </div>

                      <span className="absolute right-7 top-7 font-serif text-xs text-[#8e765d]/45 md:hidden">
                        {String(index + 1).padStart(2, '0')} / 04
                      </span>
                    </div>

                    <div className="relative p-7 sm:p-8 md:p-10">
                      <h3 className="max-w-2xl font-serif font-soft text-[2rem] leading-[1.08] text-balance text-[#3f3025] sm:text-[2.2rem] md:text-4xl">
                        {stage.title}
                      </h3>

                      <p className="mt-6 max-w-2xl leading-[1.85] text-[#6b5b4d] text-pretty md:text-lg">
                        {stage.intro}
                      </p>

                      {stage.question && (
                        <div className="relative mt-7 overflow-hidden rounded-2xl border border-primary/15 bg-primary/[0.045] px-5 py-5">
                          <div
                            aria-hidden="true"
                            className="absolute -right-6 -top-8 size-20 rounded-full bg-primary/10 blur-2xl"
                          />

                          <p className="relative font-serif text-2xl italic leading-snug text-primary md:text-3xl">
                            {stage.question}
                          </p>
                        </div>
                      )}

                      <ul className="mt-8 space-y-2">
                        {stage.points.map((point, pointIndex) => (
                          <li
                            key={point}
                            className="group/point relative flex items-start gap-4 rounded-2xl border border-[#8e765d]/10 bg-white/35 px-4 py-4 transition-all duration-300 hover:border-primary/20 hover:bg-white/55 sm:px-5 sm:py-4"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/[0.07] font-serif text-sm text-primary transition-all duration-300 group-hover/point:scale-110 group-hover/point:border-primary/40 group-hover/point:bg-primary/10"
                            >
                              {String(pointIndex + 1).padStart(2, '0')}
                            </span>

                            <span className="pt-0.5 text-[15px] leading-[1.65] text-[#514034] sm:text-base">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {stage.closing && (
                        <div className="relative mt-9 rounded-[1.5rem] border border-primary/10 bg-[#efe5d6]/55 px-5 py-5 sm:px-6 sm:py-6">
                          <span
                            aria-hidden="true"
                            className="absolute -top-2 left-6 font-serif text-2xl text-primary/50"
                          >
                            “
                          </span>

                          <p className="pt-2 max-w-2xl font-serif text-[1.05rem] leading-[1.65] text-[#5b4737] sm:text-lg">
                            {stage.closing}
                          </p>
                        </div>
                      )}

                      {stage.quote && (
                        <blockquote className="relative mt-9 border-l-2 border-primary/40 pl-5 font-serif text-xl leading-[1.4] text-[#4d3b2e] sm:pl-6 md:text-2xl">
                          <span
                            aria-hidden="true"
                            className="absolute -left-2 -top-5 bg-[#f8f2e8] px-1 font-serif text-3xl text-primary/60"
                          >
                            “
                          </span>

                          {stage.quote}
                        </blockquote>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4 ETAPAS · 1 PROCESO */}
        <section
          aria-labelledby="ciclos-title"
          className="relative isolate overflow-hidden px-5 py-20 md:py-28"
        >
          {/* ATMÓSFERA CÓSMICA SUTIL */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9b8ac4]/[0.045] blur-3xl md:size-[42rem]"
          />

          {/* ÓRBITA GRANDE */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8d78bd]/[0.12] rotate-[18deg] md:size-[38rem]"
          />

          {/* SEGUNDA ÓRBITA */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[47%] -z-10 h-[17rem] w-[29rem] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#a18dcc]/[0.09] rotate-[-24deg] md:h-[25rem] md:w-[42rem]"
          />

          {/* TERCERA ÓRBITA */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[53%] -z-10 h-[11rem] w-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#8d78bd]/[0.07] rotate-[42deg] md:h-[17rem] md:w-[34rem]"
          />

          {/* HALOS VIOLETA */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-24 -z-10 size-72 rounded-full bg-[#9d8bc7]/[0.07] blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 bottom-24 -z-10 size-80 rounded-full bg-[#a997cf]/[0.06] blur-3xl"
          />

          {/* PEQUEÑOS PUNTOS */}
          <span
            aria-hidden="true"
            className="absolute left-[12%] top-[18%] size-1.5 rounded-full bg-[#8d78bd]/30 shadow-[0_0_12px_rgba(141,120,189,0.35)]"
          />

          <span
            aria-hidden="true"
            className="absolute right-[14%] top-[27%] size-1 rounded-full bg-[#9d8bc7]/40 shadow-[0_0_10px_rgba(157,139,199,0.35)]"
          />

          <span
            aria-hidden="true"
            className="absolute left-[18%] bottom-[31%] size-1 rounded-full bg-[#8d78bd]/30"
          />

          <span
            aria-hidden="true"
            className="absolute right-[18%] bottom-[20%] size-1.5 rounded-full bg-[#a997cf]/35 shadow-[0_0_12px_rgba(169,151,207,0.3)]"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <Handwritten>4 etapas · 1 proceso</Handwritten>

            <h2
              id="ciclos-title"
              className="mt-4 font-serif font-soft text-[2.45rem] leading-[1.02] text-balance text-[#3f3025] md:text-5xl"
            >
              La vida es rítmica, cíclica.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl font-serif text-xl leading-[1.55] text-[#5b4737] text-balance md:text-2xl">
              Y cuando despertás tu ser espiritual, esos ciclos comienzan a
              convertirse en un espiral ascendente.
            </p>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-[1.85] text-muted-foreground text-pretty md:text-lg">
              ¿Has notado cómo volvés a pasar por los mismos lugares, pero cada
              vez desde una consciencia más profunda y navegando de una forma
              más agradable?
            </p>

            <div className="mx-auto mt-10 max-w-2xl rounded-[2rem] border border-primary/15 bg-card/80 p-7 text-left shadow-[0_14px_45px_rgba(72,52,36,0.06)] backdrop-blur-sm sm:p-9">
              <p className="font-serif text-xl leading-[1.5] text-[#3f3025] md:text-2xl">
                Coherencia Interior te brinda las herramientas y la comprensión
                necesarias para que logres atravesar cada vez tus propios ciclos
                internos con mayor facilidad.
              </p>

              <div className="mt-6 space-y-4 text-base leading-[1.8] text-muted-foreground md:text-lg">
                <p>Sin perder la conexión.</p>

                <p>Sin quedar enganchado en lo antiguo.</p>

                <p>
                  Manteniendo tu propia conexión y logrando una mayor alineación
                  con tu propósito.
                </p>
              </div>
            </div>

            <div className="mx-auto mt-12 max-w-2xl">
              <p className="font-serif text-2xl leading-[1.25] text-[#3f3025] md:text-3xl">
                No es una fórmula mágica ni una promesa instantánea.
              </p>

              <p className="mt-4 text-base italic leading-[1.8] text-muted-foreground md:text-lg">
                Te pondrá a trabajar, jeje.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-2xl">
              <p className="font-serif text-xl leading-[1.4] text-[#5b4737] md:text-2xl">
                Pero pensá en esto:
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-[1.5rem] border border-[#8e765d]/15 bg-card/80 px-5 py-5 text-base leading-[1.7] text-[#5b4737] backdrop-blur-sm sm:px-6 md:text-lg">
                  Los ciclos suceden, sea que aprendas a navegarlos o no.
                </div>

                <div className="rounded-[1.5rem] border border-[#8e765d]/15 bg-card/80 px-5 py-5 text-base leading-[1.7] text-[#5b4737] backdrop-blur-sm sm:px-6 md:text-lg">
                  Podés padecer cada ciclo y atravesarlo como puedas.
                </div>

                <div className="rounded-[1.5rem] border border-primary/25 bg-primary/[0.06] px-5 py-5 text-base leading-[1.7] text-[#4d3b2e] shadow-[0_8px_25px_rgba(72,52,36,0.04)] backdrop-blur-sm sm:px-6 md:text-lg">
                  O disponerte a aprender a navegarlos cada vez con mayor
                  maestría.
                </div>
              </div>
            </div>

            <div className="mx-auto mt-14 max-w-2xl">
              <div className="mx-auto mb-7 h-px w-16 bg-primary/30" />

              <p className="text-base leading-[1.85] text-muted-foreground text-pretty md:text-lg">
                Este proceso nació de años de aprendizajes propios, de un
                deseo y una voluntad inmensos de aprender a navegar los ciclos
                universales, y se consolidó a través del acompañamiento a
                muchas personas, en sesiones, formaciones y retiros.
              </p>

              <p className="mt-5 font-serif text-xl leading-[1.5] text-[#4d3b2e] text-pretty md:text-2xl">
                Pero, sobre todo, en mi propia experiencia de vida.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-2xl rounded-[2rem] bg-[#3f3025]/95 px-7 py-8 text-center text-[#f8f2e8] shadow-[0_18px_50px_rgba(59,42,31,0.15)] sm:px-9 sm:py-10">
              <p className="font-serif text-[1.55rem] leading-[1.3] text-balance sm:text-2xl md:text-3xl">
                Este proceso no es un taller, ni un curso.
              </p>

              <p className="mx-auto mt-5 max-w-xl text-base leading-[1.8] text-[#f8f2e8]/75 md:text-lg">
                Es una brújula que podría acompañarte el resto de tu vida, al
                tiempo que aprendés a perfeccionarla.
              </p>
            </div>

            <div className="mt-12">
              <p className="font-serif text-2xl italic leading-[1.25] text-primary md:text-3xl">
                4 pasos · 1 proceso
              </p>

              <p className="mt-3 font-serif text-xl leading-[1.4] text-[#5b4737] md:text-2xl">
                Cientos de ciclos de ascensión interior.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-xl">
              <Sparkle className="mx-auto size-6 text-primary" />

              <p className="mt-5 font-serif text-xl leading-[1.4] text-[#3f3025] md:text-2xl">
                La <span className="italic text-primary">COHERENCIA</span> es
                la base de la Nueva Era.
              </p>
            </div>
          </div>
        </section>

        {/* PRIMERA ETAPA GRATUITA */}
        <section
          aria-labelledby="gratis-title"
          className="bg-primary px-5 py-20 text-primary-foreground md:py-28"
        >
          <div className="mx-auto max-w-3xl text-center">
            <Handwritten className="text-primary-foreground">
              no necesitás decidir todo ahora
            </Handwritten>

            <h2
              id="gratis-title"
              className="mt-4 font-serif font-soft text-[2.4rem] leading-[1.05] text-balance md:text-5xl"
            >
              Podés comenzar por la primera etapa.
            </h2>

            <div className="mx-auto mt-7 max-w-2xl space-y-5 leading-[1.8] text-primary-foreground/80 text-pretty md:text-lg">
              <p>
                Preparé una primera experiencia gratuita para que puedas
                comenzar a entrar en contacto con este proceso.
              </p>

              <p>
                Vas a encontrar una clase, una bitácora y una meditación para
                empezar a observar y experimentar tu mundo interior.
              </p>

              <p className="font-serif text-xl text-primary-foreground md:text-2xl">
                No necesitás saber si vas a recorrer las cuatro etapas.
              </p>

              <p>
                Primero viví la experiencia. Después sentí qué se mueve en
                vos.
              </p>
            </div>

            <CtaLink
              href="/primera-etapa"
              variant="butter"
              className="mt-9 w-full shadow-[0_0_25px_rgba(255,255,255,0.16)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(255,255,255,0.28)] sm:w-auto"
            >
              Vivir la primera etapa gratuita
            </CtaLink>

            <p className="mt-5 text-sm text-primary-foreground/60">
              Online · gratuita · a tu ritmo
            </p>
          </div>
        </section>

        {/* CONTINUIDAD */}
        <section
          aria-labelledby="continuidad-title"
          className="px-5 py-20 md:py-28"
        >
          <div className="mx-auto max-w-3xl text-center">
            <Handwritten>
              si después sentís que querés profundizar
            </Handwritten>

            <h2
              id="continuidad-title"
              className="mt-4 font-serif font-soft text-[2.3rem] leading-[1.08] text-balance md:text-5xl"
            >
              Coherencia Interior continúa con vos.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl leading-[1.8] text-muted-foreground text-pretty md:text-lg">
              Las cuatro etapas forman un recorrido completo para profundizar
              en tu mundo interior, liberar lo que ya no corresponde,
              desarrollar tu conexión con tu guía interior y llevar todo ese
              proceso a tu vida.
            </p>

            <div className="mx-auto mt-9 max-w-2xl rounded-[1.75rem] border border-primary/15 bg-[#f8f2e8] p-7 text-left shadow-[0_10px_35px_rgba(72,52,36,0.05)] sm:p-8">
              <p className="text-sm tracking-[0.16em] text-primary">
                INCLUIDO EN EL PROCESO COMPLETO
              </p>

              <h3 className="mt-3 font-serif text-2xl text-[#3f3025] sm:text-3xl">
                Un espacio para vos
              </h3>

              <p className="mt-4 leading-[1.8] text-[#6b5b4d]">
                Además de las 4 etapas, tenés una sesión 1 a 1 conmigo para
                profundizar en tu proceso y trabajar de forma personalizada
                aquello que estés atravesando.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Esta sesión ya está incluida al acceder al proceso completo.
              </p>
            </div>

            <div className="mx-auto mt-9 max-w-md rounded-[1.75rem] border border-[#8e765d]/20 bg-card p-7">
              <p className="text-sm tracking-[0.16em] text-muted-foreground">
                PROCESO COMPLETO
              </p>

              <p className="mt-3 font-serif text-4xl text-[#3f3025]">
                {FULL_PROCESS_PRICE}
              </p>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Coherencia Interior · 4 etapas · online
              </p>

              <CtaLink href={HOTMART_URL} className="mt-7 w-full">
                Continuar con Coherencia Interior
              </CtaLink>
            </div>
          </div>
        </section>

        {/* CIERRE */}
        <section
          aria-labelledby="final-title"
          className="px-5 pb-24 pt-4 md:pb-32"
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <Sparkle className="size-6 text-primary" />

            <h2
              id="final-title"
              className="mt-7 font-serif font-soft text-[2.5rem] leading-[1.04] text-balance md:text-6xl"
            >
              Despertar es el comienzo.
              <span className="mt-2 block italic text-primary">
                Vivir desde esa consciencia es el camino.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl leading-[1.8] text-muted-foreground md:text-lg">
              Comenzá sin apuro. Conocé tu mundo interior. Y dejá que la
              experiencia te muestre hacia dónde seguir.
            </p>

            <CtaLink
              href="/primera-etapa"
              className="mt-9 w-full shadow-[0_0_25px_rgba(112,122,61,0.22)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(112,122,61,0.38)] sm:w-auto"
              pulse
            >
              Comenzá de forma Gratuita
            </CtaLink>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
