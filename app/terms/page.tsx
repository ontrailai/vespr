import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service | vespr.",
  description: "Terms of Service for vespr. - Read our terms and conditions for using our services.",
}

export default function TermsOfServicePage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="font-serif text-4xl font-medium text-foreground mb-2">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <div className="prose prose-neutral max-w-none">
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the services provided by vespr. (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">2. Description of Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                vespr. provides custom AI systems and automation solutions for businesses, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Custom AI agent development and deployment</li>
                <li>Data infrastructure and integration services</li>
                <li>Process automation and optimization</li>
                <li>Ongoing system management and support</li>
                <li>AI Leverage Audits and consulting services</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">3. Client Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide accurate and complete information necessary for service delivery</li>
                <li>Grant appropriate access to systems and data required for implementation</li>
                <li>Respond to requests for information or feedback in a timely manner</li>
                <li>Use our services only for lawful purposes</li>
                <li>Maintain the confidentiality of any credentials or access provided</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">4. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Payment terms are as follows:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Fees for services are as quoted in your specific agreement or proposal</li>
                <li>Monthly management fees are billed in advance</li>
                <li>One-time setup or development fees are billed according to the agreed payment schedule</li>
                <li>All fees are non-refundable unless otherwise specified or covered by our guarantee</li>
                <li>Late payments may result in service suspension</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">5. Money-Back Guarantee</h2>
              <p className="text-muted-foreground leading-relaxed">
                We offer a money-back guarantee as specified in your service agreement. If we fail to deliver the agreed-upon results within the specified timeframe, you may be eligible for a refund according to the terms outlined in your agreement. Specific guarantee terms, conditions, and exclusions will be detailed in your individual service contract.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">6. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Regarding intellectual property rights:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>You retain ownership of your data and pre-existing intellectual property</li>
                <li>Custom AI systems and automations built specifically for you become your property upon full payment</li>
                <li>We retain ownership of our proprietary tools, methodologies, and frameworks</li>
                <li>We may use anonymized, aggregated data to improve our services</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">7. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                Both parties agree to maintain the confidentiality of proprietary information shared during the course of our engagement. This includes business processes, data, strategies, and any other information designated as confidential. Confidentiality obligations survive the termination of services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">8. Data Handling</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We handle your data with care:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>We access only the data necessary to provide our services</li>
                <li>Data is processed in accordance with our Privacy Policy</li>
                <li>We implement industry-standard security measures</li>
                <li>Upon termination, we will return or delete your data as requested</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">9. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, vespr. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities. Our total liability shall not exceed the amount paid by you for services in the twelve (12) months preceding the claim.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">10. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive to deliver excellent results, our services are provided &quot;as is&quot; without warranties of any kind, either express or implied, except as specifically stated in your service agreement. We do not guarantee specific business outcomes, as results depend on many factors beyond our control.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">11. Termination</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Either party may terminate services:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>With 30 days written notice for monthly services</li>
                <li>Immediately for material breach of these terms</li>
                <li>According to specific terms in your service agreement</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Upon termination, you remain responsible for any outstanding fees, and we will provide reasonable assistance in transitioning services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">12. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which vespr. is registered, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">13. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify you of significant changes by posting a notice on our website or by email. Your continued use of our services after such modifications constitutes acceptance of the updated terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">14. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-foreground font-medium mt-4">
                Email: hello@vespr.io
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
