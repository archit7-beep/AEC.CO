export interface SizeVariant {
  skuExtension: string;
  dimensions: {
    boreSize?: string;
    strokeLength?: string;
    outerDiameter?: string;
    wallThickness?: string;
    horsepower?: string;
    rpm?: string;
  };
  priceUSD: number;
  stockStatus: 'In Stock' | 'Low Stock' | 'Backorder' | 'Contact for Lead Time';
}

export interface Product {
  id: string;
  baseSku: string;
  name: string;
  category: 'Motors' | 'Pistons' | 'Pipes' | 'Valves';
  basePriceUSD: number;
  imageUrl: string;
  technicalDrawingUrl: string;
  variants: SizeVariant[];
}
