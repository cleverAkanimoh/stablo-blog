import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

async function sharedMetaData() {
  return {
    title: {
      default: "War Against Drug Abuse CDS – Lokoja",
      template: "%s | WADA CDS – Community Health Initiative"
    },
    description:
      "Join the War Against Drug Abuse (WADA CDS) – a community-driven health and wellness initiative in Lokoja, Kogi State, Nigeria. Empowering youth, promoting sanity, and building a drug-free society.",
    keywords: [
      "War Against Drug Abuse",
      "WADA",
      "CDS",
      "Community Health",
      "Drug Abuse Prevention",
      "Youth Empowerment",
      "Kogi State",
      "Lokoja",
      "Nigerian CDS",
      "Wellness Initiative",
      "Community Service",
      "Drug Education"
    ],
    authors: [
      { name: "Clever Akanimoh", url: "https://yourdomain.com" }
    ],
    creator: "War Against Drug Abuse CDS Team",
    publisher: "War Against Drug Abuse CDS",
    metadataBase: new URL("https://yourdomain.com"), // Replace with actual domain

    openGraph: {
      type: "website",
      locale: "en_NG",
      url: "https://yourdomain.com",
      siteName: "War Against Drug Abuse CDS – Lokoja",
      title:
        "War Against Drug Abuse CDS – Empowering Communities for a Drug-Free Future",
      description:
        "A youth-led movement committed to community health, drug prevention education, and social development in Kogi State.",
      images: [
        {
          url: "/img/opengraph.png",
          width: 1200,
          height: 630,
          alt: "War Against Drug Abuse CDS – Lokoja, Nigeria"
        }
      ]
    },

    twitter: {
      card: "summary_large_image",
      title: "War Against Drug Abuse CDS – Lokoja",
      description:
        "Join our mission to create a drug-free, healthy community in Kogi State. Youth-led, impact-driven.",
      images: ["/img/opengraph.png"]
    },

    robots: {
      index: true,
      follow: true,
      nocache: false
    },

    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png"
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData();
}

export default async function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main className="space-y-8">{children}</main>

      <Footer />
    </>
  );
}
// enable revalidate for all pages in this layout
export const revalidate = 60;
