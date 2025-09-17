import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './../components/Navbar';
import Footer from './../components/Footer';
import { ArrowLeft, Calendar, MapPin, Users, ChevronLeft, ChevronRight, X } from 'lucide-react';
import project1 from "./../assets/images/project (1).jpg";
import project2 from "./../assets/images/project (10).jpg";
import project3 from "./../assets/images/project (3).jpg";
import project4 from "./../assets/images/project (6).jpg";
import project5 from "./../assets/images/project (2).jpg";
import project6 from "./../assets/images/project (4).jpg";
import project7 from "./../assets/images/project (7).jpg";
import project8 from "./../assets/images/project (8).jpg";
import project9 from "./../assets/images/project (9).jpg";
import project10 from "./../assets/images/project (5).jpg";

// Mock project data
const allProjects = [
  {
    id: 1,
    title: "Modern Lagos Villa",
    slug: "modern-lagos-villa", 
    category: "residential",
    image: project1,
    location: "Lagos, Nigeria",
    year: "2024",
    client: "Private Client",
    description: "A contemporary villa that blends modern architecture with traditional Nigerian design elements.",
    images: [
      project6,
      project7, 
      project8,
      project9,
      project1,
      project3,
      project6,
      project7, 
      project8,
      project9,
      project1,
      project3
    ]
  },
  {
    id: 2,
    title: "Tech Hub Complex",
    slug: "tech-hub-complex",
    category: "commercial", 
    image: project2,
    location: "Abuja, Nigeria", 
    year: "2023",
    client: "TechCorp Nigeria",
    description: "A cutting-edge office complex designed for Nigeria's growing tech industry.",
    images: [
      project6,
      project2,
      project5,
      project7
    ]
  },
  {
    id: 3,
    title: "University Library",
    slug: "university-library",
    category: "institutional",
    image: project3, 
    location: "Ibadan, Nigeria",
    year: "2023",
    client: "University of Ibadan",
    description: "A modern library building that serves as a beacon of knowledge and learning.",
    images: [
      project4,
      project9,
      project2
    ]
  },
  {
    id: 4,
    title: "Retail Complex",
    slug: "retail-complex", 
    category: "commercial",
    image: project4,
    location: "Port Harcourt, Nigeria",
    year: "2022", 
    client: "Retail Group Ltd",
    description: "A vibrant shopping complex that integrates retail, dining, and entertainment spaces.",
    images: [
      project6,
      project7, 
      project8,
      project9,
      project1,
      project3
    ]
  },
  {
    id: 5,
    title: "Heritage Restoration",
    slug: "heritage-restoration",
    category: "heritage",
    image: project5,
    location: "Lagos Island, Nigeria", 
    year: "2022",
    client: "Lagos State Government",
    description: "Careful restoration of a colonial-era building preserving its historical significance.",
    images: [
      project6,
      project7, 
      project8,
      project9,
      project1,
      project3
    ]
  },
  {
    id: 6,
    title: "Family Residence", 
    slug: "family-residence",
    category: "residential",
    image: project6,
    location: "Kano, Nigeria",
    year: "2021",
    client: "Private Family",
    description: "A sustainable family home that responds to the local climate and culture.",
    images: [
     project6,
      project7, 
      project8,
      project9,
      project1,
      project3
    ]
  },
  {
    id: 7,
    title: "Beachfront Resort", 
    slug: "beachfront-resort",
    category: "residential",
    image: project7,
    location: "Kano, Nigeria",
    year: "2021",
    client: "Private Family",
    description: "A sustainable family home that responds to the local climate and culture.",
    images: [
     project6,
      project7, 
      project8,
      project9,
      project1,
      project3
    ]
  },
  {
    id: 8,
    title: "University Library",
    slug: "university-library",
    category: "institutional",
    image: project10, 
    location: "Ibadan, Nigeria",
    year: "2023",
    client: "University of Ibadan",
    description: "A modern library building that serves as a beacon of knowledge and learning.",
    images: [
      project4,
      project9,
      project2
    ]
  },
  {
    id: 9,
    title: "Retail Complex",
    slug: "retail-complex", 
    category: "commercial",
    image: project8,
    location: "Port Harcourt, Nigeria",
    year: "2022", 
    client: "Retail Group Ltd",
    description: "A vibrant shopping complex that integrates retail, dining, and entertainment spaces.",
    images: [
      project6,
      project7, 
      project8,
      project9,
      project1,
      project3
    ]
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'institutional', label: 'Institutional' },
  { id: 'heritage', label: 'Heritage' }
];



