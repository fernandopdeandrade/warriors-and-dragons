import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._count += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._count;
  }

  static incrementCountHalfling(): void {
    Halfling._count += 1;
  }
}

export default Halfling;
