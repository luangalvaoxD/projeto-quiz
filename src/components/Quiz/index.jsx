import { useState } from 'react'
import { QuestionAnswer } from '../QuestionAnswer'
import S from './styles.module.css'

const QUESTIONS = [
    {
        id: 1,
        question: 'Qual é o meu nome?',
        answers: ['Miguel', 'Luis', 'Luan', 'Ana'],
        correctAnswer: 'Luan',
    },
    {
        id: 2,
        question: 'Qual é a minha idade?',
        answers: ['22', '23', '24', '25'],
        correctAnswer: '24',
    },
    {
        id: 3,
        question: 'O que eu sou?',
        answers: ['Assistente de TI', 'Desenvolvedor', 'Artista', 'Médico'],
        correctAnswer: 'Assistente de TI',
    },
    {
        id: 4,
        question: 'Quem é o Daniel?',
        answers: ['Homem de Ferro', 'Batman', 'Homem-Aranha', 'Homem-Formiga'],
        correctAnswer: 'Homem-Formiga',
    },
]

export function Quiz() {
    const currentQuestion = QUESTIONS(0)
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0)
    const [isCurrentQuestionAnswered, setIsCurrentQuestionAnswered] = useState(false)

    const handleAnswerQuestion = (event, question, answer) => {
        if (isCurrentQuestionAnswered) {
            return
        }

        const isCorrectAnswer = question.correctAnswer == answer

        const resultClassName = isCorrectAnswer ? S.correct : S.incorrect
        event.currentTarget.classList.toggle(resultClassName)

        if (isCorrectAnswer) {
            setCorrectAnswersCount(correctAnswersCount + 1)
        }

        setIsCurrentQuestionAnswered(true)
    }

    return (
        <div className={S.container}>
            <div className={S.card}>
                <div className={S.quiz}>
                    <header className={S.quizHeader}>
                        <span className={S.questionCount}>Pergunta 1/3</span>
                        <p className={S.question}>
                            {currentQuestion.question}
                        </p>
                    </header>

                    <ul className={S.answers}>
                        {currentQuestion.answers.map(answer => (
                            <li key={answer} className={S.answerItem}>
                                <QuestionAnswer
                                    answer={answer}
                                    question={currentQuestion}
                                    handleAnswerQuestion={handleAnswerQuestion}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}