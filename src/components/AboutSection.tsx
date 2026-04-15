import Link from "next/link";

export function AboutSection() {
  return (
    <section className="py-[50px] px-[30px]">
      <div className="mx-auto max-w-[700px] text-center">
        <p
          className="text-[16px] italic text-[#777272] font-sans"
        >
          Coach de Real Estate - Broker Associate
        </p>

        <h2
          className="mt-4 text-[36px] font-normal text-black font-heading"
        >
          Realtor Ramon Rodriguez
        </h2>

        <p className="mt-6 text-[16px] leading-[1.6] text-[#333]">
          Es un referente en el mercado inmobiliario de Florida, reconocido por
          su experiencia, liderazgo y compromiso con la excelencia. Experimentado
          agente inmobiliario, Coach de Real Estate, Broker Associate y Branch
          Manager en Avanti Way, ha construido una solida trayectoria en el
          mercado de Miami y en inversiones internacionales. Con anos de
          experiencia, se ha destacado por su habilidad para asesorar a
          compradores e inversionistas en propiedades tanto locales como
          globales. Su verdadera pasion es asesorar, brindando acompanamiento
          estrategico para identificar oportunidades de inversion rentables y
          guiar a sus clientes en cada paso del proceso. Ademas, es ampliamente
          reconocido por su enfoque en el desarrollo de agentes inmobiliarios,
          consolidando relaciones solidas y de largo plazo que lo han posicionado
          como un verdadero lider y referente en el sector.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block bg-[#333] text-white px-6 py-4 w-[230px] border border-[#333] text-base text-center"
            style={{ fontFamily: "var(--font-button)" }}
          >
            Meet
          </Link>
        </div>
      </div>
    </section>
  );
}
