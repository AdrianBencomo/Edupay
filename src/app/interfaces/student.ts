import { User } from "./user"

export interface Student {
    id: number,
    name: string,
    gender: string,
    class: number,
    parents: string,
    address: string,
    birthday: string,
    phone: string
}

export interface ApiResponseStudent extends User {
    address: string,
    phone: string,
}

export interface ApiRequestStudent {
    name: string,
    lastName: string
    email: string,
    password: string,
    role: string,
    image: string,
    occupation: string,
    address: string,
    phone: string,
    groupId: number,
    tutorId: number,
}
