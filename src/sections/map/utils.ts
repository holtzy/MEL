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
export const CHANGE_LEVELS = ["stables", "baissé", "monté", "mitigés"] as const;

export const evolutionScale = scaleOrdinal<number, (typeof CHANGE_LEVELS)[number]>()
    .domain([1, 2, 3, 4]) // 0 is "no data"
    .range(["baissé", "stables", "mitigés", "monté"]);



//
//
// NIVEAUX D'ALERTES
//
//

export const ALERT_LEVELS = ["Non", "Vigilance", "Alerte"] as const;

export const alertScale = scaleOrdinal<number, (typeof ALERT_LEVELS)[number]>()
    .domain([0, 1, 2, 3, 4, 5, 6])
    .range(["Non", "Non", "Vigilance", "Vigilance", "Alerte", "Alerte", "Alerte"]);


//
//
// ARRETE PREFECTORAL
//
//

export const arreteScale = scaleOrdinal<number, boolean>()
    .domain([0, 1, 2])
    .range([false, true, false]);




// MAIL de DIDIER MAES
// CARACT :
// 0 - Donnée non disponible
// 1 - Très inférieur à la normale
// 2 - Très bas
// 3 - Inférieur à la normale
// 4 - Bas
// 5 - Modérément bas
// 6 - Autour de la moyenne
// 7 - Normal
// 8 - Supérieur à la normale
// 9 - Modérément haut
// 10 - Haut
// 11 - Très supérieur à la normale
// 12 - Très haut

// CARACT pour la LYS (message de Aurélie BOUVET du 20/02, harmonisation  du champ CARACT) :
// 11 > 12 [très supérieur] => [Très haut]
// 08 > 10 [supérieur] => [haut]
// 07 > 06 [normal] => [Autour de la moyenne]
// 03 > 04 [inférieur] => [Bas]
// 01 > 02 [très inférieur] => [Très bas]

// EVOLUTION :
// 0 - Donnée non disponible
// 1 - En baisse
// 2 - Stable
// 3 - Mitigé
// 4 - En hausse

// SEUIL :
// 0 - Donnée non disponible
// 1 - Non
// 2 - Vigilance
// 3 - Vigilance renforcée
// 4 - Alerte
// 5 - Alerte renforcée
// 6 - Crise

// ARRETE :
// 0 - n.c
// 1 - Oui
// 2 - Non

// SEUIL_ARRETE :
// 0 - n.c
// 1 - Hors sécheresse
// 2 - Vigilance
// 3 - Vigilance renforcée
// 4 - Alerte


