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
    id: 4,
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

const Accordian = () => {
  const [expanded, setExpanded] = useState('panel1')

  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <>
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
              <Typography className="md:text-lg">{question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className=" md:text-base">{answer}</Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </>
  )
}

export default Accordian
