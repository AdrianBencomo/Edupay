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
    tutorados: ApiResponseStudent[]
    occupation: string,
    address: string,
    phone: string,
}

export interface ApiRequestParent{
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
    profilePhoto?: string,
}