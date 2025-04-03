import { z } from "zod";
import { isValidIranianCard } from "@/utils/cardValidation";

export const cardNumberSchema = z.object({
  cardNumber: z
    .string()
    .length(16, "شماره کارت باید 16 رقم باشد")
    .regex(/^\d+$/, "فقط اعداد مجاز هستند")
    .refine(
      (val) => isValidIranianCard(val),
      () => ({
        message: "شماره کارت نامعتبر می باشد",
      })
    ),
});

export type CardNumberSchema = z.infer<typeof cardNumberSchema>;
