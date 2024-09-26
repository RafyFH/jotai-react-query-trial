export interface BookData {
    code: string;
    title: string;
    author: string;
    stock: number;
    createdAt: string;
    updatedAt: string;
}

export interface CreateBook {
    title: string;
    author: string;
    stock: number;
}

export interface UpdateBook {
    title: string;
    author: string;
    stock: number;
}
