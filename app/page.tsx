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

            <h1 className="mt-4 font-serif font-soft text-[3rem] leading-[0.98] text-balance text-[#3b2a1f] sm:text-[4rem] md:text-7xl">
              Coherencia <span className="italic text-primary">Interior</span>
            </h1>

            <h2 className="mx-auto mt-7 max-w-3xl font-serif font-soft text-3xl leading-[1.08] text-[#4d392b] text-balance md:text-5xl">
              El proceso que crea un{' '}
              <span className="italic text-primary">Puente</span> entre tu Ser
              interior y tu Vida.
            </h2>

            <div className="mx-auto mt-8 max-w-3xl">
              <p className="text-lg leading-[1.7] text-[#5b4737] text-balance md:text-xl">
                Una gran transformación puede comenzar con herramientas simples
                y sostenibles en el Tiempo.
              </p>

              <p className="mt-4 text-base leading-[1.7] text-muted-foreground text-balance md:text-lg">
                No es necesario cambiar todo de un día para otro.
              </p>

              <p className="mx-auto mt-5 max-w-2xl font-serif text-xl leading-[1.45] text-[#5b4737] text-balance md:text-[1.55rem]">
                Cuando comprendés cómo funciona tu Ser en{' '}
                <span className="italic text-primary">Profundidad</span>, te
                das cuenta de que eso que te afectó tanto tiempo podría
                convertirse en una herramienta poderosa.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>4 etapas</span>
              <span aria-hidden="true">·</span>
              <span>Online</span>
              <span aria-hidden="true">·</span>
              <span>A tu ritmo</span>
            </div>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CtaLink
                href="/primera-etapa"
                className="w-full shadow-[0_0_25px_rgba(112,122,61,0.22)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(112,122,61,0.38)] sm:w-auto"
                pulse
              >
                Comenzá de forma Gratuita
              </CtaLink>

              <a
                href="#etapas"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#6f7a3d]/40 px-6 py-2.5 text-sm font-medium text-[#5b4737] transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary sm:w-auto"
              >
                Conocer las 4 etapas
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
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
              Comprenderte. Liberarte. Escucharte. Crear.
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
                  className="group rounded-[1.5rem] border border-[#8e765d]/20 bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_12px_30px_rgba(72,52,36,0.08)]"
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
                  className="scroll-mt-24 overflow-hidden rounded-[2rem] border border-[#8e765d]/20 bg-background"
                >
                  <div className="grid md:grid-cols-[180px_1fr]">
                    <div className="flex items-start justify-between border-b border-[#8e765d]/15 bg-[#eee5d7]/60 p-7 md:border-b-0 md:border-r md:p-8">
                      <div>
                        <span className="font-serif text-5xl italic leading-none text-primary/70 md:text-6xl">
                          {stage.number}
                        </span>

                        <p className="mt-5 text-xs font-semibold tracking-[0.18em] text-[#6f583f]">
                          {stage.eyebrow}
                        </p>
                      </div>

                      <span className="font-serif text-sm text-[#8e765d]/50 md:hidden">
                        {String(index + 1).padStart(2, '0')}/04
                      </span>
                    </div>

                    <div className="p-7 md:p-10">
                      <h3 className="font-serif font-soft text-[2rem] leading-[1.1] text-balance md:text-4xl">
                        {stage.title}
                      </h3>

                      <p className="mt-6 max-w-2xl leading-[1.8] text-muted-foreground text-pretty md:text-lg">
                        {stage.intro}
                      </p>

                      {stage.question && (
                        <p className="mt-7 font-serif text-2xl italic text-primary md:text-3xl">
                          {stage.question}
                        </p>
                      )}

                      <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                        {stage.points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-3 rounded-2xl bg-[#f4ecdf]/70 px-4 py-3 text-sm leading-relaxed text-[#5b4737] md:text-base"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {stage.closing && (
                        <p className="mt-8 max-w-2xl leading-[1.8] text-muted-foreground text-pretty">
                          {stage.closing}
                        </p>
                      )}

                      {stage.quote && (
                        <blockquote className="mt-8 border-l-2 border-primary/40 pl-5 font-serif text-xl leading-snug text-[#4d3b2e] md:text-2xl">
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

        {/* TRANSFORMACION */}
        <section
          aria-labelledby="transformacion-title"
          className="px-5 py-20 md:py-28"
        >
          <div className="mx-auto max-w-3xl text-center">
            <Handwritten>cuando el proceso empieza a integrarse</Handwritten>

            <h2
              id="transformacion-title"
              className="mt-4 font-serif font-soft text-[2.3rem] leading-[1.08] text-balance md:text-5xl"
            >
              No se trata solamente de sentirte diferente.
            </h2>

            <div className="mx-auto mt-8 max-w-2xl space-y-5 text-base leading-[1.8] text-muted-foreground text-pretty md:text-lg">
              <p>
                Se trata de empezar a comprender por qué experimentás la vida
                como la experimentás.
              </p>

              <p>
                De reconocer aquello que todavía te condiciona y poder
                liberarlo.
              </p>

              <p>
                De aprender a confiar en tu propia percepción y escuchar una
                voz más profunda.
              </p>

              <p>
                Y de llevar todo eso a decisiones, vínculos, acciones y
                proyectos concretos.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
              {[
                'Más comprensión de tu mundo interno',
                'Mayor capacidad para volver al centro',
                'Liberación de patrones y viejas identidades',
                'Mayor conexión con tu guía interior',
                'Más claridad para reconocer tu camino',
                'Acciones alineadas con tus deseos conscientes',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#8e765d]/20 bg-card px-5 py-4 text-sm leading-relaxed text-[#5b4737] md:text-base"
                >
                  {item}
                </div>
              ))}
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

              <CtaLink
                href={HOTMART_URL}
                className="mt-7 w-full"
              >
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
