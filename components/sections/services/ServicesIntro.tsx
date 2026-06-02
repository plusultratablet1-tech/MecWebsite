import Link from "next/link";

function BlueprintIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[64px] w-[64px] text-[#071126]"
    >
      <path
        d="M13 9V65H64"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M13 65V72" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M21 65V72" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M29 65V72" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M37 65V72" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M45 65V72" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M53 65V72" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M61 65V72" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

      <path d="M13 17H20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M13 25H20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M13 33H20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M13 41H20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M13 49H20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

      <circle cx="24" cy="56" r="6" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="24" cy="56" r="2" fill="currentColor" />

      <path
        d="M39 35L54 21L68 35"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43 35V60H65V35"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M54 21V60" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M35 42H43" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M35 50H43" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M35 58H43" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

      <path
        d="M36 36L36 20"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
      <path
        d="M36 20H54"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
    </svg>
  );
}

export default function ServicesIntro() {
  const services = [
    {
      title: "Office Spaces",
      description:
        "Professional and business-ready office spaces designed for companies, teams, entrepreneurs, and growing enterprises.",
    },
    {
      title: "Co-Working Areas",
      description:
        "Flexible shared spaces built for productivity, collaboration, meetings, and modern day-to-day business activity.",
    },
    {
      title: "Business Support",
      description:
        "A practical environment that supports operations, inquiries, partnerships, and long-term business growth.",
    },
    {
      title: "E-Commerce Ecosystem",
      description:
        "A strategic hub for digital commerce, creators, brands, and business operators looking to scale in Manila.",
    },
  ];

  return (
    <section
      id="service"
      className="relative overflow-hidden bg-white py-20 md:py-24 lg:py-[115px]"
    >
      <div className="mx-auto max-w-[1740px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.88fr_1.12fr] lg:gap-24">
          {/* Left Content */}
          <div className="service-heading max-w-[560px]">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-[2px] w-[38px] bg-[#ff3f35]" />
              <span className="text-[14px] font-extrabold uppercase tracking-[0.22em] text-[#ff3f35]">
                What We Do
              </span>
            </div>

            <h2 className="text-[32px] font-extrabold leading-[1.28] tracking-[0.02em] text-[#071126] sm:text-[34px] lg:text-[35px]">
              We provide the space, systems, and support businesses need to
              grow.
            </h2>
          </div>

          {/* Right Services Grid */}
          <div className="grid grid-cols-1 gap-x-20 gap-y-16 sm:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`service-card service-delay-${index + 1}`}
              >
                <div className="mb-8 flex items-center gap-6">
                  <BlueprintIcon />

                  <h3 className="text-[25px] font-extrabold leading-tight tracking-[0.03em] text-[#071126] sm:text-[27px] lg:text-[28px]">
                    {service.title}
                  </h3>
                </div>

                <p className="max-w-[380px] text-[17px] leading-[1.75] tracking-[0.01em] text-[#5f5f5f]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Go to top marker */}
      <Link
        href="#home"
        className="absolute bottom-[80px] right-[66px] hidden flex-col items-center gap-4 text-[#9ca3af] lg:flex"
        aria-label="Go to top"
      >
        <span className="h-[58px] w-[3px] bg-[#ff3f35]" />
        <span className="vertical-rl text-[13px] font-extrabold uppercase tracking-[0.18em]">
          Go To Top
        </span>
      </Link>
    </section>
  );
}
