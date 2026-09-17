/**
 * Crystal Clear Commercial Services Limited
 * Main Web Application Scripts
 */

// 1. Comprehensive 13-Service Specifications Database
const serviceSpecs = {
  'commercial-contract': {
    title: 'Commercial & Contract Cleaning',
    category: 'Daily & Contract Programs',
    icon: 'fa-briefcase',
    desc: 'Bespoke scheduled commercial cleaning tailored for single or multi-tenant office buildings, corporate parks, and institutional facilities.',
    scope: [
      'Daily, bi-weekly or custom contracted cleaning routines',
      'Dedicated on-site cleaning supervisor and London account manager',
      'Colour-coded infection control and hygiene protocols',
      'Waste management, recycling segregation and confidential shredding handling',
      'Regular KPI quality audits with documented sign-off checklists'
    ],
    equipment: 'Industrial HEPA vacuums, eco-friendly COSHH-certified chemicals, microfiber dusting tools',
    frequency: 'Daily (5–7 days/week), evening, early morning or weekend routines'
  },
  'daily-office': {
    title: 'Daily Office Cleaning',
    category: 'Workplace Hygiene',
    icon: 'fa-desktop',
    desc: 'Comprehensive daily workplace maintenance designed to boost office productivity, employee wellness, and corporate professionalism.',
    scope: [
      'Sanitisation of desks, computer keyboards, monitors and phones',
      'Kitchenette, coffee machine, microwave and fridge interior upkeep',
      'High-touch point disinfection (door handles, lift buttons, handrails)',
      'Boardroom and executive meeting suite presentation cleans',
      'Washroom deep scrub, descaling and air freshening'
    ],
    equipment: 'Antiviral fogging agents, electrostatic sprayers, quiet-operation commercial vacuums',
    frequency: 'Daily out-of-hours (evening 6pm–10pm or morning 6am–8am)'
  },
  'retail-venue': {
    title: 'Retail & Venue Cleaning',
    category: 'Customer Experience',
    icon: 'fa-shop',
    desc: 'High-standard presentation cleaning for luxury retail stores, flagship boutiques, shopping centers, art galleries, and entertainment venues.',
    scope: [
      'Streak-free glass display cases, mirrors, and storefront windows',
      'High-gloss floor polishing, marble buffing, and debris clearing',
      'Fitting rooms, staff break areas, and stockroom cleaning',
      'Pre-event venue preparation and post-event rapid turnaround',
      'Day-porter attendance during peak shopping and visitor hours'
    ],
    equipment: 'Battery-powered rotary floor polishers, streak-free glass solutions, compact scrubbers',
    frequency: 'Pre-opening morning cleans, continuous daytime porters, post-event turnarounds'
  },
  'property-construction': {
    title: 'Property & Construction Cleaning',
    category: 'Builders & Handover',
    icon: 'fa-hard-hat',
    desc: 'Heavy-duty post-construction, renovation and sparkle cleans ensuring properties are 100% handover-ready for landlords, developers, and architects.',
    scope: [
      'Phase 1: Rough clean (rubble, plaster, paint splatters, silicon residue)',
      'Phase 2: Builders deep clean (fixtures, tiles, joinery, glass scraping)',
      'Phase 3: Final sparkle clean for client inspection and handover',
      'CSCS-certified cleaning operatives with full PPE compliant with site RAMS',
      'Pressure washing of exterior pathways, brickwork, and entrances'
    ],
    equipment: 'Industrial wet/dry dust extractors, paint scrapers, high-pressure steam washers',
    frequency: 'Project-based phased milestones or emergency quick handover'
  },
  'deep-cleaning': {
    title: 'Deep Cleaning & Sanitisation',
    category: 'Intensive Decontamination',
    icon: 'fa-spray-can-sparkles',
    desc: 'Extensive, exhaustive sanitisation penetrating beneath surface dirt to restore high-hygiene standards across commercial premises.',
    scope: [
      'Deep steam extraction of grout lines, sanitary fixtures and tile walls',
      'Kitchen deep cleaning: ovens, extraction canopies, splashbacks',
      'Behind and beneath heavy equipment, server rack enclosures, and vents',
      'Wall and ceiling washing, light diffusers, and air conditioning louvres',
      'Post-tenancy end-of-lease dilapidation cleans'
    ],
    equipment: 'High-temperature dry steam generators, rotary scrubbing machines, enzyme degreasers',
    frequency: 'Quarterly, bi-annually, annual deep cleans or lease transitions'
  },
  'handyman-services': {
    title: 'Handyman & Maintenance Services',
    category: 'Facilities Support',
    icon: 'fa-wrench',
    desc: 'Practical building maintenance and repairs to keep commercial properties operating smoothly without having to juggle multiple contractors.',
    scope: [
      'Commercial lighting maintenance and energy-saving LED upgrades',
      'Drywall patching, plaster repairs, touch-up painting and caulking',
      'Office furniture assembly, desk relocation, whiteboard and bracket mounting',
      'Door closures, lock adjustments, window latch repairs and hinge lubrication',
      'Minor plumbing fixes: tap washer replacement, unblocking, sealant renewal'
    ],
    equipment: 'Comprehensive commercial trades toolkit, drill sets, safety ladders, test meters',
    frequency: 'Scheduled monthly maintenance rounds or on-call emergency repairs'
  },
  'window-cleaning': {
    title: 'Window & Glass Partition Cleaning',
    category: 'Clarity & Presentation',
    icon: 'fa-wand-magic-sparkles',
    desc: 'Internal glass partition maintenance and external high-reach pure-water systems delivering streak-free clarity for corporate buildings.',
    scope: [
      'Pure deionised water fed-pole cleaning up to 60ft from the ground safely',
      'Internal glass partitions, conference room walls, and glass balustrades',
      'Shopfront windows, signage, and exterior fascias',
      'Atrium glass, skylights, and solar panel cleaning',
      'Residue-free and chemical-free spot-free drying'
    ],
    equipment: 'Water-fed telescopic carbon fibre poles, reverse osmosis purification tanks, squeegee kits',
    frequency: 'Weekly, fortnightly, monthly or custom periodic cycles'
  },
  'janitorial-services': {
    title: 'Janitorial & Consumables Support',
    category: 'Daily Facilities Care',
    icon: 'fa-soap',
    desc: 'Dedicated day-janitors and automated consumables inventory management keeping high-traffic facilities stocked and pristine.',
    scope: [
      'Full inventory management for washroom hand towels, toilet rolls, luxury soap, and sanitiser',
      'Continuous daytime monitoring and prompt cleanup of high-traffic communal zones',
      'Periodic washroom replenishment and odor control checks',
      'Kitchenette restocking, dishwasher loading/unloading, and waste clearing',
      'Internal recycling sorting and bin corral management'
    ],
    equipment: 'Janitorial supply caddies, continuous dispensing systems, touch-free refills',
    frequency: 'Full-time or part-time daily daytime custodial coverage'
  },
  'trauma-cleaning': {
    title: 'Trauma & Extreme Cleaning',
    category: 'Specialist Biohazard',
    icon: 'fa-biohazard',
    desc: 'Compassionate, discreet, and fully licensed decontamination for biohazardous situations, trauma scenes, and severe hoarding environments.',
    scope: [
      'Licensed disposal of clinical and hazardous biological waste',
      'Full decontamination and microbial fogging eliminating pathogens',
      'Advanced thermal fogging for complete odor eradication',
      'Complete strip-out of unsalvageable contaminated porous materials',
      'Certificate of hygiene decontamination issued upon completion'
    ],
    equipment: 'Full PPE respirators, air scrubbers with HEPA/charcoal filtration, broad-spectrum virucides',
    frequency: 'Rapid 24/7 emergency response'
  },
  'compliance-cleaning': {
    title: 'Specialist & Compliance Cleaning',
    category: 'Regulatory Audits',
    icon: 'fa-certificate',
    desc: 'Rigorous sanitisation protocols engineered to meet strict statutory compliance, CQC healthcare standards, and ISO certifications.',
    scope: [
      'Compliance with British standard colour-coding and COSHH regulations',
      'ATP bioluminescence cleanliness testing with digital verification reports',
      'Ductwork and grease extract ventilation cleaning compliant with TR19 standards',
      'Food production and commercial kitchen hygiene compliance certificates',
      'Pre-audit preparation and audit escorting documentation'
    ],
    equipment: 'ATP hygiene luminometers, TR19 compliant rotary brush duct machines, certified virucides',
    frequency: 'Scheduled regulatory intervals and pre-audit sanitisation cycles'
  },
  'medical-cleaning': {
    title: 'Medical & Clinical Cleaning',
    category: 'Infection Control',
    icon: 'fa-hospital',
    desc: 'Hygienic infection control solutions for GP surgeries, dental practices, aesthetic clinics, and outpatient healthcare suites across London.',
    scope: [
      'Strict adherence to NHS Healthcare Cleaning Standards and CQC guidelines',
      'Hospital-grade disinfectant dwell-time protocols eliminating MRSA, Norovirus, and COVID',
      'Clinical waste handling and segregation in approved containers',
      'Examination couch, dental chair, and clinical countertop disinfection',
      'Waiting area air purification and sanitiser station replenishment'
    ],
    equipment: 'EN14476 certified virucidal chemicals, barrier microfibers, medical-grade HEPA filters',
    frequency: 'Daily post-clinic evening cleans and weekly clinical deep cleans'
  },
  'floor-maintenance': {
    title: 'Floor Maintenance & Restoration',
    category: 'Surface Rejuvenation',
    icon: 'fa-rug',
    desc: 'Specialist rejuvenation, diamond polishing, stripping, sealing, and carpet extraction for all commercial flooring substrates.',
    scope: [
      'Rotary stripping of old polish and application of high-durability acrylic sealers',
      'High-speed burnishing and buffing for mirror-finish reflection',
      'Hot water injection-extraction deep cleaning for heavy-traffic carpets',
      'Diamond pad restoration and honing for marble, terrazzo, and limestone',
      'Slip-resistance treatments complying with HSE guidelines'
    ],
    equipment: 'Heavy-duty rotary floor scrubbers, high-speed burnishers, commercial extraction machines',
    frequency: 'Monthly maintenance buffing, quarterly scrub-and-recoats, annual restoration'
  },
  'housekeeping-services': {
    title: 'Housekeeping Services',
    category: 'Hospitality & Residences',
    icon: 'fa-bed',
    desc: 'High-touch housekeeping programs tailored for serviced accommodation providers, boutique apart-hotels, and executive residential buildings.',
    scope: [
      'Linen changes, precision bed styling, and towel replenishment',
      'Full guest-ready turnover cleaning timed to check-out / check-in windows',
      'Toiletries, welcome basket, and beverage replenishment',
      'Appliance cleaning: dishwashers, ovens, refrigerators, coffee makers',
      'Inventory check and maintenance defect reporting'
    ],
    equipment: 'Lightweight commercial vacuums, hotel-standard linen styling tools, eco cleaning kits',
    frequency: 'Turnaround cleans, daily stay-over cleans, or scheduled weekly service'
  }
};

