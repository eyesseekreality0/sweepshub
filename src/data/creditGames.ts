export interface CreditGameGroup {
  title: string;
  description: string;
  rate: string;
  games: string[];
}

export const tieredDiscount: CreditGameGroup = {
  title: 'Tiered Discounts',
  description: 'Save more when you load 5,000 or more credits.',
  rate: '5% off 5k+ | 10% off under 5k',
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
  rate: '12% flat',
  games: ['YOLO', 'MegaSpin', 'Moolah', 'Magic Time']
};
