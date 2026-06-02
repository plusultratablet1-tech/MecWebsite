import { Building2, Landmark, GraduationCap } from "lucide-react";

export default function StrategicLocation() {
  const locations = [
    {
      title: "Near Malacañang",
      description:
        "Positioned close to one of Manila’s most recognized government landmarks.",
      icon: Landmark,
    },
    {
      title: "Near Manila City Hall",
      description:
        "Accessible to key public offices, business districts, and civic institutions.",
      icon: Building2,
    },
    {
      title: "Near the University Belt",
      description:
        "Surrounded by schools, professionals, students, and daily commercial activity.",
      icon: GraduationCap,
    },
  ];

  return (
    <section
      id="location"
      className="relative overflow-hidden bg-[#f5f6f8] py-20 md:py-24 lg:py-[115px]"
    >
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.44fr_0.56fr] lg:gap-20">
          {/* Left Content */}
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-[2px] w-[38px] bg-[#ff3f35]" />
              <span className="text-[14px] font-extrabold uppercase tracking-[0.22em] text-[#ff3f35]">
                Strategic Location
              </span>
            </div>

            <h2 className="max-w-[560px] text-[32px] font-extrabold leading-[1.28] tracking-[0.02em] text-[#071126] sm:text-[34px] lg:text-[35px]">
              A business address in the heart of Manila
            </h2>

            <p className="mt-7 max-w-[620px] text-[17px] leading-[1.8] text-[#5f5f5f]">
              Manila Ecommerce Center is located at 180 Casal Street, San
              Miguel, Manila — a strategic area surrounded by government,
              education, commercial, and business activity.
            </p>
          </div>

          {/* Right Location Cards */}
          <div className="grid grid-cols-1 gap-5">
            {locations.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group border border-[#e5e7eb] bg-white p-8 transition duration-500 hover:-translate-y-1 hover:border-[#ff3f35]/60 hover:shadow-xl"
                >
                  <div className="flex gap-6">
                    <div className="grid h-16 w-16 shrink-0 place-items-center bg-[#ff3f35]/10 text-[#ff3f35] transition duration-300 group-hover:bg-[#ff3f35] group-hover:text-white">
                      <Icon className="h-8 w-8" />
                    </div>

                    <div>
                      <h3 className="text-[25px] font-extrabold leading-tight tracking-[0.03em] text-[#071126] sm:text-[27px] lg:text-[28px]">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-[620px] text-[16px] leading-[1.75] text-[#6b7280]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[420px] w-[420px] rounded-full bg-[#ff3f35]/5" />
    </section>
  );
}
