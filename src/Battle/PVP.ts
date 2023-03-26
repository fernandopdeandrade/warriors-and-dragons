import Battle from './Battle';
import Fighter from '../Fighter';
import Character from '../Character';

export default class PVP extends Battle {
  constructor(
    private _player1: Character | Fighter,
    private _player2: Fighter | Character,
  ) {
    super(_player1);
  }

  public fight(): number {
    while (this._player1.lifePoints > 0 && this._player2.lifePoints > 0) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
    }
    return this._player1.lifePoints > 0 ? 1 : -1;
  }

  public get player1(): Fighter | Character {
    return this._player1;
  }
}
