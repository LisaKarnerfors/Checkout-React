export interface Shipping {
    id: number,
    title: string,
    desctiption: string,
    price: number,
    shippingDate: number,
}

export const shippingList: Shipping[] = [
    {
        id: 1,
        title: "Postnord",
        desctiption: "",
        price: 29,
        shippingDate: 72,
    }, 
    {
        id: 2,
        title: "Instabox",
        desctiption: "",
        price: 19,
        shippingDate: 48,
    }, 
    {
        id: 3,
        title: "Hämta i butik",
        desctiption: "",
        price: 0,
        shippingDate: 24,
    }
]