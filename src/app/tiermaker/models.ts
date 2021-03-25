export interface Tier {
  value: string;
  label: string;
  default?: boolean;
}

export interface StoredImages {
  tier: string;
  imageUrls: string[];
}
