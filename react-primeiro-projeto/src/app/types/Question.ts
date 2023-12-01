export type Question = {
    id: number;
    question: string;
    options: Option[];
}

export type Option = {
    id: number;
    option: string;
    correct: boolean;
}