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
