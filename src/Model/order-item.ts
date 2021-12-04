import { CartItem } from './CartItem ';
export class OrderItem {
    
    imageUrl: string;
    unitPrice: number;
    quantity: number;
    productId: number;

    constructor(cartItem: CartItem){
        this.unitPrice = cartItem.unitPrice;
        this.quantity = cartItem.quantity;
        this.productId = cartItem.id;
    }

}
