export interface BloodComponent {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface ABOGroup {
  group: string;
  antigens: string;
  antibodies: string;
  description: string;
  importance: string;
  color: string;
}

export interface CompatibilityRow {
  type: string;
  canDonateTo: string[];
  canReceiveFrom: string[];
  isUniversalDonor?: boolean;
  isUniversalRecipient?: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
