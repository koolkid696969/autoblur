import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Mail, Globe } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Legal</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Effective Date: January 2025
              </p>
            </div>

            {/* Content */}
            <div className="glass rounded-2xl p-8 md:p-12 space-y-8">
              <p className="text-foreground leading-relaxed">
                AutoBlur respects your privacy. This Privacy Policy explains how information is handled when you use the AutoBlur app.
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Data Collection</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AutoBlur does not collect, store, or transmit personal data.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Photos are processed entirely on your device
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Images are not uploaded to any servers
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    We do not collect analytics, usage data, or identifiers
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    We do not track users across apps or websites
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Photo Processing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All image processing occurs locally on your device. AutoBlur does not have access to your photos beyond what is required for on-device processing.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AutoBlur does not use third-party analytics, advertising, or tracking SDKs.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Subscription purchases are handled securely by Apple through the App Store. AutoBlur does not receive or store payment information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Data Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Because AutoBlur does not collect personal data, no personal data is shared with third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  AutoBlur does not knowingly collect personal information from children.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Privacy Policy may be updated from time to time. Any changes will be reflected on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, you can contact us at:
                </p>
                <div className="space-y-3">
                  <a 
                    href="mailto:support@autoblur.app" 
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    support@autoblur.app
                  </a>
                  <a 
                    href="https://autoblursupport.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <Globe className="w-5 h-5 text-primary" />
                    https://autoblursupport.com
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
