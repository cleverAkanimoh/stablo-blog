import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";

async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    // enable this for resolving opengraph image
    // metadataBase: new URL(settings.url),
    title: {
      default: settings?.title || "War Against Drug Abuse",
      template: "%s | WADA CDS"
    },
    description:
      settings?.description ||
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
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            "/img/opengraph.jpg",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || "WADA CDS",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children }) {
  const settings = await getSettings();
  return (
    <>
      <Navbar {...settings} />

      <main className="space-y-8">{children}</main>

      <Footer />
    </>
  );
}
// enable revalidate for all pages in this layout
// export const revalidate = 60;
