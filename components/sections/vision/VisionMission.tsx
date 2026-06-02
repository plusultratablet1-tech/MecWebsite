export default function VisionMission() {
  const items = [
    {
      number: "01",
      title: "Our Vision",
      description:
        "To become a leading business and e-commerce hub in Manila that supports brands, entrepreneurs, and modern enterprises.",
    },
    {
      number: "02",
      title: "Our Mission",
      description:
        "To provide modern, accessible, and professional spaces that help businesses operate, connect, and scale.",
    },
    {
      number: "03",
      title: "Our Commitment",
      description:
        "To support tenants and partners with a business-ready environment built for long-term growth and opportunity.",
    },
  ];

  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-[#f5f6f8] py-16 md:py-20 lg:py-[90px]"
    >
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20">
          {/* Left Content */}
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[2px] w-[38px] bg-[#c69208]" />
              <span className="text-[13px] font-extrabold uppercase tracking-[0.22em] text-[#c69208]">
                Our Direction
              </span>
            </div>

            <h2 className="text-[32px] font-extrabold leading-[1.22] tracking-tight text-[#071126] sm:text-[34px] lg:text-[35px]">
              Vision, mission, and commitment for modern business
            </h2>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 gap-5">
            {items.map((item) => (
              <article
                key={item.title}
                className="group flex gap-7 border border-[#e5e7eb] bg-white p-8 transition duration-500 hover:-translate-y-1 hover:border-[#c69208]/80 hover:shadow-xl"
              >
                <div className="text-[44px] font-extrabold leading-none text-[#c69208] transition duration-300 group-hover:scale-110">
                  {item.number}
                </div>

                <div>
                  <h3 className="text-[25px] font-extrabold leading-tight tracking-[0.03em] text-[#071126] sm:text-[27px] lg:text-[28px]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-[720px] text-[17px] leading-[1.8] text-[#6b7280]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full bg-[#c69208]/5" />
    </section>
  );
}
