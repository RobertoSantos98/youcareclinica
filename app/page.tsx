"use client";

import Image from "next/image";
import { Calendar, Calendar1, ChevronLeft, ChevronRight, Cross, HandHeart, ThumbsUp, UserSearch } from 'lucide-react'
import Link from "next/link";
import { useRef } from "react";

export default function Home() {

  const porquenos = [
    { id: "01", title: "Cuidado Compreensivo", label: "Da rotina do Checkups a tratamentos avançados, nós damos cobertura", img: "https://clinicasaudecampinas.com.br/wp-content/uploads/2022/08/ENDOCRINOLOGISTA-768x512.jpg", link: "" },
    { id: "02", title: "Serviços Especializados", label: "Cuidado Especializado e com a mais recente tecnologia do mercado", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqluJn6or28kRzMsJVv8xggkK_-2h9bXSOwW0LBdaJ3jhwnLMvCLoiO4&s=10", link: "" },
    { id: "03", title: "Tecnologia de Ponta", label: "Equipamentos modernos", img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600", link: "#" },
    { id: "04", title: "Atendimento Rápido", label: "Sem filas de espera", img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600", link: "#" },
  ]

  const carroselRef = useRef<HTMLDivElement>(null);

  const acionarScroll = (direcao: "esquerda" | "direita") => {

    if (carroselRef.current) {
      const larguraCard = carroselRef.current.clientWidth;

      const deslocamento = direcao === "esquerda" ? -larguraCard : larguraCard;

      carroselRef.current.scrollBy({
        left: deslocamento,
        behavior: "smooth"
      })
    }
  };


  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">

      {/* Header Absoluto */}
      <header className="z-50 top-0 left-0 w-full absolute">
        <div className="flex py-4 px-8 justify-between max-w-7xl mx-auto gap-8 items-center">

          <Link href="/" className="flex gap-2 cursor-pointer group hover:bg-white/40 backdrop-blur-md p-2 rounded-xl transition-all">
            <div className="p-2 bg-blue-50 rounded-xl border border-blue-700 group-hover:bg-blue-700 transition-all ">
              <Cross className="w-5 h-5 text-blue-700 group-hover:text-blue-50 transition-all" />
            </div>
            <div className="flex flex-col text-base font-bold text-blue-950">
              YouCare
              <span className="text-xs font-medium text-blue-800">Clínica</span>
            </div>
          </Link>

          <nav className="flex gap-6 items-center font-medium">
            <Link href="/medicos" className="relative py-1 text-blue-950 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-900 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">Médicos</Link>
            <Link href="/sobrenos" className="relative py-1 text-blue-950 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-900 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">Sobre Nós</Link>
            <Link href="/paciente" className="relative py-1 text-blue-950 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-900 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">Paciente</Link>
          </nav>

          <Link href="#" className="items-center flex bg-blue-900 text-white font-bold py-2.5 px-5 rounded-xl gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all">
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
            <Link href="#" className="bg-white text-blue-900 rounded-xl p-2.5 hover:bg-blue-50 transition-colors">
              <ThumbsUp className="h-5 w-5" />
            </Link>
            <Link href="#" className="bg-white text-blue-900 rounded-xl p-2.5 hover:bg-blue-50 transition-colors">
              <UserSearch className="h-5 w-5" />
            </Link>
            <Link href="#" className="bg-white text-blue-900 rounded-xl p-2.5 hover:bg-blue-50 transition-colors">
              <HandHeart className="h-5 w-5" />
            </Link>
          </div>

          <div className="w-full md:w-1/2 md:justify-start flex">
            <h1 className="text-4xl md:text-4xl text-blue-950 font-extrabold leading-tight">
              Nós somos uma clínica que coloca o <span className="text-blue-700">paciente em primeiro lugar</span>, dedicando-nos exclusivamente à sua saúde e bem-estar.
            </h1>
          </div>

          {/* Lado Direito: Card de Horários */}
          <div className="w-full md:w-1/2 flex justify-end items-center md:items-end h-full">

            <div className="flex flex-col items-center bg-white/40 backdrop-blur-md rounded-2xl p-4 gap-4 shadow-xl border border-white/50">
              <div className="flex gap-3 items-center w-full">
                <div className="bg-white rounded-xl p-3 border border-blue-200">
                  <Calendar1 className="w-8 h-8 text-blue-900" />
                </div>
                <div className="flex flex-col text-sm text-slate-700">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-800">Status de Hoje</span>
                  <span className="font-medium text-sm text-slate-900">Temos Horário Ainda Hoje</span>
                  <span className="text-xs text-slate-500 mt-0.5">Próxima vaga: <strong className="text-slate-900 font-bold">14:20h</strong></span>
                </div>
              </div>

              <Link href="#" className="bg-blue-900 text-white group hover:pr-5 transition-all duration-300 py-2 px-4 gap-1.5 flex justify-center items-center rounded-full font-bold self-end text-xs shadow-md shadow-blue-900/20">
                Ver mais
                <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 duration-200 transition-all" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      <section className="w-full bg-slate-100 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto gap-8 flex flex-col px-8">

          <div ref={carroselRef} className="flex gap-6 overflow-x-auto md:overflow-x-hidden snap-x snap-mandatory scroll-smooth no-scrollbar pt-3 p-2 pb-4" style={{ scrollbarWidth: 'none' }}>

            <div className="shrink-0 flex flex-col items-start p-4 h-130 w-[85vw] sm:w-[450px] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start justify-around">
              <p className="text-slate-600 text-sm leading-relaxed">Nós oferecemos medicamentos com a mais alta modernidade tecnologica e personalizada para ajudar você a vive com saúde</p>

              <h2 className="md:text-4xl text-2xl font-bold text-blue-900">Sua Saúde é nossa Prioridade</h2>

              <Link href={"#"} className="flex p-1 gap-4 hover:bg-blue-950 transition-colors bg-blue-900 font-bold text-sm rounded-2xl pl-6 text-white items-center">
                Leia Mais
                <div className="bg-white items-center justify-center flex p-2 rounded-xl">
                  <ChevronRight className="text-blue-900 w-5 h-5" />
                </div>
              </Link>
            </div>

            {porquenos.map((item) => (
              <div key={item.id} className="shrink-0 group flex flex-col w-[85vw] sm:w-[450px] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start items-start h-130 justify-end relative overflow-hidden rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 shadow-gray-600">
                <Image fill className="object-cover group-hover:scale-105 duration-500" alt="Foto1Sobre" src={item.img} />
                <div className="bg-linear-to-t from-black/70 to-transparent absolute inset-0 z-30 w-full h-full" />

                <div className="absolute inset-x-0 bottom-0 text-white flex flex-col md:text-4xl text-2xl font-bold gap-4 items-start p-6 z-40">
                  {item.title}
                  <span className="text-xs text-slate-300 font-medium">{item.label}</span>
                  <div className="flex w-full justify-between">
                    <Link href={item.link} className="p-1 flex text-sm justify-between hover:bg-blue-950 bg-blue-900 items-center pl-4 gap-4 rounded-2xl border border-white/20">
                      Leia Mais
                      <div className="bg-white p-2 rounded-xl group-hover:ml-4 duration-500 transition-all">
                        <ChevronRight className="w-5 h-5 text-blue-900" />
                      </div>
                    </Link>

                    <span className="text-6xl font-black absolute right-2 bg-linear-to-t from-transparent via-slate-400 to-slate-200 bg-clip-text text-transparent">{item.id}</span>

                  </div>
                </div>
              </div>
            ))}
          </div>


          <div className="flex gap-2 self-end">
            <button onClick={() => acionarScroll("esquerda")} className="p-3 cursor-pointer border rounded-xl border-slate-300 bg-white hover:bg-slate-50 transition-colors text-slate-600 shadow-sm">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => acionarScroll("direita")} className="p-3 cursor-pointer border rounded-xl border-slate-300 bg-white hover:bg-slate-50 transition-colors text-slate-600 shadow-sm">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>



        </div>
      </section>

      <section className="w-full bg-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto gap-8 flex flex-col">

          <div className="border border-slate-200 rounded-2xl p-8 gap-8 flex flex-col">
            <div className="flex flex-col items-center gap-4 w-1/2 self-center">
              <div className="uppercase bg-slate-200 text-[10px] py-1 px-2 border border-slate-900/40 text-slate-600 font-bold rounded-full">Porque nós</div>

              <p className="text-center text-3xl font-bold leading-tight">Nós somos um time de médicos profissionais, dedicados a providenciar um excelente cuidado em uma confortável e acolhedor ambiente. Sua saúde é nossa missão.</p>
            </div>

            <div className="flex w-full gap-4 p-4 relative group">

              <div className="absolute bottom-12 -left-2 bg-blue-900/40 border border-transparent group-hover:border-blue-900/30 group-hover:shadow-md translate-all group-hover:bottom-13 duration-300 backdrop-blur-md w-42 rounded-xl z-10 text-sm p-2 text-white">
                Cuidado que você pode confiar e descansar.
              </div>

              <div className="flex-1 h-64 relative rounded-xl overflow-hidden gap-8 border border-slate-200 transition-colors hover:border-slate-400 hover:shadow-md">
                <Image priority fill alt="FotoPorquenos" className="object-cover" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070" />
              </div>

              <div className="bg-slate-200 rounded-xl w-full sm:w-1/4 px-4 flex flex-col justify-around border border-slate-200 transition-colors hover:border-slate-400 hover:shadow-lg">
                <span className="text-xs text-slate-600">Chefe de Cirurgia</span>
                <p className="font-extrabold text-slate-900 text-2xl">Dr. Sarah Muniz</p>

                <div className="flex justify-between gap-2">
                  <p className="text-xs flex-1 text-slate-700">Formada na Universidade de São Paulo como médica e pós-graduação em Cirurgias Gerais</p>
                  <div className="relative h-14 w-14 rounded-full overflow-hidden border border-slate-400/90">
                    <Image fill className="object-cover" alt="FotoDr" src="https://media.gettyimages.com/id/2231686164/pt/foto/female-doctor-smiling-and-holding-digital-tablet-in-hospital.jpg?s=612x612&w=gi&k=20&c=js9sCmdJCwaIQYhDTH-PUlojLSHRDs05tISN2Ud79yQ=" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="sm:w-1/2 w-full self-center gap-4 flex flex-col">
            <div className="border border-slate-200 p-4 text-xs text-slate-600 rounded-xl flex justify-between items-center group hover:bg-slate-200 hover:border-slate-300">
              Especialidades que oferecemos
              <div className="text-4xl font-bold flex flex-col gap-2 w-32 text-black">
                12+
                <span className="text-xs font-medium text-slate-600">Anos de experiência</span>
              </div>
            </div>

            <div className="border border-slate-200 p-4 text-xs text-slate-600 rounded-xl flex justify-between items-center group hover:bg-slate-200 hover:border-slate-300">
              Especialista que sua famiia pode confiar.
              <div className="text-4xl font-bold flex flex-col gap-2 w-32 text-black">
                80+
                <span className="text-xs font-medium text-slate-600">Médicos Experiêntes</span>
              </div>
            </div>

            <div className="border border-slate-200 p-4 text-xs text-slate-600 rounded-xl flex justify-between items-center group hover:bg-slate-200 hover:border-slate-300">
              Cuidado personalizados e tecnologias avançadas
              <div className="text-4xl font-bold flex flex-col gap-2 w-32 text-black">
                3K+
                <span className="text-xs font-medium text-slate-600">Pacientes Felizes</span>
              </div>
            </div>
          </div>


        </div>


      </section>

    </div>
  );
}