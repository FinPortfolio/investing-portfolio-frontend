export const ASSET_TYPES = ['stock', 'etf', 'bond', 'crypto'] as const
export type AssetType = (typeof ASSET_TYPES)[number]
