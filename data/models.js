const models = [
    {
        name: "A1",
        generations: [
            {
                name: "Audi A1 8X",
                code: "8X",
                period: { fr: "2010 - 2018", en: "2010 - 2018" },
                phases: [
                    {
                        phase: "Phase I",
                        years: { fr: "2010 - 2015", en: "2010 - 2015" },
                        images: [
                            "assets/images/a1-8x-phase1-1.jpg",
                            "assets/images/a1-8x-phase1-2.jpg"
                        ],
                        specs: [
                            { configuration: "1.2 TFSI", power: "86 ch", torque: "160 Nm", transmission: "Manuelle", consumption: "5.5 L/100km", alimentation: "Turbo" },
                            { configuration: "1.6 TDI", power: "105 ch", torque: "250 Nm", transmission: "Manuelle", consumption: "4.2 L/100km", alimentation: "Turbo Diesel" },
                        ]
                    },
                    {
                        phase: "Phase II",
                        years: { fr: "2015 - 2018", en: "2015 - 2018" },
                        images: [
                            "assets/images/a1-8x-phase2-1.jpg",
                            "assets/images/a1-8x-phase2-2.jpg"
                        ],
                        specs: [
                            { configuration: "1.0 TFSI", power: "115 ch", torque: "200 Nm", transmission: "Automatique", consumption: "5.0 L/100km", alimentation: "Turbo" },
                            { configuration: "2.0 TDI", power: "150 ch", torque: "340 Nm", transmission: "Automatique", consumption: "4.0 L/100km", alimentation: "Turbo Diesel" },
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "A3",
        generations: [
            {
                name: "Audi A3 8P",
                code: "8P",
                period: { fr: "2003 - 2013", en: "2003 - 2013" },
                phases: [
                    {
                        phase: "Phase I",
                        years: { fr: "2003 - 2008", en: "2003 - 2008" },
                        description: {
                            fr: "Introduction de la première génération d'Audi A3.",
                            en: "Introduction of the first generation Audi A3."
                        },
                        images: [
                            "assets/images/a3-8p-phase1-1.jpg",
                            "assets/images/a3-8p-phase1-2.jpg"
                        ],
                        specs: [
                            { configuration: "1.6 FSI", power: "115 ch", torque: "148 Nm", transmission: "Manuelle", consumption: "6.5 L/100km", alimentation: "Atmosphérique" },
                            { configuration: "2.0 TDI", power: "140 ch", torque: "320 Nm", transmission: "Automatique", consumption: "5.2 L/100km", alimentation: "Turbo Diesel" },
                        ]
                    },
                    {
                        phase: "Phase II",
                        years: { fr: "2008 - 2013", en: "2008 - 2013" },
                        images: [
                            "assets/images/a3-8p-phase2-1.jpg",
                            "assets/images/a3-8p-phase2-2.jpg"
                        ],
                        specs: [
                            { configuration: "1.2 TFSI", power: "105 ch", torque: "175 Nm", transmission: "Manuelle", consumption: "5.5 L/100km", alimentation: "Turbo" },
                            { configuration: "2.0 TDI", power: "150 ch", torque: "320 Nm", transmission: "Automatique", consumption: "4.5 L/100km", alimentation: "Turbo Diesel" },
                        ]
                    }
                ]
            },
            {
                name: "Audi A3 8V",
                code: "8V",
                period: { fr: "2012 - 2020", en: "2012 - 2020" },
                phases: [
                    {
                        phase: "Phase I",
                        years: { fr: "2012 - 2016", en: "2012 - 2016" },
                        description: {
                            fr: "Nouvelle génération avec un design moderne.",
                            en: "New generation with a modern design."
                        },
                        images: [
                            "assets/images/a3-8v-phase1-1.jpg",
                            "assets/images/a3-8v-phase1-2.jpg"
                        ],
                        specs: [
                            { configuration: "1.0 TFSI", power: "115 ch", torque: "200 Nm", transmission: "Automatique", consumption: "5.0 L/100km", alimentation: "Turbo" },
                            { configuration: "2.0 TDI", power: "150 ch", torque: "340 Nm", transmission: "Manuelle", consumption: "4.4 L/100km", alimentation: "Turbo Diesel" },
                        ]
                    },
                    {
                        phase: "Phase II",
                        years: { fr: "2016 - 2020", en: "2016 - 2020" },
                        images: [
                            "assets/images/a3-8v-phase2-1.jpg",
                            "assets/images/a3-8v-phase2-2.jpg"
                        ],
                        specs: [
                            { configuration: "1.5 TFSI", power: "150 ch", torque: "250 Nm", transmission: "Automatique", consumption: "5.1 L/100km", alimentation: "Turbo" },
                            { configuration: "2.0 TDI", power: "184 ch", torque: "380 Nm", transmission: "Automatique", consumption: "4.2 L/100km", alimentation: "Turbo Diesel" },
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "A4",
        generations: [
            {
                name: "Audi A4 B8",
                code: "B8",
                period: { fr: "2007 - 2016", en: "2007 - 2016" },
                phases: [
                    {
                        phase: "Phase I",
                        years: { fr: "2007 - 2011", en: "2007 - 2011" },
                        images: [
                            "assets/images/a4-b8-phase1-1.jpg",
                            "assets/images/a4-b8-phase1-2.jpg"
                        ],
                        specs: [
                            { configuration: "1.8 TFSI", power: "160 ch", torque: "250 Nm", transmission: "Manuelle", consumption: "6.0 L/100km", alimentation: "Turbo" },
                            { configuration: "2.0 TDI", power: "143 ch", torque: "320 Nm", transmission: "Automatique", consumption: "4.5 L/100km", alimentation: "Turbo Diesel" },
                        ]
                    },
                    {
                        phase: "Phase II",
                        years: { fr: "2011 - 2016", en: "2011 - 2016" },
                        images: [
                            "assets/images/a4-b8-phase2-1.jpg",
                            "assets/images/a4-b8-phase2-2.jpg"
                        ],
                        specs: [
                            { configuration: "2.0 TFSI", power: "225 ch", torque: "350 Nm", transmission: "Automatique", consumption: "6.7 L/100km", alimentation: "Turbo" },
                            { configuration: "3.0 TDI", power: "272 ch", torque: "600 Nm", transmission: "Automatique", consumption: "5.9 L/100km", alimentation: "Turbo Diesel" },
                        ]
                    }
                ]
            },
            {
                name: "Audi A4 B9",
                code: "B9",
                period: { fr: "2015 - présent", en: "2015 - present" },
                phases: [
                    {
                        phase: "Phase I",
                        years: { fr: "2015 - 2019", en: "2015 - 2019" },
                        images: [
                            "assets/images/a4-b9-phase1-1.jpg",
                            "assets/images/a4-b9-phase1-2.jpg"
                        ],
                        specs: [
                            { configuration: "2.0 TFSI", power: "190 ch", torque: "320 Nm", transmission: "Automatique", consumption: "5.7 L/100km", alimentation: "Turbo" },
                            { configuration: "2.0 TDI", power: "150 ch", torque: "340 Nm", transmission: "Manuelle", consumption: "4.3 L/100km", alimentation: "Turbo Diesel" },
                        ]
                    },
                    {
                        phase: "Phase II",
                        years: { fr: "2019 - présent", en: "2019 - present" },
                        images: [
                            "assets/images/a4-b9-phase2-1.jpg",
                            "assets/images/a4-b9-phase2-2.jpg"
                        ],
                        specs: [
                            { configuration: "2.0 TFSI", power: "245 ch", torque: "370 Nm", transmission: "Automatique", consumption: "6.2 L/100km", alimentation: "Turbo" },
                            { configuration: "3.0 TDI", power: "286 ch", torque: "620 Nm", transmission: "Automatique", consumption: "5.5 L/100km", alimentation: "Turbo Diesel" },
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "A5",
        generations: [
            {
                name: "Audi A5 B8",
                code: "B8",
                period: { fr: "2007 - 2016", en: "2007 - 2016" },
                phases: [
                    {
                        phase: "Phase I",
                        years: { fr: "2007 - 2011", en: "2007 - 2011" },
                        images: [
                            "assets/images/a5-b8-phase1-1.jpg",
                            "assets/images/a5-b8-phase1-2.jpg"
                        ],
                        specs: [
                            { configuration: "2.0 TFSI", power: "180 ch", torque: "320 Nm", transmission: "Automatique", consumption: "6.3 L/100km", alimentation: "Turbo" },
                            { configuration: "3.0 TDI", power: "245 ch", torque: "500 Nm", transmission: "Automatique", consumption: "5.5 L/100km", alimentation: "Turbo Diesel" },
                        ]
                    },
                    {
                        phase: "Phase II",
                        years: { fr: "2011 - 2016", en: "2011 - 2016" },
                        images: [
                            "assets/images/a5-b8-phase2-1.jpg",
                            "assets/images/a5-b8-phase2-2.jpg"
                        ],
                        specs: [
                            { configuration: "2.0 TFSI", power: "225 ch", torque: "350 Nm", transmission: "Automatique", consumption: "6.5 L/100km", alimentation: "Turbo" },
                            { configuration: "3.0 TDI", power: "320 ch", torque: "650 Nm", transmission: "Automatique", consumption: "5.8 L/100km", alimentation: "Turbo Diesel" },
                        ]
                    }
                ]
            },
            {
                name: "Audi A5 B9",
                code: "B9",
                period: { fr: "2016 - présent", en: "2016 - present" },
                phases: [
                    {
                        phase: "Phase I",
                        years: { fr: "2016 - 2020", en: "2016 - 2020" },
                        images: [
                            "assets/images/a5-b9-phase1-1.jpg",
                            "assets/images/a5-b9-phase1-2.jpg"
                        ],
                        specs: [
                            { configuration: "2.0 TFSI", power: "190 ch", torque: "320 Nm", transmission: "Automatique", consumption: "6.0 L/100km", alimentation: "Turbo" },
                            { configuration: "3.0 TDI", power: "286 ch", torque: "620 Nm", transmission: "Automatique", consumption: "5.9 L/100km", alimentation: "Turbo Diesel" },
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "A6",
        generations: [
            {
                name: "Audi A6 C6",
                code: "C6",
                period: { fr: "2004 - 2011", en: "2004 - 2011" },
                phases: [
                    {
                        phase: "Phase I",
                        years: { fr: "2004 - 2008", en: "2004 - 2008" },
                        images: [
                            "assets/images/a6-c6-phase1-1.jpg",
                            "assets/images/a6-c6-phase1-2.jpg"
                        ],
                        specs: [
                            { configuration: "2.0 TDI", power: "140 ch", torque: "320 Nm", transmission: "Manuelle", consumption: "5.5 L/100km", alimentation: "Turbo Diesel" },
                            { configuration: "3.0 TFSI", power: "290 ch", torque: "420 Nm", transmission: "Automatique", consumption: "9.0 L/100km", alimentation: "Turbo" },
                        ]
                    },
                    {
                        phase: "Phase II",
                        years: { fr: "2008 - 2011", en: "2008 - 2011" },
                        images: [
                            "assets/images/a6-c6-phase2-1.jpg",
                            "assets/images/a6-c6-phase2-2.jpg"
                        ],
                        specs: [
                            { configuration: "2.0 TDI", power: "170 ch", torque: "350 Nm", transmission: "Automatique", consumption: "5.4 L/100km", alimentation: "Turbo Diesel" },
                            { configuration: "3.0 TDI", power: "245 ch", torque: "500 Nm", transmission: "Automatique", consumption: "6.0 L/100km", alimentation: "Turbo Diesel" },
                        ]
                    }
                ]
            },
            {
                name: "Audi A6 C7",
                code: "C7",
                period: { fr: "2011 - 2018", en: "2011 - 2018" },
                phases: [
                    {
                        phase: "Phase I",
                        years: { fr: "2011 - 2014", en: "2011 - 2014" },
                        images: [
                            "assets/images/a6-c7-phase1-1.jpg",
                            "assets/images/a6-c7-phase1-2.jpg"
                        ],
                        specs: [
                            { configuration: "2.0 TDI", power: "150 ch", torque: "340 Nm", transmission: "Automatique", consumption: "4.9 L/100km", alimentation: "Turbo Diesel" },
                            { configuration: "3.0 TFSI", power: "333 ch", torque: "440 Nm", transmission: "Automatique", consumption: "8.1 L/100km", alimentation: "Turbo" },
                        ]
                    },
                    {
                        phase: "Phase II",
                        years: { fr: "2014 - 2018", en: "2014 - 2018" },
                        images: [
                            "assets/images/a6-c7-phase2-1.jpg",
                            "assets/images/a6-c7-phase2-2.jpg"
                        ],
                        specs: [
                            { configuration: "2.0 TDI", power: "190 ch", torque: "400 Nm", transmission: "Automatique", consumption: "4.8 L/100km", alimentation: "Turbo Diesel" },
                            { configuration: "3.0 TDI", power: "272 ch", torque: "600 Nm", transmission: "Automatique", consumption: "5.6 L/100km", alimentation: "Turbo Diesel" },
                        ]
                    }
                ]
            },
            {
                name: "Audi A6 C8",
                code: "C8",
                period: { fr: "2018 - présent", en: "2018 - present" },
                phases: [
                    {
                        phase: "Phase I",
                        years: { fr: "2018 - présent", en: "2018 - present" },
                        images: [
                            "assets/images/a6-c8-phase1-1.jpg",
                            "assets/images/a6-c8-phase1-2.jpg"
                        ],
                        specs: [
                            { configuration: "2.0 TDI", power: "204 ch", torque: "420 Nm", transmission: "Automatique", consumption: "4.6 L/100km", alimentation: "Turbo Diesel" },
                            { configuration: "3.0 TDI", power: "286 ch", torque: "620 Nm", transmission: "Automatique", consumption: "5.1 L/100km", alimentation: "Turbo Diesel" },
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "A7",
        generations: [
            {
                name: "Audi A7 C7",
                code: "C7",
                period: { fr: "2010 - 2017", en: "2010 - 2017" },
                phases: [
                    {
                        phase: "Phase I",
                        years: { fr: "2010 - 2014", en: "2010 - 2014" },
                        images: [
                            "assets/images/a7-c7-phase1-1.jpg",
                            "assets/images/a7-c7-phase1-2.jpg"
                        ],
                        specs: [
                            { configuration: "3.0 TDI", power: "204 ch", torque: "400 Nm", transmission: "Automatique", consumption: "5.6 L/100km", alimentation: "Turbo Diesel" },
                            { configuration: "3.0 TFSI", power: "333 ch", torque: "440 Nm", transmission: "Automatique", consumption: "8.0 L/100km", alimentation: "Turbo" },
                        ]
                    },
                    {
                        phase: "Phase II",
                        years: { fr: "2014 - 2017", en: "2014 - 2017" },
                        images: [
                            "assets/images/a7-c7-phase2-1.jpg",
                            "assets/images/a7-c7-phase2-2.jpg"
                        ],
                        specs: [
                            { configuration: "3.0 TDI", power: "272 ch", torque: "600 Nm", transmission: "Automatique", consumption: "5.7 L/100km", alimentation: "Turbo Diesel" },
                            { configuration: "4.0 TFSI", power: "450 ch", torque: "600 Nm", transmission: "Automatique", consumption: "9.0 L/100km", alimentation: "Turbo" },
                        ]
                    }
                ]
            },
            {
                name: "Audi A7 C8",
                code: "C8",
                period: { fr: "2017 - présent", en: "2017 - present" },
                phases: [
                    {
                        phase: "Phase I",
                        years: { fr: "2017 - présent", en: "2017 - present" },
                        images: [
                            "assets/images/a7-c8-phase1-1.jpg",
                            "assets/images/a7-c8-phase1-2.jpg"
                        ],
                        specs: [
                            { configuration: "3.0 TDI", power: "231 ch", torque: "500 Nm", transmission: "Automatique", consumption: "5.7 L/100km", alimentation: "Turbo Diesel" },
                            { configuration: "3.0 TFSI", power: "340 ch", torque: "500 Nm", transmission: "Automatique", consumption: "8.0 L/100km", alimentation: "Turbo" },
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "A8",
        generations: [
            {
                name: "Audi A8 D3",
                code: "D3",
                period: { fr: "2002 - 2010", en: "2002 - 2010" },
                phases: [
                    {
                        phase: "Phase I",
                        years: { fr: "2002 - 2006", en: "2002 - 2006" },
                        images: [
                            "assets/images/a8-d3-phase1-1.jpg",
                            "assets/images/a8-d3-phase1-2.jpg"
                        ],
                        specs: [
                            { configuration: "4.2 FSI", power: "335 ch", torque: "420 Nm", transmission: "Automatique", consumption: "11.0 L/100km", alimentation: "Atmosphérique" },
                            { configuration: "3.0 TDI", power: "233 ch", torque: "500 Nm", transmission: "Automatique", consumption: "8.4 L/100km", alimentation: "Turbo Diesel" },
                        ]
                    },
                    {
                        phase: "Phase II",
                        years: { fr: "2006 - 2010", en: "2006 - 2010" },
                        images: [
                            "assets/images/a8-d3-phase2-1.jpg",
                            "assets/images/a8-d3-phase2-2.jpg"
                        ],
                        specs: [
                            { configuration: "4.2 FSI", power: "350 ch", torque: "440 Nm", transmission: "Automatique", consumption: "10.8 L/100km", alimentation: "Atmosphérique" },
                            { configuration: "3.0 TDI", power: "245 ch", torque: "500 Nm", transmission: "Automatique", consumption: "8.1 L/100km", alimentation: "Turbo Diesel" },
                        ]
                    }
                ]
            },
            {
                name: "Audi A8 D4",
                code: "D4",
                period: { fr: "2010 - présent", en: "2010 - présent" },
                phases: [
                    {
                        phase: "Phase I",
                        years: { fr: "2010 - 2017", en: "2010 - 2017" },
                        images: [
                            "assets/images/a8-d4-phase1-1.jpg",
                            "assets/images/a8-d4-phase1-2.jpg"
                        ],
                        specs: [
                            { configuration: "3.0 TFSI", power: "333 ch", torque: "440 Nm", transmission: "Automatique", consumption: "9.5 L/100km", alimentation: "Turbo" },
                            { configuration: "4.2 TDI", power: "385 ch", torque: "850 Nm", transmission: "Automatique", consumption: "7.9 L/100km", alimentation: "Turbo Diesel" },
                        ]
                    },
                    {
                        phase: "Phase II",
                        years: { fr: "2017 - présent", en: "2017 - présent" },
                        images: [
                            "assets/images/a8-d4-phase2-1.jpg",
                            "assets/images/a8-d4-phase2-2.jpg"
                        ],
                        specs: [
                            { configuration: "3.0 TDI", power: "286 ch", torque: "620 Nm", transmission: "Automatique", consumption: "6.8 L/100km", alimentation: "Turbo Diesel" },
                            { configuration: "4.0 TFSI", power: "460 ch", torque: "600 Nm", transmission: "Automatique", consumption: "9.0 L/100km", alimentation: "Turbo" },
                        ]
                    }
                ]
            }
        ]
    }
];

// Export the data for use in other modules
// export default models;
