import ServiceCard from "@/components/ServiceCard";
import { SERVICES } from "@/lib/contants";

export default function Services() {
  return (
    <div className="mt-5" id="services">
      <h2 className="text-2xl font-bold">My Services</h2>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 ">
        Here are the services I offer to help businesses and individuals
      </p>
      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-4">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}