// 2. Sector Tabs Content Database
const sectorData = {
  corporate: {
    badge: 'Corporate Real Estate',
    title: 'Modern Office & Multi-Tenant Workspace Cleaning',
    img: 'assets/images/commercial_office.jpg',
    desc: 'We keep corporate headquarters, tech hubs, financial offices, and co-working spaces immaculate. From desk hygiene and IT hardware dusting to pristine boardrooms and executive washrooms, we ensure your workspace drives employee focus and impresses key stakeholders.',
    features: [
      'Out-of-hours evening or early morning schedules',
      'Keyholder trusted & security-cleared personnel',
      'Workstation & touchpoint sanitisation',
      'Consumables stock replenishment included'
    ]
  },
  retail: {
    badge: 'Retail & Showrooms',
    title: 'Flagship Stores, Boutiques & Showroom Upkeep',
    img: 'assets/images/retail_venue.jpg',
    desc: 'First impressions drive footfall and sales. Our retail cleaning service is customized for high-end fashion boutiques, electronics stores, furniture showrooms, and retail parks, ensuring gleaming floors, crystal-clear glass displays, and pristine fitting rooms.',
    features: [
      'Daily morning pre-opening spot cleans',
      'High-gloss floor buffing & streak-free mirrors',
      'Fitting room disinfection and trash clearing',
      'Emergency rapid response for accidental spills'
    ]
  },
  medical: {
    badge: 'Healthcare & Clinical',
    title: 'Hygienic Infection Control for Surgeries & Clinics',
    img: 'assets/images/medical_clinic.jpg',
    desc: 'Healthcare settings require the highest standard of infection prevention. Our operatives follow strict NHS National Standards of Healthcare Cleanliness and CQC audit protocols, safeguarding patients, doctors, and visitors alike.',
    features: [
      'EN14476 certified virucides & color-coded microfibers',
      'Clinical waste management & sanitised treatment rooms',
      'ATP bioluminescent testing for measurable hygiene',
      'Full compliance documentation for CQC audits'
    ]
  },
  construction: {
    badge: 'Construction & Property Handover',
    title: 'Post-Renovation, Builders & Handover Sparkle Cleans',
    img: 'assets/images/construction_sparkle.jpg',
    desc: 'From new commercial developments in the City to fit-outs and residential refurbishments, our CSCS-certified construction cleaners remove stubborn plaster, paint mist, silicone, and dust, delivering a pristine building ready for handover.',
    features: [
      'Three-stage builders clean: Rough, Deep & Sparkle',
      'CSCS-certified operatives with site RAMS adherence',
      'Window frame, glazing & exterior facade jet washing',
      'Flexible rapid mobilization for tight deadlines'
    ]
  },
  hospitality: {
    badge: 'Hospitality & Venues',
    title: 'Restaurants, Event Venues & Boutique Hotels',
    img: 'assets/images/retail_venue.jpg',
    desc: 'The hospitality industry demands relentless hygiene. We work closely with restaurant managers, event venues, private members clubs, and luxury accommodation hosts to provide seamless turnaround cleans, kitchen deep scrubs, and immaculate front-of-house spaces.',
    features: [
      'Late-night post-service closing cleans',
      'Commercial kitchen degreasing & extraction hood care',
      'Carpet & upholstery stain extraction',
      'Serviced apartment turnover and linen staging'
    ]
  }
};

