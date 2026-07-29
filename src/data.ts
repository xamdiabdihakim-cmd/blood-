import { ABOGroup, BloodComponent, CompatibilityRow, FAQItem, QuizQuestion } from './types';

export const bloodComponents: BloodComponent[] = [
  {
    id: 'rbc',
    name: 'Red Blood Cells (RBCs)',
    description: 'Carry oxygen from the lungs to the rest of the body and return carbon dioxide to the lungs to be exhaled.',
    icon: 'Droplet',
  },
  {
    id: 'wbc',
    name: 'White Blood Cells (WBCs)',
    description: 'Part of the immune system, these cells help fight infections and defend the body against foreign materials.',
    icon: 'Shield',
  },
  {
    id: 'platelets',
    name: 'Platelets',
    description: 'Small cell fragments that help the blood to clot and prevent excessive bleeding when injuries occur.',
    icon: 'Bandage',
  },
  {
    id: 'plasma',
    name: 'Plasma',
    description: 'The liquid component of blood that carries cells, proteins, nutrients, and waste products throughout the body.',
    icon: 'Waves',
  },
];

export const aboGroups: ABOGroup[] = [
  {
    group: 'A',
    antigens: 'A Antigens',
    antibodies: 'Anti-B Antibodies',
    description: 'Has A antigens on the red blood cells with anti-B antibodies in the plasma.',
    importance: 'Second most common blood group globally. Can receive from A and O.',
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 border-blue-200 dark:border-blue-800',
  },
  {
    group: 'B',
    antigens: 'B Antigens',
    antibodies: 'Anti-A Antibodies',
    description: 'Has B antigens on the red blood cells with anti-A antibodies in the plasma.',
    importance: 'Common in parts of Asia. Can receive from B and O.',
    color: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200 border-purple-200 dark:border-purple-800',
  },
  {
    group: 'AB',
    antigens: 'A and B Antigens',
    antibodies: 'No Antibodies',
    description: 'Has both A and B antigens on red blood cells, but neither anti-A nor anti-B antibodies in the plasma.',
    importance: 'The universal plasma donor. AB+ is the universal red cell recipient.',
    color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800',
  },
  {
    group: 'O',
    antigens: 'No Antigens',
    antibodies: 'Anti-A and Anti-B Antibodies',
    description: 'Has neither A nor B antigens on red blood cells, but both anti-A and anti-B antibodies are in the plasma.',
    importance: 'O- is the universal red cell donor, crucial for emergency transfusions.',
    color: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200 border-red-200 dark:border-red-800',
  },
];

export const compatibilityData: CompatibilityRow[] = [
  { type: 'O-', canDonateTo: ['Everyone'], canReceiveFrom: ['O-'], isUniversalDonor: true },
  { type: 'O+', canDonateTo: ['O+', 'A+', 'B+', 'AB+'], canReceiveFrom: ['O+', 'O-'] },
  { type: 'A-', canDonateTo: ['A+', 'A-', 'AB+', 'AB-'], canReceiveFrom: ['A-', 'O-'] },
  { type: 'A+', canDonateTo: ['A+', 'AB+'], canReceiveFrom: ['A+', 'A-', 'O+', 'O-'] },
  { type: 'B-', canDonateTo: ['B+', 'B-', 'AB+', 'AB-'], canReceiveFrom: ['B-', 'O-'] },
  { type: 'B+', canDonateTo: ['B+', 'AB+'], canReceiveFrom: ['B+', 'B-', 'O+', 'O-'] },
  { type: 'AB-', canDonateTo: ['AB+', 'AB-'], canReceiveFrom: ['AB-', 'A-', 'B-', 'O-'] },
  { type: 'AB+', canDonateTo: ['AB+'], canReceiveFrom: ['Everyone'], isUniversalRecipient: true },
];

