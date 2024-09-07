import type {PaginationType} from './pagination';

export interface DataType {
    title: string;
    content: string;
    slug: string;
    pagination: PaginationType;
}