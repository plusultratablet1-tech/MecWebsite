import { Mail, MapPin, Clock, Phone } from "lucide-react";

export default function ContactSection() {
  const contacts = [
    {
      label: "Address",
      value: "180 Casal St, San Miguel, Manila, 1005 Metro Manila",
      icon: MapPin,
    },
    {
      label: "Email",
      value: "manilaecommercecenter@gmail.com",
      icon: Mail,
    },
    {
      label: "Business Hours",
      value: "9:00 AM – 5:00 PM",
      icon: Clock,
    },
    {
      label: "Phone",
      value: "Available upon inquiry",
      icon: Phone,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-20 md:py-24 lg:py-[120px]"
    >
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.48fr_0.52fr] lg:gap-20">
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-[2px] w-[38px] bg-[#ff3f35]" />
              <span className="text-[13px] font-extrabold uppercase tracking-[0.22em] text-[#ff3f35]">
                Contact MEC
              </span>
            </div>

            <h2 className="text-[40px] font-extrabold leading-[1.18] tracking-tight text-[#071126] sm:text-[50px] lg:text-[60px]">
              Visit or inquire about available business spaces
            </h2>

            <p className="mt-7 max-w-[620px] text-[17px] leading-[1.8] text-[#6b7280]">
              Send an inquiry or visit Manila Ecommerce Center to learn more
              about office spaces, business opportunities, and available
              facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {contacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <article
                  key={contact.label}
                  className="flex gap-6 border border-[#e5e7eb] bg-[#f8f9fb] p-7"
                >
                  <div className="grid h-14 w-14 shrink-0 place-items-center bg-[#071126] text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div>
                    <h3 className="text-[18px] font-extrabold text-[#071126]">
                      {contact.label}
                    </h3>

                    <p className="mt-2 text-[16px] leading-[1.7] text-[#6b7280]">
                      {contact.value}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-14 overflow-hidden border border-[#e5e7eb] bg-[#f5f6f8]">
          <div className="grid min-h-[360px] place-items-center p-10 text-center">
            <div>
              <MapPin className="mx-auto mb-5 h-12 w-12 text-[#ff3f35]" />
              <h3 className="text-[28px] font-extrabold text-[#071126]">
                Map Location Placeholder
              </h3>
              <p className="mt-3 max-w-[620px] text-[16px] leading-[1.7] text-[#6b7280]">
                Replace this area with an embedded Google Map for 180 Casal St,
                San Miguel, Manila.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
