const skills = [
  { name: "JavaScript / React", percentage: 90 },
  { name: "HTML / CSS", percentage: 95 },
  { name: "Node.js", percentage: 85 },
  { name: "Python", percentage: 80 },
  { name: "PHP / Laravel", percentage: 75 },
  { name: "DevOps / AWS", percentage: 70 },
  { name: "Docker / Kubernetes", percentage: 75 },
  { name: "Database (SQL / NoSQL)", percentage: 80 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">My </span>
            <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-foreground font-medium">{skill.name}</span>
                <span className="text-primary font-semibold">{skill.percentage}%</span>
              </div>
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-gold-glow rounded-full animate-progress-fill"
                  style={{ 
                    "--progress-width": `${skill.percentage}%`,
                    animationDelay: `${index * 0.1}s`
                  } as React.CSSProperties}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;