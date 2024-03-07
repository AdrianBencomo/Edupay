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
    BirthDay: string,
}
