import Image from "next/image";
import { Calendar, Calendar1, ChevronRight, Cross, HandHeart, ThumbsUp, UserSearch } from 'lucide-react'
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">

      {/* Header Absoluto */}
      <header className="z-50 top-0 left-0 w-full absolute">
        <div className="flex py-4 px-8 justify-between max-w-7xl mx-auto gap-8 items-center">

          <Link href="/" className="flex gap-2 cursor-pointer group hover:bg-white/40 backdrop-blur-md p-2 rounded-xl transition-all">
            <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-700 group-hover:bg-emerald-700 transition-all ">
              <Cross className="w-5 h-5 text-emerald-700 group-hover:text-emerald-50 transition-all" />
            </div>
            <div className="flex flex-col text-base font-bold text-emerald-950">
              YouCare
              <span className="text-xs font-medium text-emerald-800">Clínica</span>
            </div>
          </Link>

          <nav className="flex gap-6 items-center font-medium">
            <Link href="/medicos" className="relative py-1 text-emerald-950 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-emerald-900 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">Médicos</Link>
            <Link href="/sobrenos" className="relative py-1 text-emerald-950 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-emerald-900 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">Sobre Nós</Link>
            <Link href="/paciente" className="relative py-1 text-emerald-950 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-emerald-900 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">Paciente</Link>
          </nav>

          <Link href="#" className="items-center flex bg-emerald-900 text-white font-bold py-2.5 px-5 rounded-xl gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all">
            Agendar Consulta
            <Calendar className="w-5 h-5" />
          </Link>

        </div>
      </header>

      <section className="relative min-h-screen flex items-center justify-center w-full overflow-hidden">


        <div className="absolute inset-0 h-full w-full">
          <div className="bg-linear-to-r from-slate-50/90 via-slate-50/75 to-transparent w-full h-full z-10 absolute" />
          <Image
            fill
            priority
            alt="Recepção moderna da clínica YouCare"
            className="object-cover"
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070"
          />

        </div>

        <div className="z-30 relative flex flex-col md:flex-row w-full max-w-7xl mx-auto h-screen pt-28 pb-16 items-center px-8 gap-12">

          <div className="absolute flex gap-2 pb-4 bottom-0 left-8 z-20 bg-white/40 backdrop-blur-md rounded-t-2xl p-2 border border-white/40 shadow-md">
            <Link href="#" className="bg-white text-emerald-900 rounded-xl p-2.5 hover:bg-emerald-50 transition-colors">
              <ThumbsUp className="h-5 w-5" />
            </Link>
            <Link href="#" className="bg-white text-emerald-900 rounded-xl p-2.5 hover:bg-emerald-50 transition-colors">
              <UserSearch className="h-5 w-5" />
            </Link>
            <Link href="#" className="bg-white text-emerald-900 rounded-xl p-2.5 hover:bg-emerald-50 transition-colors">
              <HandHeart className="h-5 w-5" />
            </Link>
          </div>

          <div className="w-full md:w-1/2 md:justify-start flex">
            <h1 className="text-4xl md:text-4xl text-emerald-950 font-extrabold leading-tight">
              Nós somos uma clínica que coloca o <span className="text-emerald-700">paciente em primeiro lugar</span>, dedicando-nos exclusivamente à sua saúde e bem-estar.
            </h1>
          </div>

          {/* Lado Direito: Card de Horários */}
          <div className="w-full md:w-1/2 flex justify-end items-center md:items-end h-full">

            <div className="flex flex-col items-center bg-white/40 backdrop-blur-md rounded-2xl p-4 gap-4 shadow-xl border border-white/50">
              <div className="flex gap-3 items-center w-full">
                <div className="bg-white rounded-xl p-3 border border-emerald-200">
                  <Calendar1 className="w-8 h-8 text-emerald-900" />
                </div>
                <div className="flex flex-col text-sm text-slate-700">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">Status de Hoje</span>
                  <span className="font-medium text-sm text-slate-900">Temos Horário Ainda Hoje</span>
                  <span className="text-xs text-slate-500 mt-0.5">Próxima vaga: <strong className="text-slate-900 font-bold">14:20h</strong></span>
                </div>
              </div>

              <Link href="#" className="bg-emerald-900 text-white group hover:pr-5 transition-all duration-300 py-2 px-4 gap-1.5 flex justify-center items-center rounded-full font-bold self-end text-xs shadow-md shadow-emerald-900/20">
                Ver mais
                <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 duration-200 transition-all" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}