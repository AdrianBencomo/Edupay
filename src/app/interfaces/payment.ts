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
