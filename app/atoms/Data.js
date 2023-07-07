import { atom } from "recoil";

export const currentItemsAtom = atom({
  key: "currentItemsAtom",
  default: [],
});

export const dataAtom = atom({
  key: "dataAtom",
  default: [],
});
// export const dataAtom = atom({
//   key: "dataAtom",
//   default: {
//     data: [],
//     currentPage: 0, // Add this property
//   },
// });

export const selectedTermAtom = atom({
  key: "selectedTerm",
  default: "",
});

export const paginationAtom = atom({
  key: "paginationAtom",
  default: {
    itemsPerPage: 4,
    itemOffset: 0,
  },
});
// *******************************
