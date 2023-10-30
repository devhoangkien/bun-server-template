// auth.ts
import { defineAbilitiesForUser } from '@app/abilities/abilities';
import { Ability } from '@casl/ability';

const abilityMiddleware = async (resolve, root, args, context, info) => {
  const ability = new Ability();
  
  // Attach user's abilities to the context
  if (context.user) {
    defineAbilitiesForUser(context.user, ability);
  }
  
  context.ability = ability;
  return resolve(root, args, context, info);
};

export default abilityMiddleware;
