import { useState } from "react";
import type { ReactNode } from "react";
import { EmailVerificationContext } from "./EmailVerificationContextContext";

interface EmailVerificationState {
  [email: string]: {
    isVerified: boolean;
    verifiedAt: Date;
  };
}

interface EmailVerificationProviderProps {
  children: ReactNode;
}

export function EmailVerificationProvider({
  children,
}: EmailVerificationProviderProps) {
  const [verifiedEmails, setVerifiedEmails] = useState<EmailVerificationState>(
    {}
  );

  const isEmailVerified = (email: string): boolean => {
    if (!email) return false;
    const normalizedEmail = email.toLowerCase().trim();
    return !!verifiedEmails[normalizedEmail]?.isVerified;
  };

  const verifyEmail = (email: string): void => {
    if (!email) return;
    const normalizedEmail = email.toLowerCase().trim();
    setVerifiedEmails((prev) => ({
      ...prev,
      [normalizedEmail]: {
        isVerified: true,
        verifiedAt: new Date(),
      },
    }));
  };

  const clearVerification = (email: string): void => {
    if (!email) return;
    const normalizedEmail = email.toLowerCase().trim();
    setVerifiedEmails((prev) => {
      const newState = { ...prev };
      delete newState[normalizedEmail];
      return newState;
    });
  };

  const getAllVerifiedEmails = (): string[] => {
    return Object.keys(verifiedEmails).filter(
      (email) => verifiedEmails[email].isVerified
    );
  };

  return (
    <EmailVerificationContext.Provider
      value={{
        isEmailVerified,
        verifyEmail,
        clearVerification,
        getAllVerifiedEmails,
      }}
    >
      {children}
    </EmailVerificationContext.Provider>
  );
}
export { EmailVerificationContext };
export { useEmailVerification } from "./useEmailVerification";
