export interface CartProduct {
    id: number,
    title: string,
    price: number,
    quantity: number,
    total?: number,
    discountPercentage: number,
    discountPrice?: number,
    thumbnail: string
}
