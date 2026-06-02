import Link from "next/link";

function BlueprintIcon() {
  return (
    <svg
      width="78"
      height="78"
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[78px] w-[78px] text-[#071126]"
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
      title: "Planning",
      description:
        "Publishing packages and web page editors now use orem epsum as their default model text.",
    },
    {
      title: "3 D Modeling",
      description:
        "Publishing packages and web page editors now use orem epsum as their default model text.",
    },
    {
      title: "Construction",
      description:
        "Publishing packages and web page editors now use orem epsum as their default model text.",
    },
    {
      title: "Renovation",
      description:
        "Publishing packages and web page editors now use orem epsum as their default model text.",
    },
  ];

  return (
    <section
      id="service"
      className="relative overflow-hidden bg-white py-20 md:py-24 lg:py-[135px]"
    >
      <div className="mx-auto max-w-[1740px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.88fr_1.12fr] lg:gap-24">
          {/* Left Content */}
          <div className="service-heading max-w-[680px]">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-[2px] w-[38px] bg-[#ff3f35]" />
              <span className="text-[15px] font-extrabold uppercase tracking-[0.22em] text-[#ff3f35]">
                What We Do
              </span>
            </div>

            <h2 className="text-[44px] font-extrabold leading-[1.25] tracking-[0.03em] text-[#071126] sm:text-[56px] lg:text-[64px] xl:text-[70px]">
              We provide all the services that you need for your new project
            </h2>
          </div>

          {/* Right Services Grid */}
          <div className="grid grid-cols-1 gap-x-24 gap-y-20 sm:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`service-card service-delay-${index + 1}`}
              >
                <div className="mb-10 flex items-center gap-7">
                  <BlueprintIcon />

                  <h3 className="text-[30px] font-extrabold leading-none tracking-[0.04em] text-[#071126] lg:text-[34px]">
                    {service.title}
                  </h3>
                </div>

                <p className="max-w-[380px] text-[21px] leading-[1.8] tracking-[0.01em] text-[#5f5f5f]">
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