// 3. Sector Switcher
function switchSector(key) {
  const data = sectorData[key];
  if (!data) return;

  // Update tab buttons
  document.querySelectorAll('.sector-tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('onclick').includes(key)) {
      btn.classList.add('active');
    }
  });

  // Render Sector Content
  const container = document.getElementById('sectorDisplay');
  container.innerHTML = `
    <div class="sector-card-inner active">
      <div class="sector-image">
        <img src="${data.img}" alt="${data.title}">
      </div>
      <div class="sector-info">
        <span class="sector-badge">${data.badge}</span>
        <h3>${data.title}</h3>
        <p>${data.desc}</p>
        <div class="sector-features">
          ${data.features.map(f => `<div><i class="fa-solid fa-circle-check"></i> ${f}</div>`).join('')}
        </div>
        <a href="#quote-calculator" class="btn btn-primary">Get ${data.badge} Quote</a>
      </div>
    </div>
  `;
}

// 4. Service Category Filtering
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.service-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => mobileDrawer.classList.add('active'));
    drawerClose.addEventListener('click', () => mobileDrawer.classList.remove('active'));
    document.querySelectorAll('.drawer-link').forEach(link => {
      link.addEventListener('click', () => mobileDrawer.classList.remove('active'));
    });
  }

  // Header scroll shadow
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 40) {
      header.style.boxShadow = '0 6px 20px rgba(4, 31, 52, 0.12)';
    } else {
      header.style.boxShadow = 'var(--shadow-sm)';
    }
  });

  // Dynamic Year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Run initial calculator
  calculateQuote();
});

