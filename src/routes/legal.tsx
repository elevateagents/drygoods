import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

const sections = [
  {
    title: "I. Who We Are",
    body: [
      "Joyce Labs, LLC is an outsourced ecommerce retail center. DryGoods.com is the official website of Joyce Labs, LLC.",
      "Contact details: Joyce Labs, LLC, 4805 Wynneford Way, Raleigh, NC 27614. Email: info@drygoods.com. Phone: 305-769-8397.",
      "Questions about data practices may be sent to the same postal address, email, or phone number.",
    ],
  },
  {
    title: "II. Data Collection and Usage",
    body: [
      "We collect, store, and use information to allow visitors to use the Site, communicate with us, and for the other purposes described in this notice or specified at the time of collection.",
      "Information may be received directly from you when you email us, complete a form, sign up for email, share content, enter promotions, or call with questions. We may also collect information electronically when you browse the Site.",
      "Anonymous information cannot be used to identify you individually. Personal information can identify you, such as name, address, email address, phone number, or IP address. Except for IP address, personal information is collected only when you provide it.",
    ],
  },
  {
    title: "A. Information You Provide Directly",
    body: [
      "We may ask for contact information, business information, email address, and phone number when you request information, sign up for newsletters, answer a survey, enter a promotion, or share content with us.",
    ],
  },
  {
    title: "B. Information Collected Automatically",
    body: [
      "Site servers may record visits, including date, time, browser, device type, operating system, and originating IP address for page requests.",
      "Cookies may identify your browser or device, store information about Site usage, and support interest-based advertising. We use this information to monitor usage, identify issues, and improve services.",
      "Your IP address may indicate a general location, such as city or region.",
    ],
  },
  {
    title: "C. Information Sharing",
    body: [
      "Information voluntarily provided may be shared with affiliate partners and business partners that fulfill requests, such as companies that mail print materials or provide applicable services.",
      "We may disclose personal information as required by law, in connection with a government inquiry, or in litigation or dispute resolution.",
      "Statistical information may be disclosed to third parties in aggregate form without revealing personal details about individual users.",
    ],
  },
  {
    title: "III. Where Information Is Held",
    body: [
      "The Site operates in the United States. If you are outside the United States, information provided to us may be transferred to, stored in, and processed in the United States.",
      "Information is stored on cloud servers located in the United States.",
    ],
  },
  {
    title: "IV. Your Rights",
    body: [
      "You may have rights under applicable law, including the right to be informed, access certain information, request correction, request deletion, restrict or object to certain processing, request portability, complain to a supervisory authority, and withdraw consent where processing is based on consent.",
      "We do not currently make automated decisions that produce legal or similarly significant effects.",
      "To exercise or discuss rights, contact info@drygoods.com.",
    ],
  },
  {
    title: "V. Outside Links",
    body: [
      "The Site may contain links to third-party websites not controlled by Joyce Labs, LLC. We recommend reviewing the notices of other websites before providing information.",
    ],
  },
  {
    title: "VI. Security",
    body: [
      "We take reasonable steps to protect information, but no website, computer system, or wireless connection is completely secure.",
    ],
  },
  {
    title: "VII. Inquiries",
    body: [
      "Questions or concerns regarding consumer data practices may be sent to info@drygoods.com.",
    ],
  },
  {
    title: "VIII. Changes to This Notice",
    body: [
      "We may update this notice to reflect changes in law, data practices, Site features, or technology. Continued use of the Site after changes are posted means you accept those changes.",
    ],
  },
  {
    title: "IX. Browser Signals",
    body: [
      "We do not recognize or respond to browser-initiated Do-Not-Track signals because uniform standards are still developing.",
    ],
  },
  {
    title: "X. California Rights",
    body: [
      "California residents may request certain information about third parties to whom personal information has been disclosed for direct marketing purposes in the prior calendar year. Requests may be sent to info@drygoods.com.",
    ],
  },
  {
    title: "XI. Minors",
    body: [
      "We do not knowingly collect information from anyone under 13 years old. If you believe we may have information from or about someone under 13, contact info@drygoods.com.",
    ],
  },
  {
    title: "XII. Florida Open Records",
    body: [
      "We adhere to Florida open records laws. Records we send and receive may be subject to public disclosure upon request.",
    ],
  },
];

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Legal Notice — Dry Goods" },
      { name: "description", content: "Legal and data notice for Dry Goods and Joyce Labs, LLC." },
    ],
  }),
  component: LegalPage,
});

function LegalPage() {
  return (
    <Layout>
      <section className="bg-paper px-3 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white px-4 py-6 shadow-lg shadow-ink/5 sm:rounded-[2rem] sm:p-10 sm:shadow-xl lg:p-12">
            <span className="block text-[11px] font-bold uppercase tracking-[0.22em] text-sky sm:text-xs sm:tracking-[0.25em]">Legal Notice</span>
            <h1 className="mt-3 break-words font-display text-[clamp(32px,15vw,64px)] font-black uppercase leading-[0.95] tracking-tight text-ink">
              Privacy Policy
            </h1>
            <p className="mt-5 max-w-3xl break-words text-[15px] leading-7 text-ink/70 sm:text-base sm:leading-relaxed">
              This notice explains how Joyce Labs, LLC collects, uses, shares, and stores information about visitors and interactions with DryGoods.com. Last updated March 1, 2020.
            </p>

            <div className="mt-8 space-y-7 sm:mt-10 sm:space-y-9">
              {sections.map((section) => (
                <section key={section.title} className="border-t border-ink/10 pt-6 sm:pt-7">
                  <h2 className="break-words font-display text-xl font-black uppercase leading-tight tracking-tight text-ink sm:text-2xl">
                    {section.title}
                  </h2>
                  <div className="mt-3 space-y-3 break-words text-[15px] leading-7 text-ink/75 sm:mt-4 sm:space-y-4 sm:text-base sm:leading-relaxed">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
