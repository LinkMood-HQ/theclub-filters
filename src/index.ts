import { List } from "immutable";
import {
  DeepARFilter,
  AllFilters,
  Filter,
  None,
} from "./enums";
export { getFilterBinary } from "./binaries";


export function parseFilter(filterName: string): Filter {
  const filtered: List<DeepARFilter> = AllFilters.filter((f) => {
    return f == filterName;
  });
  return filtered.get(0, None);
}

export {
  DeepARFilter,
  AllFilters,
  Filter,
  None,
};
