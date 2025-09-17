import Navigation from './../components/Navbar';
import Footer from './../components/Footer';
import { Users, Lightbulb, Award, Leaf, ZoomIn, UserCheck } from 'lucide-react';
import project1 from "./../assets/images/project (1).jpg";
import team1 from "./../assets/images/team (1).jpg";
import team2 from "./../assets/images/team (2).jpg";
import team3 from "./../assets/images/team (3).jpg";
import team4 from "./../assets/images/team (4).jpg";

const About = () => {
  const teamMembers = [
    {
      name: "NokArchStudio",
      role: "Principal Architect",
      image: team1,
      description: "Over 15 years of experience in sustainable architecture and urban planning."
    },
    {
      name: "Folake Adeyemi", 
      role: "Senior Designer",
      image: team2,
      description: "Specializes in residential and commercial interior design with a modern aesthetic."
    },
    {
      name: "Kunle Babatunde",
      role: "Project Manager",
      image: team3, 
      description: "Ensures seamless project execution from concept to completion."
    },
    {
      name: "Aisha Mohammed",
      role: "Landscape Architect",
      image: team4,
      description: "Creates harmonious outdoor spaces that complement architectural designs."
    }
  ];

  // why choose us
  const items = [
    {
      title: "Innovative Design",
      icon: Lightbulb,
      description: "Over 15 years of experience in sustainable architecture and urban planning."
    },
    {
      title: "Client-Centered Approach", 
      icon: UserCheck,
     description: "Specializes in residential and commercial interior design with a modern aesthetic."
    },
    {
      title: "Sustainable Solutions",
      icon: Leaf,
       description: "Ensures seamless project execution from concept to completion."
    },
    {
      title: "Attention to Detail",
      icon: ZoomIn,
      description: "Creates harmonious outdoor spaces that complement architectural designs."
    },
 {
      title: "Expert Team",
      icon: Users,
       description: "Ensures seamless project execution from concept to completion."
    },
    {
      title: "Proven Track Record",
      icon: Award,
      description: "Creates harmonious outdoor spaces that complement architectural designs."
    }
  ];

  return (
    <div className="min-h-screen bg-background w-full">
      <Navigation />
      
      <main className=" pt-20">
        {/* Hero Section */}
        <section className="max-w-8xl mx-auto px-6 w-full py-20 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="max-w-8xl mx-auto px-6 lg:px-12">
            <div className="text-center space-y-8">
             
              <p className="text-xl text-hero-accent max-w-3xl mx-auto leading-relaxed">
                We are a creative architectural studio dedicated to crafting spaces that inspire, 
                function beautifully, and stand the test of time.
              </p>
            </div>
          </div>
        </section>

        {/* Our Studio Section */}
        <section id="studio" className="max-w-8xl mx-auto px-6 w-full py-20">
          <div className="max-w-8xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-light text-foreground mb-8">
                  Our Studio
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2010, NokArchStudio Studio has emerged as a leading architectural practice 
                    in Nigeria, with projects spanning residential, commercial, and institutional spaces.
                  </p>
                  <p>
                    Our approach combines traditional African architectural principles with contemporary 
                    design sensibilities, creating spaces that are both culturally rooted and globally relevant.
                  </p>
                  <p>
                    We believe architecture should respond to climate, culture, and community, 
                    resulting in buildings that are sustainable, beautiful, and meaningful.
                  </p>
                </div>
              </div>
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <img 
                  src={project1} 
                  alt="NokArchStudio Studio Office"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-8xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6">
                Why Choose Us?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our expertise spans multiple disciplines, ensuring comprehensive architectural solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {items.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                 {item.description}
                </p>
                </div>
              ))}

            
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className=" max-w-8xl mx-auto px-6 w-full py-20">
          <div className="max-w-8xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6">
                Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Meet the creative minds behind our exceptional architectural projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="group">
                  <div className="aspect-[4/4] bg-muted rounded-lg overflow-hidden mb-6">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-12">
              Our Philosophy
            </h2>
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p>
                "Architecture is not just about creating buildings; it's about crafting experiences 
                that enrich human lives and strengthen communities."
              </p>
              <p>
                We believe in the power of design to transform spaces and lives. Our philosophy centers 
                on creating architecture that is responsive to its environment, respectful of local culture, 
                and responsible to future generations.
              </p>
              <p>
                Every project we undertake is an opportunity to contribute positively to the built environment, 
                creating spaces that are not only beautiful but also sustainable and meaningful.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;