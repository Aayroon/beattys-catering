export default function ServiceCard({ service }) {
  return (
    <div className="group rounded-2xl border border-gold/30 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blush text-2xl">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-brand">{service.title}</h3>
      <p className="mt-2 text-sm text-ink/80">{service.text}</p>
    </div>
  );
}