export type ApiPostMethods = 'POST' | 'PUT' | 'DELETE';
export type IPaymentMethod = 'card' | 'cash' | '';

export interface IApi {
    get<T extends object>(uri: string): Promise<T>;
    post<T extends object>(uri: string, data: object, method?: ApiPostMethods): Promise<T>;
}

export interface IProduct {
    id: string;
    title: string;
    image: string;
    category: string;
    price: number | null;
    description: string;
}

export interface ICustomer {
    payment: IPaymentMethod;
    address: string;
    email: string;
    phone: string;
}



export interface IPostData {
    payment: 'online' | 'offline';
    email: string;
    phone: string;
    address: string;
    total: number;
    items: IProduct['id'][]
}