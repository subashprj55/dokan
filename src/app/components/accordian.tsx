import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const FaqData = [
  {
    id: 0,
    question: 'Frequently Asked Questions',
    answer:
      '  Signing up is easy! Just click on the "Sign Up" button at the top of the page and follow the instructions to create your account.',
  },
  {
    id: 1,
    question: 'What payment methods do you accept?',
    answer:
      '  We accept all major credit cards, including Visa, Mastercard, and American Express. You can also pay using PayPal.',
  },
  {
    id: 2,
    question: 'Is there a free trial available?',
    answer:
      ' Yes, we offer a 14-day free trial for new users. You can explore all the features of our system with no obligation.',
  },
  {
    id: 3,
    question: 'Can I cancel my subscription at any time?',
    answer:
      ' Absolutely! You can cancel your subscription at any time with no questions asked. Your account will remain active until the end of your billing cycle.',
  },
]

const FaqsSection = () => {
  const [expanded, setExpanded] = useState('panel1')

  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <section className="bg-gray-100 py-16 md:mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Frequently Asked Questions
        </h2>

        {FaqData.map(({ id, question, answer }) => {
          return (
            <Accordion
              key={id}
              expanded={expanded === `panel${id}`}
              onChange={handleChange(`panel${id}`)}
            >
              <AccordionSummary
                expandIcon={<FaChevronDown />}
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography className="">{question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">{answer}</Typography>
              </AccordionDetails>
            </Accordion>
          )
        })}
      </div>
    </section>
  )
}

export default FaqsSection