export const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'What is the rarest blood group?',
    answer: 'AB negative (AB-) is generally considered the rarest blood type globally, found in less than 1% of the population. However, there are even rarer blood types like Rh-null (often called "Golden Blood").'
  },
  {
    id: 2,
    question: 'Which blood type is most common?',
    answer: 'O positive (O+) is the most common blood type worldwide. Over 35% of the global population has this blood type.'
  },
  {
    id: 3,
    question: 'Can blood type change?',
    answer: 'In very rare cases, blood type can change. This usually only happens after a bone marrow transplant, where the recipient takes on the blood type of the donor. Certain rare infections can also temporarily alter blood type expressions.'
  },
  {
    id: 4,
    question: 'Why is blood typing important?',
    answer: 'Blood typing is critical for safe blood transfusions. If a patient receives an incompatible blood type, their immune system will attack the donor blood cells, which can cause a severe or fatal reaction.'
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Which blood type is considered the universal donor for red blood cells?',
    options: ['A+', 'O-', 'AB+', 'B-'],
    correctAnswerIndex: 1,
    explanation: 'O- blood has no A, B, or Rh antigens on its surface, making it safe to transfuse to almost anyone in emergencies.'
  },
  {
    id: 2,
    question: 'Which component of blood is responsible for fighting infections?',
    options: ['Red Blood Cells', 'Plasma', 'White Blood Cells', 'Platelets'],
    correctAnswerIndex: 2,
    explanation: 'White blood cells are the cells of the immune system that are involved in protecting the body against both infectious disease and foreign invaders.'
  },
  {
    id: 3,
    question: 'If you have type A blood, what antibodies are present in your plasma?',
    options: ['Anti-A', 'Anti-B', 'Both Anti-A and Anti-B', 'No antibodies'],
    correctAnswerIndex: 1,
    explanation: 'People with type A blood have A antigens on their red cells and naturally produce Anti-B antibodies in their plasma.'
  },
  {
    id: 4,
    question: 'What does the "Rh" in Rh factor stand for?',
    options: ['Rhesus', 'Rheumatoid', 'Rhodium', 'Reactive hemoglobin'],
    correctAnswerIndex: 0,
    explanation: 'The Rh factor was named after the Rhesus macaque monkeys in which the antigen was first discovered.'
  },
  {
    id: 5,
    question: 'Which blood type is the universal recipient?',
    options: ['O+', 'AB-', 'A+', 'AB+'],
    correctAnswerIndex: 3,
    explanation: 'AB+ individuals have both A and B antigens and the Rh antigen, so they do not produce antibodies against any of these. Thus, they can receive any blood type.'
  },
  {
    id: 6,
    question: 'What is the liquid portion of the blood called?',
    options: ['Lymph', 'Serum', 'Plasma', 'Hemoglobin'],
    correctAnswerIndex: 2,
    explanation: 'Plasma is the yellowish liquid component of blood that holds the blood cells in whole blood in suspension.'
  },
  {
    id: 7,
    question: 'If an Rh-negative mother is carrying an Rh-positive baby, what complication can occur in future pregnancies?',
    options: ['Anemia in the mother', 'Hemolytic disease of the newborn', 'Gestational diabetes', 'Nothing happens'],
    correctAnswerIndex: 1,
    explanation: 'If the mother becomes sensitized to the Rh antigen, her antibodies can cross the placenta in subsequent pregnancies and attack the red blood cells of an Rh-positive baby.'
  },
  {
    id: 8,
    question: 'Which of the following blood types can a person with B+ blood safely receive?',
    options: ['AB+ and O+', 'B+, B-, O+, O-', 'A+ and B+', 'Only B+'],
    correctAnswerIndex: 1,
    explanation: 'A person with B+ blood can receive B blood (positive or negative) and O blood (positive or negative).'
  },
  {
    id: 9,
    question: 'How are blood types inherited?',
    options: ['Only from the mother', 'Only from the father', 'From both parents', 'They are randomly assigned'],
    correctAnswerIndex: 2,
    explanation: 'Blood type is an inherited trait passed down from both parents through genetics (one allele from each parent).'
  },
  {
    id: 10,
    question: 'What happens during an agglutination test if the blood is incompatible?',
    options: ['It turns white', 'It evaporates', 'It clumps together', 'It becomes thinner'],
    correctAnswerIndex: 2,
    explanation: 'Agglutination is the clumping of particles. In blood typing, if specific antibodies react with antigens on red blood cells, they cause the cells to clump together.'
  }
];
