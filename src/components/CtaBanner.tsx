import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="bg-[#333] py-12 px-6 md:px-20">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <p className="text-white text-[26px] md:text-[34px] font-heading font-normal leading-snug max-w-xl">
          Strategy before emotion. Numbers before assumptions.
        </p>
        <Link
          href="/contact"
          className="shrink-0 border border-white text-white px-8 py-3 text-[14px] font-sans hover:bg-white hover:text-[#333] transition-colors"
        >
          Let&apos;s Talk
        </Link>
      </div>
    </section>
  );
}
