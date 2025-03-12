import { defineType, defineField } from "sanity";

export default defineType({
  name: "activity",
  title: "Activities",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required()
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text"
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }]
    }),
    defineField({
      name: "videos",
      title: "Videos",
      type: "array",
      of: [{ type: "url" }]
    }),
    defineField({
      name: "timeStamp",
      title: "TimeStamp",
      type: "datetime",
      validation: Rule => Rule.required()
    })
  ]
});
