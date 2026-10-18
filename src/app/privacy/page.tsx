import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — NubblShop",
  description: "Privacy Policy for McKittrick LLC, doing business as NubblShop, and The Fuzzy.",
  alternates: { canonical: "https://www.nubblshop.com/privacy" },
  openGraph: {
    title: "Privacy Policy — NubblShop",
    description: "Privacy Policy for McKittrick LLC, doing business as NubblShop, and The Fuzzy.",
    url: "https://www.nubblshop.com/privacy",
    siteName: "NubblShop",
    type: "website",
    images: [{ url: "/logo.png", width: 1407, height: 768, alt: "The Fuzzy by NubblShop" }],
  },
};

export default function Privacy() {
  return (
    <main className="min-h-screen px-6 py-16 bg-[#fdfbf7] text-[#2c3e50]">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-sm text-[#4a6b8c] hover:text-[#2c3e50]">
          ← NubblShop
        </Link>
        <h1 className="text-3xl font-bold mt-6 mb-1">Privacy Policy</h1>
        <p className="text-sm text-[#8ba6c1] mb-10">Last updated: October 12, 2026</p>

        <div className="space-y-6 text-[#5c7a99] leading-relaxed">
          <p>
            McKittrick LLC, doing business as NubblShop (&quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;), operates nubblshop.com, the home
            of The Fuzzy. This Privacy Policy explains how we handle information
            when you visit our website.
          </p>

          <section>
            <h2 className="text-lg font-semibold text-[#2c3e50] mb-2">
              Information We Collect
            </h2>
            <p>
              Our website is an informational landing page. We do not require
              account registration and do not collect personal information
              directly through this site. We use Vercel Web Analytics and Vercel
              Speed Insights, which collect cookie-free, aggregated, anonymous
              page-view and performance data to help us understand traffic and
              improve the site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#2c3e50] mb-2">
              Purchases and Third-Party Platforms
            </h2>
            <p>
              This website is currently a prelaunch informational page, with no
              checkout or linked product listing. If purchases become available
              through a marketplace such as Etsy, that platform will explain its
              own payment and account data processing. A marketplace may also
              share order, delivery and support information with the seller to
              fulfill an order; the platform&apos;s policy does not replace the
              seller&apos;s responsibilities for that information. Before ordering,
              review the actual listing and seller privacy, shipping and return
              policies. No seller retention period or fulfillment provider is
              represented here before that process is established. Links to
              Instagram are governed by that platform&apos;s policies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#2c3e50] mb-2">Cookies</h2>
            <p>
              We use only essential cookies needed for the site to function. Our
              analytics are cookie-free, and we do not use advertising or
              cross-site tracking cookies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#2c3e50] mb-2">
              Children&apos;s Privacy
            </h2>
            <p>
              Our website is not directed to children under 13, and we do not
              knowingly collect information from children.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#2c3e50] mb-2">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Continued use
              of the site after changes take effect constitutes acceptance of the
              revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#2c3e50] mb-2">Contact</h2>
            <p>
              Questions? Contact{" "}
              <a
                href="mailto:privacy@nubblshop.com"
                className="text-[#4a6b8c] underline"
              >
                Privacy
              </a>
              .
            </p>
          </section>
        </div>

        <nav aria-label="Footer" className="mt-12 flex items-center gap-2 text-sm text-[#4a6b8c]">
          <Link href="/" className="inline-flex items-center min-h-6 hover:text-[#2c3e50]">
            ← Home
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/terms" className="inline-flex items-center min-h-6 hover:text-[#2c3e50]">
            Terms
          </Link>
        </nav>
        <p className="mt-3 text-xs text-[#8ba6c1]">© 2026 McKittrick LLC</p>
      </div>
    </main>
  );
}
