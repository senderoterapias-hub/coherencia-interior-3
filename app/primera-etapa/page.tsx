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
      <div className="relative overflow-hidden bg-[#343B32]">
        {/* TRANSICIÓN DE ENTRADA */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-40 bg-gradient-to-b from-background via-[#343B32]/80 to-transparent"
        />

        {/* TEXTURA ORGÁNICA SUTIL */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 12% 12%, rgba(170,179,154,0.13) 0, transparent 32%), radial-gradient(ellipse at 88% 36%, rgba(157,112,82,0.13) 0, transparent 30%), radial-gradient(ellipse at 45% 82%, rgba(210,194,166,0.07) 0, transparent 38%), repeating-linear-gradient(115deg, rgba(240,231,216,0.018) 0px, rgba(240,231,216,0.018) 1px, transparent 1px, transparent 7px)',
          }}
        />

        <div className="relative z-10">
          {/* 01 — MIRAR */}
          <section
            id="mirar"
            aria-labelledby="mirar-title"
            className="scroll-mt-6 px-4 pb-16 pt-28 md:pb-24 md:pt-32"
          >
            <div className="mx-auto max-w-5xl">
              <div className="mb-10 text-center">
                <span className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.18em] text-[#C0C9AE] uppercase">
                  <Video className="size-4" strokeWidth={1.5} />
                  01 · Mirar
                </span>

                <h2
                  id="mirar-title"
                  className="mt-3 font-serif font-soft text-[2.1rem] leading-[1.1] text-balance text-[#F0E7D8] md:text-5xl"
                >
                  La clase
                </h2>

                <p className="mx-auto mt-5 max-w-xl leading-[1.8] text-[#D7D1C4] text-pretty md:text-lg">
                  Comenzá por la clase. Es el punto de partida para comprender
                  dónde estás y empezar a observar tu propia experiencia.
                </p>
              </div>

              <div className="overflow-hidden rounded-[1.75rem] border border-[#AAB39A]/25 bg-[#E8DFD0] p-2 shadow-[0_18px_55px_rgba(0,0,0,0.22)] md:p-3">
                <div className="aspect-video overflow-hidden rounded-[1.25rem] bg-black">
                  <iframe
                    className
