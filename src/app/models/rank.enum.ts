export enum Rank {
  Ace = 1,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King
}

export function getRankValue(rank: Rank): number {
  if (Number.isInteger(rank)) {
    return rank;
  }

  return Number(Rank[rank]);
}

// TODO: delete all enums and use objects
