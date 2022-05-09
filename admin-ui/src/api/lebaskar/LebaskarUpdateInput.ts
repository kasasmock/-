import { OrderUpdateManyWithoutLebaskarsInput } from "./OrderUpdateManyWithoutLebaskarsInput";

export type LebaskarUpdateInput = {
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutLebaskarsInput;
};
