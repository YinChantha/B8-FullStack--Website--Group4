import { atom, selector } from "recoil";

export const bankDataAtom = atom({
  key: "bankDataAtom",
  default: [],
});

export const selectedBankState = atom({
  key: "selectedBankState",
  default: [],
});

export const filteredBankDataAtom = selector({
  key: "filteredBankDataAtom",
  get: ({ get }) => {
    const selectedBank = get(selectedBankState);

    if (selectedBank.length === 0) return null;

    const bankData = get(bankDataAtom);

    if (bankData.length > 0) {
      return bankData.filter((bank) => {
        return selectedBank.includes(bank.bank);
      });
    }

    return [];
  },
});