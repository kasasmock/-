import { Customer } from "../customer/Customer";
import { Lebaskar } from "../lebaskar/Lebaskar";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  discount: number | null;
  id: string;
  product?: Lebaskar | null;
  quantity: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
