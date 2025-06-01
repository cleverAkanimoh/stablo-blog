import { codeInput } from "@sanity/code-input";
import { table } from "@sanity/table";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { structureTool } from "sanity/structure";
import { dataset, projectId } from "./lib/sanity/config";
import { singletonPlugin } from "./lib/sanity/plugins/settings";
import { schemaTypes } from "./lib/sanity/schemas";

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [
  "post",
  "article"
];

export default defineConfig({
  name: "default",
  title: "Wada CDS",
  basePath: "/studio",
  projectId: projectId,
  dataset: dataset,

  plugins: [
    structureTool(),
    singletonPlugin(["settings"]),
    visionTool(),
    unsplashImageAsset(),
    table(),
    codeInput()
  ],

  schema: {
    types: schemaTypes
  }
});
