import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { LebaskarWhereUniqueInput } from "../lebaskar/LebaskarWhereUniqueInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  discount?: number | null;
  product?: LebaskarWhereUniqueInput | null;
  quantity?: number | null;
  totalPrice?: number | null;
};
