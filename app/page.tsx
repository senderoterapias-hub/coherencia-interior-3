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

            <h1 className="mt-4 font-serif font-soft text-[3.2rem] leading-[0.92] text-balance text-[#3b2a1f] sm:text-[4.2rem] md:text-7xl">
              Coherencia{' '}
              <span className="italic text-primary">Interior</span>
            </h1>

            <h2 className="mx-auto mt-7 max-w-3xl font-serif font-soft text-[1.85rem] leading-[1.12] text-[#4d392b] text-balance sm:text-[2.35rem] md:text-5xl">
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
                className="mt-5 font-serif font-soft text-[2.5rem] leading-[1.06] text-balance md:text-[3.4rem]"
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
                  <li className="flex gap-3 text-base leading-[1.7] text-[#5b4737] md:text-lg">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      Están dispuestos a ver hacia adentro con compasión,
                      apertura y honestidad.
                    </span>
                  </li>

                  <li className="flex gap-3 text-base leading-[1.7] text-[#5b4737] md:text-lg">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      Están dispuestos a hacer pequeñas prácticas diarias para
                      transformar su vida.
                    </span>
                  </li>

                  <li className="flex gap-3 text-base leading-[1.7] text-[#5b4737] md:text-lg">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      Desean que su vida externa refleje su mundo interior y
                      espiritualidad de forma natural.
                    </span>
                  </li>

                  <li className="flex gap-3 text-base leading-[1.7] text-[#5b4737] md:text-lg">
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
                  <li className="flex gap-3 text-base leading-[1.7] text-[#5b4737] md:text-lg">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-[#9b7650]" />
                    <span>
                      Buscan conexión espiritual y despertar dones solo por
                      curiosidad.
                    </span>
                  </li>

                  <li className="flex gap-3 text-base leading-[1.7] text-[#5b4737] md:text-lg">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-[#9b7650]" />
                    <span>
                      Desean conectar con los planos superiores pero no están
                      dispuestos a sostenerlo en sus vidas.
                    </span>
                  </li>

                  <li className="flex gap-3 text-base leading-[1.7] text-[#5b4737] md:text-lg">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-[#9b7650]" />
                    <span>
                      Desean cambios rápidos y permanentes sin dedicarse cada
                      día.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-14 text-center">
              <h3 className="font-serif font-soft text-[2rem] leading-tight text-[#3f3025] md:text-4xl">
                ¿Estás list@ para continuar?
              </h3>

              <p className="mt-7 font-serif text-2xl italic text-primary md:text-3xl">
                COHERENCIA INTERIOR
              </p>

              <p className="mt-2 text-sm font-medium tracking-[0.14em] text-[#6f583f] uppercase">
                Un proceso de 4 etapas
              </p>

              <p className="mt-4 font-serif text-xl text-[#5b4737] md:text-2xl">
                Comprensión - Liberación - Guía - Expansión
              </p>
            </div>
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
              <Handwritten>
                <span className="text-[1.5rem] sm:text-[1.6rem] md:text-[1.8rem]">
                  las cuatro etapas
                </span>
              </Handwritten>

              <h2
                id="etapas-title"
                className="mt-5 font-serif font-soft text-[2.3rem] leading-[1.08] text-balance md:text-5xl"
              >
                Cada Etapa es un paso Esencial del Proceso
              </h2>
            </div>

            {/* ETAPA 1 */}
            <div
              id="etapa-01"
              className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-[#8e765d]/20 bg-[#f8f2e8] p-7 shadow-[0_14px_45px_rgba(72,52,36,0.06)] sm:p-9 md:p-10"
            >
              <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                ETAPA 1
              </p>

              <h3 className="mt-3 font-serif font-soft text-[2rem] leading-[1.08] text-[#3f3025] sm:text-[2.2rem] md:text-4xl">
                Comprensión Profunda y Mapa hacia el Centro
              </h3>

              <div className="mt-6 space-y-4 text-base leading-[1.8] text-[#5b4737] md:text-lg">
                <p>
                  En esta etapa vas a comprender por qué experimentás lo que
                  experimentás.
                </p>

                <p>
                  Y cómo volver a tu centro de forma simple sin importar las
                  circunstancias.
                </p>
              </div>

              <details className="mt-7 rounded-2xl border border-primary/15 bg-white/35">
                <summary className="cursor-pointer list-none px-5 py-4 font-medium text-[#4d392b]">
                  <span className="inline-flex items-center gap-2">
                    <span className="text-primary">+</span>
                    MAS DETALLES
                  </span>
                </summary>

                <ul className="space-y-3 px-5 pb-5 text-base leading-[1.7] text-[#5b4737] md:text-lg">
                  <li className="flex gap-3">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                    <span>Regulá tu sistema nervioso.</span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      Desarrollá la Maestría sobre tu propia Mente.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                    <span>Desarrollá Inteligencia Emocional.</span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                    <span>Trazá el Mapa hacia tu centro.</span>
                  </li>
                </ul>
              </details>

              <div className="mt-8 rounded-[1.5rem] border border-primary/10 bg-[#efe5d6]/55 px-5 py-5 sm:px-6 sm:py-6">
                <p className="font-serif text-[1.05rem] leading-[1.65] text-[#5b4737] sm:text-lg">
                  No existen dos huellas dactilares iguales, tampoco dos
                  consciencias iguales.
                </p>

                <p className="mt-4 font-serif text-[1.05rem] leading-[1.65] text-[#5b4737] sm:text-lg">
                  En esta etapa conocerás tu consciencia y mundo interno de
                  forma profunda y simple.
                </p>
              </div>
            </div>

            {/* ETAPA 2 */}
            <div
              id="etapa-02"
              className="mx-auto mt-8 max-w-3xl rounded-[2rem] border border-[#8e765d]/20 bg-[#f8f2e8] p-7 shadow-[0_14px_45px_rgba(72,52,36,0.06)] sm:p-9 md:p-10"
            >
              <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                ETAPA 2
              </p>

              <h3 className="mt-3 font-serif font-soft text-[2rem] leading-[1.08] text-[#3f3025] sm:text-[2.2rem] md:text-4xl">
                Liberate de las cadenas que te limitan
              </h3>

              <div className="mt-6 space-y-4 text-base leading-[1.8] text-[#5b4737] md:text-lg">
                <p>
                  Este paso es quizás el más importante, aquello que no
                  liberás te mantiene atado sin importar cuánto lo intentes.
                </p>
              </div>

              <details className="mt-7 rounded-2xl border border-primary/15 bg-white/35">
                <summary className="cursor-pointer list-none px-5 py-4 font-medium text-[#4d392b]">
                  <span className="inline-flex items-center gap-2">
                    <span className="text-primary">+</span>
                    MAS DETALLES
                  </span>
                </summary>

                <ul className="space-y-3 px-5 pb-5 text-base leading-[1.7] text-[#5b4737] md:text-lg">
                  <li className="flex gap-3">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      Aprendés a reconocer programas mentales antiguos y
                      reprogramarlos.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      Liberarte de cadenas de memoria kármica y cambiar de
                      línea de tiempo.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      Aprender a elevar la vibración de tu campo y realizar
                      autosanación energética.
                    </span>
                  </li>
                </ul>
              </details>

              <div className="mt-8 rounded-[1.5rem] border border-primary/10 bg-[#efe5d6]/55 px-5 py-5 sm:px-6 sm:py-6">
                <p className="font-serif text-[1.05rem] leading-[1.65] text-[#5b4737] sm:text-lg">
                  La sanación no tiene que ser un proceso doloroso.
                </p>

                <p className="mt-4 font-serif text-[1.05rem] leading-[1.65] text-[#5b4737] sm:text-lg">
                  Puede ser un proceso de disfrute e integración y aun así
                  poderoso.
                </p>
              </div>
            </div>

            {/* ETAPA 3 */}
            <div
              id="etapa-03"
              className="mx-auto mt-8 max-w-3xl rounded-[2rem] border border-[#8e765d]/20 bg-[#f8f2e8] p-7 shadow-[0_14px_45px_rgba(72,52,36,0.06)] sm:p-9 md:p-10"
            >
              <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                ETAPA 3
              </p>

              <h3 className="mt-3 font-serif font-soft text-[2rem] leading-[1.08] text-[#3f3025] sm:text-[2.2rem] md:text-4xl">
                Conectá y desarrolla la guia interna y percepción
              </h3>

              <details className="mt-7 rounded-2xl border border-primary/15 bg-white/35">
                <summary className="cursor-pointer list-none px-5 py-4 font-medium text-[#4d392b]">
                  <span className="inline-flex items-center gap-2">
                    <span className="text-primary">+</span>
                    MAS DETALLES
                  </span>
                </summary>

                <ul className="space-y-3 px-5 pb-5 text-base leading-[1.7] text-[#5b4737] md:text-lg">
                  <li className="flex gap-3">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      Aprendés a diferenciar la voz del ego de la voz de tu ser
                      espiritual.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      Trabajamos en reconocer y cultivar tu guía interior.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                    <span>
                      Aprendés a interpretar las señales y sincronicidades.
                    </span>
                  </li>
                </ul>
              </details>

              <div className="mt-8 rounded-[1.5rem] border border-primary/10 bg-[#efe5d6]/55 px-5 py-5 sm:px-6 sm:py-6">
                <p className="font-serif text-[1.05rem] leading-[1.65] text-[#5b4737] sm:text-lg">
                  Cuando prestás atención descubrís que nunca estuviste solo,
                  solo estabas distraído.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4 ETAPAS · 1 PROCESO */}
        <section
          aria-labelledby="ciclos-title"
          className="relative isolate overflow-hidden px-5 py-20 md:py-28"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9b8ac4]/[0.045] blur-3xl md:size-[42rem]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8d78bd]/[0.12] rotate-[18deg] md:size-[38rem]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[47%] -z-10 h-[17rem] w-[29rem] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#a18dcc]/[0.09] rotate-[-24deg] md:h-[25rem] md:w-[42rem]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[53%] -z-10 h-[11rem] w-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#8d78bd]/[0.07] rotate-[42deg] md:h-[17rem] md:w-[34rem]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-24 -z-10 size-72 rounded-full bg-[#9d8bc7]/[0.07] blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 bottom-24 -z-10 size-80 rounded-full bg-[#a997cf]/[0.06] blur-3xl"
          />

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
