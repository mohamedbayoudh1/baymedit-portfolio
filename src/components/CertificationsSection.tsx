import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Data Visualization with Python",
    issuer: "IBM",
    skills: ["Python", "NumPy", "Matplotlib", "Seaborn", "IPython"],
    description: "Strengthening data understanding for smarter web development decisions.",
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM",
    skills: ["Python", "SciPy", "pandas", "NumPy", "Scikit-Learn"],
    description: "Helps integrate data-driven features into web development projects.",
  },
  {
    title: "Applied Data Science Capstone",
    issuer: "IBM",
    skills: ["Python", "Machine Learning", "Data Science", "Analytics"],
    description: "Building optimal web solutions that are scalable and efficient.",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">My </span>
            <span className="text-primary">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications demonstrating my commitment to continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="text-primary" size={24} />
                </div>
                <div>
                  <span className="text-primary text-sm font-medium">{cert.issuer}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {cert.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4">
                {cert.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Cloud Skills Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="p-8 rounded-xl bg-card border border-primary/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Cloud Skills for Web Development
              </h3>
              <p className="text-muted-foreground mb-6">
                AWS (Amazon Web Services) is the primary platform I use to develop Cloud-based 
                web applications. From creating Amazon EC2 servers to managing containerization 
                with Docker/ECS/EKS, I leverage AWS Cloud Services to build scalable and 
                reliable environments for web development.
              </p>
              <div className="flex flex-wrap gap-3">
                {["AWS", "EC2", "Docker", "ECS", "EKS", "S3", "Lambda"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-secondary text-foreground text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;