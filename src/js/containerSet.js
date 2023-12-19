class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error(`Персонаж c именем ${character.name} уже находится в вашей команде`);
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => this.add(character));
  }

  toArray() {
    return Array.from(this.members);
  }
}

export default Team;