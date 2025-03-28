import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";

async function sharedMetaData() {

  return {
    title: {
      default: "War Against Drug Abuse",
      template: "%s | WADA CDS"
    },
    description:
      "War against drug abuse Community Development Service Lokoja, Kogi State. Nigeria",
    keywords: [
      "drug",
      "Sanity",
      "abuse",
      "community",
      "development",
      "service"
    ],
    authors: [{ name: "Clever Akanimoh" }],

    openGraph: {
      images: [
        {
          url:
            "/img/opengraph.jpg",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: "War Against Drug Abuse CDS. Lokoja",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
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
// export const revalidate = 60;
