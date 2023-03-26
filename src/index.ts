import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import Battle, { PVP, PVE } from './Battle';

const player1 = new Character('player1');
const player2 = new Character('player2');
const player3 = new Character('player3');

// console.log(player1);
// console.log(player2);
// console.log(player3);

const forLevelUp = 5;
for (let i = 0; i < forLevelUp; i += 1) {
  player1.levelUp();
}

// console.log(player1);
// console.log(player2);
// console.log(player3);

const monster1 = new Monster();
const monster2 = new Dragon();

// console.log(monster1);
// console.log(monster2);

// monster1.attack(player1);
// monster1.attack(player2);

// monster2.attack(player1);
// monster2.attack(player2);

// console.log(player1);
// console.log(player2); 

const pvp = new PVP(player2, player3);

// pvp.fight();
// console.log(pvp);

const pve = new PVE(player1, [monster1, monster2]);

// pve.fight();
// console.log(pve);

const runBattles = (battles: Battle[]) => {
  battles.forEach((battle) => {
    console.log(battle);
    battle.fight();
  });
};

// runBattles([pvp, pve]);

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};