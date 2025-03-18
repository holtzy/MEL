import { scaleOrdinal } from "d3";


//
//
// NIVEAUX D'EAU DANS LES NAPPES
//
//

// List of what we want to show on the map
export const LEVELS = [
    "Très bas",
    "Bas",
    "Modérément bas",
    "Normal",
    "Modérément haut",
    "Haut",
    "Très haut",
] as const;

// A color for each of the level we show on the map
export const colorScale = scaleOrdinal<string>()
    .domain(LEVELS)
    .range([
        "#AB0107",
        "#E30614",
        "#FACED1",
        "#84D0F0",
        "#009EE0",
        "#005EA8",
        "#324886",
    ]);

// The dataset has values between 0 and 12. This scale allows to go from a number in the
// dataset to something we want to show on the map.
// Note that 0 is missing data, so I do not put it in the scale
export const levelScale = scaleOrdinal<number, (typeof LEVELS)[number]>()
    .domain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    .range([
        "Très bas",
        "Très bas",
        "Très bas",
        "Bas",
        "Modérément bas",
        "Normal",
        "Normal",
        "Modérément haut",
        "Modérément haut",
        "Haut",
        "Très haut",
        "Très haut",
    ]);


//
//
// CHANGEMENTS
//
//
export const CHANGE_LEVELS = ["stables", "baissé", "monté", "mixtes"] as const;

export const changeScale = scaleOrdinal<string>()
    .domain(CHANGE_LEVELS)
    .range(["=", "▽", "△", "★"]);

export const evolutionScale = scaleOrdinal<number, (typeof CHANGE_LEVELS)[number]>()
    .domain([1, 2, 3, 4]) // 0 is "no data"
    .range(["baissé", "stables", "monté", "mixtes"]);



//
//
// NIVEAUX D'ALERTES
//
//

export const ALERT_LEVELS = ["Non", "Vigilance", "Alerte"] as const;

export const alertScale = scaleOrdinal<number, (typeof ALERT_LEVELS)[number]>()
    .domain([1, 2])
    .range(["Non", "Vigilance"]);
