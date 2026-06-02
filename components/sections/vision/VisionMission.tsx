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
      className="relative overflow-hidden bg-[#f5f6f8] py-20 md:py-24 lg:py-[120px]"
    >
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20">
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-[2px] w-[38px] bg-[#ff3f35]" />
              <span className="text-[13px] font-extrabold uppercase tracking-[0.22em] text-[#ff3f35]">
                Our Direction
              </span>
            </div>

            <h2 className="text-[40px] font-extrabold leading-[1.18] tracking-tight text-[#071126] sm:text-[50px] lg:text-[60px]">
              Vision, mission, and commitment for modern business
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {items.map((item) => (
              <article
                key={item.title}
                className="group flex gap-7 border border-[#e5e7eb] bg-white p-8 transition duration-500 hover:border-[#ff3f35]/70 hover:shadow-xl"
              >
                <div className="text-[44px] font-extrabold leading-none text-[#ff3f35]">
                  {item.number}
                </div>

                <div>
                  <h3 className="text-[28px] font-extrabold text-[#071126]">
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
    </section>
  );
}
