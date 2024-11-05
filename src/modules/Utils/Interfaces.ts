export interface Response {
    message: string;
    data: {
        accessToken: string;
    };
};

export interface AuthSchema {
    first_name?: string,
    last_name?: string,
    email?: string,
    password?: string,
    password_new?: string,
    role?: string,
    otp?: string | number,
};

export interface BookSchema {
    _id: string | number,
    name: string,
    description: string,
    author: string,
    price: number | string,
    image?: string,
    status: string,
    category?: string,
    createdAt?: string,
    updatedAt?: string,
};

export interface Category {
    _id: string,
    title: string,
    status: string,
    books: BookSchema[],
};

export interface HeroSlide {
    id: number,
    title: string,
    body: string,
    coverImg: string,
    btnText: string,
    btnDirection: string,
};

export interface HeadLinks {
    name: string;
    path: string;
};

export interface ShopViewProps {
    books: BookSchema[];
};

export interface BookSlideProps {
    book: BookSchema;
    arrOfBookImgs: string[];
    idx: number;
};

export interface CartItem {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    book: any;
    quantity: number;
    _id?: string;
};

export interface CartData {
    _id: string;
    customer: string;
    items: CartItem[];
    total: number;
    updatedAt: string;
    createdAt: string;
}