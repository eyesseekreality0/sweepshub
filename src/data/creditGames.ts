export interface CreditGameGroup {
  title: string;
  description: string;
  rate: string;
  games: string[];
}

export const tieredDiscount: CreditGameGroup = {
  title: 'The best rates',
  description: 'Save more when you purchase 5k or more credits.',
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
  title: 'Flat 12% Rate',
  description: 'Consistent pricing across every order size.',
  rate: '12%',
  games: ['YOLO', 'MegaSpin', 'Moolah', 'Magic Time']
};
