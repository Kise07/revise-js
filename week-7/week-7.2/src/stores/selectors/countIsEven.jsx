import { selector } from "recoil";
import { countState } from "../atoms/countState";

export const countIsEven = selector({
  key: "countIsEven",
  get: ({ get }) => {
    const count = get(countState);
    return count % 2 === 0;
  },
});
