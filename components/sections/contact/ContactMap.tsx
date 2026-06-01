import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactMap() {
  return (
    <section id="contact" className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Map Background Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Map Area */}
          <div className="flex-1 h-96 md:h-80 bg-gradient-to-br from-blue-200/50 to-blue-100/50 rounded-lg border-2 border-blue-200 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="w-12 h-12 mx-auto mb-3 opacity-40" />
              <p className="font-medium">Map Location</p>
            </div>
          </div>

          {/* Contact Card */}
          <div className="w-full md:w-96">
            <div className="bg-blue-700 rounded-lg p-8 text-white shadow-xl space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Office Address</h3>
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 flex-shrink-0 text-orange-400 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Main Office</p>
                      <p className="text-white/80 text-sm">
                        123 Architecture Lane<br />
                        New York, NY 10001<br />
                        United States
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 flex-shrink-0 text-orange-400 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Call Us</p>
                      <p className="text-white/80 text-sm">+1 (212) 555-0123</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 flex-shrink-0 text-orange-400 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-white/80 text-sm">info@buildnox.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="border-t border-white/20 pt-6">
                <p className="font-semibold mb-3">Business Hours</p>
                <p className="text-white/80 text-sm space-y-1">
                  <span className="block">Monday - Friday: 9:00 AM - 6:00 PM</span>
                  <span className="block">Saturday: 10:00 AM - 4:00 PM</span>
                  <span className="block">Sunday: Closed</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
