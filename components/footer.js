import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";

export default function Footer() {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()}{" "}
        <strong>
          {
            "War Against Drugs Abuse Community Development Service(CDS)"
          }
        </strong>
        . All rights reserved.
      </div>

      <div className="my-8 flex items-center justify-between">
        <div className="mt-5"></div>
        <ThemeSwitch />
      </div>
    </Container>
  );
}