// 5. Service Specification Modal
function openServiceModal(serviceId) {
  const spec = serviceSpecs[serviceId];
  if (!spec) return;

  const modal = document.getElementById('serviceModal');
  const content = document.getElementById('serviceModalContent');

  content.innerHTML = `
    <div class="service-modal-header" style="margin-bottom: 20px;">
      <div style="display:flex; align-items:center; gap: 14px; margin-bottom: 10px;">
        <div style="width: 48px; height: 48px; border-radius: 10px; background: var(--cyan-soft); color: var(--accent-blue); display:flex; align-items:center; justify-content:center; font-size: 1.4rem;">
          <i class="fa-solid ${spec.icon}"></i>
        </div>
        <div>
          <span style="font-size: 0.75rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase; letter-spacing: 1.5px;">${spec.category}</span>
          <h3 style="font-family: var(--font-heading); font-size: 1.6rem; color: var(--primary-navy); margin: 0;">${spec.title}</h3>
        </div>
      </div>
      <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">${spec.desc}</p>
    </div>

    <div style="background: var(--bg-light); padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 20px;">
      <h4 style="font-family: var(--font-heading); font-size: 0.95rem; font-weight: 700; color: var(--primary-navy); margin-bottom: 12px;">Standard Specification & Deliverables</h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
        ${spec.scope.map(item => `<li style="font-size: 0.88rem; color: #334155; display: flex; align-items: flex-start; gap: 8px;"><i class="fa-solid fa-circle-check" style="color: #10b981; font-size: 0.85rem; margin-top: 3px;"></i> <span>${item}</span></li>`).join('')}
      </ul>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 25px;">
      <div style="background: #ffffff; border: 1px solid var(--border-color); padding: 14px; border-radius: var(--radius-sm);">
        <strong style="display:block; font-size: 0.75rem; color: var(--text-light); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Machinery & Technology</strong>
        <span style="font-size: 0.85rem; color: var(--primary-navy); font-weight: 600;">${spec.equipment}</span>
      </div>
      <div style="background: #ffffff; border: 1px solid var(--border-color); padding: 14px; border-radius: var(--radius-sm);">
        <strong style="display:block; font-size: 0.75rem; color: var(--text-light); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Service Frequency</strong>
        <span style="font-size: 0.85rem; color: var(--primary-navy); font-weight: 600;">${spec.frequency}</span>
      </div>
    </div>

    <div style="display: flex; gap: 12px; justify-content: flex-end;">
      <button class="btn btn-outline-dark" onclick="closeServiceModal()">Close</button>
      <a href="#quote-calculator" class="btn btn-primary" onclick="closeServiceModal(); selectServiceInCalc('${serviceId}');">
        <span>Request Quote for This Service</span>
        <i class="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  `;

  modal.classList.add('active');
}

