export interface IProduct {
  id: number;
  characteristic: string;
  rating: number | null;
  inStock: boolean;
  price: number;
  discription: string;
  name: string;
  count: number;
  views: number;
  isPreviouslyUsed: boolean;
  createdAt: Date;
  updatedAt: Date;
  images?: IArticlePhoto[];
  sale?: ISale | null;
  categories?: ICategory[];
}

export interface IArticlePhoto {
  id: number;
  name: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
  article?: IProduct;
}

export interface ICategory {
  id: number;
  name: string;
  articles?: IProduct[];
}

export interface ISale {
  id: number;
  newPrise: number;
  activeTill: Date;
  createdAt: Date;
  updatedAt: Date;
  article?: IProduct;
}

export interface IProductFilterOptions {
  search: string;
  category: string;
  sortBy: string;
  sortOrder: string;
  page: number;
  limit: number;
}
