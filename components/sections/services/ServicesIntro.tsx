import { Building2, BarChart3, Hammer, Home } from 'lucide-react';

export default function ServicesIntro() {
  const services = [
    {
      title: 'Planning',
      description: 'We provide all the planning and consulting services to make sure your project runs smooth and flawlessly.',
      icon: BarChart3,import Link from "next/link";

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
      <path
        d="M13 65V72"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M21 65V72"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M29 65V72"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M37 65V72"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M45 65V72"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M53 65V72"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M61 65V72"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      <path
        d="M13 17H20"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M13 25H20"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M13 33H20"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M13 41H20"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M13 49H20"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      <circle
        cx="24"
        cy="56"
        r="6"
        stroke="currentColor"
        strokeWidth="2.2"
      />
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
      <path
        d="M54 21V60"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M35 42H43"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M35 50H43"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M35 58H43"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
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
    },
    {
      title: '3D Modeling',
      description: 'Our team of expert architects provides 3D models and digital visualization of your dream project.',
      icon: Building2,
    },
    {
      title: 'Construction',
      description: 'We have the best construction team to build your dream project with the highest quality standards.',
      icon: Hammer,
    },
    {
      title: 'Renovation',
      description: 'Transform your existing spaces with our professional renovation and remodeling services.',
      icon: Home,
    },
  ];

  return (
    <section id="service" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="text-orange-500 font-semibold text-sm tracking-wide">WHO WE ARE</div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight text-balance">
              We provide all the services that you need for your new project
            </h2>
          </div>

          {/* Right - Services Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="space-y-3 group">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-orange-50 group-hover:bg-orange-100 transition-colors rounded">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
