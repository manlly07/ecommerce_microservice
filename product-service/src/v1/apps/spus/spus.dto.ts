export interface ISPU {
    product_id?: string;
    product_name: string;
    product_thumb: string;
    product_description: string;
    product_price: Number;
    product_category: string;
    product_shop: string;
    product_attributes: Array<object>;
    product_quantity: Number;
    product_variations: Array<object>;
    sku_list?: Array<object>;
}

export interface IFilterOptions {
    shop?: string;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    rate?: number;
    page?: number;
    perPage?: number;
}