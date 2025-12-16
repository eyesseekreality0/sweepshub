export interface CreditGameGroup {
  title: string;
  description: string;
  rate: string;
  games: string[];
}

export const tieredDiscount: CreditGameGroup = {
  rate: 'Purchase 5k or more for 5% or Purchase under 5k for 10%',
  games: [
    'VBlink',
    'UltraPanda',
    'eGame',
    'Lucky Paradise',
    'Juwa',
    'Vegas Roll',
    'Vegas Sweeps',
    'Gameroom',
    'Gamevault',
    'Noble',
    'Golden Treasure',
    'Mafia',
    'Riversweeps',
    'Joker',
    'King of Pop',
    'Mawal',
    'Vegas Luck'
  ]
};

export const premiumRate: CreditGameGroup = {
  rate: 'Flat 12% Rate',
  games: ['YOLO', 'MegaSpin', 'Moolah', 'Magic Time']
};
