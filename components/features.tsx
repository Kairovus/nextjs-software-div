export default function Features() {
  const features = [
    {
      title: "Faster iteration",
      description: "The platform for rapid progress. Let your team focus on shipping features instead of managing infrastructure with automated CI/CD, built-in testing, and integrated collaboration."
    },
    {
      title: "Make teamwork seamless",
      description: "Tools for your team and stakeholders to share feedback and iterate faster with collaborative development environments and real-time insights."
    },
    {
      title: "Enterprise security",
      description: "Built for security at every layer. From automatic deployment previews to role-based access control and SOC 2 compliance."
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-balance">
              Everything you need to ship faster
            </h2>
          </div>
          <div className="flex flex-col gap-12">
            {features.map((feature, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-accent leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-20">
          <div className="border border-border rounded-lg p-8 bg-black/50">
            <div className="h-64 bg-border rounded-lg flex items-center justify-center text-accent">
              [Feature Preview 1]
            </div>
          </div>
          <div className="border border-border rounded-lg p-8 bg-black/50">
            <div className="h-64 bg-border rounded-lg flex items-center justify-center text-accent">
              [Feature Preview 2]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
