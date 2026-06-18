export interface ProductVariation {
  partNumber: string;
  specs: string;
  inStock: boolean;
}

export interface ProductRow {
  model: string;
  size: string;
  maxPressure: string;
  flowRate?: string;
  material?: string;
  inStock: boolean;
  variations?: ProductVariation[];
}

export interface SubCategory {
  title: string;
  tableHeaders: string[];
  products: ProductRow[];
}

export interface CatalogCategory {
  id: string;
  brand: string;
  name: string;
  desc: string;
  img: string;
  heroText: string;
  subCategories: SubCategory[];
}

export const CATALOG_DATA: Record<string, CatalogCategory> = {
  'fittings': {
    id: 'fittings',
    brand: 'MASS, GOLAER, EPE',
    name: 'Fittings & Industrial Accessories',
    desc: 'Clamps, Transmitters, Accumulators, Gauges, and Coolers.',
    img: '/booklet/fiiting.jpeg',
    heroText: 'SYSTEM ACCESSORIES & MEASUREMENT',
    subCategories: [
      {
        title: 'MASS Industrial Measurement',
        tableHeaders: ['Component', 'Specification', 'Range / Accuracy', 'Stock Status'],
        products: [
          { model: 'Industrial Gauges', size: '63mm and 100mm, SS or Brass', maxPressure: 'Vacuum upto 1600 bar. Acc: 1.6% to 1.0%', inStock: true },
          { model: 'Industrial Transmitters', size: 'Pressure & Submersible Level', maxPressure: '100mbar to 1000 bar. Acc: 0.5% to 0.1%', inStock: true },
        ]
      },
      {
        title: 'EPE Accumulators',
        tableHeaders: ['Type', 'Material / Design', 'Application', 'Stock Status'],
        products: [
          { model: 'High Pressure Bladder', size: 'Bladder Accumulator', maxPressure: 'Energy Storage', inStock: true },
          { model: 'Diaphragm Accumulators', size: 'Diaphragm Design', maxPressure: 'Energy Storage', inStock: true },
          { model: 'Piston Accumulators', size: 'Piston Design', maxPressure: 'Energy Storage', inStock: true },
          { model: 'Silicone Accumulators', size: 'Silicone Bladder', maxPressure: 'Specialty Applications', inStock: true },
          { model: 'Stainless Steel Accumulators', size: 'SS Housing', maxPressure: 'Corrosive Environments', inStock: true },
          { model: 'Hydracushions', size: 'Shock Absorber', maxPressure: 'Pulsation Dampening', inStock: true },
          { model: 'Pulsation Dampers', size: 'Dampening System', maxPressure: 'System Protection', inStock: true },
        ]
      },
      {
        title: 'GOLAER Coolers',
        tableHeaders: ['Cooler Type', 'Media', 'Application', 'Stock Status'],
        products: [
          { model: 'Air Coolers', size: 'Air Blast Coolers', maxPressure: 'Temperature Regulation', inStock: true },
          { model: 'Oil Coolers', size: 'Hydraulic Oil Coolers', maxPressure: 'Temperature Regulation', inStock: true },
          { model: 'Water Coolers', size: 'Water Cooling Systems', maxPressure: 'Temperature Regulation', inStock: true },
          { model: 'Heat Exchangers', size: 'Heat Exchange Units', maxPressure: 'Temperature Regulation', inStock: true },
          { model: 'Plate Heat Exchangers', size: 'Plate Design', maxPressure: 'Temperature Regulation', inStock: true },
          { model: 'Oil Filters', size: 'Filtration Units', maxPressure: 'System Protection', inStock: true },
          { model: 'Screw Pumps', size: 'Cooling Circulation', maxPressure: 'Fluid Transfer', inStock: true },
          { model: 'Water Valves', size: 'Cooling Valves', maxPressure: 'Flow Control', inStock: true },
        ]
      },
      {
        title: 'Industrial Clamps',
        tableHeaders: ['Material', 'Type', 'Application', 'Stock Status'],
        products: [
          { model: 'PP - Polypropylene', size: 'Single / Twin', maxPressure: 'Standard Duty', inStock: true },
          { model: 'PA - Polyamide', size: 'Single / Twin', maxPressure: 'Medium Duty', inStock: true },
          { model: 'AL - Aluminium', size: 'Single / Twin', maxPressure: 'Heavy Duty', inStock: true },
        ]
      },
      {
        title: 'MASS Industrial Gauges & Transmitters',
        tableHeaders: ['Component', 'Specs', 'Range / Accuracy', 'Stock Status'],
        products: [
          { model: 'Industrial Gauges', size: '63mm & 100mm (SS/Brass)', maxPressure: 'Vacuum to 1600 bar', inStock: true },
          { model: 'Pressure Transmitters', size: 'Current/Voltage Output', maxPressure: '100mbar to 1000 bar (0.5% Acc)', inStock: true },
          { model: 'Submersible Level Transmitters', size: 'Submersible', maxPressure: '100mbar to 1000 bar', inStock: true },
        ]
      },
      {
        title: 'EPE Accumulators',
        tableHeaders: ['Accumulator Type', 'Specs', 'Application', 'Stock Status'],
        products: [
          { model: 'High Pressure Bladder', size: 'Bladder Type', maxPressure: 'Energy Storage', inStock: true },
          { model: 'Diaphragm & Piston', size: 'Compact / High Vol', maxPressure: 'Dampening', inStock: true },
          { model: 'Silicone & Stainless Steel', size: 'Specialized Material', maxPressure: 'Harsh Environments', inStock: false },
          { model: 'Hydracushions & Dampers', size: 'Pulsation Dampening', maxPressure: 'Shock Absorption', inStock: true },
        ]
      },
      {
        title: 'GOLAER Coolers & Exchangers',
        tableHeaders: ['Cooler Type', 'Media', 'Application', 'Stock Status'],
        products: [
          { model: 'Air & Water Coolers', size: 'Air / Water', maxPressure: 'Thermal Management', inStock: true },
          { model: 'Plate Heat Exchangers', size: 'Fluid/Fluid', maxPressure: 'High Efficiency Cooling', inStock: true },
          { model: 'Air Blast Coolers', size: 'Air Forced', maxPressure: 'Industrial Cooling', inStock: true },
          { model: 'Oil Filters & Screw Pumps', size: 'Filtration / Transfer', maxPressure: 'System Maintenance', inStock: true },
        ]
      }
    ]
  },
  'pumps': {
    id: 'pumps',
    brand: 'Yuken, Rexroth, Dowty, Polyhydron & Walvoil',
    name: 'Hydraulic Pumps & Valves',
    desc: 'Vane Pumps, Gear Pumps, Axial Piston Pumps, and Directional Controls.',
    img: '/booklet/pumps.jpg',
    heroText: 'HYDRAULIC POWER GENERATION',
    subCategories: [
      {
        title: 'Dowty Gear Pumps - 0P 3000 Series',
        tableHeaders: ['Pump Type', 'Displacement (cc/rev)', 'Max Continuous Pressure', 'Max Speed (RPM)'],
        products: [
          { model: '0P 3003', size: '1.27 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '4000 RPM Max', inStock: true },
          { model: '0P 3004', size: '1.67 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '4000 RPM Max', inStock: true },
          { model: '0P 3006', size: '2.20 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '4000 RPM Max', inStock: true },
          { model: '0P 3008', size: '2.87 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '4000 RPM Max', inStock: true },
          { model: '0P 3011', size: '3.80 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '4000 RPM Max', inStock: true },
          { model: '0P 3013', size: '4.47 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '4000 RPM Max', inStock: true },
          { model: '0P 3015', size: '5.13 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '4000 RPM Max', inStock: true },
        ]
      },
      {
        title: 'Dowty Gear Pumps - 1P 4000 Series',
        tableHeaders: ['Pump Type', 'Displacement (cc/rev)', 'Max Continuous Pressure', 'Max Speed (RPM)'],
        products: [
          { model: '1P 4017', size: '6.1 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '3500 RPM Max', inStock: true },
          { model: '1P 4020', size: '7.0 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '3500 RPM Max', inStock: true },
          { model: '1P 4023', size: '7.9 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '3500 RPM Max', inStock: true },
          { model: '1P 4027', size: '9.2 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '3500 RPM Max', inStock: true },
          { model: '1P 4028', size: '9.4 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '3500 RPM Max', inStock: true },
          { model: '1P 4032', size: '10.6 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '3500 RPM Max', inStock: true },
          { model: '1P 4036', size: '11.9 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '3500 RPM Max', inStock: true },
          { model: '1P 4040', size: '13.1 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '3500 RPM Max', inStock: true },
          { model: '1P 4044', size: '14.3 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '3500 RPM Max', inStock: true },
          { model: '1P 4052', size: '16.8 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '3500 RPM Max', inStock: true },
          { model: '1P 4055', size: '17.6 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '3500 RPM Max', inStock: true },
          { model: '1P 4060', size: '19.2 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '3500 RPM Max', inStock: true },
          { model: '1P 4072', size: '22.8 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '3500 RPM Max', inStock: true },
          { model: '1P 4090', size: '28.13 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '2400 RPM Max', inStock: true },
        ]
      },
      {
        title: 'Dowty Gear Pumps - 2P 3000 Series',
        tableHeaders: ['Pump Type', 'Displacement (cc/rev)', 'Max Continuous Pressure', 'Max Speed (RPM)'],
        products: [
          { model: '2P 3050', size: '16.67 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '3000 RPM Max', inStock: true },
          { model: '2P 3070', size: '22.73 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '3000 RPM Max', inStock: true },
          { model: '2P 3090', size: '28.79 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '3000 RPM Max', inStock: true },
          { model: '2P 3105', size: '33.34 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '3000 RPM Max', inStock: true },
          { model: '2P 3120', size: '37.88 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '3000 RPM Max', inStock: true },
          { model: '2P 3146', size: '45.46 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '2500 RPM Max', inStock: true },
          { model: '2P 3158', size: '49.40 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '2500 RPM Max', inStock: true },
          { model: '2P 3220', size: '68.80 cc/rev', maxPressure: '2500 psi / 172 bar', flowRate: '2500 RPM Max', inStock: true },
        ]
      },
      {
        title: 'Dowty Gear Pumps - 3P 3000 Series',
        tableHeaders: ['Pump Type', 'Displacement (cc/rev)', 'Max Continuous Pressure', 'Max Speed (RPM)'],
        products: [
          { model: '3P 3150', size: '47.07 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '2500 RPM Max', inStock: true },
          { model: '3P 3180', size: '56.17 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '2500 RPM Max', inStock: true },
          { model: '3P 3210', size: '65.23 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '2500 RPM Max', inStock: true },
          { model: '3P 3250', size: '77.15 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '2500 RPM Max', inStock: true },
          { model: '3P 3300', size: '92.03 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '2500 RPM Max', inStock: true },
          { model: '3P 3330', size: '101.71 cc/rev', maxPressure: '3000 psi / 207 bar', flowRate: '2500 RPM Max', inStock: true },
          { model: '3P 3380', size: '116.78 cc/rev', maxPressure: '2000 psi / 138 bar', flowRate: '2500 RPM Max', inStock: true },
          { model: '3P 3500', size: '153.66 cc/rev', maxPressure: '1500 psi / 103 bar', flowRate: '2500 RPM Max', inStock: true },
        ]
      },
      {
        title: 'Yuken Hydraulics',
        tableHeaders: ['Component Type', 'Category', 'Application', 'Stock Status'],
        products: [
          { model: 'Piston Vane Pump', size: 'Pumps', maxPressure: 'High Pressure Power', inStock: true },
          { model: 'Gear Pumps', size: 'Pumps', maxPressure: 'Standard Power', inStock: true },
          { model: 'Pressure / Flow Control Valves', size: 'Valves', maxPressure: 'System Control', inStock: true },
          { model: 'Modular & Directional Valves', size: 'Valves', maxPressure: 'Flow Direction', inStock: true },
          { model: 'Proportional Valves', size: 'Valves', maxPressure: 'Precision Control', inStock: true },
        ]
      },
      {
        title: 'Rexroth Bosch Group',
        tableHeaders: ['Component Type', 'Category', 'Application', 'Stock Status'],
        products: [
          { model: 'Gear & Vane Pumps', size: 'Pumps', maxPressure: 'Industrial', inStock: true },
          { model: 'Axial Piston Pumps', size: 'Pumps', maxPressure: 'Heavy Duty', inStock: true },
          { model: 'Directional Control Valves', size: 'Valves', maxPressure: 'Flow Direction', inStock: true },
          { model: 'Proportional / Servo Valves', size: 'Valves', maxPressure: 'High Precision', inStock: true },
          { model: 'Pressure & Flow Valves', size: 'Valves', maxPressure: 'System Control', inStock: true },
        ]
      },
      {
        title: 'THM Hydraulics',
        tableHeaders: ['Component Type', 'Category', 'Application', 'Stock Status'],
        products: [
          { model: 'Hydraulic Pumps', size: 'Pumps', maxPressure: 'Power Generation', inStock: true },
          { model: 'Pressure, Flow & Check Valves', size: 'Valves', maxPressure: 'Regulation', inStock: true },
          { model: 'Modular & Cartridge Valves', size: 'Valves', maxPressure: 'Compact Systems', inStock: true },
          { model: 'On-Off Directional Controls', size: 'Valves', maxPressure: 'Standard Control', inStock: true },
          { model: 'Proportional Valves', size: 'Valves', maxPressure: 'Precision Control', inStock: true },
        ]
      },
      {
        title: 'Polyhydron Systems',
        tableHeaders: ['Component Type', 'Category', 'Specification', 'Stock Status'],
        products: [
          { model: 'Hand Pumps', size: 'Pumps', maxPressure: 'Oil Tank Capacity 250 cc to 8.5 Ltrs, Working Pressure upto 1000 Bar', inStock: true },
          { model: 'Radial Piston Pumps', size: 'Pumps', maxPressure: '2, 3, 5 & 7 Elements, 1 to 25 lpm, upto 550 Bar', inStock: true },
          { model: 'Pressure Relief Valves', size: 'Pressure Controls', maxPressure: 'Pressure Regulation', inStock: true },
          { model: 'Pressure Reducing Valves', size: 'Pressure Controls', maxPressure: 'Pressure Regulation', inStock: true },
          { model: 'Pressure Control Valves', size: 'Pressure Controls', maxPressure: 'Pressure Regulation', inStock: true },
          { model: 'Pressure Sequence Valves', size: 'Pressure Controls', maxPressure: 'Pressure Regulation', inStock: true },
          { model: 'Pressure Control Modules', size: 'Pressure Controls', maxPressure: 'Pressure Regulation', inStock: true },
          { model: 'Counter Balance Valves', size: 'Pressure Controls', maxPressure: 'Load Holding', inStock: true },
          { model: 'Pressure Compensated Flow Control Valves', size: 'Flow Controls', maxPressure: 'Flow Regulation', inStock: true },
          { model: 'Flow Divider', size: 'Flow Controls', maxPressure: 'Flow Distribution', inStock: true },
          { model: 'Throttle Check Valves', size: 'Flow Controls', maxPressure: 'Flow Regulation', inStock: true },
          { model: 'Hand Lever Operated Direction Control', size: 'Direction Control Valves', maxPressure: 'Manual Operation', inStock: true },
          { model: 'Solenoid Operated Direction Control', size: 'Direction Control Valves', maxPressure: 'Electrical Operation', inStock: true },
          { model: 'Hydraulically Operated Direction Control', size: 'Direction Control Valves', maxPressure: 'Hydraulic Operation', inStock: true },
          { model: 'Inline Check Valves', size: 'Check Valves', maxPressure: 'Flow Prevention', inStock: true },
          { model: 'Check Valve - Screw in Cartridges', size: 'Check Valves', maxPressure: 'Flow Prevention', inStock: true },
          { model: 'Pilot Optd. Check Valves', size: 'Check Valves', maxPressure: 'Pilot Operated', inStock: true },
          { model: 'Shuttle Valves', size: 'Check Valves', maxPressure: 'Flow Selection', inStock: true },
          { model: 'Prefill Valves', size: 'Check Valves', maxPressure: 'High Volume Filling', inStock: true },
          { model: 'Logic Cartridges', size: 'Logic Elements', maxPressure: 'System Logic', inStock: true },
        ]
      },
      {
        title: 'Walvoil Applications',
        tableHeaders: ['Target Sector', 'Components', 'Application', 'Stock Status'],
        products: [
          { model: 'Agricultural Machines', size: 'Directional Valves', maxPressure: 'Heavy Machinery', inStock: true },
          { model: 'Industrial Vehicles', size: 'Directional Valves', maxPressure: 'Heavy Machinery', inStock: true },
          { model: 'Construction & Mining', size: 'Directional Valves', maxPressure: 'Heavy Machinery', inStock: true },
          { model: 'Truck Cranes', size: 'Directional Valves', maxPressure: 'Heavy Machinery', inStock: true },
          { model: 'Forklifts', size: 'Directional Valves', maxPressure: 'Heavy Machinery', inStock: true },
        ]
      }
    ]
  },
  'steering': {
    id: 'steering',
    brand: 'Hydroline & Danfoss',
    name: 'Steering Units & Filtration',
    desc: 'Hydroline filters, breathers, level gauges, and heavy duty steering units.',
    img: '/booklet/steering unit.jpg',
    heroText: 'HYDROSTATIC SYSTEM CONTROL',
    subCategories: [
      {
        title: 'Hydroline Filters',
        tableHeaders: ['Model', 'Type', 'Application', 'Mounting'],
        products: [
          { model: 'IFR2, IFR3, IFR4', size: 'Inline Spin on Filters', maxPressure: 'Return Line', flowRate: 'Inline', inStock: true },
          { model: 'TFR3', size: 'Tank Top Spin on Filter', maxPressure: 'Return Line', flowRate: 'Tank Top', inStock: true },
          { model: 'TIF2, TIFF, FIF, RPF, SPF, JFR1', size: 'Tank Top Cartridge', maxPressure: 'High Flow', flowRate: 'Tank Top', inStock: false },
          { model: 'CFR, HFR', size: 'Heavy Duty Filters', maxPressure: 'Heavy Duty', flowRate: 'Tank/Inline', inStock: true },
        ]
      },
      {
        title: 'Hydroline Breathers',
        tableHeaders: ['Model', 'Type', 'Material', 'Status'],
        products: [
          { model: 'FSB, ABF', size: 'Flange Type', maxPressure: 'Steel/Plastic', inStock: true },
          { model: 'PB, FSBW', size: 'Push on / Weld Type', maxPressure: 'Plastic/Steel', inStock: true },
          { model: 'TB, ABT, ABP', size: 'Threaded Type', maxPressure: 'Steel/Plastic', inStock: true },
          { model: 'AB, AB2', size: 'Spin on Type', maxPressure: 'Steel', inStock: true },
        ]
      },
      {
        title: 'Hydroline Level Gauges',
        tableHeaders: ['Model', 'Type', 'Material', 'Status'],
        products: [
          { model: 'LG2 / LG6', size: 'Visual Monitor', maxPressure: 'Steel / Aluminium', inStock: true },
          { model: 'SGA/S / SGP', size: 'Sight Glass', maxPressure: 'Steel / Alu / Plastic', inStock: true },
        ]
      },
      {
        title: 'Hydroline Strainers & Valves',
        tableHeaders: ['Model', 'Component', 'Material', 'Status'],
        products: [
          { model: 'SC2, SC3, SE', size: 'Inline Strainer', maxPressure: 'Steel/Alu/Plastic Nut', inStock: true },
          { model: 'TMA, TMS', size: 'Tank Mounted Strainer', maxPressure: 'Alu/Mild Steel', inStock: false },
          { model: 'CUT, SLVT, DLVT', size: 'Check / Lock Valves', maxPressure: 'Steel', inStock: true },
          { model: 'RD3, MT', size: 'Diffuser / Magnetic Cleaner', maxPressure: 'Steel / Magnetic', inStock: true },
        ]
      },
      {
        title: 'Danfoss Systems',
        tableHeaders: ['Component Type', 'Category', 'Application', 'Status'],
        products: [
          { model: 'Danfoss Steering Units', size: 'Steering', maxPressure: 'Heavy Vehicles', inStock: true },
          { model: 'Danfoss Hydraulic Motors', size: 'Motors', maxPressure: 'Industrial Drive', inStock: true },
        ]
      },
      {
        title: 'HYDAC & Power Packs',
        tableHeaders: ['Component Type', 'Category', 'Specs', 'Status'],
        products: [
          { model: 'HYDAC Components', size: 'Filtration & Fluid', maxPressure: 'Industrial', inStock: true },
          { model: 'Custom Power Packs', size: 'Hydraulic Power Unit', maxPressure: 'Engineered to Order', inStock: true },
        ]
      }
    ]
  },
  'hoses': {
    id: 'hoses',
    brand: 'Polyhose',
    name: 'Hydraulic Hoses',
    desc: 'Rubber Hoses, Thermoplastic Hoses, PTFE Hoses, and Industrial Hoses.',
    img: '/booklet/hoses.jpg',
    heroText: 'FLEXIBLE FLUID TRANSMISSION',
    subCategories: [

      {
            "title": "Polyhose Complete Catalog",
            "tableHeaders": [
                  "Hose Family",
                  "Description",
                  "Application",
                  "Stock Status"
            ],
            "products": [
                  {
                        "model": "(ELECTRICAL NON CONDUCTIVE)",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH332 -MEDIUM PRESSURE HYDRAULIC HOSE",
                                    "specs": "(ELECTRICAL NON CONDUCTIVE)",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "1SC Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH257",
                                    "specs": "1SC",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH557",
                                    "specs": "1SC LOW TEMPERATURE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH267",
                                    "specs": "1SC HIGH TEMPERATURE MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH269",
                                    "specs": "1SC ULTRA HIGH TEMPERATURE MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH210",
                                    "specs": "TRACK SAFE - 1SC",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "1SNX - HP Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH296",
                                    "specs": "1SNX - HP",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH206",
                                    "specs": "1SNX - HP ABRAZON - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH237",
                                    "specs": "1SNX - HP HIGH TEMPERATURE MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH139",
                                    "specs": "TRACK SAFE - 1SNX - HP",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "1ST Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH243",
                                    "specs": "1ST",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH208",
                                    "specs": "1ST HARD - X MSHA",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "1TE Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH261",
                                    "specs": "1TE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH271",
                                    "specs": "1TE HIGH TEMPERATURE MSHA",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "2 WB - 09 SERIES",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH142",
                                    "specs": "2 WB - 09 SERIES",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "2SC Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH258",
                                    "specs": "2SC",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH230",
                                    "specs": "2SC HARD - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH260",
                                    "specs": "2SC ABRAZON - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH558",
                                    "specs": "2SC LOW TEMPERATURE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH268",
                                    "specs": "2SC HIGH TEMPERATURE MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH270",
                                    "specs": "2SC ULTRA HIGH TEMPERATURE MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH211",
                                    "specs": "TRACK SAFE - 2SC",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "2SNX - HP Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH297",
                                    "specs": "2SNX - HP",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH597",
                                    "specs": "2SNX - HP HARD-X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH207",
                                    "specs": "2SNX - HP ABRAZON - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH238",
                                    "specs": "2SNX - HP HIGH TEMPERATURE MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH507",
                                    "specs": "2SNX - HP LOW TEMPERATURE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH104",
                                    "specs": "TRACK SAFE - 2SNX - HP",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "2ST Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH244",
                                    "specs": "2ST",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH209",
                                    "specs": "2ST HARD - X MSHA",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "2TE Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH262",
                                    "specs": "2TE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH272",
                                    "specs": "2TE HIGH TEMPERATURE MSHA",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "3000 PSI Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH213",
                                    "specs": "3000 PSI",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH223",
                                    "specs": "3000 PSI HARD - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH403",
                                    "specs": "3000 PSI ABRAZON - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH413",
                                    "specs": "3000 PSI LOW TEMPERATURE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH433",
                                    "specs": "3000 PSI HIGH TEMPERATURE MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH453",
                                    "specs": "3000 PSI ULTRA HIGH TEMPERATURE MSHA",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "3TE Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH263",
                                    "specs": "3TE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH239",
                                    "specs": "3TE CPE RUBBER",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH273",
                                    "specs": "3TE HIGH TEMPERATURE MSHA",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "4000 PSI Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH214/224",
                                    "specs": "4000 PSI",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH404",
                                    "specs": "4000 PSI HARD - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH464",
                                    "specs": "4000 PSI  ABRAZON - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH484",
                                    "specs": "4000 PSI HARD - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH494",
                                    "specs": "4000 PSI ABRAZON - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH414",
                                    "specs": "4000 PSI LOW TEMPERATURE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH434",
                                    "specs": "4000 PSI HIGH TEMPERATURE MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH454",
                                    "specs": "4000 PSI ULTRA HIGH TEMPERATURE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "4SH Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH278",
                                    "specs": "4SH",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH220",
                                    "specs": "4SH HARD - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH289",
                                    "specs": "4SH ABRAZON - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH124",
                                    "specs": "TRACK SAFE - 4SH",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "4SP Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH277",
                                    "specs": "4SP",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH219",
                                    "specs": "4SP HARD - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH205",
                                    "specs": "4SP ABRAZON - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH111",
                                    "specs": "TRACK SAFE - 4SP",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "500 PSI MSHA",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH431 TITAN GENERAL AIR/WATER",
                                    "specs": "500 PSI MSHA",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "5000 PSI Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH215/225",
                                    "specs": "5000 PSI",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH226",
                                    "specs": "5000 PSI HARD - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH466",
                                    "specs": "5000 PSI ABRAZON - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH426",
                                    "specs": "5000 PSI HARD - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH486",
                                    "specs": "5000 PSI ABRAZON - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH415",
                                    "specs": "5000 PSI LOW TEMPERATURE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH435",
                                    "specs": "5000 PSI HIGH TEMPERATURE MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH455",
                                    "specs": "5000 PSI ULTRA HIGH TEMPERATURE MSHA",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "6000 PSI Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH216",
                                    "specs": "6000 PSI",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH406",
                                    "specs": "6000 PSI HARD - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH496",
                                    "specs": "6000 PSI ABRAZON - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH416",
                                    "specs": "6000 PSI LOW TEMPERATURE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH436",
                                    "specs": "6000 PSI HIGH TEMPERATURE MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH456",
                                    "specs": "6000 PSI ULTRA HIGH TEMPERATURE MSHA",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "AIR / WATER - LIGHT DUTY",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH365L",
                                    "specs": "AIR / WATER - LIGHT DUTY",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Air & Water Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH365",
                                    "specs": "AIR / WATER HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH767",
                                    "specs": "FRAS AIR / WATER HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Air Brake Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH405",
                                    "specs": "ENGINE AND AIR BRAKE HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH510",
                                    "specs": "AIR BRAKE HOSE LOW TEMPERATURE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH520",
                                    "specs": "ENGINE AND AIR BRAKE HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH540",
                                    "specs": "AIR BRAKE HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Air Breathing Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH566",
                                    "specs": "AIR BREATHING HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH395",
                                    "specs": "AIR BREATHING HOSE - 6000PSI",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH396",
                                    "specs": "AIR BREATHING HOSE - 7000PSI",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Air Drill Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH461 HEAVY DUTY AIR DRILL HOSE",
                                    "specs": "PH461 HEAVY DUTY AIR DRILL HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "BARRIER TYPE AIR CONDITIONING HOSE",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH503 / 134 A NON",
                                    "specs": "BARRIER TYPE AIR CONDITIONING HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Beverage Dispensing Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH326 / PH327 / PH328",
                                    "specs": "BEVERAGE DISPENSING HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Brake Fluid Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH140",
                                    "specs": "LOW SMOKE HI - TEMP BRAKE HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH138",
                                    "specs": "HYDRAULIC BRAKE HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH550",
                                    "specs": "RAIL BRAKE HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH505",
                                    "specs": "RAIL BRAKE HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH541",
                                    "specs": "RAIL BRAKE HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH777",
                                    "specs": "BRAKE FLUID HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Bulk Material Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH623",
                                    "specs": "BULKMATERIAL SUCTION AND DISCHARGE HOSE W.P. 10 BAR",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH628",
                                    "specs": "ABRASIVE BULK MATERIAL SUCTION AND DISCHARGE HOSE W.P 20 BAR",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH629",
                                    "specs": "ABRASIVE BULK MATERIAL DISCHARGE HOSE W.P 10 BAR",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH639",
                                    "specs": "BULKMATERIAL DISCHARGE - 20 BAR",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Bunker Truck Hot Air Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH625",
                                    "specs": "BUNKER TRUCK HOT AIR BLOWER HOSE W.P. 10 BAR",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Cab Tilt Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH771",
                                    "specs": "CAB TILT HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Cement / Plaster Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH621",
                                    "specs": "CEMENT / PLASTER PLACEMENT HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH622",
                                    "specs": "HIGH PRESSURE PLASTER SPRAY HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Cement Delivery Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH626",
                                    "specs": "DRY CEMENT DELIVERY / SILO HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Chemical Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH807",
                                    "specs": "POLY - CHEMICAL HOSE - P P",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH813 : POLY",
                                    "specs": "CHEMICAL HOSE - PS",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH815 : POLY",
                                    "specs": "CHEMICAL HOSE - PS",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH820 : POLY",
                                    "specs": "CHEMICAL HOSE - SS - PTFE COVER",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Chemical Suction & Discharge Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH642",
                                    "specs": "XLPE CHEMICAL SUCTION AND DISCHARGE HOSE W.P. 17 BAR",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH645",
                                    "specs": "UHMWPE CHEMICAL SUCTION & DISCHARGE HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH646",
                                    "specs": "EPDM CHEMICAL SUCTION & DISCHARGE HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Clutch Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH772",
                                    "specs": "CLUTCH HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Compressed Air Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH402",
                                    "specs": "OIL & COMPRESSED AIR HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH401 OIL AND COMPRESSED AIR HOSE",
                                    "specs": "PH401 OIL AND COMPRESSED AIR HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH440",
                                    "specs": "COMPRESSED AIR WIRE BRAIDED HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH441",
                                    "specs": "COMPRESSED AIR WIRE BRAIDED HOSE MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH631",
                                    "specs": "INDUSTRIAL DUTY AIR HOSE W.P. 20 BAR",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Compressed Natural Gas Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH324",
                                    "specs": "ELECTRICALLY CONDUCTIVE COMPRESSED NATURAL GAS HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH325",
                                    "specs": "ELECTRICALLY CONDUCTIVE COMPRESSED NATURAL GAS",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Concrete Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH62D",
                                    "specs": "CONCRETE VIBRATOR HOSE - CONDUCTIVE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH62N",
                                    "specs": "CONCRETE VIBRATOR HOSE - NON CONDUCTIVE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH649",
                                    "specs": "CONCRETE DELIVERY HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Convoluted PTFE Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH782",
                                    "specs": "CONVOLUTED PTFE HOSE WITH HELIX WIRE AND STAINLESS STEEL STANDARD WALL",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH783",
                                    "specs": "CONVOLUTED PTFE HOSE WITH HELIX WIRE AND POLYPROPYLENE YARN STANDARD WALL",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH785",
                                    "specs": "CONVOLUTED PTFE HOSE WITH POLYPROPYLENE YARN - STANDARD WALL",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Fire Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH183",
                                    "specs": "FIRE SHIELD HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH120 FIRE ENGINE BOOSTER HOSE",
                                    "specs": "PH120 FIRE ENGINE BOOSTER HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH242",
                                    "specs": "FIRE SUPPRESSION HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH693",
                                    "specs": "FIRE SHIELD HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Fittings & Couplings",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH174",
                                    "specs": "BCS",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH 2000 SERIES",
                                    "specs": "MFM",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH 2010 SERIES",
                                    "specs": "MFL",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH 2100 SERIES",
                                    "specs": "MFMS",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH 2200 SERIES",
                                    "specs": "MFH",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH 2300 SERIES",
                                    "specs": "HFH",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH 2400 SERIES",
                                    "specs": "HFM",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH 2500 SERIES",
                                    "specs": "HMH",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH 2600 SERIES",
                                    "specs": "WMW",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH 2700 SERIES",
                                    "specs": "WHW",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "FLUOROPOLYMER - LOW PRESSURE CONDUCTIVE / NON - CONDUCTIVE",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH721 / PH722",
                                    "specs": "FLUOROPOLYMER - LOW PRESSURE CONDUCTIVE / NON - CONDUCTIVE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Fuel Dispensing Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH442",
                                    "specs": "FUEL DISPENSING HOSE - HARD WALL",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH443",
                                    "specs": "FUEL DISPENSING - SOFT WALL",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Fuel Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH531",
                                    "specs": "FUEL HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH532",
                                    "specs": "FUEL HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH690",
                                    "specs": "AVIATION FUEL HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH804",
                                    "specs": "POLY - FUEL HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH812",
                                    "specs": "POLY - LIGHT WEIGHT FUEL HOSE - AG",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "FUEL/CNG HOSE FOR AUTOMOTIVE APPLICATION",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH536",
                                    "specs": "FUEL/CNG HOSE FOR AUTOMOTIVE APPLICATION",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Gas Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH333 -LIQUEFIED PETROLEUM GAS HOSE",
                                    "specs": "PH333 -LIQUEFIED PETROLEUM GAS HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH382",
                                    "specs": "PTFE GAS HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH775",
                                    "specs": "GAS HOSE - ARAMID",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH776",
                                    "specs": "GAS HOSE - 1W",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH778",
                                    "specs": "NITROGEN GAS HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "General Purpose Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH430",
                                    "specs": "GENERAL PURPOSE HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Grease / Lubrication Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH320 / PH321 / PH322",
                                    "specs": "LUBRICATION GREASE HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH734",
                                    "specs": "GREASE HOSE - LOW PRESSURE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Heater Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH549",
                                    "specs": "HEATER HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "High Pressure Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH349",
                                    "specs": "HIGH PRESSURE HYDRAULIC HOSE - 2WB",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "High Pressure PTFE Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH1570",
                                    "specs": "HIGH PRESSURE PTFE HOSE (D-PAC BRAID DESIGN)",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Hybrid Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH761",
                                    "specs": "HYBRID HOSE - 1W",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH762",
                                    "specs": "HYBRID HOSE - 2W",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "HYDRAULIC OIL S & D HOSE",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH245",
                                    "specs": "HYDRAULIC OIL S & D HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "HYDRAULIC OIL S & D HOSE HIGH TEMPERATURE MSHA",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH185",
                                    "specs": "HYDRAULIC OIL S & D HOSE HIGH TEMPERATURE MSHA",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Jack Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH175",
                                    "specs": "JACK HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH125",
                                    "specs": "JACK HOSE HARD - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH350",
                                    "specs": "HIGH PRESSURE JACK HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH351",
                                    "specs": "VERY HIGH PRESSURE JACK HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH352",
                                    "specs": "VERY HIGH PRESSURE JACK HOSE - NON CONDUCTIVE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH751",
                                    "specs": "COMPACT JACK HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Lift Master Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH182",
                                    "specs": "LIFT MASTER HARDX MSHA",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "LOW PRESSURE CONDUCTIVE / NON - CONDUCTIVE",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH727 / PH728",
                                    "specs": "LOW PRESSURE CONDUCTIVE / NON - CONDUCTIVE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH729 / PH730",
                                    "specs": "LOW PRESSURE CONDUCTIVE / NON - CONDUCTIVE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "LPG Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH575",
                                    "specs": "LPG HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH534",
                                    "specs": "LPG HOSE AS PER EN 1762 : TYPE - D",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH535",
                                    "specs": "LPG HOSE AS PER IS 9573 : 2017 PART -1",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Marine Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH779",
                                    "specs": "MEDIUM PRESSURE MARINE HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Medium Pressure Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH348",
                                    "specs": "MEDIUM PRESSURE HYDRAULIC HOSE - 1WB",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "MEDIUM PRESSURE POLY - COMP HOSE",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH765",
                                    "specs": "MEDIUM PRESSURE POLY - COMP HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Micro Bore Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH354 / PH355",
                                    "specs": "MICRO BORE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Mining Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH202",
                                    "specs": "MINE SPRAY HOSE MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH661",
                                    "specs": "MINE BLAST HANDLING HOSE - W.P. 20 BAR",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Moisture Blok Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH758",
                                    "specs": "MOISTURE BLOK HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Multi-Spiral High Tensile Steel Wire Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH906RR",
                                    "specs": "6 SPIRALS OF HIGH TENSILE STEEL WIRE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH902R",
                                    "specs": "2 SPIRALS OF HIGH TENSILE STEEL WIRE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH902",
                                    "specs": "2 SPIRALS OF HIGH TENSILE STEEL WIRE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH902P",
                                    "specs": "2 SPIRALS OF HIGH TENSILE STEEL WIRE, 1 BRAID OF STEEL WIRE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH902Q / PH902QL / PH902QZ",
                                    "specs": "4 SPIRALS OF HIGH TENSILE STEEL WIRE, 2 DENSE AND 2 OPEN LAYERS",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH903",
                                    "specs": "2 SPIRALS OF HIGH TENSILE STEEL WIRE, 1 BRAID OF SS SOFT WIRE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH904",
                                    "specs": "4 SPIRALS OF HIGH TENSILE STEEL WIRE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH904R",
                                    "specs": "4 SPIRALS OF HIGH TENSILE STEEL WIRE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH906",
                                    "specs": "6 SPIRALS OF HIGH TENSILE STEEL WIRE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH906R",
                                    "specs": "6 SPIRALS OF HIGH TENSILE STEEL WIRE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH908",
                                    "specs": "8 SPIRALS OF HIGH TENSILE STEEL WIRE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Multipurpose Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH487",
                                    "specs": "MULTIPURPOSE HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH687",
                                    "specs": "MULTI PURPOSE HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH368",
                                    "specs": "MULTIPURPOSE HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "NON CONDUCTIVE CARBON FREE HOSE",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH555",
                                    "specs": "NON CONDUCTIVE CARBON FREE HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Oil / Fuel Delivery Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH542",
                                    "specs": "FUEL & OIL HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH613",
                                    "specs": "OIL / FUEL DELIVERY HOSE W.P. 10 BAR",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH617",
                                    "specs": "OIL FUEL DELIVERY HOSE - 20 BAR",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH657",
                                    "specs": "OIL FUEL DELIVERY HOSE FRAS - 20 BAR",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Oil Discharge Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH699",
                                    "specs": "OIL/FUEL DISCHARGE HOSE  WP 30 BAR",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Oil Suction & Discharge Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH61C",
                                    "specs": "OIL SUCTION & DISCHARGE 10 BAR (CORRUGATED COVER)",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH611",
                                    "specs": "OIL / FUEL SUCTION & DISCHARGE HOSE W.P. 10 BAR",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH61A LOW TEMPERATURE OIL SUCTION & DISCHARGE HOSE W.P. 10 BAR",
                                    "specs": "PH61A LOW TEMPERATURE OIL SUCTION & DISCHARGE HOSE W.P. 10 BAR",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH614",
                                    "specs": "OIL SUCTION & DISCHARGE HOSE W.P. 20 BAR",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH615",
                                    "specs": "OIL SUCTION & DISCHARGE HOSE - 40 BAR",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Paint Spray Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH340",
                                    "specs": "PAINT & AGGRESSIVE CHEMICAL SPRAY - 2W",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH341",
                                    "specs": "PAINT & AGGRESSIVE CHEMICAL SPRAY - 1W",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH342",
                                    "specs": "PAINT SPRAY - 1W",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH343",
                                    "specs": "PAINT SPRAY - 2W",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH344 / PH345",
                                    "specs": "HIGH PRESSURE PAINT SPRAY",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH346",
                                    "specs": "VERY HIGH PRESSURE PAINT SPRAY",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH347",
                                    "specs": "SUPER HIGH PRESSURE PAINT SPRAY",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "PH385-HIGH PRESSURE BREATHING HOSE 1W",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH385-HIGH PRESSURE BREATHING HOSE 1W",
                                    "specs": "PH385-HIGH PRESSURE BREATHING HOSE 1W",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "PH387-HIGH PRESSURE BREATHING HOSE 2W",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH387-HIGH PRESSURE BREATHING HOSE 2W",
                                    "specs": "PH387-HIGH PRESSURE BREATHING HOSE 2W",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "PH704 SERIES",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH704 SERIES",
                                    "specs": "PH704 SERIES",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Pilot Line Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH290",
                                    "specs": "PILOT HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH392",
                                    "specs": "PILOT LINE HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "PLATINUM CURED SILICONE PTFE HOSE",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH1591",
                                    "specs": "PLATINUM CURED SILICONE PTFE HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "PNEUMATIC TOOL HOSE",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH360",
                                    "specs": "PNEUMATIC TOOL HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "POLY - BITUMEN TRANSFER HOSE",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH817",
                                    "specs": "POLY - BITUMEN TRANSFER HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Polyhose Composite Chemical Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH805",
                                    "specs": "POLY - PTFE CHEMICAL",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH806",
                                    "specs": "POLY - CHEMICAL-SS",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH808",
                                    "specs": "POLY - CHEMICAL DOCK HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH814",
                                    "specs": "POLY - CHEMICAL-SG",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH818",
                                    "specs": "POLY - CHEMICAL HEAVY DUTY HOSE - SS PTFE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH819",
                                    "specs": "POLY - CHEMICAL HEAVY DUTY HOSE - SG",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Polyhose Composite Dock Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH809",
                                    "specs": "POLY - DOCK PTFE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH810",
                                    "specs": "POLY - DOCK PG HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Polyhose Composite Fuel Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH803",
                                    "specs": "POLY - AVIATION FUEL COMPOSITE HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Polyhose Composite Oil Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH802",
                                    "specs": "POLY - OIL HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH811",
                                    "specs": "POLY - OIL DOCK HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Polyhose Composite Tanker Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH801",
                                    "specs": "POLY - TANKER HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Power Steering Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH27X",
                                    "specs": "POWER STEERING HOSE - MADMAX",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH2GC",
                                    "specs": "POWER STEERING PRESSURE HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Pressure Washer Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH513",
                                    "specs": "PW 3K - 1 WB",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH514",
                                    "specs": "PW 4K - 1 WB",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH516",
                                    "specs": "PW 6K - 2 WB",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH517",
                                    "specs": "PW 4K - 2TB",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH707",
                                    "specs": "PRESSURE WASHER HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "PTFE - CONVOLUTED HOSE",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH1003",
                                    "specs": "PTFE - CONVOLUTED HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH370",
                                    "specs": "PTFE - CONVOLUTED HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "PTFE - CONVOLUTED HOSE 2W",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH374",
                                    "specs": "PTFE - CONVOLUTED HOSE 2W",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "PTFE - ELECTRICAL CONDUCTIVE CONVOLUTED HOSE",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH371",
                                    "specs": "PTFE - ELECTRICAL CONDUCTIVE CONVOLUTED HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "PTFE Braided Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH1006",
                                    "specs": "PTFE WITH FIBER GLASS AND SS BRAID",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH1001",
                                    "specs": "PTFE WITH SS BRAID",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "PTFE HOSE WITH POLYESTER BRAID",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH331",
                                    "specs": "PTFE HOSE WITH POLYESTER BRAID",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "PTFE HOSE WITH POLYURETHANE COVER",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH1593",
                                    "specs": "PTFE HOSE WITH POLYURETHANE COVER",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Push Lok Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH438 PUSH LOK HOSE MSHA",
                                    "specs": "PH438 PUSH LOK HOSE MSHA",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "PVC Braided Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH367",
                                    "specs": "P.V.C BRAIDED HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH367L",
                                    "specs": "P.V.C BRAIDED HOSE - LIGHT DUTY",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "PVC STEEL WIRE HOSE",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH367S",
                                    "specs": "PVC STEEL WIRE HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "R17 Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH293",
                                    "specs": "R17",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH198",
                                    "specs": "R17 HARD - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH294",
                                    "specs": "R17 ABRAZON - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH593",
                                    "specs": "R17 HIGH TEMPERATURE MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH594",
                                    "specs": "R17 UTRA HIGH TEMPERATURE MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH112",
                                    "specs": "TRACK SAFE - R17",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "R18 Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH194",
                                    "specs": "LOW TEMPERATURE - R18",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH195",
                                    "specs": "LOW TEMPERATURE - R18 (NON CONDUCTIVE)",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "R19 Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH295",
                                    "specs": "R19",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH229",
                                    "specs": "R19 HARD - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH222",
                                    "specs": "R19 ABRAZON - X MSHA",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "R1AT / 1SN Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH253",
                                    "specs": "R1AT / 1SN",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH248",
                                    "specs": "R1AT / 1SN HARD - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH298",
                                    "specs": "R1AT / 1SN ABRAZON - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH553",
                                    "specs": "R1AT / 1SN LOW TEMPERATURE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH255",
                                    "specs": "R1AT / 1SN HIGH TEMPERATURE MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH291",
                                    "specs": "R1AT / 1SN ULTRA HIGH TEMPERATURE MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH115",
                                    "specs": "TRACK SAFE - R1AT / 1SN",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH231",
                                    "specs": "MADMAX R1AT/1SN",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "R2AT / 2SN Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH254",
                                    "specs": "R2AT / 2SN",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH249",
                                    "specs": "R2AT / 2SN HARD - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH299",
                                    "specs": "R2AT / 2SN - ABRAZON - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH554",
                                    "specs": "R2AT / 2SN LOW TEMPERATURE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH256",
                                    "specs": "R2AT / 2SN HIGH TEMPERATURE MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH292",
                                    "specs": "R2AT / 2SN ULTRA HIGH TEMPERATURE MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH122",
                                    "specs": "TRACK SAFE - R2AT / 2SN",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Radiator Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH651",
                                    "specs": "RADIATOR HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Refrigeration Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH334",
                                    "specs": "REFRIGERATION HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Rig Supply Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH665",
                                    "specs": "RIG SUPPLY - FUEL/LIQUID MUD SUCTION & DISCHARGE HOSE W.P. 20 BAR",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Rockdrill Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH460 ROCKDRILL",
                                    "specs": "PH460 ROCKDRILL",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Rubber Seal",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "RUBBER SEAL",
                                    "specs": "RUBBER SEAL",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "SAE 100 R12 Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH177",
                                    "specs": "SAE 100 R12",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH187",
                                    "specs": "SAE 100 R12 HARD - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH285",
                                    "specs": "SAE 100 R12 ABRAZON - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH132",
                                    "specs": "TRACK SAFE - R12",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "SAE 100 R13 Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH178",
                                    "specs": "R13",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH128",
                                    "specs": "R13 HARD - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH133",
                                    "specs": "TRACK SAFE - R13",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "SAE 100 R14 Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH179",
                                    "specs": "R14",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH311",
                                    "specs": "(ELECTRICAL CONDUCTIVE) - R14",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH313",
                                    "specs": "R14 INCREASED WALL",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH381",
                                    "specs": "R14 2W",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "SAE 100 R15 Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH279",
                                    "specs": "R15",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH259",
                                    "specs": "R15 ABRAZON - X MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH134",
                                    "specs": "TRACK SAFE - R15",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "SAE 100 R3 Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH250",
                                    "specs": "R3",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH130",
                                    "specs": "R3 TEMP MASTER MSHA",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "SAE 100 R4 Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH181",
                                    "specs": "TRACK SAFE - R4",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "SAE 100 R5 Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH146",
                                    "specs": "R5",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH141",
                                    "specs": "R5R MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH186",
                                    "specs": "R5C XT",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH189",
                                    "specs": "R5 XT",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "SAE 100 R6 Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH147",
                                    "specs": "R6",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH247",
                                    "specs": "R6 MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH164",
                                    "specs": "R6 HIGH TEMPERATURE MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH264",
                                    "specs": "R6 HIGH TEMPERATURE MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH227",
                                    "specs": "R6 ULTRA HIGH TEMPERATURE MSHA",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH102",
                                    "specs": "TRACK SAFE - R6",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH204",
                                    "specs": "R6 FRAS MSHA",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "SAE 100 R7 Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH148",
                                    "specs": "MEDIUM PRESSURE HYDRAULIC HOSE - R7",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH358",
                                    "specs": "R7 COMPACT HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH151",
                                    "specs": "MEDIUM PRESSURE HYDRAULIC HOSE - R7 (NON CONDUCTIVE)",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "SAE 100 R8 Hydraulic Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH149",
                                    "specs": "HIGH PRESSURE HYDRAULIC HOSE - R8",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH353",
                                    "specs": "HIGH PRESSURE HYDRAULIC HOSE - R8 (2PB)",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH152",
                                    "specs": "HIGH PRESSURE HYDRAULIC HOSE - R8 (NON CONDUCTIVE)",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH357",
                                    "specs": "HIGH PRESSURE HYDRAULIC HOSE - R8 (2PB) - NON CONDUCTIVE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Sewer Jet Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH508",
                                    "specs": "SEWER JET 250 BAR",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH301",
                                    "specs": "SEWER JET - 2500 PSI",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH302",
                                    "specs": "SEWER JET - 3000 PSI",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH303",
                                    "specs": "SEWER JET - 3600 PSI / 4000 PSI",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH304",
                                    "specs": "SEWER JET - 4000 PSI",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH305",
                                    "specs": "SEWER JET - 2800 PSI",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH306",
                                    "specs": "SEWER JET - 3000 PSI",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH307",
                                    "specs": "SEWER JET - 3600 PSI",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH308",
                                    "specs": "SEWER JET - 3600 / 4000 PSI",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH309",
                                    "specs": "SEWER JET - 3000 PSI",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Shot Blasting Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH624",
                                    "specs": "SHOT BLASTING HOSE W.P. 12 BAR - PH2",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH674",
                                    "specs": "SHOT BLASTING HOSE W.P. 12 BAR - PH1 (PREMIUM ABRASION)",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH684",
                                    "specs": "SHOT BLASTING HOSE W.P. 12 BAR",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Slurry / Mud Suction & Discharge Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH647",
                                    "specs": "SLURRY & MUD WATER SUCTION AND DISCHARGE HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH6E0",
                                    "specs": "SLURRY/MUD SUCTION AND DISCHARGE HOSE W.P 10 BAR",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Steam Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH471",
                                    "specs": "STEAM 1 W/B",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH472",
                                    "specs": "STEAM 2 W/B",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH482",
                                    "specs": "STEAM 2 W/B",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH475",
                                    "specs": "STEAM HOSE WITH HELICAL WIRE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH681",
                                    "specs": "SATURATED STEAM & HOT WATER HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH695",
                                    "specs": "STEAM HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Super Service Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH521",
                                    "specs": "SUPER SERVICE HOSE",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH522",
                                    "specs": "SUPER SERVICE HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Super Spray Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH361",
                                    "specs": "SUPER SPRAY HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "TAPE WRAPPED CONVOLUTED HOSE",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH372",
                                    "specs": "TAPE WRAPPED CONVOLUTED HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "TAPE WRAPPED ELECTRICAL CONDUCTIVE CONVOLUTED HOSE",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH375",
                                    "specs": "TAPE WRAPPED ELECTRICAL CONDUCTIVE CONVOLUTED HOSE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "THERMOPLASTIC LINED PAINT S & D HOSE 10 BAR",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH609",
                                    "specs": "THERMOPLASTIC LINED PAINT S & D HOSE 10 BAR",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Triflex Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH276",
                                    "specs": "TRIFLEX",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Triflex Track Safe Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH109",
                                    "specs": "TRACK SAFE - TRIFLEX",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "UHMWPE SUCTION & DISCHARGE HOSE FOOD",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH648",
                                    "specs": "UHMWPE SUCTION & DISCHARGE HOSE FOOD",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Vapour Recovery Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH816 : POLY",
                                    "specs": "VAPOUR RECOVERY HOSE - GG",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH822 : POLY",
                                    "specs": "VAPOUR RECOVERY HOSE - SS PTFE",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Water Blasting Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH280",
                                    "specs": "WATER BLAST 30",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH281",
                                    "specs": "WATER BLAST 40",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH282",
                                    "specs": "WATER BLAST 45",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH283",
                                    "specs": "WATER BLAST 50",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PHF92",
                                    "specs": "WATER JETTING HOSE W.P 35 BAR",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Water Delivery Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH606",
                                    "specs": "STEEL MILL WATER DELIVERY HOSE WITH FIBER GLASS COVER",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH607",
                                    "specs": "STEEL MILL WATER SUCTION AND DELIVERY HOSE WITH FIBER GLASS COVER",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH821 : POLY",
                                    "specs": "HEAVY DUTY WATER HOSE - GG",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Water Discharge Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH602",
                                    "specs": "WATER DISCHARGE HOSE W.P. 10 BAR - LAY FLAT",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH610",
                                    "specs": "WATER DISCHARGE HOSE - W.P. 20 BAR",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH620",
                                    "specs": "AIR & WATER DISCHARGE HOSE - 10 BAR",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH630",
                                    "specs": "AIR & WATER DISCHARGE HOSE - 20 BAR",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH663",
                                    "specs": "AIR & WATER DISCHARGE HOSE FRAS - 20 BAR",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Water Suction & Discharge Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH601",
                                    "specs": "WATER SUCTION & DISCHARGE HOSE W.P. 10 BAR",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH640",
                                    "specs": "EPDM WATER SUCTION & DISCHARGE HOSE W.P. 10 BAR",
                                    "inStock": true
                              },
                              {
                                    "partNumber": "PH604",
                                    "specs": "WATER SUCTION & DISCHARGE HOSE W.P. 20 BAR",
                                    "inStock": true
                              }
                        ]
                  },
                  {
                        "model": "Welding Hose",
                        "size": "Multiple Variations",
                        "maxPressure": "Click to expand",
                        "inStock": true,
                        "variations": [
                              {
                                    "partNumber": "PH362",
                                    "specs": "WELDING HOSE",
                                    "inStock": true
                              }
                        ]
                  }
            ]
      }

    ]
  },
  'couplings': {
    id: 'couplings',
    brand: 'Hydax & Hyloc',
    name: 'Gear & Fluid Couplings',
    desc: 'Precision industrial couplings for fluid and mechanical power transmission.',
    img: '/booklet/coupling.jpg',
    heroText: 'PRECISION MECHANICAL DRIVE',
    subCategories: [
      {
        title: 'Hydax Gear Couplings',
        tableHeaders: ['Model', 'Type', 'Application', 'Stock Status'],
        products: [
          { model: 'Full Gear Coupling', size: 'Mechanical', maxPressure: 'High Torque', inStock: true },
          { model: 'Half Gear Coupling', size: 'Mechanical', maxPressure: 'High Torque', inStock: true },
          { model: 'Fluid Couplings', size: 'Fluid Transmission', maxPressure: 'Variable Torque', inStock: true },
        ]
      },
      {
        title: 'Faster Couplings',
        tableHeaders: ['Series', 'Description', 'Working Pressure', 'Stock Status'],
        products: [
          { model: 'NV Series', size: 'Standard coupling with poppet valve', maxPressure: 'WP upto 350 Bar', inStock: true },
          { model: 'FFH Series', size: 'Flat face couplings, ISO 16028 interchange', maxPressure: '350 Bar series', inStock: true },
          { model: 'VVS Series', size: 'Screw to connect couplings for high pressure applications', maxPressure: 'WP upto 800 Bar', inStock: true },
          { model: 'PVVM Series', size: 'Screw to connect high pressure, ISO 14540 interchange, poppet valve', maxPressure: 'WP upto 1000 Bar', inStock: true },
        ]
      },
      {
        title: 'Hyloc Tube Coupling Parts',
        tableHeaders: ['Model', 'Category', 'Application', 'Stock Status'],
        products: [
          { model: 'Tube to Tube Couplings', size: 'Tube Coupling Parts', maxPressure: 'Fluid Transmission', inStock: true },
          { model: 'Tube to Male Stud BSP', size: 'Tube Coupling Parts', maxPressure: 'Fluid Transmission', inStock: true },
          { model: 'Tube to Male Stud Elastomeric BSP', size: 'Tube Coupling Parts', maxPressure: 'Fluid Transmission', inStock: true },
          { model: 'Bulkhead Couplings', size: 'Tube Coupling Parts', maxPressure: 'Fluid Transmission', inStock: true },
          { model: 'Weld Couplings', size: 'Tube Coupling Parts', maxPressure: 'Fluid Transmission', inStock: true },
          { model: 'Banjo Couplings', size: 'Hose Adaptors', maxPressure: 'Fluid Transmission', inStock: true },
          { model: 'Gauge Adaptors', size: 'Hose Adaptors', maxPressure: 'Measurement', inStock: true },
          { model: 'Plug BSP', size: 'Hose Adaptors', maxPressure: 'Sealing', inStock: true },
          { model: 'Hose Adaptors', size: 'Hose Adaptors', maxPressure: 'Connection', inStock: true },
        ]
      },
      {
        title: 'Hyloc Valves & Diagnostics',
        tableHeaders: ['Component', 'Category', 'Application', 'Stock Status'],
        products: [
          { model: 'Shutoff Valves', size: 'Valves', maxPressure: 'Flow Control', inStock: true },
          { model: 'Needle Valves', size: 'Valves', maxPressure: 'Flow Regulation', inStock: true },
          { model: 'Check Valves', size: 'Valves', maxPressure: 'Flow Direction', inStock: true },
          { model: 'Throttle Valves', size: 'Valves', maxPressure: 'Flow Restriction', inStock: true },
          { model: 'Gauge Isolator Valves', size: 'Valves', maxPressure: 'Measurement Protection', inStock: true },
          { model: 'Accumulator Safety Block', size: 'Valves', maxPressure: 'Safety', inStock: true },
          { model: 'Quick Disconnect Coupling', size: 'Valves', maxPressure: 'Rapid Connection', inStock: true },
          { model: 'Diagnostic Coupling / Connector', size: 'Diagnostic', maxPressure: 'System Measurement', inStock: true },
          { model: 'ButtWeld Flanges', size: 'Flanges', maxPressure: 'Pipe Connection', inStock: true },
          { model: 'Blind Flanges', size: 'Flanges', maxPressure: 'Pipe Closing', inStock: true },
        ]
      }
    ]
  },
  'pneumatics': {
    id: 'pneumatics',
    brand: 'FESTO & Janatics',
    name: 'Pneumatic Systems',
    desc: 'Cylinders, FRL units, Solenoid Valves, and Air automation equipment.',
    img: '/booklet/pneumatics.jpg',
    heroText: 'COMPRESSED AUTOMATION',
    subCategories: [
      {
            title: "Janatics Air Preparation Units (FRL)",
            tableHeaders: [
                  "Series",
                  "Component",
                  "Port Size",
                  "Stock Status"
            ],
            products: [
                  {
                        model: "F Series Air Filter",
                        size: "Air Filter",
                        maxPressure: "1/4\" to 1\"",
                        inStock: true,
                        variations: [
                              {
                                    partNumber: "F13613",
                                    specs: "Filter-1/4 (40Micron)",
                                    inStock: true
                              },
                              {
                                    partNumber: "F13613-A",
                                    specs: "Filter-1/4 (40Micron) Auto Drain",
                                    inStock: true
                              },
                              {
                                    partNumber: "F13613-MM",
                                    specs: "Filter-1/4 (40Micron) Metal Bowl",
                                    inStock: true
                              },
                              {
                                    partNumber: "F13614",
                                    specs: "Filter-1/4 (50Micron)",
                                    inStock: true
                              },
                              {
                                    partNumber: "F13615",
                                    specs: "Filter-1/4 (50Micron)",
                                    inStock: true
                              },
                              {
                                    partNumber: "F14623",
                                    specs: "Filter-3/8 (40Micron)",
                                    inStock: true
                              },
                              {
                                    partNumber: "F14623-A",
                                    specs: "Filter-3/8 (40Micron) Auto Drain",
                                    inStock: true
                              },
                              {
                                    partNumber: "F14623-MM",
                                    specs: "Filter-3/8 (40Micron) Metal Bowl",
                                    inStock: true
                              },
                              {
                                    partNumber: "F15630",
                                    specs: "Filter-1/2 (1Micron)",
                                    inStock: true
                              },
                              {
                                    partNumber: "F15631",
                                    specs: "Filter-1/2 (5Micron)",
                                    inStock: true
                              },
                              {
                                    partNumber: "F15632",
                                    specs: "Filter-1/2 (25Micron)",
                                    inStock: true
                              },
                              {
                                    partNumber: "F15633",
                                    specs: "Filter-1/2 (40Micron)",
                                    inStock: true
                              },
                              {
                                    partNumber: "F15633-A",
                                    specs: "Filter-1/2 (40Micron) Auto Drain",
                                    inStock: true
                              },
                              {
                                    partNumber: "F15633-MM",
                                    specs: "Filter-1/2 (40Micron) Metal Bowl",
                                    inStock: true
                              },
                              {
                                    partNumber: "F17643",
                                    specs: "Filter-3/4 (40Micron)",
                                    inStock: true
                              },
                              {
                                    partNumber: "F17643-A",
                                    specs: "Filter-3/4 (40Micron) Auto Drain",
                                    inStock: true
                              },
                              {
                                    partNumber: "F17643-MM",
                                    specs: "Filter-3/4 (40Micron) Metal Bowl",
                                    inStock: true
                              },
                              {
                                    partNumber: "F17644",
                                    specs: "Filter-3/4 (50Micron)",
                                    inStock: true
                              },
                              {
                                    partNumber: "F17650",
                                    specs: "Filter-1 (1Micron)",
                                    inStock: true
                              },
                              {
                                    partNumber: "F17651",
                                    specs: "Filter-1 (5Micron)",
                                    inStock: true
                              },
                              {
                                    partNumber: "F17653",
                                    specs: "Filter-1 (40Micron)",
                                    inStock: true
                              },
                              {
                                    partNumber: "F17653-A",
                                    specs: "Filter-1 (40Micron) Auto Drain",
                                    inStock: true
                              },
                              {
                                    partNumber: "F17653-MM",
                                    specs: "Filter-1 (40Micron) Metal Bowl",
                                    inStock: true
                              },
                              {
                                    partNumber: "F17654",
                                    specs: "Filter-1 (50Micron)",
                                    inStock: true
                              }
                        ]
                  },
                  {
                        model: "R Series Pressure Regulator",
                        size: "Pressure Regulator",
                        maxPressure: "1/4\" to 1\"",
                        inStock: true,
                        variations: [
                              {
                                    partNumber: "R13613",
                                    specs: "Regulator-1/4 (10bar)",
                                    inStock: true
                              },
                              {
                                    partNumber: "R13613-N",
                                    specs: "Regulator(NRV)-1/4 (10bar)",
                                    inStock: true
                              },
                              {
                                    partNumber: "R14624",
                                    specs: "Regulator-3/8 (10bar)",
                                    inStock: true
                              },
                              {
                                    partNumber: "R14624-N",
                                    specs: "Regulator(NRV)-3/8 (10bar)",
                                    inStock: true
                              },
                              {
                                    partNumber: "R15634",
                                    specs: "Regulator-1/2 (10bar)",
                                    inStock: true
                              },
                              {
                                    partNumber: "R15634-N",
                                    specs: "Regulator(NRV)-1/2 (10bar)",
                                    inStock: true
                              },
                              {
                                    partNumber: "R17643",
                                    specs: "Regulator-3/4 (10bar)",
                                    inStock: true
                              },
                              {
                                    partNumber: "R17643-N",
                                    specs: "Regulator(NRV)-3/4 (10bar)",
                                    inStock: true
                              },
                              {
                                    partNumber: "R17654",
                                    specs: "Regulator-1 (10bar)",
                                    inStock: true
                              },
                              {
                                    partNumber: "R17654-N",
                                    specs: "Regulator(NRV)-1 (10bar)",
                                    inStock: true
                              }
                        ]
                  },
                  {
                        model: "L Series Air Lubricator",
                        size: "Air Lubricator",
                        maxPressure: "1/4\" to 1\"",
                        inStock: true,
                        variations: [
                              {
                                    partNumber: "L1361",
                                    specs: "Lubricator-1/4",
                                    inStock: true
                              },
                              {
                                    partNumber: "L1361-M",
                                    specs: "Lubricator-1/4 Metal Bowl",
                                    inStock: true
                              },
                              {
                                    partNumber: "L1462",
                                    specs: "Lubricator-3/8",
                                    inStock: true
                              },
                              {
                                    partNumber: "L1462-M",
                                    specs: "Lubricator-3/8 Metal Bowl",
                                    inStock: true
                              },
                              {
                                    partNumber: "L1563",
                                    specs: "Lubricator-1/2",
                                    inStock: true
                              },
                              {
                                    partNumber: "L1563-M",
                                    specs: "Lubricator-1/2 Metal Bowl",
                                    inStock: true
                              },
                              {
                                    partNumber: "L1764",
                                    specs: "Lubricator-3/4",
                                    inStock: true
                              },
                              {
                                    partNumber: "L1764-M",
                                    specs: "Lubricator-3/4 Metal Bowl",
                                    inStock: true
                              },
                              {
                                    partNumber: "L1765",
                                    specs: "Lubricator-1",
                                    inStock: true
                              },
                              {
                                    partNumber: "L1765-M",
                                    specs: "Lubricator-1 Metal Bowl",
                                    inStock: true
                              }
                        ]
                  },
                  {
                        model: "FRC Series (FRL)",
                        size: "Combined FRL Unit",
                        maxPressure: "1/4\" to 1\"",
                        inStock: true,
                        variations: [
                              {
                                    partNumber: "FRC136104",
                                    specs: "FRC-1/4 (1Micron, 10bar)",
                                    inStock: true
                              },
                              {
                                    partNumber: "FRC136124",
                                    specs: "FRC-1/4 (25Micron, 10bar)",
                                    inStock: true
                              },
                              {
                                    partNumber: "FRC136134",
                                    specs: "FRC-1/4 (40Micron, 10bar)",
                                    inStock: true
                              },
                              {
                                    partNumber: "FRC146114",
                                    specs: "FRC-3/8 (5Micron, 10bar)",
                                    inStock: true
                              },
                              {
                                    partNumber: "FRC146134",
                                    specs: "FRC-3/8 (40Micron, 10bar)",
                                    inStock: true
                              },
                              {
                                    partNumber: "FRC156104",
                                    specs: "FRC-1/2 (1Micron, 10bar)",
                                    inStock: true
                              },
                              {
                                    partNumber: "FRC156114",
                                    specs: "FRC-1/2 (5Micron, 10bar)",
                                    inStock: true
                              },
                              {
                                    partNumber: "FRC156134",
                                    specs: "FRC-1/2 (40Micron, 10bar)",
                                    inStock: true
                              },
                              {
                                    partNumber: "FRC176134",
                                    specs: "FRC-3/4 (40Micron, 10bar)",
                                    inStock: true
                              },
                              {
                                    partNumber: "FRC176134",
                                    specs: "FRC-1 (40Micron, 10bar)",
                                    inStock: true
                              }
                        ]
                  }
            ]
      },
      {
            title: "Janatics Directional Control Valves",
            tableHeaders: [
                  "Series",
                  "Valve Type",
                  "Actuation",
                  "Stock Status"
            ],
            products: [
                  {
                        model: "DS Series Solenoid Valves",
                        size: "Spool Valve",
                        maxPressure: "1/8\" to 1/2\"",
                        inStock: true,
                        variations: [
                              {
                                    partNumber: "DS234SR60-W",
                                    specs: "1/8 5/2 Single Solenoid 24V DC",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS234SR60-A",
                                    specs: "1/8 5/2 Single Solenoid 220V AC",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS244SR60-W",
                                    specs: "1/4 5/2 Single Solenoid 24V DC",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS244SR60-A",
                                    specs: "1/4 5/2 Single Solenoid 220V AC",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS254SR60-W",
                                    specs: "1/2 5/2 Single Solenoid 24V DC",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS254SR60-A",
                                    specs: "1/2 5/2 Single Solenoid 220V AC",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS334SR60-W",
                                    specs: "1/8 5/2 Double Solenoid 24V DC",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS334SR60-A",
                                    specs: "1/8 5/2 Double Solenoid 220V AC",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS344SR60-W",
                                    specs: "1/4 5/2 Double Solenoid 24V DC",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS344SR60-A",
                                    specs: "1/4 5/2 Double Solenoid 220V AC",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS354SR60-W",
                                    specs: "1/2 5/2 Double Solenoid 24V DC",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS354SR60-A",
                                    specs: "1/2 5/2 Double Solenoid 220V AC",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS434SR60-W",
                                    specs: "1/8 5/3 Center Closed 24V DC",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS434SR60-A",
                                    specs: "1/8 5/3 Center Closed 220V AC",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS444SR60-W",
                                    specs: "1/4 5/3 Center Closed 24V DC",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS444SR60-A",
                                    specs: "1/4 5/3 Center Closed 220V AC",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS454SR60-W",
                                    specs: "1/2 5/3 Center Closed 24V DC",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS454SR60-A",
                                    specs: "1/2 5/3 Center Closed 220V AC",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS534SR60-W",
                                    specs: "1/8 3/2 Single Solenoid 24V DC",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS534SR60-A",
                                    specs: "1/8 3/2 Single Solenoid 220V AC",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS544SR60-W",
                                    specs: "1/4 3/2 Single Solenoid 24V DC",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS544SR60-A",
                                    specs: "1/4 3/2 Single Solenoid 220V AC",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS554SR60-W",
                                    specs: "1/2 3/2 Single Solenoid 24V DC",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS554SR60-A",
                                    specs: "1/2 3/2 Single Solenoid 220V AC",
                                    inStock: true
                              }
                        ]
                  },
                  {
                        model: "Manual & Mechanical Valves",
                        size: "Hand/Foot/Push",
                        maxPressure: "1/8\" to 1/2\"",
                        inStock: true,
                        variations: [
                              {
                                    partNumber: "DS245HD61 (1/8)",
                                    specs: "1/8 Hand Lever Detent Valve",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS245PD61 (1/8)",
                                    specs: "1/8 Push Pull Valve",
                                    inStock: true
                              },
                              {
                                    partNumber: "DP055F61 (1/8)",
                                    specs: "1/8 Foot Operated Valve",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS245HD61 (1/4)",
                                    specs: "1/4 Hand Lever Detent Valve",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS245PD61 (1/4)",
                                    specs: "1/4 Push Pull Valve",
                                    inStock: true
                              },
                              {
                                    partNumber: "DP055F61 (1/4)",
                                    specs: "1/4 Foot Operated Valve",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS245HD61 (1/2)",
                                    specs: "1/2 Hand Lever Detent Valve",
                                    inStock: true
                              },
                              {
                                    partNumber: "DS245PD61 (1/2)",
                                    specs: "1/2 Push Pull Valve",
                                    inStock: true
                              },
                              {
                                    partNumber: "DP055F61 (1/2)",
                                    specs: "1/2 Foot Operated Valve",
                                    inStock: true
                              }
                        ]
                  },
                  {
                        model: "Solenoid Coils & Connectors",
                        size: "Accessories",
                        maxPressure: "Various",
                        inStock: true,
                        variations: [
                              {
                                    partNumber: "AC11A",
                                    specs: "32mm Coil 220V AC 6W",
                                    inStock: true
                              },
                              {
                                    partNumber: "AC11B",
                                    specs: "32mm Coil 110V AC 6W",
                                    inStock: true
                              },
                              {
                                    partNumber: "AC11G",
                                    specs: "32mm Coil 24V AC 6W",
                                    inStock: true
                              },
                              {
                                    partNumber: "DC24W",
                                    specs: "Coil Assy 24V DC",
                                    inStock: true
                              },
                              {
                                    partNumber: "42069",
                                    specs: "Manifold (Single)",
                                    inStock: true
                              },
                              {
                                    partNumber: "42070",
                                    specs: "Manifold (2 Valves)",
                                    inStock: true
                              },
                              {
                                    partNumber: "M0030104",
                                    specs: "Manifold (4 Valves) DS2-1/8\"",
                                    inStock: true
                              }
                        ]
                  }
            ]
      },
      {
            title: "Janatics Pneumatic Connectors",
            tableHeaders: [
                  "Product Line",
                  "Material",
                  "Connection Type",
                  "Stock Status"
            ],
            products: [
                  {
                        model: "Straight Union",
                        size: "Plastic/Brass",
                        maxPressure: "Dia 4 to 16",
                        inStock: true,
                        variations: [
                              {
                                    partNumber: "WP2100404",
                                    specs: "Straight Union Dia 4",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP2100606",
                                    specs: "Straight Union Dia 6",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP2100808",
                                    specs: "Straight Union Dia 8",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP2101010",
                                    specs: "Straight Union Dia 10",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP2101212",
                                    specs: "Straight Union Dia 12",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP2101414",
                                    specs: "Straight Union Dia 14",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP2101616",
                                    specs: "Straight Union Dia 16",
                                    inStock: true
                              }
                        ]
                  },
                  {
                        model: "Male Connector",
                        size: "Plastic/Brass",
                        maxPressure: "Dia 4 to 16, M5 to 1/2\"",
                        inStock: true,
                        variations: [
                              {
                                    partNumber: "WP211450",
                                    specs: "Male Connector Dia 4 x 1/8",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP211451",
                                    specs: "Male Connector Dia 4 x 1/4",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP211452",
                                    specs: "Male Connector Dia 4 x 3/8",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP211453",
                                    specs: "Male Connector Dia 4 x 1/2",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP211470",
                                    specs: "Male Connector Dia 4 x M5",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP211650",
                                    specs: "Male Connector Dia 6 x 1/8",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP211651",
                                    specs: "Male Connector Dia 6 x 1/4",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP211652",
                                    specs: "Male Connector Dia 6 x 3/8",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP211653",
                                    specs: "Male Connector Dia 6 x 1/2",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP211670",
                                    specs: "Male Connector Dia 6 x M5",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP211850",
                                    specs: "Male Connector Dia 8 x 1/8",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP211851",
                                    specs: "Male Connector Dia 8 x 1/4",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP211852",
                                    specs: "Male Connector Dia 8 x 3/8",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP211853",
                                    specs: "Male Connector Dia 8 x 1/2",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP211870",
                                    specs: "Male Connector Dia 8 x M5",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP2111050",
                                    specs: "Male Connector Dia 10 x 1/8",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP2111051",
                                    specs: "Male Connector Dia 10 x 1/4",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP2111052",
                                    specs: "Male Connector Dia 10 x 3/8",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP2111053",
                                    specs: "Male Connector Dia 10 x 1/2",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP2111070",
                                    specs: "Male Connector Dia 10 x M5",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP2111250",
                                    specs: "Male Connector Dia 12 x 1/8",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP2111251",
                                    specs: "Male Connector Dia 12 x 1/4",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP2111252",
                                    specs: "Male Connector Dia 12 x 3/8",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP2111253",
                                    specs: "Male Connector Dia 12 x 1/2",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP2111270",
                                    specs: "Male Connector Dia 12 x M5",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP211450",
                                    specs: "Male Connector Dia 14 x 1/8",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP211451",
                                    specs: "Male Connector Dia 14 x 1/4",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP211452",
                                    specs: "Male Connector Dia 14 x 3/8",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP211453",
                                    specs: "Male Connector Dia 14 x 1/2",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP211470",
                                    specs: "Male Connector Dia 14 x M5",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP211450",
                                    specs: "Male Connector Dia 16 x 1/8",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP211451",
                                    specs: "Male Connector Dia 16 x 1/4",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP211452",
                                    specs: "Male Connector Dia 16 x 3/8",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP211453",
                                    specs: "Male Connector Dia 16 x 1/2",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP211470",
                                    specs: "Male Connector Dia 16 x M5",
                                    inStock: true
                              }
                        ]
                  },
                  {
                        model: "Union Elbow",
                        size: "Plastic/Brass",
                        maxPressure: "Dia 4 to 16",
                        inStock: true,
                        variations: [
                              {
                                    partNumber: "WP2200404",
                                    specs: "Union Elbow Dia 4",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP2200606",
                                    specs: "Union Elbow Dia 6",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP2200808",
                                    specs: "Union Elbow Dia 8",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP2201010",
                                    specs: "Union Elbow Dia 10",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP2201212",
                                    specs: "Union Elbow Dia 12",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP2201414",
                                    specs: "Union Elbow Dia 14",
                                    inStock: true
                              },
                              {
                                    partNumber: "WP2201616",
                                    specs: "Union Elbow Dia 16",
                                    inStock: true
                              }
                        ]
                  },
                  {
                        model: "Polyurethane (PU) Tubing",
                        size: "Polyurethane",
                        maxPressure: "OD 4 to 16",
                        inStock: true,
                        variations: [
                              {
                                    partNumber: "WH00B04",
                                    specs: "TUBE(PU) OD4 (Blue)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00K04",
                                    specs: "TUBE(PU) OD4 (Black)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00R04",
                                    specs: "TUBE(PU) OD4 (Red)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00T04",
                                    specs: "TUBE(PU) OD4 (Transparent)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00Y04",
                                    specs: "TUBE(PU) OD4 (Yellow)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00B06",
                                    specs: "TUBE(PU) OD6 (Blue)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00K06",
                                    specs: "TUBE(PU) OD6 (Black)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00R06",
                                    specs: "TUBE(PU) OD6 (Red)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00T06",
                                    specs: "TUBE(PU) OD6 (Transparent)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00Y06",
                                    specs: "TUBE(PU) OD6 (Yellow)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00B08",
                                    specs: "TUBE(PU) OD8 (Blue)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00K08",
                                    specs: "TUBE(PU) OD8 (Black)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00R08",
                                    specs: "TUBE(PU) OD8 (Red)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00T08",
                                    specs: "TUBE(PU) OD8 (Transparent)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00Y08",
                                    specs: "TUBE(PU) OD8 (Yellow)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00B10",
                                    specs: "TUBE(PU) OD10 (Blue)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00K10",
                                    specs: "TUBE(PU) OD10 (Black)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00R10",
                                    specs: "TUBE(PU) OD10 (Red)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00T10",
                                    specs: "TUBE(PU) OD10 (Transparent)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00Y10",
                                    specs: "TUBE(PU) OD10 (Yellow)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00B12",
                                    specs: "TUBE(PU) OD12 (Blue)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00K12",
                                    specs: "TUBE(PU) OD12 (Black)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00R12",
                                    specs: "TUBE(PU) OD12 (Red)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00T12",
                                    specs: "TUBE(PU) OD12 (Transparent)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00Y12",
                                    specs: "TUBE(PU) OD12 (Yellow)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00B14",
                                    specs: "TUBE(PU) OD14 (Blue)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00K14",
                                    specs: "TUBE(PU) OD14 (Black)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00R14",
                                    specs: "TUBE(PU) OD14 (Red)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00T14",
                                    specs: "TUBE(PU) OD14 (Transparent)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00Y14",
                                    specs: "TUBE(PU) OD14 (Yellow)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00B16",
                                    specs: "TUBE(PU) OD16 (Blue)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00K16",
                                    specs: "TUBE(PU) OD16 (Black)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00R16",
                                    specs: "TUBE(PU) OD16 (Red)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00T16",
                                    specs: "TUBE(PU) OD16 (Transparent)",
                                    inStock: true
                              },
                              {
                                    partNumber: "WH00Y16",
                                    specs: "TUBE(PU) OD16 (Yellow)",
                                    inStock: true
                              }
                        ]
                  },
                  {
                        model: "Flow Control & Silencers",
                        size: "Brass/Plastic",
                        maxPressure: "Various",
                        inStock: true,
                        variations: [
                              {
                                    partNumber: "C7022",
                                    specs: "Flow control valve (Exhaust)",
                                    inStock: true
                              },
                              {
                                    partNumber: "GR5136464",
                                    specs: "3/4\" Flow control valve",
                                    inStock: true
                              },
                              {
                                    partNumber: "AS0160",
                                    specs: "Silencer 1/8",
                                    inStock: true
                              },
                              {
                                    partNumber: "AS0161",
                                    specs: "Silencer 1/4",
                                    inStock: true
                              },
                              {
                                    partNumber: "ASB0160",
                                    specs: "Silencer (Button)",
                                    inStock: true
                              },
                              {
                                    partNumber: "GQ0150",
                                    specs: "Quick Exhaust Valve 1/8",
                                    inStock: true
                              },
                              {
                                    partNumber: "GQ0151",
                                    specs: "Quick Exhaust Valve 1/4",
                                    inStock: true
                              }
                        ]
                  }
            ]
      }
]
  },
  'compressors': {
    id: 'compressors',
    brand: 'AEC, ELGI, Atlas Copco, Kirloskar, Ingersoll Rand',
    name: 'Air Compressors & Spares',
    desc: 'Amal Engg Manufactured Compressors, Global Brand Spares, and Air Automation Accessories.',
    img: '/booklet/blue-compressor.png',
    heroText: 'INDUSTRIAL AIR COMPRESSION',
    subCategories: [
      {
        title: 'Amal Engg Manufactured Compressors',
        tableHeaders: ['Model Series', 'Compressor Type', 'Key Specifications', 'Stock Status'],
        products: [
          { model: 'AEC Lubricated Rotary Screw', size: 'Oil-Injected Screw', maxPressure: '11kW - 250kW | 7 - 13 Bar | High Efficiency', inStock: true },
          { model: 'AEC Oil-Free Rotary Screw', size: 'Oil-Free Screw', maxPressure: '15kW - 300kW | ISO Class 0 Air | 7 - 10 Bar', inStock: true },
          { model: 'AEC Heavy Duty Reciprocating', size: 'Piston Compressor', maxPressure: '3HP - 20HP | 8 - 12 Bar | Cast Iron Block', inStock: true },
          { model: 'AEC Oil-Free Scroll', size: 'Scroll Compressor', maxPressure: '2kW - 22kW | Ultra Quiet | 8 Bar', inStock: true },
          { model: 'AEC Variable Speed Drive (VSD)', size: 'VSD Screw', maxPressure: 'Energy Saving | 22kW - 160kW | 7 - 10 Bar', inStock: true },
        ]
      },
      {
        title: 'Genuine Compressor Spares',
        tableHeaders: ['Part Type', 'Compatible Brands', 'Application', 'Stock Status'],
        products: [
          { model: 'Air Filters', size: 'ELGI, Atlas Copco, KND', maxPressure: 'Intake Filtration', inStock: true },
          { model: 'Oil Filters', size: 'All Major Brands', maxPressure: 'Lubrication System', inStock: true },
          { model: 'Air/Oil Separators', size: 'Screw Compressors', maxPressure: 'Oil Removal', inStock: true },
          { model: 'Auto Drain Valves', size: 'Universal', maxPressure: 'Moisture Removal', inStock: true },
          { model: 'Service Kits', size: '500h, 1000h, 2000h', maxPressure: 'Maintenance', inStock: true },
        ]
      },
      {
        title: 'Air Accessories',
        tableHeaders: ['Equipment', 'Type', 'Specification', 'Stock Status'],
        products: [
          { model: 'Air Receivers', size: 'Vertical / Horizontal', maxPressure: 'High Capacity Storage', inStock: true },
          { model: 'Refrigerated Air Dryers', size: 'Moisture Control', maxPressure: 'Dry Air Supply', inStock: true },
          { model: 'Desiccant Air Dryers', size: 'Ultra Dry Air', maxPressure: 'Specialized Processes', inStock: true },
        ]
      }
    ]
  }
};
