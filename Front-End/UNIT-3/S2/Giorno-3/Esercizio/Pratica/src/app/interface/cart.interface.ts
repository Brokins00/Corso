import { CartProduct } from "./cart-product.interface";

export interface Cart {
    products: CartProduct[],
    total: number,
    discountedTotal: number,
    totalProducts: number,
    totalQuantity: number
}