const Projects = () => {
  const { slug } = useParams();
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null)

  useEffect(() => {
  window.scrollTo(0, 0); // scrolls to very top
}, [slug]);


  // If slug exists, show individual project detail
  if (slug) {
    const project = allProjects.find(p => p.slug === slug);
    
    if (!project) {
      
      return (
        <div className="min-h-screen bg-white">
          <Navigation />
          <main className="pt-20">
            <div className="max-w-8xl mx-auto px-6 lg:px-12 py-12 text-center">
              <h1 className="text-4xl font-light text-foreground mb-4">Project Not Found</h1>
              <Link to="/projects" className="text-primary hover:underline">
                Back to Projects
              </Link>
            </div>
          </main>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20">
          {/* Project Header */}
          <section className="py-12 bg-muted/30">
            <div className="max-w-8xl mx-auto px-6 lg:px-12">
              <Link 
                to="/projects" 
                className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6">
                    {project.title}
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">Year</p>
                        <p className="font-medium">{project.year}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium">{project.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">Client</p>
                        <p className="font-medium">{project.client}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

         {/* Project Gallery */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <h2 className="text-3xl font-light text-foreground mb-12 text-center">
      Project Gallery
    </h2>

    {/* Masonry Grid */}
    <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
      {project.images.map((image, index) => (
        <div
          key={index}
          className="break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          onClick={() => setLightboxIndex(index)}
        >
          <img
            src={image}
            alt={`${project.title} - Image ${index + 1}`}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  </div>

  {/* Lightbox Modal */}
  {lightboxIndex !== null && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <button
        className="absolute top-4 right-4 text-white hover:text-gray-300"
        onClick={() => setLightboxIndex(null)}
      >
        <X size={32} />
      </button>

      <button
        className="absolute left-4 text-white hover:text-gray-300"
        onClick={() =>
          setLightboxIndex(
            (lightboxIndex - 1 + project.images.length) % project.images.length
          )
        }
      >
        <ChevronLeft size={40} />
      </button>

      <img
        src={project.images[lightboxIndex]}
        alt={`Lightbox ${lightboxIndex + 1}`}
        className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
      />

      <button
        className="absolute right-4 text-white hover:text-gray-300"
        onClick={() =>
          setLightboxIndex((lightboxIndex + 1) % project.images.length)
        }
      >
        <ChevronRight size={40} />
      </button>
    </div>
  )}
</section>
        </main>
        <Footer />
      </div>
    );
  }

  // Show projects grid listing
  
    const [visibleCount, setVisibleCount] = useState(6);

const filteredProjects = activeCategory === 'all' 
  ? allProjects 
  : allProjects.filter(project => project.category === activeCategory);

const visibleProjects = filteredProjects.slice(0, visibleCount);


  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="max-w-8xl mx-auto px-6 lg:px-12">
            <div className="text-center space-y-8">
             
              <p className="text-xl text-hero-accent max-w-3xl mx-auto leading-relaxed">
                Explore our portfolio of innovative architectural projects that showcase 
                our commitment to design excellence and sustainable building practices.
              </p>
            </div>
          </div>
        </section>

        {/* Category Tabs */}
        <section className=" bg-muted/30">
          <div className="max-w-8xl mx-auto px-6 lg:px-12">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 transition-colors ${
                    activeCategory === category.id
                      ? 'bg-black text-white'
                      : 'bg-black/5 text-black hover:text-white hover:bg-black/80'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {visibleProjects.map((project) => (
    <Link key={project.id} to={`/projects/${project.slug}`} className="group">
      <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden mb-6">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground capitalize">
          {project.category} • {project.location}
        </p>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>
      </div>
    </Link>
  ))}
</div>

{visibleCount < filteredProjects.length && (
  <div className="text-center mt-12">
    <button 
      onClick={() => setVisibleCount(prev => prev + 6)}
      className="px-6 py-3 bg-black text-white hover:bg-black/80"
    >
      Load More
    </button>
  </div>
)}

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;