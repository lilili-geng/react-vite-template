// 示例封装
import { atom, selector } from "recoil";

export const UserState = atom({
  key: "UserState",
  default: { name: "张三" },
});

export default {
  nameState: atom({
    key: "nameState",
    default: "张三",
  }),
  useUserState: selector({
    key: "useUserState",
    get: ({ get }) => {
      return get(UserState);
    },
    set: ({ get, set }, newValue) => {
      const oldValue = get(UserState);
      const updateValue = Object.assign({}, oldValue, newValue);
      set(UserState, updateValue);
    },
  }),
};