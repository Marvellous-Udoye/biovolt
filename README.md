# BioVolt

**BioVolt** is a climate and sustainability tech platform designed to address the critical urban waste and energy supply gap in Lagos, Nigeria. By acting as an asset-light, coordinate-and-routing digital layer, BioVolt connects waste generators (households, markets, estates) with collection logistics, recycling partners, and micro-biodigesters to convert sorted organic waste into renewable electrical energy.

---

## The Problem
* **Lagos Waste Crisis**: Lagos generates over **14,000 tonnes** of municipal solid waste daily. Due to lack of sorting at source, organic material, recyclable plastics, and residuals are mixed together, making recycling and recovery extremely inefficient.
* **Methane Emissions**: Rotting organic waste in open landfills releases large volumes of methane ($CH_4$), a greenhouse gas over 25x more potent than $CO_2$ at trapping atmospheric heat.
* **The Energy Supply Gap**: Persistent grid interruptions (NEPA/PHCN outages) force communities and businesses to rely on expensive, polluting diesel generators.

---

## The Solution
BioVolt bridges this coordination gap with a digital routing and calculation ecosystem:
1. **Asset-Light Orchestration**: Instead of owning recycling plants or biodigesters, BioVolt acts as the logistics and data connector (the "Uber of waste-to-value").
2. **Dynamic Waste Routing**:
   * **Organics**: Routed to micro-biodigesters for anaerobic digestion to produce biogas.
   * **Plastics & Recyclables**: Handled by washing/melting processes and sent to recovery partners.
   * **Residuals**: Monitored and targeted for minimization.
3. **Estimation Engine**: Allows users to input organic feedstock types (food scraps, manure, agricultural waste) and retrieve live, verified projections of energy yield.

---

## Scientific Assumptions & Formulas
The estimation engine runs on established biological midpoint assumptions validated through OpenModelica ADM1 simulations:

* **Biochemical Methane Potential (BMP)**:
  * **Food waste**: $0.08 \text{ m}^3 \text{ CH}_4/\text{kg}$
  * **Market/vegetable waste**: $0.06 \text{ m}^3 \text{ CH}_4/\text{kg}$
  * **Garden/agricultural waste**: $0.05 \text{ m}^3 \text{ CH}_4/\text{kg}$
  * **Animal manure**: $0.03 \text{ m}^3 \text{ CH}_4/\text{kg}$
* **Raw Biogas Composition**: Assumes a $60\%$ methane fraction (the rest is primarily $CO_2$ and trace moisture/$H_2S$ removed during gas cleaning).
* **Electricity Conversion**: $1 \text{ m}^3 \text{ methane} \approx 3.7 \text{ kWh}$ of electricity through a Combined Heat and Power (CHP) engine.
* **Lagos Household Metric**: Average daily consumption is framed at $4 \text{ kWh}$ per household per day.
* **Digestate Recovery**: $90\%$ of organic input mass remains as nutrient-rich bio-fertilizer.
* **Emissions Offset**: Avoids $0.7 \text{ kg } CO_2e$ per kWh against standard diesel generators.

---

## Simulation Tools Used
* **AnyLogic PLE**: Simulates spatial collection logistics, waste pickup trucks, sorting hubs, and biodigester queue times across Lagos.
* **OpenModelica**: Simulates the biochemistry of the 4 stages of Anaerobic Digestion (Hydrolysis, Acidogenesis, Acetogenesis, Methanogenesis).
* **SuperPro Designer**: Models capital expenditures (CAPEX), operational expenses (OPEX), and returns on investment (ROI).

---

## Tech Stack
* **Framework**: Next.js (App Router, Turbopack) & React 19
* **Styling**: Tailwind CSS & CSS Variables
* **Icons**: Lucide React
* **Components**: Custom Radix Select and UI elements
* **Interactions**: Scroll-triggered animations via `IntersectionObserver`

---

## Getting Started

First, install dependencies:
```bash
npm install
# or
pnpm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.
