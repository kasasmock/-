import { Lebaskar as TLebaskar } from "../api/lebaskar/Lebaskar";

export const LEBASKAR_TITLE_FIELD = "name";

export const LebaskarTitle = (record: TLebaskar): string => {
  return record.name || record.id;
};
