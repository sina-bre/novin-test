const IRANIAN_BANK_PATTERNS = {
  SAMAN: /^621986/,
  MELLAT: /^6104/,
  MELLI: /^603799/,
  SEPAH: /^589210/,
  KESHAVARZI: /^603770/,
  PASARGAD: /^502229/,
  PARSIAN: /^622106/,
  TEJARAT: /^627353/,
  SADERAT: /^603761/,
  // Add more banks as needed
};

export const isValidIranianCard = (cardNumber: string): boolean => {
  // Check if length is exactly 16
  if (cardNumber.length !== 16) return false;

  // Check if it matches any Iranian bank pattern
  const isIranianBank = Object.values(IRANIAN_BANK_PATTERNS).some((pattern) =>
    pattern.test(cardNumber)
  );
  if (!isIranianBank) return false;

  // Luhn Algorithm Check
  let sum = 0;
  let alternate = false;
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let n = parseInt(cardNumber.charAt(i));
    if (alternate) {
      n *= 2;
      if (n > 9) n = (n % 10) + 1;
    }
    sum += n;
    alternate = !alternate;
  }
  return sum % 10 === 0;
};

export const getCardBankName = (cardNumber: string): string | null => {
  for (const [bank, pattern] of Object.entries(IRANIAN_BANK_PATTERNS)) {
    if (pattern.test(cardNumber)) return bank;
  }
  return null;
};
