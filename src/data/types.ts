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
