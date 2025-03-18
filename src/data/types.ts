export type Dataset<T> = {
    objectIdFieldName: string;
    globalIdFieldName: string;
    fields: {
        name: string;
        alias: string;
        type: string;
        length?: number;
    }[];
    features: { attributes: T }[];
}

export interface NiveauxObservation {
    ID_NIVEAU: number;
    ENDROIT: string;
    DATE_OBSERVATION: number;
    MESURE: number;
    NORMALE: number;
    UNITE: string;
    SEUIL: string;
    SITE: string;
    TYPE_ANNEE: string;
    DATE_CREATION: number;
    USER_CREATION: string;
    DATE_MODIF: number | null;
    USER_MODIF: string | null;
    DATE_MODIF_SYS: number | null;
}

export type RechargeObservation = {
    ID_RECHARGE: number;
    ENDROIT: "Craie" | "Carbonifère" | "Lys";
    DATE_OBSERVATION: number; // Timestamp (milliseconds) = milliseconds since the Unix epoch (January 1, 1970, UTC)
    MESURE: number | null;
    NORMALE: number;
    UNITE: string;
    SITE: string | null;
    TYPE_ANNEE: string;
    DATE_CREATION: number; // Timestamp (milliseconds)
    USER_CREATION: string;
    DATE_MODIF: number | null; // Nullable timestamp
    USER_MODIF: string | null; // Nullable string
    DATE_MODIF_SYS: number | null; // Nullable timestamp
};

// This works for temperature, humidity, précipitation and evapotransipration
export type MeteoObservation = {
    ID_PRECIPITATION: number;
    INDICATEUR: string;
    DATE_OBSERVATION: number; // Timestamp in milliseconds
    MESURE: number;
    NORMALE: number;
    UNITE: string;
    SITE: string;
    TYPE_ANNEE: string;
    DATE_CREATION: number; // Timestamp in milliseconds
    USER_CREATION: string;
    DATE_MODIF: number | null;
    USER_MODIF: string | null;
    DATE_MODIF_SYS: number | null;
}

export type PrelevementObservation = {
    ID_PRELEVEMENT: number;
    PRODUCTEUR: string;
    DATE_OBSERVATION: number;
    VOLUME_PRELEVE: number;
    UNITE: string;
    SOURCE_EAU: string;
    DATE_CREATION: number;
    USER_CREATION: string;
    DATE_MODIF: number | null;
    USER_MODIF: string | null;
    DATE_MODIF_SYS: number | null;
};

export type MapObservation = {
    ARRETE: number;
    CARACT: number;
    CHAMP_CAPTANT: string;
    COORD_X: string;
    COORD_Y: string;
    DATE_CREATION: number;
    DATE_MODIF: number;
    DATE_MODIF_SYS: number;
    DATE_OBSERVATION: number;
    EVOLUTION: number;
    ID_CARTE: string;
    OBJECTID: string;
    SEUIL: number;
    SEUIL_ARRETE: string;
    SE_ANNO_CAD_DATA: string;
    USER_CREATION: number;
    USER_MODIF: string;
}
