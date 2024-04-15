import { ApiResponseGrade } from "./grade";

export interface ApiResponsePeriod {
    id: number;
    name: string;
    price: string;
    startDate: string;
    endDate: string;
    stripeProductId: string;
    stripeSubscriptionId: number;
    planId: string;
    cancelAtEnd: boolean;
    grades: ApiResponseGrade[]
}

export interface ApiRequestPeriod {
    name: string,
    price: number
    startDate: string,
    endDate: string,
}