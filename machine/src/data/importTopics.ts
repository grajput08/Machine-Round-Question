export interface ImportTopic {
  category: string;
  topic: string;
  questionName: string;
  description: string;
  url: string;
  useCase?: string;
}

export const importTopics: ImportTopic[] = [
  {
    category: "Core React",
    topic: "useState",
    questionName: "State Management with useState",
    description: "Hook for managing state in functional components",
    url: "/counter",
  },
];
