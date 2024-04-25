export interface PaymentPeriod {
    periodId: number | null,
    userid: number
}

export interface PaymentNotification {
    title: string,
    description: string,
    userid: number,
    periodId: number,
    hijoId: number
}

export interface ApiResponsePayment {
    sessionId: string;
    nameHijo: string;
    emailPadre: string;
    phonePadre: string;
    amout: number;
    sessionStatus: string;
    hijoId: number;
    fechaPago: string;
}
