import { z } from 'zod';

export const UserGoogleSchema = z.object({
  username: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  phone: z.string(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    zip: z.string()
  }),
  x: z.number(),
  y: z.number(),
  auth0Id: z.string()
});
