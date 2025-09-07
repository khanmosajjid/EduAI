import { createContext } from "react";

export interface EmailVerificationContextType {
  isEmailVerified: (email: string) => boolean;
  verifyEmail: (email: string) => void;
  clearVerification: (email: string) => void;
  getAllVerifiedEmails: () => string[];
}

export const EmailVerificationContext = createContext<
  EmailVerificationContextType | undefined
>(undefined);
