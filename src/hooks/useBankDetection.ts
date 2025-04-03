import { useState, useEffect } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { getCardBankName } from "@/utils/cardValidation";

interface BankInfo {
  name: string | null;
  logo: string | null;
}

export function useBankDetection(cardNumber: string) {
  const [bankInfo, setBankInfo] = useState<BankInfo>({
    name: null,
    logo: null,
  });
  const [isDetecting, setIsDetecting] = useState(false);
  const debouncedCardNumber = useDebounce(cardNumber, 300);

  useEffect(() => {
    const detectBank = async () => {
      setIsDetecting(true);
      if (debouncedCardNumber.length >= 6) {
        const bankName = getCardBankName(debouncedCardNumber.slice(0, 6));
        setBankInfo({
          name: bankName,
          logo: bankName ? `/svg/banks/${bankName.toLowerCase()}.svg` : null,
        });
      } else {
        setBankInfo({ name: null, logo: null });
      }
      setIsDetecting(false);
    };

    detectBank();
  }, [debouncedCardNumber]);

  return { bankInfo, isDetecting };
}
