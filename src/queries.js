import { HttpError } from 'wasp/server';

export const getNotes = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401);
  }
  return context.entities.Note.findMany({
    where: { user: { id: context.user.id } },
    orderBy: { id: 'asc' },
  });
};
