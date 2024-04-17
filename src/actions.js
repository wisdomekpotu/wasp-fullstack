import { HttpError } from 'wasp/server';

export const createNote = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401);
  }
  return context.entities.Note.create({
    data: {
      title: args.title,
      description: args.description,
      user: { connect: { id: context.user.id } },
    },
  });
};

export const deleteNote = async (args, context) => {
  return context.entities.Note.deleteMany({ where: { id: args.id } });
};
