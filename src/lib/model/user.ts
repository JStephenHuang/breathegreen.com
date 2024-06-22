import { z } from "zod";

export const userSchema = z.object({
  avatar: z.string(),
  dailyPinnedTreeCount: z.number(),
  email: z.string(),
  name: z.string(),
  points: z.number(),
  uid: z.string(),
});

export type User = z.infer<typeof userSchema>;
