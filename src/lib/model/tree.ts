import { z } from "zod";

export const treeSchema = z.object({
  coord: z.object({
    lat: z.number(),
    lon: z.number(),
  }),
  date: z.string(),
  id: z.string(),
  imageObject: z.object({
    path: z.string(),
    url: z.string(),
  }),
  status: z.string(),
  treeOwner: z.string(),
});

export type Tree = z.infer<typeof treeSchema>;
