import Navigation from './../components/Navbar';
import Footer from './../components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center space-y-8">
             
              <p className="font-inconsolata uppercase text-xl text-hero-accent max-w-3xl mx-auto leading-relaxed">
                Ready to start your next architectural project? We'd love to hear from you. 
                Let's discuss how we can bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-light text-foreground mb-8">
                 Schedule a Consultation
                </h2>
                <form className="space-y-6 font-inconsolata">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                      placeholder="+234 (0) 123 456 789"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                    >
                      <option value="">Select a project type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="institutional">Institutional</option>
                      <option value="renovation">Renovation</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                      Project Budget (Optional)
                    </label>
                    <select
                      id="budget"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-50k">Under ₦50M</option>
                      <option value="50k-100k">₦50M - ₦100M</option>
                      <option value="100k-250k">₦100M - ₦250M</option>
                      <option value="250k-plus">₦250M+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1f5c89] text-white hover:bg-[#1f5c89dd]  py-4  transition-colors font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-light text-foreground mb-8">
                  Contact Information
                </h2>
                
                <div className="space-y-8 font-inconsolata">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-6 h-6 text-primary text-[#1f5c89]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-2">Office Address</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        123 Zik Avenue, Aroma Junction<br />
                        Awka State, Nigeria<br />
                        100001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Phone className="w-6 h-6 text-primary text-[#1f5c89]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-2">Phone</h3>
                      <p className="text-muted-foreground">+2345 123 456 789</p>
                      <p className="text-muted-foreground">+2347 987 654 321</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Mail className="w-6 h-6 text-primary text-[#1f5c89]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-2">Email</h3>
                      <p className="text-muted-foreground">hello@nokarchstudio.com</p>
                      <p className="text-muted-foreground">projects@nokarchstudio.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="w-6 h-6 text-primary text-[#1f5c89]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-2">Office Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Saturday: 10:00 AM - 2:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

             
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
              Schedule a Consultation
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Prefer to speak directly? Book a consultation call to discuss your project requirements 
              and timeline with our team.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-[#1f5c89] text-white hover:bg-[#1f5c89dd] transition-colors">
              Book Consultation Call
            </button>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
};

export default Contact;