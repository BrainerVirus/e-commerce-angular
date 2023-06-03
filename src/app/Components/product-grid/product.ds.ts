export interface Product {
  id: number;
  title: String;
  price: number;
  description: String;
  images: String[];
  creationAt: Date;
  updatedAt: Date;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: Date;
    updatedAt: Date;
  };
}
