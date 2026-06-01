import Image from 'next/image';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Robert Joe',
      role: 'Lead Architect',
      image: '/images/team-1.png',
      featured: true,
    },
    {
      name: 'Mary Joe',
      role: 'Design Director',
      image: '/images/team-2.png',
      featured: true,
    },
    {
      name: 'Mary Jefferson',
      role: 'Project Manager',
      image: '/images/team-3.png',
      featured: false,
    },
    {
      name: 'Albert Flores',
      role: 'Senior Engineer',
      image: '/images/team-4.png',
      featured: false,
    },
    {
      name: 'Jay Root',
      role: 'Architect',
      image: '/images/team-5.png',
      featured: false,
    },
    {
      name: 'Ben Stock',
      role: 'Constructor',
      image: '/images/team-6.png',
      featured: false,
    },
  ];

  const featuredMembers = teamMembers.filter((m) => m.featured);
  const otherMembers = teamMembers.filter((m) => !m.featured);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16 space-y-4">
          <div className="text-orange-500 font-semibold text-sm tracking-wide">OUR PROFESSIONALS</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Team</h2>
          <p className="text-gray-600 max-w-2xl">Meet our talented team of architects, engineers, and construction professionals dedicated to delivering excellence.</p>
        </div>

        {/* Featured Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {featuredMembers.map((member, idx) => (
            <div key={idx} className="space-y-3">
              <div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Other Team Members */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {otherMembers.map((member, idx) => (
            <div key={idx} className="space-y-3">
              <div className="relative w-full h-40 md:h-48 rounded-lg overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-900 text-center md:text-left">{member.name}</h4>
                <p className="text-gray-600 text-xs text-center md:text-left">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
