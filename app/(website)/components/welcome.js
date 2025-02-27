import CustomLink from "@/components/custom/link";
import Text from "@/components/custom/text";
import { siteName } from "@/utils/config";

function WelcomePage() {
  return (
    <section className="xs:text-sm container flex min-h-56 items-center justify-center">
      <div className="max-w-screen-sm">
        <Text className="text-3xl lg:text-4xl">
          Welcome to {siteName} website, Lokoja,
          Kogi State.
        </Text>

        <small className="block text-sm text-gray-400">
          some text about what we do in wada cds
        </small>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <CustomLink variant="solid" href="/about">
            Read about us
          </CustomLink>
          <CustomLink variant="outline" href="/contact">
            Contact us
          </CustomLink>
        </div>
      </div>
    </section>
  );
}

export default WelcomePage;
