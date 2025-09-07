import { useContext } from "react";
import { EmailVerificationContext } from "./EmailVerificationContext";

export function useEmailVerification() {
  const context = useContext(EmailVerificationContext);
  if (context === undefined) {
    throw new Error(
      "useEmailVerification must be used within an EmailVerificationProvider"
    );
  }
  return context;
}
