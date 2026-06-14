import { Product } from '../types/store';

export const INVENTORY: Product[] = [
  {
    id: 'prod_hc01',
    baseSku: 'HYD-CYL-DA',
    name: 'Double-Acting Hydraulic Cylinder',
    category: 'Pistons',
    basePriceUSD: 1450.00,
    imageUrl: '/images/hyd-cyl.jpg',
    technicalDrawingUrl: '/drawings/hyd-cyl-blueprint.svg',
    variants: [
      {
        skuExtension: 'B85-S90',
        dimensions: { boreSize: '85mm', strokeLength: '900mm' },
        priceUSD: 1450.00,
        stockStatus: 'In Stock'
      },
      {
        skuExtension: 'B100-S120',
        dimensions: { boreSize: '100mm', strokeLength: '1200mm' },
        priceUSD: 1850.00,
        stockStatus: 'Low Stock'
      },
      {
        skuExtension: 'B125-S150',
        dimensions: { boreSize: '125mm', strokeLength: '1500mm' },
        priceUSD: 2400.00,
        stockStatus: 'Backorder'
      }
    ]
  },
  {
    id: 'prod_pp02',
    baseSku: 'AX-PST-PMP',
    name: 'Axial Piston Pump',
    category: 'Pistons',
    basePriceUSD: 3200.00,
    imageUrl: '/images/ax-pst.jpg',
    technicalDrawingUrl: '/drawings/ax-pst-blueprint.svg',
    variants: [
      {
        skuExtension: 'V45-250B',
        dimensions: { rpm: '1450 RPM', horsepower: '45 HP' },
        priceUSD: 3200.00,
        stockStatus: 'In Stock'
      },
      {
        skuExtension: 'V60-350B',
        dimensions: { rpm: '1800 RPM', horsepower: '60 HP' },
        priceUSD: 4100.00,
        stockStatus: 'Contact for Lead Time'
      },
      {
        skuExtension: 'V90-400B',
        dimensions: { rpm: '2200 RPM', horsepower: '90 HP' },
        priceUSD: 5800.00,
        stockStatus: 'Low Stock'
      }
    ]
  },
  {
    id: 'prod_mt03',
    baseSku: 'TRC-MOT-SY',
    name: 'Synchronous Traction Motor',
    category: 'Motors',
    basePriceUSD: 8500.00,
    imageUrl: '/images/trc-mot.jpg',
    technicalDrawingUrl: '/drawings/trc-mot-blueprint.svg',
    variants: [
      {
        skuExtension: '250KW-AC',
        dimensions: { horsepower: '335 HP', rpm: '3000 RPM' },
        priceUSD: 8500.00,
        stockStatus: 'In Stock'
      },
      {
        skuExtension: '400KW-AC',
        dimensions: { horsepower: '536 HP', rpm: '3600 RPM' },
        priceUSD: 12400.00,
        stockStatus: 'In Stock'
      },
      {
        skuExtension: '600KW-AC',
        dimensions: { horsepower: '804 HP', rpm: '4200 RPM' },
        priceUSD: 18900.00,
        stockStatus: 'Backorder'
      }
    ]
  },
  {
    id: 'prod_pi04',
    baseSku: 'CS-PIPE-HP',
    name: 'High-Pressure Carbon Steel Pipe',
    category: 'Pipes',
    basePriceUSD: 450.00,
    imageUrl: '/images/cs-pipe.jpg',
    technicalDrawingUrl: '/drawings/cs-pipe-blueprint.svg',
    variants: [
      {
        skuExtension: 'OD114-WT8',
        dimensions: { outerDiameter: '114.3mm', wallThickness: '8.56mm' },
        priceUSD: 450.00,
        stockStatus: 'In Stock'
      },
      {
        skuExtension: 'OD168-WT10',
        dimensions: { outerDiameter: '168.3mm', wallThickness: '10.97mm' },
        priceUSD: 720.00,
        stockStatus: 'In Stock'
      },
      {
        skuExtension: 'OD219-WT12',
        dimensions: { outerDiameter: '219.1mm', wallThickness: '12.70mm' },
        priceUSD: 1150.00,
        stockStatus: 'Contact for Lead Time'
      }
    ]
  }
];
