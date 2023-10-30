// abilities.ts
import { Ability, AbilityBuilder } from '@casl/ability';
import { User } from '@prisma/client';

function defineAbilitiesForUser(user: User, ability: Ability) {
  const { can, cannot, rules } = new AbilityBuilder();
  
  // if (user.isAdmin) {
  //   can('manage', 'all');
  // } else {
  //   can('read', 'User');
  //   can('update', 'User', { id: user.id });
  //   // Define other abilities as needed
  // }

  // ability.update(rules);
}

export { defineAbilitiesForUser };
