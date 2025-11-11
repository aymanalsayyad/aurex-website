'use client';

export default function StatsSection() {
  const stats = [
    { value: '13+', label: 'Years of Excellence' },
    { value: '441+', label: 'Satisfied Clients' },
    { value: '883+', label: 'Successful Projects' },
    { value: '17+', label: 'Global Reach (Countries)' },
  ];

  return (
    <section className="section-padding bg-gradient-to-r from-dark-900 via-primary-900 to-dark-900 text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="badge bg-white/20 text-white">Proven Excellence</span>
          <h2 className="section-title text-white mt-4 mb-4">Our Track Record</h2>
          <p className="text-lg text-white/80">Numbers that speak for themselves</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in-up" style={{
              animationDelay: `${index * 100}ms`
            }}>
              <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-accent-300 mb-2">
                {stat.value}
              </div>
              <p className="text-white/80 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
