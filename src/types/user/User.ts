import { z } from 'zod';

export const UserSchema = z.object({
  userId: z.string(),
  username: z.string(),
  roles: z.array(z.string())
});

export type TUser = z.infer<typeof UserSchema>;
