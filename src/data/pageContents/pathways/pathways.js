export const pathways = [
    {
        id: 'refresh',
        title: "Refresh",
        heading: () => `Healthy, <span class="italic ${typeof window !== 'undefined' && window.location.pathname === '/pathways' ? 'text-primary' : ''}">Glowing Skin</span> Starts Here`,
        subtitle: "Gently renews the surface of your skin for instant brightness and hydration.",
        description: "The Refresh pathway focuses on surface-level rejuvenation. It is designed to clear congestion, remove dead skin cells, and flood the skin with hydration and nutrients. This is the starting point for healthy skin function.",
        image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop",
        includes: [
            { name: 'HydraFacial', linkId: null },
            { name: 'Enzyme Therapy', linkId: 'enzyme-therapy' },
            { name: 'Oxygen Facials', linkId: 'oxygen-vitamin-infusion-facial' },
            { name: 'BioRePeel', linkId: 'biorepeel' },
            { name: 'Chemical Peel', linkId: 'chemical-peel' },
            { name: 'LED', linkId: 'led-light-therapy' },
            { name: 'Body Peels', linkId: 'body-peels' }
        ],
        perfectFor: 'Dullness, dryness, uneven tone, postpartum fatigue skin, perimenopause dehydration.'
    },
    {
        id: 'renew',
        title: "Renew",
        heading: () => `Strengthen Your Skin <span class="italic ${typeof window !== 'undefined' && window.location.pathname === '/pathways' ? 'text-primary' : ''}">From Within</span>`,
        subtitle: "Boosts your skin’s natural ability to repair, firm and glow over time.",
        description: "The Renew pathway is about biological stimulation. We use advanced regenerative tools to wake up your fibroblasts, stimulating collagen, elastin, and hydration from within. This is for long-term skin quality and resilience.",
        image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1200&auto=format&fit=crop",
        includes: [
            { name: 'Polynucleotides (PN)', linkId: 'polynucleotides' },
            { name: 'PRP', linkId: 'prp-skin-regeneration' },
            { name: 'Microneedling', linkId: 'microneedling' },
            { name: 'RF Microneedling', linkId: 'rf-microneedling' },
            { name: 'Profhilo', linkId: 'profhilo' },
            { name: 'Hydrobooster', linkId: 'definisse-hydrobooster' },
            { name: 'Jalupro', linkId: 'jalupro' },
            { name: 'Lumi Eyes', linkId: 'lumi-eyes' }
        ],
        perfectFor: 'Fine lines, thinning skin, early collagen loss, tired-looking eyes, long-term glow.'
    },
    {
        id: 'restore',
        title: "Restore",
        heading: () => `Lift, Firm & Define <span class="italic ${typeof window !== 'undefined' && window.location.pathname === '/pathways' ? 'text-primary' : ''}">Naturally</span>`,
        subtitle: "Subtle enhancements that support your structure without looking “done.”",
        description: "The Restore pathway addresses structural changes—fat pad loss, bone resorption, and ligament laxity. We use biostimulators and supportive treatments to restore youthful contours and definition respectfully.",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
        includes: [
            { name: 'Biostimulators', linkId: 'biostimulators' },
            { name: 'Thread Lifts', linkId: 'thread-lifts' },
            { name: 'Natural Fillers', linkId: 'dermal-fillers' },
            { name: 'Collagen Therapy', linkId: 'collagen-therapy' },
            { name: 'Jawline Contouring', linkId: 'jawline-sculpting' },
            { name: 'Neck Tightening', linkId: 'neck-lower-face-structural-lift' },
            { name: 'Body Tightening', linkId: 'body-tightening' }
        ],
        perfectFor: 'Jawline softening, mid-face changes, neck laxity, postpartum body changes.'
    },
    {
        id: 'radiate',
        title: "Radiate Wellness",
        heading: () => `Support Your Energy, <span class="italic ${typeof window !== 'undefined' && window.location.pathname === '/pathways' ? 'text-primary' : ''}">Hormones & Wellness</span>`,
        subtitle: "Because when you feel balanced on the inside, your skin shows it on the outside.",
        description: "The Radiate Wellness pathway bridges the gap between internal health and external beauty. Delivered in collaboration with 360Medicx Harley Street Clinic, we address the root causes of ageing and depletion.",
        image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop",
        includes: [
            { name: 'NAD+ IV/IM', linkId: 'nad-iv' },
            { name: 'Glutathione IV/IM', linkId: 'glutathione-iv' },
            { name: 'Energy IV', linkId: 'energy-iv' },
            { name: 'Immunity IV', linkId: 'immunity-iv' },
            { name: 'Women’s Longevity IV', linkId: 'womens-longevity-iv' },
            { name: 'Vitamin D & B12 IM', linkId: 'vitamin-b12-im' },
            { name: 'Weight Management', linkId: 'medical-weight-management' }
        ],
        perfectFor: 'Fatigue, poor sleep, slow metabolism, inflammation, hormone-transition symptoms.'
    }
];

export const getPathway = (id) => pathways.find(p => p.id === id);
