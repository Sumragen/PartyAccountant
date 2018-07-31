export interface Human {
  name: string;
  buy: {
    goodId: number,
    cost: number
  }[];
  debt: {
    humanId: number,
    cost: number
  }[];
}
