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
  {
    category: "Core React",
    topic: "useState",
    questionName: "State Management with useState",
    description: "Hook for managing state in functional components",
    url: "/counterNumber",
  },
  {
    category: "Core React",
    topic: "useState",
    questionName: "State Management with useState",
    description: "Hook for managing state in functional components",
    url: "/textFields",
  },
  {
    category: "Core React",
    topic: "useState",
    questionName: "State Management with useState",
    description: "Hook for managing state in functional components",
    url: "/form",
  },
  {
    category: "Core React",
    topic: "useState",
    questionName: "State Management with useState",
    description: "Hook for managing state in functional components of Todo APP",
    url: "/todoApp",
  },
  {
    category: "Core React",
    topic: "useEffect",
    questionName: "State Management with useEffect",
    description: "Hook for managing state in functional components of To APP",
    url: "/serverChat"
  },
  {
    category: "UI",
    topic: "Form",
    questionName: "Input box",
    description: "Contact form Submit UI",
    url: "/contactUs"
  }
];
