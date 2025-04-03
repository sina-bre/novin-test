import { z } from "zod";

export const cardNumberSchema = z.object({
  cardNumber: z
    .string()
    .length(16, "شماره کارت باید 16 رقم باشد")
    .regex(/^\d*$/, "فقط اعداد مجاز هستند"),
});

export type CardNumberSchema = z.infer<typeof cardNumberSchema>;
