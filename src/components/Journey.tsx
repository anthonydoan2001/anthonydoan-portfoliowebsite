const journeyItems = [
  {
    year: "2025",
    title: "Current Role",
    items: [
      "Started as Computer Technician at Secure ITAD Services",
      "Diagnosing 15+ computers daily with comprehensive documentation",
      "Managing IT asset inventory and equipment lifecycle",
      "Pursuing CompTIA Network+ certification"
    ]
  },
  {
    year: "2024",
    title: "Career Transition",
    items: [
      "Graduated from University of Houston with BS in Computer Science",
      "Completed coursework in Computer Networking, Operating Systems, Database Systems",
      "Developed User Provisioning Automation System using PowerShell",
      "Gained expertise in Active Directory and Azure AD"
    ]
  },
  {
    year: "2022",
    title: "IT Foundation",
    items: [
      "IT Internship at Daikin Comfort - supported 50+ end-users",
      "Created automation system reducing workload by 40 hours weekly",
      "Built rebate processing system with JavaScript and SQL",
      "Developed documentation and process improvements"
    ]
  },
  {
    year: "2020",
    title: "Leadership Development",
    items: [
      "Became Shift Leader at Tiff's Treats",
      "Served 100+ customers daily with excellent service",
      "Trained team members on operational procedures",
      "Developed problem-solving and customer service skills"
    ]
  }
];

const Journey = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-emerald">Journey</span> Report
          </h2>
        </div>

        <div className="space-y-12">
          {journeyItems.map((item, index) => (
            <div key={index} className="flex gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-emerald bg-card flex items-center justify-center font-mono text-sm font-bold text-emerald flex-shrink-0">
                  {item.year}
                </div>
                {index !== journeyItems.length - 1 && (
                  <div className="w-0.5 h-full bg-border mt-4"></div>
                )}
              </div>

              <div className="flex-1 pb-12">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <div className="bg-card border border-border rounded-lg p-6">
                  <ul className="space-y-3">
                    {item.items.map((detail, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="text-emerald mt-1">▹</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
