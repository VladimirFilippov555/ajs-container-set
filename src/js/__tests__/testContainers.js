import Character from '../character';
import Team from '../containerSet';

test('add character to team', () => {
  const team = new Team();
  const bowman = new Character('Mark', 'bowman');

  team.add(bowman);

  expect(team.toArray()).toEqual([bowman]);
});

test('add some characters to team', () => {
  const team = new Team();
  const bowman = new Character('Mark', 'bowman');
  const shooter = new Character('David', 'shooter');
  const swordsman = new Character('Artur', 'swordsman');

  team.addAll(bowman, shooter, swordsman);

  expect(team.toArray()).toEqual([bowman, shooter, swordsman]);
});

test('error if the character is already in the team', () => {
  const team = new Team();
  const bowman = new Character('Mark', 'bowman');

  team.add(bowman);

  expect(() => team.add(bowman)).toThrowError(`Персонаж c именем ${bowman.name} уже находится в вашей команде`);
});