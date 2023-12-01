import { Question } from "../types/Question";

export const questions: Question[] = [
    {
        id: 1,
        question: 'Qual a capital da Argentina?',
        options: [
        { id: 1, option: 'Buenos Aires', correct: true },
        { id: 2, option: 'Córdoba', correct: false },
        { id: 3, option: 'Santa Fé', correct: false },
        { id: 4, option: 'Rosário', correct: false },
        ],
    },
    {
        id: 2,
        question: 'Qual a capital da Austrália?',
        options: [
        { id: 1, option: 'Melbourne', correct: false },
        { id: 2, option: 'Sydney', correct: false },
        { id: 3, option: 'Brisbane', correct: false },
        { id: 4, option: 'Camberra', correct: true },
        ],
    },
    {
        id: 3,
        question: 'Qual a capital da Bolívia?',
        options: [
        { id: 1, option: 'La Paz', correct: true },
        { id: 2, option: 'Sucre', correct: false },
        { id: 3, option: 'Cochabamba', correct: false },
        { id: 4, option: 'Santa Cruz de la Sierra', correct: false },
        ],
    },
    {
        id: 4,
        question: 'Qual a capital da Bélgica?',
        options: [
        { id: 1, option: 'Bruxelas', correct: true },
        { id: 2, option: 'Antuérpia', correct: false },
        { id: 3, option: 'Gante', correct: false },
        { id: 4, option: 'Charleroi', correct: false },
        ],
    },
    {
        id: 5,
        question: 'Qual a capital da Bulgária?',
        options: [
        { id: 1, option: 'Sófia', correct: true },
        { id: 2, option: 'Plovdiv', correct: false },
        { id: 3, option: 'Varna', correct: false },
        { id: 4, option: 'Burgas', correct: false },
        ],
    },
]