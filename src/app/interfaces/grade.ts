import { ApiResponseGroup } from "./group";
import { ApiResponsePeriod } from "./period";

export interface ApiRequestGrade {
    name: string,
    periodId: number
}

export interface ApiResponseGrade {
    id: number;
    name: string;
    periodId: number;
    period?: ApiResponsePeriod
    groups: ApiResponseGroup[]
}

