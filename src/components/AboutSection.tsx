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
              Although I am new to the field of web development, I bring a combination 
              of flexibility, inquisitiveness and an eagerness to learn to the table. 
              I'm finding success within fast-paced environments for web development, 
              turning obstacles into opportunities along the way.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As a web developer with maximum motivation, I always look for the next 
              challenge to build, optimise and improve upon. My true passion lies with 
              creating new, modern, scalable and user-centred applications designed 
              for the web.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I am committed to lifelong learning and appear to be committed to becoming 
              a successful member of the web developer community. I don't just want to 
              become a web developer; I want to become a trusted partner as I build my 
              own web development business.
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