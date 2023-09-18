import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: "dist",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/blog",
        defaultItem: () => {
          return {
            // When a new post is created the title field will be set to "New post"
            title: 'New Post',
            author: 'Luchini',
          }
        },
        fields: [
          {
            type: "string",
            name: "author",
            label: "Author",
            isTitle: false,
            required: true,
          },
          {
            type: "datetime",
            name: "pubDatetime",
            label: "Date (i.e. 2023-06-6T14:20:53Z)",
            isTitle: false,
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "postSlug",
            label: "Slug",
            isTitle: false,
            required: true,
          },
          {
            type: "boolean",
            name: "featured",
            label: "featured post? (t/f)",
            isTitle: false,
            required: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft? (t/f)",
            isTitle: false,
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "tags (list as -bullets)",
            isTitle: false,
            required: false,
          },
          {
            type: "image",
            name: "ogImage",
            label: "ogImage",
            isTitle: false,
            required: false,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            isTitle: false,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
