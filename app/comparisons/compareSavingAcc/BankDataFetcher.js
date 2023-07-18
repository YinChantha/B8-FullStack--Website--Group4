"use client";

import { useEffect, useState } from "react";
import { selector } from "recoil";
import axios from "axios";

export const BankDataFetcher = selector({
  key: "BankDataFetcher",
  get: async ({ get }) => {
    try {
      const response = await axios.get(
        "http://34.143.206.144:8080/savings/all"
      );
      return response.data.savings;
    } catch (error) {
      console.log("Vichet fetching error: ", error);
      throw error;
    }
  },
  set: ({ set }, newValue) => {
    set(bankDataAtom, newValue);
  },
});
