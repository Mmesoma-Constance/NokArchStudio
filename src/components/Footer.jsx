import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-light tracking-tight text-foreground mb-4">
              NokArchStudio Studio
            </h3>
            <p className="text-muted-foreground max-w-md">
              Creating exceptional architectural experiences that blend innovation with timeless design principles. 
              Based in Lagos, Nigeria, serving clients globally.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Quick Links</h4>
            <div className="space-y-3">
              <Link to="/about" className="block text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link to="/projects" className="block text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link to="/services" className="block text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-muted-foreground">
              <p>Lagos, Nigeria</p>
              <p>+234 (0) 123 456 789</p>
              <p>hello@nokarchstudio.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 NokArchStudio. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;