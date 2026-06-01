import { Building2, BarChart3, Hammer, Home } from 'lucide-react';

export default function ServicesIntro() {
  const services = [
    {
      title: 'Planning',
      description: 'We provide all the planning and consulting services to make sure your project runs smooth and flawlessly.',
      icon: BarChart3,
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
