import Race from './Race';

class Elf extends Race {    
  private _maxLifePoints: number;
  private static _count = 0;
    
  constructor(name: string, dexterity: number) { 
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._count += 1;
  }
    
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
    
  static createdRacesInstances(): number {
    return Elf._count;
  }
    
  static incrementCountElf(): void {
    Elf._count += 1;
  }
}

export default Elf;
