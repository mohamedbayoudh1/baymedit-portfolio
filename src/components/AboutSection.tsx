import { Code, Lightbulb, Rocket, Users } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quickly adapting to new technologies and methodologies",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborating effectively to deliver amazing results",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">About </span>
            <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground">
            Why I'm The Best Choice to Partner With
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            I bring a combination of adaptability, technical curiosity, and strong problem-solving 
            skills that make me a reliable partner for any modern web project. I thrive in fast-paced 
            environments, consistently turning challenges into opportunities for smarter and more 
            efficient solutions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            As a dedicated web developer, I'm always pushing to build, optimize, and elevate 
            applications—focusing on modern, scalable, and user-centered designs that deliver 
            real value. I take pride in writing clean code, improving performance, and ensuring 
            a seamless experience on every project I touch.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I am committed to continuous growth and to becoming not just a capable developer, 
            but a long-term partner you can trust. My goal is always the same: deliver high-quality 
            work, communicate clearly, and contribute meaningfully to every team or client I 
            collaborate with.
          </p>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;