import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import project1 from "./../assets/images/project (1).jpg";
import project2 from "./../assets/images/project (2).jpg";
import project3 from "./../assets/images/project (3).jpg";
import project4 from "./../assets/images/project (10).jpg";
import project5 from "./../assets/images/project (5).jpg";
import project6 from "./../assets/images/project (6).jpg";
import project7 from "./../assets/images/project (7).jpg";
import project8 from "./../assets/images/project (8).jpg";
import project9 from "./../assets/images/project (9).jpg";

const projects = [
  {
    id: 1,
    title: "Modern Corporate Complex",
    description:
      "A contemporary office building featuring clean lines and sustainable design principles.",
    image: project1,
    slug: "modern-corporate-complex",
  },
  {
    id: 2,
    title: "Residential Innovation",
    description:
      "We are NokArchStudio - an internationally engaged architectural design studio, rooted in Lagos",
    image: project2,
    slug: "residential-innovation",
  },
  {
    id: 3,
    title: "Urban Mixed-Use Development",
    description:
      "Integrating commercial and residential spaces in the heart of the city.",
    image: project3,
    slug: "urban-mixed-use",
  },
  {
    id: 4,
    title: "Cultural Center",
    description:
      "A space that celebrates local heritage while embracing contemporary design.",
    image: project4,
    slug: "cultural-center",
  },
  {
    id: 5,
    title: "Sustainable Housing",
    description:
      "Eco-friendly residential design that prioritizes environmental responsibility.",
    image: project5,
    slug: "sustainable-housing",
  },
  {
    id: 6,
    title: "Lagos Innovation Hub",
    description:
      "We are NokArchStudio - an internationally engaged architectural design studio, rooted in Lagos",
    image: project6,
    slug: "lagos-innovation-hub",
  },
  {
    id: 7,
    title: "Waterfront Pavilion",
    description:
      "A striking structure that harmonizes with its coastal environment.",
    image: project7,
    slug: "waterfront-pavilion",
  },
  {
    id: 8,
    title: "Educational Campus",
    description:
      "Inspiring learning spaces designed for the future of education.",
    image: project8,
    slug: "educational-campus",
  },
  {
    id: 9,
    title: "Community Center",
    description:
      "A gathering place that strengthens social connections and community bonds.",
    image: project9,
    slug: "community-center",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Starting at slide 1 (index 0)
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [nextImage, setNextImage] = useState(null);

  // Preload next image for smooth transitions
  useEffect(() => {
    const nextSlideIndex = (currentSlide + 1) % projects.length;
    const nextImageSrc = projects[nextSlideIndex].image;

    const img = new Image();
    img.onload = () => setNextImage(nextImageSrc);
    img.src = nextImageSrc;
  }, [currentSlide]);

  // Initialize image loading state
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = projects[currentSlide].image;
    setImageLoaded(false);
  }, [currentSlide]);

  // Auto-advance slides every 5 seconds with proper transition
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentSlide((prev) => (prev + 1) % projects.length);
          setTimeout(() => setIsTransitioning(false), 100);
        }, 350);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 350);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 350);
  };

  const handleSlideChange = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 350);
  };

  const handleViewProject = () => {
    // Navigate to project page
    window.location.href = `/projects/${projects[currentSlide].slug}`;
  };

  const currentProject = projects[currentSlide];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={currentProject.image}
          alt={currentProject.title}
          className={`hero-image ${
            isTransitioning ? "hero-image-exit-active" : ""
          }`}
        />
        <div className="absolute inset-0 bg-black/20 " />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="hero-title">{currentProject.description}</h1>
              </div>
            </div>

            {/* Right Content - Navigation */}
            <div className="lg:justify-self-end">
              {/* Navigation Arrows */}
              <div className="flex items-center space-x-4 mb-8">
                <button
                  onClick={handlePrev}
                  className="carousel-nav"
                  disabled={isTransitioning}
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={handleNext}
                  className="carousel-nav"
                  disabled={isTransitioning}
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="absolute bottom-8 left-6 lg:left-8 flex items-center space-x-8">
            {/* Slide Indicator */}
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-hero-text">
                {String(currentSlide + 1).padStart(1, "0")} / {projects.length}
              </span>
            </div>
          </div>

          {/* View Project Link */}
          <div className="absolute bottom-8 right-6 lg:right-8">
            <button onClick={handleViewProject} className="project-link-lg">
              VIEW PROJECT
            </button>
          </div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-28 md:bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`carousel-indicator ${
              index === currentSlide ? "active" : ""
            }`}
            disabled={isTransitioning}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
