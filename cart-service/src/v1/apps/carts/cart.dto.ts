export interface ISelectedIds {
    product_id: string;
    product_shop: string;
    quantity: number;
    price: number;  
}

// export interface IUpdatedIds extends ISelectedIds {
//     is_checkout: boolean;
// }

export interface ICartUpdate {
    user_id: string | null;
    cart_id: string;
    action_type: number;
    // selected_shop_order_ids: Array<ISelectedIds>;
    updated_shop_order_ids: Array<ISelectedIds>;
}