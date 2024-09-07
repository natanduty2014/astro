import type {PaginationType} from './pagination';

export interface DataType {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    pagination: PaginationType;
}