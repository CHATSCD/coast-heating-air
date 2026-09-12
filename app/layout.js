import "./globals.css";
import StickyCallBar from "@/components/StickyCallBar";
import { PHONE_DISPLAY, business, rating } from "@/lib/business";
import { buildSchema } from "@/lib/schema";
import { siteUrl } from "@/lib/site";

const url = siteUrl();
const schema = buildSchema();

const metaTitle =
  "Emergency AC Repair Ocean Springs & the MS Gulf Coast | Coast Heating & Air";
const metaDescription = `AC out? Same-day emergency AC repair across the Mississippi Gulf Coast — Ocean Springs, Biloxi, Gautier, Pascagoula and Gulfport. Licensed, bonded & insured. ${rating.value} stars from ${rating.count} reviews. Call ${PHONE_DISPLAY} — avg response 45–60 minutes.`;

export const metadata = {
  metadataBase: new URL(url),
  title: {
    default: metaTitle,
    template: `%s | ${business.name}`,
  },
  description: metaDescription,
  applicationName: business.name,
  authors: [{ name: business.name }],
  category: "HVAC",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url,
    siteName: business.name,
    title: metaTitle,
    description: metaDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
  },
  formatDetection: { telephone: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#075985",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
        {/* Always-on conversion path: fixed to the bottom of the viewport. */}
        <StickyCallBar />
      </body>
    </html>
  );
}
