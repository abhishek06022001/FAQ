import React from 'react'
import FAQ from './Components/FAQ'
function App() {
  const FAQS = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live",
      answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    }
  ]
  return (
    <div>
      <h1 className='text-center font-semibold text-lg' >Frequently Asked Questions</h1>
      <FAQ FAQS={FAQS} />
    </div>
  )
}
export default App