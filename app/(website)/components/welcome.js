import { AnimatedText } from "@/components/animatedText";
import CustomLink from "@/components/custom/link";

function WelcomePage() {
  return (
    <section className="xs:text-sm container flex min-h-56 items-center justify-center">
      <div className="max-w-screen-sm">
        <AnimatedText
          slideDirection="down"
          effect="slide"
          duration={1}
          className="text-3xl lg:text-4xl"
          text={`Welcome to War Against Drug Abuse CDs website, Lokoja,
          Kogi State.`}
        />

        <small className="block text-sm text-gray-400">
          say no to drug abuse...
        </small>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <CustomLink variant="solid" href="/about">
            Read about us
          </CustomLink>
          <CustomLink variant="outline" href="/archive">
            Follow our activities
          </CustomLink>
        </div>
      </div>
    </section>
  );
}

export default WelcomePage;
