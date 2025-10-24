import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const metadata = {
  title: "EasyAd | Run Smart Social Media Ads for Your Business",
  description:
    "EasyAd helps small and growing businesses run professional, high-performing ads on Facebook, Instagram, Google, and TikTok — without any setup stress. Simplify your advertising today.",
  keywords: [
    "social media ads",
    "digital marketing",
    "EasyAd Nigeria",
    "online advertising",
    "small business marketing",
    "affordable ads",
    "Facebook ads",
    "Instagram promotion",
    "Google Ads",
    "TikTok Ads",
    "ad management",
    "ad agency Nigeria",
    "advertising platform",
    "run ads online",
    "business visibility",
    "brand awareness",
  ],
  openGraph: {
    title: "EasyAd — Simplified Ad Solutions for Every Business",
    description:
      "Run powerful ads on Facebook, Instagram, Google & TikTok with EasyAd. Perfect for small businesses and entrepreneurs.",
    url: "https://easyad.com.ng",
    siteName: "EasyAd",
    images: [
      {
        url: "https://easyad.com.ng/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "EasyAd — Run Perfect Ads for Your Business",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EasyAd | Simplified Ads for Small Businesses",
    description:
      "Run your ads like a pro — EasyAd makes digital advertising effortless for small businesses in Nigeria.",
    images: ["https://easyad.com.ng/og-banner.jpg"],
  },
  metadataBase: new URL("https://easyad.com.ng"),
};

export default function SiteLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white text-black antialiased selection:bg-orange-500 selection:text-white relative">
        {/* SEO: Schema for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "EasyAd",
              url: "https://easyad.com.ng",
              logo: "https://easyad.com.ng/logo-light.png",
              description:
                "EasyAd helps Nigerian small businesses run professional ads on Facebook, Instagram, Google, and TikTok easily and affordably.",
              sameAs: [
                "https://www.facebook.com/easyadnigeria",
                "https://www.instagram.com/easyadnigeria",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+2348121444306",
                contactType: "customer support",
                areaServed: "NG",
                availableLanguage: ["English"],
              },
            }),
          }}
        />

        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}