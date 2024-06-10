import { z } from 'zod';

const PhotoSchema = z.object({
  id: z.number(),
  userId: z.number(),
  ticketCommentId: z.number(),
  plantId: z.number(),
  createdAt: z.string(),
  imageBlob: z.array(z.string())
});

export const NewPlantSchema = z.object({
  id: z.number(),
  name: z.string(),
  species: z.string(),
  careInstructions: z.string(),
  imageUrl: z.string(),
  createdAt: z.number().array(),
  updatedAt: z.number().array(),
  userId: z.number(),
  photos: z.array(PhotoSchema)
});

export type TNewPlant = z.infer<typeof NewPlantSchema>;
