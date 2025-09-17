import Navigation from './../components/Navbar';
import Footer from './../components/Footer';
import { ArrowRight } from 'lucide-react';
import project1 from "./../assets/images/project (5).jpg";
import project2 from "./../assets/images/project (10).jpg";
import project3 from "./../assets/images/project (6).jpg";
import project4 from "./../assets/images/project (7).jpg";
import project5 from "./../assets/images/project (8).jpg";
import project6 from "./../assets/images/project (9).jpg";

const Services = () => {
  const services = [
    {
      title: "Architectural Design",
      description: "Complete architectural design services from initial concept through to construction documentation. We create innovative, sustainable designs that respond to site, climate, and client needs.",
      image: project1,
      features: [
        "Conceptual Design",
        "Design Development", 
        "Construction Documentation",
        "3D Visualization",
        "Sustainability Consulting"
      ]
    },
    {
      title: "Interior Design",
      description: "Thoughtful interior design that enhances the architectural vision while creating comfortable, functional spaces. Our approach balances aesthetics with practicality.",
      image: project2,
      features: [
        "Space Planning",
        "Material Selection",
        "Furniture Design",
        "Lighting Design",
        "Art Curation"
      ]
    },
    {
      title: "Urban Planning", 
      description: "Strategic urban design and master planning services that create vibrant, sustainable communities. We focus on human-scale development that enhances quality of life.",
      image: project3,
      features: [
        "Master Planning",
        "Zoning Studies",
        "Public Space Design",
        "Transportation Planning",
        "Community Engagement"
      ]
    },
    {
      title: "Project Management",
      description: "Comprehensive project management services ensuring your project is delivered on time, within budget, and to the highest quality standards.",
      image: project4, 
      features: [
        "Construction Administration",
        "Quality Control",
        "Budget Management",
        "Timeline Coordination",
        "Stakeholder Communication"
      ]
    },
    {
      title: "Consultation Services",
      description: "Expert consultation on planning applications, building regulations, sustainability strategies, and design reviews for existing projects.",
      image: project5,
      features: [
        "Planning Applications",
        "Building Regulations", 
        "Design Reviews",
        "Feasibility Studies",
        "Expert Witness Services"
      ]
    },
    {
      title: "Renovation & Restoration",
      description: "Sensitive renovation and restoration services that breathe new life into existing buildings while preserving their character and heritage.",
      image: project6,
      features: [
        "Heritage Restoration",
        "Adaptive Reuse",
        "Building Surveys",
        "Conservation Planning",
        "Historic Research"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center space-y-8">
             
              <p className="font-sourcesans text-xl text-hero-accent max-w-3xl mx-auto leading-relaxed">
                Comprehensive architectural services tailored to bring your vision to life, 
                from initial concept to final construction.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="space-y-6">
                      <h2 className="text-3xl md:text-4xl font-light text-foreground">
                        {service.title}
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-foreground">What's Included:</h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-muted-foreground">
                              <ArrowRight className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* <div className="pt-6">
                        <button className="inline-flex items-center px-6 py-3 bg-black text-white hover:bg-black/90 transition-colors">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div> */}
                    </div>
                  </div>
                  
                  <div className={`aspect-[4/3] bg-muted rounded-lg overflow-hidden ${
                    index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                  }`}>
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#1f5c89] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-light mb-8">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl opacity-90 mb-12 leading-relaxed">
              Let's discuss how we can bring your architectural vision to life. 
              Contact us today for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-black  hover:bg-white/90 transition-colors">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border border-white/20  hover:bg-white/10 transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;