export interface Payment {
    id: number,
    title: string,
    desctiption: string,
    price: number,
}

export const paymentList: Payment[] = [
    {
        id: 1,
        title: "Swish",
        desctiption: "",
        price: 0,
    }, 
    {
        id: 2,
        title: "Kort",
        desctiption: "",
        price: 0,
    }, 
    {
        id: 3,
        title: "Resurs Bank", 
        desctiption: "Räntefri delbetalning i upp till 12 månader.",
        price: 29, 
    }
]