function closeServiceModal() {
  document.getElementById('serviceModal').classList.remove('active');
}

function openBrochureModal() {
  document.getElementById('brochureModal').classList.add('active');
}

function closeBrochureModal() {
  document.getElementById('brochureModal').classList.remove('active');
}

// Close modals on backdrop click
window.addEventListener('click', (e) => {
  const serviceModal = document.getElementById('serviceModal');
  const brochureModal = document.getElementById('brochureModal');
  if (e.target === serviceModal) closeServiceModal();
  if (e.target === brochureModal) closeBrochureModal();
});

// 6. Interactive Instant Quote Calculator
function updateArea(val) {
  document.getElementById('areaDisplay').textContent = parseInt(val).toLocaleString();
  calculateQuote();
}

function calculateQuote() {
  const area = parseInt(document.getElementById('areaSlider').value) || 2500;
  
  // Property Type Multiplier
  const propEl = document.querySelector('input[name="propertyType"]:checked');
  const propType = propEl ? propEl.value : 'office';
  const propMultipliers = {
    office: 1.0,
    retail: 1.1,
    medical: 1.35,
    construction: 1.45,
    venue: 1.2,
    serviced: 1.15
  };
  const propMult = propMultipliers[propType] || 1.0;

  // Frequency
  const freqEl = document.querySelector('input[name="freq"]:checked');
  const freq = freqEl ? freqEl.value : 'daily';

  // Base rate calculation per sq ft per visit
  let baseRate = 0.045; // £ per sq ft base
  let visitsPerMonth = 22;
  let isOneOff = false;

  if (freq === 'daily') {
    visitsPerMonth = 22;
    baseRate = 0.042;
  } else if (freq === '3week') {
    visitsPerMonth = 13;
    baseRate = 0.052;
  } else if (freq === 'weekly') {
    visitsPerMonth = 4.33;
    baseRate = 0.068;
  } else if (freq === 'deep') {
    visitsPerMonth = 1;
    baseRate = 0.16;
    isOneOff = true;
  }

  // Calculate monthly cost
  let total = area * baseRate * propMult;

  // Floor scale attenuation for large spaces
  if (area > 5000) {
    total = total * 0.92;
  }
  if (area > 15000) {
    total = total * 0.86;
  }

  // Minimum thresholds
  if (!isOneOff && total < 280) total = 280;
  if (isOneOff && total < 350) total = 350;

  // Add-ons
  let addonCost = 0;
  if (document.getElementById('addonWindows').checked) {
    addonCost += isOneOff ? 120 : (area > 5000 ? 160 : 85);
  }
  if (document.getElementById('addonCarpets').checked) {
    addonCost += isOneOff ? 180 : (area > 5000 ? 220 : 110);
  }
  if (document.getElementById('addonJanitorial').checked) {
    addonCost += isOneOff ? 50 : 95;
  }
  if (document.getElementById('addonHandyman').checked) {
    addonCost += isOneOff ? 150 : 180;
  }

  total += addonCost;

  // Animate Price
  const rounded = Math.round(total);
  animateValue('priceDisplay', parseInt(document.getElementById('priceDisplay').textContent.replace(/,/g, '')) || 0, rounded, 350);

  const periodEl = document.getElementById('periodDisplay');
  const noteEl = document.getElementById('breakdownNote');

  if (isOneOff) {
    periodEl.textContent = '/ one-off project';
    noteEl.textContent = 'Includes complete intensive deep clean, heavy equipment, sanitisation certificate & inspection.';
  } else {
    periodEl.textContent = '/ month';
    noteEl.textContent = 'Includes dedicated trained personnel, commercial eco-chemicals, quality audits & London account manager.';
  }
}

