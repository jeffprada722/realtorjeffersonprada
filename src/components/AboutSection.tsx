import Link from "next/link";

export function AboutSection() {
  return (
    <section className="py-[50px] px-[30px]">
      <div className="mx-auto max-w-[700px] text-center">
        <p
          className="text-[16px] italic text-[#777272] font-sans"
        >
          Real Estate Agent - Avanti Way
        </p>

        <h2
          className="mt-4 text-[36px] font-normal text-black font-heading"
        >
          Jefferson Prada
        </h2>

        <p className="mt-6 text-[16px] leading-[1.6] text-[#333]">
          With a deep understanding of the South Florida real estate market,
          Jefferson Prada brings dedication, local expertise, and a client-first
          approach to every transaction. As a Real Estate Agent with Avanti Way,
          he specializes in helping buyers, sellers, and investors navigate the
          Miami market with confidence. Whether you are looking for your dream
          home, an investment property, or guidance on the best opportunities in
          the area, Jefferson provides personalized service and strategic advice
          at every step of the process. His commitment to building lasting
          relationships and delivering results has made him a trusted name in
          South Florida real estate.
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
