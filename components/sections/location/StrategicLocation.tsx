import { Building2, Landmark, GraduationCap, MapPin } from "lucide-react";

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
      className="relative overflow-hidden bg-[#f5f6f8] py-20 md:py-24 lg:py-[120px]"
    >
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.44fr_0.56fr] lg:gap-20">
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-[2px] w-[38px] bg-[#ff3f35]" />
              <span className="text-[13px] font-extrabold uppercase tracking-[0.22em] text-[#ff3f35]">
                Strategic Location
              </span>
            </div>

            <h2 className="max-w-[620px] text-[40px] font-extrabold leading-[1.18] tracking-tight text-[#071126] sm:text-[50px] lg:text-[60px]">
              A business address in the heart of Manila
            </h2>

            <p className="mt-8 max-w-[620px] text-[18px] leading-[1.8] text-[#5f5f5f]">
              Manila Ecommerce Center is located at 180 Casal Street, San
              Miguel, Manila — a strategic area surrounded by government,
              education, commercial, and business activity.
            </p>
          </div>

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
                      <h3 className="text-[24px] font-extrabold text-[#071126]">
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
