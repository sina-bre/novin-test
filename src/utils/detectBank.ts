import bankData from "@/data/banks.json";

export interface Bank {
  name: string;
  persianName: string;
  logo: string;
  bins: string[];
}

export interface BankInfo {
  name: string;
  persianName: string;
  logo: string;
}

export const detectBank = (bin: string): BankInfo | null => {
  const bank = bankData.banks.find((bank: Bank) =>
    bank.bins.some((bankBin: string) => bin.startsWith(bankBin))
  );

  return bank
    ? {
        name: bank.name,
        persianName: bank.persianName,
        logo: bank.logo,
      }
    : null;
};
