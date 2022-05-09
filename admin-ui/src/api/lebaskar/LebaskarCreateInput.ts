import { OrderCreateNestedManyWithoutLebaskarsInput } from "./OrderCreateNestedManyWithoutLebaskarsInput";

export type LebaskarCreateInput = {
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutLebaskarsInput;
};
