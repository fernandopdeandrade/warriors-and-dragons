import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    public player: Fighter,
    public monsters: (Fighter | SimpleFighter)[],
  ) {
    super(player);
    this.player = player;
    this.monsters = monsters;
  }

  fight(): number {
    this.monsters.forEach((monster) => {
      do {
        this.player.attack(monster as Fighter);
        monster.attack(this.player);
      } while (this.player.lifePoints > 0 && monster.lifePoints > 0);
      this.player.attack(monster as Fighter);
      monster.attack(this.player);
    });
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}
