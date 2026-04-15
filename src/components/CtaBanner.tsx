export function CtaBanner() {
  return (
    <section className="relative flex items-center bg-[#333] h-[297px]">
      <div className="absolute inset-0 bg-[#333]" />
      <div className="relative z-10 pl-10 md:pl-20 pr-6">
        <p className="text-white text-[36px] md:text-[50px] font-normal font-sans leading-tight">
          Turning Listings Into Landmarks,
        </p>
        <p className="text-white text-[26px] md:text-[48px] font-normal font-sans leading-tight">
          One Home at a Time.
        </p>
      </div>
    </section>
  );
}
