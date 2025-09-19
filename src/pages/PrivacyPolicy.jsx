import Navigation from './../components/Navbar';
import Footer from './../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className=" min-h-screen bg-background">
      <Navigation />
      
      <main className=" pt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          <div className="prose prose-gray max-w-none">
            <h1 className="text-4xl font-light tracking-loose text-foreground mb-8">
              Privacy Policy
            </h1>
            
            <p className="font-inconsolata text-lg text-muted-foreground mb-12">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="font-inconsolata mb-12">
              <h2 className="text-2xl font-medium text-foreground mb-6 text-[#1f5c89]">Information We Collect</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At NokArchStudio, we collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Contact us through our website or email</li>
                  <li>Request information about our services</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Engage with our social media content</li>
                </ul>
              </div>
            </section>

            <section className="font-inconsolata mb-12">
              <h2 className="text-2xl font-medium text-foreground mb-6 text-[#1f5c89]">How We Use Your Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you updates about our projects and services</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section className="font-inconsolata mb-12">
              <h2 className="text-2xl font-medium text-foreground mb-6 text-[#1f5c89]">Information Sharing</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements</li>
                  <li>With trusted service providers who assist in our operations</li>
                </ul>
              </div>
            </section>

            <section className="font-inconsolata mb-12">
              <h2 className="text-2xl font-medium text-foreground mb-6 text-[#1f5c89]">Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="font-inconsolata mb-12">
              <h2 className="text-2xl font-medium text-foreground mb-6 text-[#1f5c89]">Your Rights</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>
            </section>

            <section className="font-inconsolata mb-12">
              <h2 className="text-2xl font-medium text-foreground mb-6 text-[#1f5c89]">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: privacy@nokarchstudio.com
                <br />
                Phone: +234 (0) 123 456 789
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;