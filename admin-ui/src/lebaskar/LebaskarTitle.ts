import { Lebaskar as TLebaskar } from "../api/lebaskar/Lebaskar";

export const LEBASKAR_TITLE_FIELD = "id";

export const LebaskarTitle = (record: TLebaskar): string => {
  return record.id || record.id;
};
