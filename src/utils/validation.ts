import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(2, {
    message: "Story title is required",
  }),
  description: z.string().min(1, {
    message: "Description is required",
  }),
  thumbnail: z
    .instanceof(File, { message: "Thumbnail is required" })
    .nullable(),
  content: z.string().min(1, {
    message: "Content is required",
  }),
  publish: z.boolean().default(false),

  tags: z.array(z.string()).max(6, {
    message: "You can add up to 6 tags",
  }),
});

export type formSchemaType = z.infer<typeof formSchema>;
