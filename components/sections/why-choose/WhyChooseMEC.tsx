import {
  MapPinned,
  Building,
  Users,
  BriefcaseBusiness,
  Network,
  ShieldCheck,
} from "lucide-react";

export default function WhyChooseMEC() {
  const reasons = [
    {
      title: "Premium Manila Address",
      description:
        "Establish your business presence in a highly accessible Manila location.",
      icon: MapPinned,
    },
    {
      title: "Business-Ready Spaces",
      description:
        "Designed for offices, teams, entrepreneurs, and growing businesses.",
      icon: Building,
    },
    {
      title: "Professional Environment",
      description:
        "A clean, modern, and organized setting for daily operations.",
      icon: BriefcaseBusiness,
    },
    {
      title: "Accessible Ecosystem",
      description:
        "Close to institutions, transport routes, and commercial activity.",
      icon: Network,
    },
    {
      title: "Growth-Oriented Community",
      description:
        "Built for brands, sellers, creators, operators, and business teams.",
      icon: Users,
    },
    {
      title: "Reliable Business Support",
      description:
        "A practical environment made to support long-term business activity.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      id="why-choose-mec"
      className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-[90px]"
    >
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="mx-auto mb-10 max-w-[760px] text-center md:mb-12">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-[2px] w-[38px] bg-[#c69208]" />
            <span className="text-[13px] font-extrabold uppercase tracking-[0.22em] text-[#c69208]">
              Why Choose MEC
            </span>
            <span className="h-[2px] w-[38px] bg-[#c69208]" />
          </div>

          <h2 className="text-[32px] font-extrabold leading-[1.22] tracking-tight text-[#071126] sm:text-[34px] lg:text-[35px]">
            Built for business growth, access, and opportunity
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="group min-h-[245px] border border-[#e5e7eb] bg-white p-7 transition duration-500 hover:-translate-y-2 hover:border-[#c69208]/80 hover:shadow-2xl"
              >
                <div className="mb-6 grid h-15 w-15 place-items-center bg-[#071126] text-white transition duration-300 group-hover:bg-[#c69208]">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-[25px] font-extrabold leading-tight tracking-[0.03em] text-[#071126] sm:text-[27px] lg:text-[28px]">
                  {reason.title}
                </h3>

                <p className="mt-4 text-[16px] leading-[1.7] text-[#6b7280]">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