// Numerical Counter Animation
function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  if (!obj) return;
  if (start === end) return;
  const range = end - start;
  let current = start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / Math.max(Math.abs(range), 1)));
  const timer = setInterval(() => {
    current += increment * Math.ceil(Math.abs(range) / 20);
    if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
      current = end;
      clearInterval(timer);
    }
    obj.textContent = current.toLocaleString();
  }, Math.max(stepTime, 16));
}

// Pre-fill calculator from service cards
function selectServiceInCalc(serviceId) {
  const mappings = {
    'commercial-contract': { prop: 'office', freq: 'daily' },
    'daily-office': { prop: 'office', freq: 'daily' },
    'retail-venue': { prop: 'retail', freq: 'daily' },
    'property-construction': { prop: 'construction', freq: 'deep' },
    'deep-cleaning': { prop: 'office', freq: 'deep' },
    'medical-cleaning': { prop: 'medical', freq: 'daily' },
    'housekeeping-services': { prop: 'serviced', freq: '3week' }
  };

  const map = mappings[serviceId];
  if (map) {
    const propRadio = document.querySelector(`input[name="propertyType"][value="${map.prop}"]`);
    if (propRadio) {
      propRadio.checked = true;
      document.querySelectorAll('.calc-radio-card').forEach(c => c.classList.remove('active'));
      propRadio.closest('.calc-radio-card').classList.add('active');
    }
    const freqRadio = document.querySelector(`input[name="freq"][value="${map.freq}"]`);
    if (freqRadio) {
      freqRadio.checked = true;
      document.querySelectorAll('.freq-btn').forEach(b => b.classList.remove('active'));
      freqRadio.closest('.freq-btn').classList.add('active');
    }
    calculateQuote();
  }
}

