import { scaleOrdinal } from "d3";

export const LEVELS = [
    "Très bas",
    "Bas",
    "Modérément bas",
    "Normal",
    "Modérément haut",
    "Haut",
    "Très haut",
] as const;

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

export const CHANGE_LEVELS = ["stables", "baissé", "monté", "mixtes"] as const;
export const changeScale = scaleOrdinal<string>()
    .domain(CHANGE_LEVELS)
    .range(["=", "▽", "△", "★"]);

export const ALERT_LEVELS = ["Non", "Vigilance", "Alerte"] as const;

