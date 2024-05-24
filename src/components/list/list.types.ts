export type ListCardTypes = {
  title: string;
  productImage: React.ReactNode;
  price: number;
  prevPrice: number;
  description: string;
};

export type ListRenderTypes = {
  gap: number | string;
  children: React.ReactNode;
};
