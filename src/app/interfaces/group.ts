import { ApiResponseGrade } from "./grade";

export interface ApiResponseGroup {
    id: number;
    name: string;
    capacity: string;
    gradeId: number;
    grade?: ApiResponseGrade
}

export interface ApiRequestGroup {
    name: string,
    capacity: number,
    gradeId: number,
}