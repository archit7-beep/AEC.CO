#  Amal Engineering Corporation (AEC)

[![Next.js](https://img.shields.io/badge/Next.js-16.2.7-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL_3D-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-black?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

> **Industrial Power. Intelligent Control.**  
> Established in 2008 in Pune, India, **Amal Engineering Corporation** is an ISO 9001:2015 certified manufacturer, authorized distributor, and solutions provider specializing in heavy-duty compressed air infrastructure, pneumatic automation, and high-tolerance fluid power systems.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Key Features & User Experience](#-key-features--user-experience)
- [Tech Stack](#-tech-stack)
- [Site Architecture & Routes](#-site-architecture--routes)
- [Project Directory Structure](#-project-directory-structure)
- [Data Architecture](#-data-architecture)
- [SEO & Structured Data](#-seo--structured-data)
- [Performance & Optimization](#-performance--optimization)
- [Corporate Information](#-corporate-information)

---

##  Overview

Amal Engineering Corporation (AEC) delivers zero-tolerance fluid power and compressed air engineering solutions for high-stakes industrial operations across India. 

This platform serves as AEC's primary digital catalog, engineering showroom, and client technical portal — showcasing manufactured compressors, authorized brand distribution lines, technical specification sheets, and 10,000+ OEM replacement components.

### Core Business Verticals
- **Compressor Manufacturing:** High-duty Rotary Screw Compressors, Reciprocating Piston Compressors, Refrigerated Air Dryers, In-line Filtration, and Auto Drain Valves.
- **Authorized Distribution:** Premier authorized dealer for **Janatics Pneumatics**, **Kelvin Compressors**, and partner for global hydraulic leaders including **Yuken**, **Polyhydron**, **Hydroline**, **Hyloc**, **MASS**, **EPE**, **Faster**, and **Danfoss**.
- **Services & Rentals:** 24/7 pan-India emergency spares support, certified compressor overhauls, custom hydraulic manifold blocks, and industrial rental fleets.

---

##  Key Features & User Experience

### 1.  Precision Brutalist & Blueprint Aesthetic
- High-contrast, industrial-grade design language matching modern technical engineering aesthetics.
- Seamless Dark and Light theme switching powered by `next-themes` with custom hardware-accelerated background gradients and technical drafting blueprint grids.
- Smooth inertial scrolling powered by **Lenis** (`lenis/react`).

### 2.  Interactive 3D WebGL Compressor Viewer
- Built on **Three.js**, **React Three Fiber** (`@react-three/fiber`), and **Drei** (`@react-three/drei`).
- Renders responsive 3D industrial compressor assemblies (`.glb` / `.gltf`) with orbit controls, interactive lighting, and hardware-accelerated canvas integration.

### 3.  Dedicated Air Compressor Hub (`/products/compressors`)
- Bespoke SaaS interactive view showcasing the flagship compression line.
- Dynamic expandable category cards: **Screw Compressors**, **Piston Compressors**, **Air Dryers**, and **Spare Parts**.
- Interactive **System Component Map** highlighting unloader lines, in-tank check valves, electric motors, pressure adjustment dials, and drain ports.
- Deep-linking URL hash listener (`#piston`, `#spares`, `#air`, `#dryer`) with automatic smooth scrolling and block expansion.

### 4.  Technical Specifications Matrix (`/products/[category]`)
- Data-driven technical tables displaying 10,000+ configurations with part numbers, bore sizes, operating pressures, flow rates, and stock statuses.
- Expandable product variation drawers for granular industrial part lookups.
- Direct PDF technical booklet and spec sheet downloads.

### 5.  Real-Time Global Search Modal (`Ctrl + K`)
- Instant keyboard-accessible modal search (`SearchModal.tsx`).
- Searches across categories, model numbers, specifications, and authorized brand names in real-time.

### 6.  Dynamic Partner Marquees & Sector Grid
- Infinite ticker showcasing authorized brand certifications and pan-India dispatch announcements.
- Interactive **Sectors We Empower** interactive masonry grid (Manufacturing, Construction, Oil & Gas, Automotive, Chemical Plants, Power Generation, Water Treatment, Aerospace).

---

## 🛠 Tech Stack

| Category | Technology | Description |
|---|---|---|
| **Framework** | **Next.js 16.2.7** | App Router, Turbopack, Server-Side Rendering (SSR), Server Components |
| **Language** | **TypeScript 5.x** | Fully typed interfaces for catalog data, variations, and layouts |
| **UI Library** | **React 19.2.4** | Latest React concurrent primitives & hooks |
| **Styling** | **Tailwind CSS v4** | Modern utility-first CSS engine with `@tailwindcss/postcss` |
| **Animation** | **Framer Motion 12.x** | Kinetic layout transitions, spring physics, and scroll reveals |
| **3D Graphics** | **Three.js & R3F** | WebGL 3D model rendering, scene lighting, and orbit interactions |
| **Smooth Scroll** | **Lenis 1.3** | Smooth inertial scrolling throughout the experience |
| **Icons** | **Lucide React & React Icons** | Industrial, electrical, and brand glyphs |
| **Theming** | **Next Themes** | Persistent dark/light mode state management |

---

## 🗺 Site Architecture & Routes

| Route | Type | Description |
|---|---|---|
| `/` | Static | Homepage featuring Hero, Partner Certifications, Sector Grid, Services, Why Choose Us, and Contact forms |
| `/about` | Static | Corporate history (Est. 2008), ISO standards, manufacturing highlights, and authorized distribution credentials |
| `/products` | Static | Master catalog category grid showcasing all 7 core fluid power & pneumatic divisions |
| `/products/[category]` | Dynamic (SSG) | Technical specifications table and category overview (Hoses, Couplings, Pneumatics, Pumps, Fittings, Steering, Compressors) |
| `/products/compressors` | Dynamic (Bespoke) | Dedicated SaaS Air Compressor matrix with expandable series cards, 3D links, and schematic diagrams |
| `/brands/[brand]` | Dynamic (SSG) | Authorized brand profile pages (Yuken, Polyhydron, Hydroline, Hyloc, etc.) |
| `/industries` | Static | Dedicated breakdown of global industry sectors powered by AEC systems |
| `/contact` | Static | Direct Pune office contact lines, dispatch address, RFQ form, and operational hours |
| `/sitemap.xml` | Dynamic Metadata | Automatically generated XML sitemap mapping every page and catalog route |
| `/robots.txt` | Dynamic Metadata | Crawler rules directing search engine spiders to the sitemap |

---

## 📂 Project Directory Structure

```text
AME/
├── public/
│   ├── booklet/               # High-resolution product images, transparent cutouts & PDFs
│   │   ├── 3d air comp/       # 3D GLB/CAD models and renders
│   │   ├── Air Compressor Spec.pdf
│   │   ├── new-air-compressor.png
│   │   ├── piston-compressor.png
│   │   ├── screw-compressor.png
│   │   ├── compressor-components.png
│   │   └── ...
│   ├── logos/                 # Partner brand SVGs and vector assets
│   └── grid-pattern.svg       # Blueprint layout vectors
├── src/
│   ├── app/                   # Next.js App Router (Routes & Layouts)
│   │   ├── layout.tsx         # Global layout, fonts, JSON-LD schema & theme wrapper
│   │   ├── page.tsx           # Homepage composition
│   │   ├── about/page.tsx     # Corporate about page
│   │   ├── brands/[brand]/    # Authorized brand showcase pages
│   │   ├── contact/page.tsx   # Contact and RFQ page
│   │   ├── industries/page.tsx# Industrial sectors page
│   │   ├── products/
│   │   │   ├── page.tsx       # Global product catalog grid
│   │   │   └── [category]/    # Dynamic category table & compressor router
│   │   ├── robots.ts          # Dynamic robots.txt generation
│   │   └── sitemap.ts         # Dynamic sitemap.xml generation
│   ├── components/            # Reusable UI & Feature Components
│   │   ├── CategoryGrid.tsx   # Master product category showcase cards
│   │   ├── ClientThemeWrapper.tsx # Persistent dark/light blueprint wrapper
│   │   ├── Compressor3DViewer.tsx # Three.js WebGL model viewer
│   │   ├── CompressorBlocks.tsx   # Expandable product cards & specs
│   │   ├── CompressorSaaSPage.tsx # Flagship air compressor page
│   │   ├── ContactSection.tsx # Inquiry & RFQ contact form
│   │   ├── Hero.tsx           # Kinetic entrance header
│   │   ├── InformationSections.tsx # Sectors, Services & Value Proposition
│   │   ├── Navbar.tsx         # Primary navigation with mega-menu & marquee
│   │   ├── NavbarSaaS.tsx     # Specialized minimal navbar for compressor page
│   │   ├── PortfolioSections.tsx  # Installation gallery & partner brand cycle
│   │   ├── ProductTable.tsx   # Technical table matrix for specifications
│   │   ├── SearchModal.tsx    # Global catalog quick-search modal
│   │   └── SmoothScroll.tsx   # Lenis smooth scroll provider
│   └── data/                  # Centralized Content & Catalog Databases
│       ├── catalogData.ts     # Master product database (10,000+ entries, specs, variations)
│       ├── home.tsx           # Homepage content (Industries, Partners, Services, Features)
│       └── inventory.ts       # Store and stock interfaces
├── next.config.ts             # Next.js compiler & image optimization settings
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript compiler configurations
└── README.md
```

---

##  Data Architecture

To ensure clean code separation, content is **completely decoupled from UI rendering logic**:

- **`src/data/catalogData.ts`**: Centralized single source of truth for all product lines. Defines schemas for `ProductVariation`, `ProductRow`, `SubCategory`, and `CatalogCategory`.
- **`src/data/home.tsx`**: Contains arrays for homepage partner logos (`PARTNERS`), industry verticals (`INDUSTRIES`), featured gallery images (`PORTFOLIO_IMAGES`), and value propositions (`FEATURES`).
- **`src/data/inventory.ts`**: Store and stock interfaces for parts availability.
- **Editing Content**: To add new products, update specifications, or update partner logos, simply modify the records in `src/data/` without altering complex layout components.

---

##  SEO & Structured Data

The platform follows rigorous white-hat SEO practices:

1. **Semantic HTML5 & Headings**: Structured `H1` > `H2` > `H3` hierarchy across all pages.
2. **Schema.org Structured Data (JSON-LD)**:
   - **`LocalBusiness` Schema**: Located in `<head>` of `src/app/layout.tsx` to provide Google Maps and local business panels with verified Pune headquarters details, phone numbers, and operational hours.
   - **`Product` & `AggregateOffer` Schema**: Injected into `src/app/products/[category]/page.tsx` for rich snippet indexing, price currency, brand verification, and stock status.
3. **OpenGraph & Twitter Cards**: Dynamic social sharing cards generated across all standard pages and programmatic brand routes.
4. **Descriptive Image Alt Text**: Descriptive, keyword-rich alternative text applied to every product rendering, schematic, and facility photo.
5. **Automated XML Sitemap**: Generated via `src/app/sitemap.ts` at `/sitemap.xml`, automatically mapping newly created categories on build.
6. **Robots Configuration**: Generated via `src/app/robots.ts` at `/robots.txt` directing crawlers to the canonical sitemap.

---

##  Performance & Optimization

- **Next.js Image Optimization**: Configured to serve WebP/AVIF next-generation formats, lazy load offscreen assets, and prevent layout shift with explicit `sizes` definitions.
- **Hardware Acceleration**: Background blurs and mesh gradients utilize `transform-gpu` and `will-change-transform` to delegate rendering to the client's GPU, preserving smooth 60fps scrolling.
- **Code Splitting**: Route-level automatic splitting via Next.js App Router for minimal first-load JS bundles.

---

##  Corporate Information

**Amal Engineering Corporation**  
*Engineering Reliability Since 2008*

- **Headquarters & Works:** Shop No. 2, Near Hockey Stadium, Nehrunagar, Pimpri, Pune – 411018, Maharashtra, India
- **Direct Phone Lines:** `+91 9860 222 875` / `+91 7620 510 747`
- **Email Inquiries:** `amalengcorp@gmail.com`
- **Operating Hours:** Monday – Sunday, 09:30 – 20:00 IST
- **Quality Certification:** ISO 9001:2015 Quality Management Certified

---

### 📄 Proprietary Notice
*Copyright © 2008–2026 Amal Engineering Corporation. All rights reserved.*
