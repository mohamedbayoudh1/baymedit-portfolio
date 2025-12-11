import { Award } from "lucide-react";

const certifications = [
  {
    title: "Applied Data Science Capstone",
    issuer: "IBM",
    date: "Nov 2024",
    skills: ["Data Science", "Data Collection", "Data Visualization", "Data Wrangling"],
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM",
    date: "Nov 2024",
    skills: ["Machine Learning", "NumPy", "Pandas", "Python Programming", "SciPy and scikit-learn"],
  },
  {
    title: "Data Visualization with Python",
    issuer: "IBM",
    date: "Nov 2024",
    skills: ["NumPy", "Matplotlib", "Python Programming", "Seaborn"],
  },
  {
    title: "Databases and SQL for Data Science with Python",
    issuer: "IBM",
    date: "Jun 2024",
    credentialId: "45QBLZ7KB8UN",
    skills: ["SQL", "Python Programming", "Cloud Databases", "RDBMS", "Data Science"],
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    date: "Jun 2024",
    credentialId: "KN4N9AYL74NK",
    skills: ["Machine Learning", "Regression Models", "Hierarchical Clustering", "Classification", "SciPy and scikit-learn"],
  },
  {
    title: "Applications of AI for Predictive Maintenance",
    issuer: "NVIDIA",
    date: "Nov 2023",
    credentialId: "6839a57c95cd4486a3f02619c262537c",
    skills: ["Machine Learning"],
  },
  {
    title: "EFSET Quick English Check - Advanced/Proficient (C1/C2)",
    issuer: "EF SET",
    date: "May 2023",
    credentialId: "3bZ6Wj",
    skills: ["English"],
  },
  {
    title: "Java Programming: Solving Problems with Software",
    issuer: "Duke University",
    date: "Dec 2021",
    credentialId: "6UTN8YQVP8ZD",
    skills: ["Java", "Problem Solving", "Algorithms"],
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert) => (
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
                  <p className="text-muted-foreground text-xs">{cert.date}</p>
                </div>
              </div>
              
              <h3 className="text-base font-semibold text-foreground mb-3 line-clamp-2">
                {cert.title}
              </h3>
              
              {cert.credentialId && (
                <p className="text-muted-foreground text-xs mb-3">
                  ID: {cert.credentialId}
                </p>
              )}
              
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
                {cert.skills.length > 3 && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-secondary text-muted-foreground">
                    +{cert.skills.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificationsSection;
