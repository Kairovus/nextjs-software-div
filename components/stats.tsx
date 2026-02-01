export default function Stats() {
  const stats = [
    {
      metric: "20 days",
      description: "saved on daily builds",
      company: "Netflix"
    },
    {
      metric: "98% faster",
      description: "time to market",
      company: "TripAdvisor"
    },
    {
      metric: "300% increase",
      description: "in SEO performance",
      company: "Box"
    },
    {
      metric: "6x faster",
      description: "to build + deploy",
      company: "eBay"
    }
  ];

  return (
    <section className="border-y border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
        {stats.map((stat, index) => (
          <div key={index} className="px-6 py-12">
            <div className="text-4xl font-bold mb-2 text-balance">
              {stat.metric}
            </div>
            <p className="text-accent text-sm mb-6">{stat.description}</p>
            <div className="text-lg font-semibold">{stat.company}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