// 7. Form Submissions with Web3Forms & Google reCAPTCHA v2
async function handleQuoteSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('calcLockInForm');
  const msg = document.getElementById('quoteSuccessMessage');
  const errorEl = document.getElementById('calcFormError');
  const btn = document.getElementById('calcSubmitBtn') || form.querySelector('button[type="submit"]');

  if (errorEl) {
    errorEl.style.display = 'none';
    errorEl.textContent = '';
  }

  // Verify reCAPTCHA
  let captchaToken = '';
  const textarea = form.querySelector('[name="g-recaptcha-response"]');
  if (textarea && textarea.value) {
    captchaToken = textarea.value;
  } else if (typeof grecaptcha !== 'undefined') {
    try { captchaToken = grecaptcha.getResponse(0); } catch(err) {}
    if (!captchaToken) {
      try { captchaToken = grecaptcha.getResponse(); } catch(err) {}
    }
  }

  if (!captchaToken) {
    if (errorEl) {
      errorEl.textContent = "Please check the 'I'm not a robot' reCAPTCHA box above.";
      errorEl.style.display = 'block';
    } else {
      alert('Please complete the reCAPTCHA verification before submitting.');
    }
    return;
  }

  // Populate dynamic calculator data into hidden inputs
  const propEl = document.querySelector('input[name="propertyType"]:checked');
  const freqEl = document.querySelector('input[name="freq"]:checked');
  const areaVal = document.getElementById('areaSlider') ? document.getElementById('areaSlider').value : '2500';
  const priceVal = document.getElementById('priceDisplay') ? document.getElementById('priceDisplay').textContent : '';
  const periodVal = document.getElementById('periodDisplay') ? document.getElementById('periodDisplay').textContent : '';

  const addons = [];
  if (document.getElementById('addonWindows') && document.getElementById('addonWindows').checked) addons.push('Commercial Window Cleaning');
  if (document.getElementById('addonCarpets') && document.getElementById('addonCarpets').checked) addons.push('Hot Water Carpet Extraction');
  if (document.getElementById('addonJanitorial') && document.getElementById('addonJanitorial').checked) addons.push('Washroom & Janitorial Restocking');
  if (document.getElementById('addonHandyman') && document.getElementById('addonHandyman').checked) addons.push('Facility Handyman & Minor Repairs');

  const propNameMap = {
    office: 'Office / Commercial',
    retail: 'Retail Store / Showroom',
    medical: 'Medical & Healthcare Facility',
    construction: 'Post-Construction Site',
    venue: 'Venue / Hospitality',
    serviced: 'Serviced Accommodation / HMO'
  };

  const freqNameMap = {
    daily: 'Daily Commercial Service',
    '3week': '3x per Week',
    weekly: 'Weekly Commercial Clean',
    deep: 'One-Off Intensive Deep Clean'
  };

  const selectedPropKey = propEl ? propEl.value : 'office';
  const selectedFreqKey = freqEl ? freqEl.value : 'daily';

  if (document.getElementById('calcHiddenPropType')) {
    document.getElementById('calcHiddenPropType').value = propNameMap[selectedPropKey] || selectedPropKey;
  }
  if (document.getElementById('calcHiddenArea')) {
    document.getElementById('calcHiddenArea').value = parseInt(areaVal).toLocaleString() + ' sq ft';
  }
  if (document.getElementById('calcHiddenFreq')) {
    document.getElementById('calcHiddenFreq').value = freqNameMap[selectedFreqKey] || selectedFreqKey;
  }
  if (document.getElementById('calcHiddenAddons')) {
    document.getElementById('calcHiddenAddons').value = addons.length > 0 ? addons.join(', ') : 'None selected';
  }
  if (document.getElementById('calcHiddenPrice')) {
    document.getElementById('calcHiddenPrice').value = '£' + priceVal + ' ' + periodVal;
  }

  // Set loading state
  const originalBtnContent = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending Request...</span>';
  form.style.opacity = '0.7';

  try {
    const formData = new FormData(form);
    if (!formData.get('g-recaptcha-response') && captchaToken) {
      formData.set('g-recaptcha-response', captchaToken);
    }
    // Also include recaptcha_response for compatibility
    if (captchaToken) {
      formData.set('recaptcha_response', captchaToken);
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      form.style.display = 'none';
      if (msg) msg.style.display = 'block';
    } else {
      throw new Error(data.message || 'Submission failed. Please check your details and try again.');
    }
  } catch (err) {
    console.error('Quote form submission error:', err);
    if (errorEl) {
      errorEl.textContent = err.message || 'Submission failed. Please call us directly on 020 8914 7832.';
      errorEl.style.display = 'block';
    } else {
      alert(err.message || 'Submission failed. Please call us directly on 020 8914 7832.');
    }
    btn.disabled = false;
    btn.innerHTML = originalBtnContent;
    form.style.opacity = '1';
    if (typeof grecaptcha !== 'undefined') {
      try { grecaptcha.reset(0); } catch(e) {}
    }
  }
}

