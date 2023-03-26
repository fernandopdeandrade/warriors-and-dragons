import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  protected _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  attack(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    const damage = this.lifePoints - attackPoints;
    this._lifePoints -= damage > 0 ? damage : 1;
    this._lifePoints = this._lifePoints <= 0 ? -1 : this._lifePoints;
    return this._lifePoints;
  }
}
