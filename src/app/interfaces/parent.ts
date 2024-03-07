import { ApiResponseStudent } from "./student"
import { User } from "./user"

export interface Parent {
    id: number,
    name: string,
    gender: string,
    occupation: string,
    address: string,
    email: string,
    phone: string,
}

export interface ApiResponseParent extends User {
    TutorOf: ApiResponseStudent[]
}