async function handleContactSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('mainContactForm');
  const msg = document.getElementById('contactSuccessMessage');
  const errorEl = document.getElementById('contactFormError');
  const btn = document.getElementById('contactSubmitBtn') || form.querySelector('button[type="submit"]');

  if (errorEl) {
    errorEl.style.display = 'none';
    errorEl.textContent = '';
  }

  // Verify reCAPTCHA
  let captchaToken = '';
  const textarea = form.querySelector('[name="g-recaptcha-response"]');
  if (textarea && textarea.value) {
    captchaToken = textarea.value;
  } else if (typeof grecaptcha !== 'undefined') {
    try { captchaToken = grecaptcha.getResponse(1); } catch(err) {}
    if (!captchaToken) {
      try { captchaToken = grecaptcha.getResponse(); } catch(err) {}
    }
  }

  if (!captchaToken) {
    if (errorEl) {
      errorEl.textContent = "Please check the 'I'm not a robot' reCAPTCHA box above.";
      errorEl.style.display = 'block';
    } else {
      alert('Please complete the reCAPTCHA verification before submitting.');
    }
    return;
  }

  // Set loading state
  const originalBtnContent = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending Inquiry...</span>';
  form.style.opacity = '0.7';

  try {
    const formData = new FormData(form);
    if (!formData.get('g-recaptcha-response') && captchaToken) {
      formData.set('g-recaptcha-response', captchaToken);
    }
    // Also include recaptcha_response for compatibility
    if (captchaToken) {
      formData.set('recaptcha_response', captchaToken);
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      form.style.display = 'none';
      if (msg) msg.style.display = 'block';
    } else {
      throw new Error(data.message || 'Submission failed. Please check your details and try again.');
    }
  } catch (err) {
    console.error('Contact form submission error:', err);
    if (errorEl) {
      errorEl.textContent = err.message || 'Submission failed. Please call us directly on 020 8914 7832.';
      errorEl.style.display = 'block';
    } else {
      alert(err.message || 'Submission failed. Please call us directly on 020 8914 7832.');
    }
    btn.disabled = false;
    btn.innerHTML = originalBtnContent;
    form.style.opacity = '1';
    if (typeof grecaptcha !== 'undefined') {
      try { grecaptcha.reset(1); } catch(e) {}
    }
  }
}

// 8. FAQ Accordion Toggle
function toggleFaq(button) {
  const item = button.closest('.faq-item');
  const isActive = item.classList.contains('active');
  
  // Close all other FAQs
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
  
  if (!isActive) {
    item.classList.add('active');
  }
}

