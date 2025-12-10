import { 
  Code, 
  Server, 
  Layers, 
  Cloud, 
  CreditCard, 
  Bot 
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Front-End Development",
    description: "Building responsive, interactive user interfaces with JavaScript, React, HTML, and CSS.",
  },
  {
    icon: Server,
    title: "Back-End Development",
    description: "Node.js, PHP (Laravel, Symfony), Python (Django, Flask), Java (Spring Boot), C# (.NET).",
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    description: "Complete end-to-end web development solutions from database to user interface.",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description: "Git, Docker, Kubernetes, Jenkins, AWS, Terraform for reliable and scalable systems.",
  },
  {
    icon: CreditCard,
    title: "Stripe Integration",
    description: "Secure payment integration for safe and reliable customer transactions.",
  },
  {
    icon: Bot,
    title: "AI & Prompt Engineering",
    description: "Incorporating AI solutions with Large Language Models to assist with development workflow.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">My </span>
            <span className="text-primary">Services</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I use to build modern, scalable web applications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon 
                  className="text-primary group-hover:text-primary-foreground transition-colors" 
                  size={28} 
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;