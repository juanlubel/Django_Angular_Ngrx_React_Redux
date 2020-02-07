
export interface MineralModel {
  slug: string,
  owner: number,
  name: string,
  quality: string,
  buy_price: number,
  sell_price: number
}

export interface MarketHttp {
  market: MineralModel[]
}
