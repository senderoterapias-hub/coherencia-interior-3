import { CtaLink } from '@/components/cta-link'
import { Handwritten, Sparkle } from '@/components/doodles'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function AccesoPage() {
  return (
    <>
      <SiteHeader />

      <main className="relative min-h-[75vh] overflow-hidden px-5 py-16 sm:py-20 md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-10 size-72 rounded-full bg-[#eadcc6]/60 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 bottom-0 size-80 rounded-full bg-[#dfe4c8]/50 blur-3xl"
        />

        <section className="relative mx-auto max-w-xl">
          <div className="text-center">
            <Sparkle className="mx-auto size-6 text-primary" />

            <Handwritten>
              tu primera experiencia
            </Handwritten>

            <h1 className="mt-5 font-serif font-soft text-[2.4rem] leading-[1.08] text-balance text-[#3b2a1f] sm:text-5xl">
              Comenzá por vos.
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-[1.05rem] leading-[1.8] text-[#5b4737] sm:text-lg">
              Dejá tus datos para acceder a la primera etapa gratuita de
              Coherencia Interior.
            </p>

            <p className="mx-auto mt-4 max-w-lg font-serif text-xl italic leading-relaxed text-primary sm:text-2xl">
              Una clase, una bitácora y una meditación para empezar a
              explorar tu mundo interior.
            </p>
          </div>

          <div className="mt-10 rounded-[2rem] border border-[#8e765d]/20 bg-[#f8f2e8] p-6 shadow-[0_14px_45px_rgba(72,52,36,0.07)] sm:p-9">
            <form
              action="/api/acceso"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="nombre"
                  className="mb-2 block text-sm font-medium text-[#4d392b]"
                >
                  ¿Cómo te llamás?
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  autoComplete="name"
                  placeholder="Tu nombre"
                  required
                  className="w-full rounded-xl border border-[#8e765d]/30 bg-white/80 px-4 py-3.5 text-base text-[#3f3025] outline-none transition placeholder:text-[#9a8878] focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#4d392b]"
                >
                  ¿A qué correo te enviamos el acceso?
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="tu@email.com"
                  required
                  className="w-full rounded-xl border border-[#8e765d]/30 bg-white/80 px-4 py-3.5 text-base text-[#3f3025] outline-none transition placeholder:text-[#9a8878] focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
              </div>

              <label className="flex items-start gap-3 text-sm leading-relaxed text-[#6b5b4d]">
                <input
                  type="checkbox"
                  name="privacidad"
                  required
                  className="mt-1 size-4 shrink-0 accent-[#707a3d]"
                />
                <span>
                  Acepto que mis datos se utilicen para gestionar mi acceso
                  a esta experiencia gratuita.
                </span>
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 text-center text-base font-medium text-primary-foreground shadow-[0_8px_24px_rgba(72,52,36,0.12)] transition hover:opacity-90"
              >
                Acceder a la primera etapa
              </button>

              <p className="text-center text-xs leading-relaxed text-[#8a7766]">
                Tu información será utilizada únicamente para gestionar
                este acceso y las comunicaciones relacionadas.
              </p>
            </form>
          </div>

          <p className="mt-8 text-center font-serif text-lg italic text-[#5b4737]">
            No necesitás decidir todo ahora. Primero viví la experiencia.
          </p>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
