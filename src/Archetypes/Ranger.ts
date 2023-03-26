import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _rangerCount = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'stamina';    
    Ranger._rangerCount += 1;    
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._rangerCount;
  }  
}
