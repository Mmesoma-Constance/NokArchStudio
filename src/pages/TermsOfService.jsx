import Navigation from './../components/Navbar';
import Footer from './../components/Footer';

const TermsOfService = () => {
  return (
    <div className=" min-h-screen bg-background">
      <Navigation />
      
      <main className=" pt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          <div className="prose prose-gray max-w-none">
            <h1 className="text-4xl font-light tracking-loose text-foreground mb-8">
              Terms of Service
            </h1>
            
            <p className="font-inconsolata text-lg text-muted-foreground mb-12">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="font-inconsolata mb-12">
              <h2 className="text-2xl font-medium text-foreground mb-6 text-[#1f5c89]">Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using NokArchStudio's services, you accept and agree to be bound by 
                these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="font-inconsolata mb-12">
              <h2 className="text-2xl font-medium text-foreground mb-6 text-[#1f5c89]">Our Services</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>NokArchStudio provides architectural design and consultation services including:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Architectural design and planning</li>
                  <li>Interior design services</li>
                  <li>Project management and consultation</li>
                  <li>Heritage restoration services</li>
                </ul>
              </div>
            </section>

            <section className="font-inconsolata mb-12">
              <h2 className="text-2xl font-medium text-foreground mb-6 text-[#1f5c89]">Client Responsibilities</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>As a client, you agree to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Make timely payments as agreed</li>
                  <li>Obtain necessary permits and approvals</li>
                  <li>Communicate changes or concerns promptly</li>
                </ul>
              </div>
            </section>

            <section className="font-inconsolata mb-12">
              <h2 className="text-2xl font-medium text-foreground mb-6 text-[#1f5c89]">Intellectual Property</h2>
              <p className="text-muted-foreground">
                All design concepts, drawings, and architectural plans created by NokArchStudio 
                remain our intellectual property until full payment is received. Upon completion 
                of payment, appropriate usage rights are transferred to the client as specified 
                in the service agreement.
              </p>
            </section>

            <section className="font-inconsolata mb-12">
              <h2 className="text-2xl font-medium text-foreground mb-6 text-[#1f5c89]">Payment Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Payment terms include:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Initial consultation fees are non-refundable</li>
                  <li>Project fees are outlined in individual contracts</li>
                  <li>Late payments may incur additional charges</li>
                  <li>Refund policies are specified in service agreements</li>
                </ul>
              </div>
            </section>

            <section className="font-inconsolata mb-12">
              <h2 className="text-2xl font-medium text-foreground mb-6 text-[#1f5c89]">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                NokArchStudio's liability is limited to the total amount paid for services. 
                We are not liable for indirect, incidental, or consequential damages arising 
                from the use of our services.
              </p>
            </section>

            <section className="font-inconsolata mb-12">
              <h2 className="text-2xl font-medium text-foreground mb-6 text-[#1f5c89]">Termination</h2>
              <p className="text-muted-foreground">
                Either party may terminate services with written notice as specified in the 
                service agreement. Termination terms and conditions will be outlined in 
                individual contracts.
              </p>
            </section>

            <section className="font-inconsolata mb-12">
              <h2 className="text-2xl font-medium text-foreground mb-6 text-[#1f5c89]">Contact Information</h2>
              <p className="text-muted-foreground">
                For questions regarding these Terms of Service, contact us at:
                <br />
                Email: legal@nokarchstudio.com
                <br />
                Phone: +234 (0) 123 456 789
                <br />
                Address: Lagos, Nigeria
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;