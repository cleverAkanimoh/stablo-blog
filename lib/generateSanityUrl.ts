import { siteLogo } from "@/utils/config";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity/client";

const builder = imageUrlBuilder(client!);

export function urlFor(source: any) {
  if (!source) return siteLogo;
  return builder.image(source)?.url();
}
