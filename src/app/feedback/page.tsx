'use client'
import React, { useState } from 'react'
import Footer from '@/components/footer'
import NavContainer from '@/components/navContainer'
import {
  Alert,
  Avatar,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { feedbackData } from './data'

const page = () => {
  return (
    <>
      <NavContainer>
        <Container>
          <FeedbackForm />
          <FeedbackHistory />
          <HelpSupportSection />
        </Container>
        <Footer />
      </NavContainer>
    </>
  )
}

export default page

const FeedbackForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [feedback, setFeedback] = useState('')

  const handleSubmit = (event: any) => {
    event.preventDefault()
    // Handle submission logic here, such as sending the feedback to a server
    console.log('Feedback submitted:', { name, email, feedback })
    // Clear form fields after submission
    setName('')
    setEmail('')
    setFeedback('')
  }

  return (
    <div className="mt-20 p-4 pt-0">
      <h2 className="text-2xl font-semibold mb-4">Send Us Feedback</h2>
      <p className="mb-4">We'd love to hear your thoughts and suggestions.</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
          />
        </div>
        <div className="mb-4">
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
          />
        </div>
        <div className="mb-4">
          <TextField
            id="feedback"
            label="Feedback"
            variant="outlined"
            multiline
            rows={4}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            fullWidth
            required
          />
        </div>
        <Button type="submit" variant="contained" color="success">
          Submit Feedback
        </Button>
      </form>
    </div>
  )
}

const FeedbackHistory = () => {
  return (
    <div className="mt-8 p-4">
      <h2 className="text-2xl font-semibold ">Recent Feedback</h2>
      <h6 className="mb-4">Check out the latest feedback from our users.</h6>
      <div className="space-y-6">
        {feedbackData.map(({ id, userName, time, comment, img }) => {
          return (
            <div className="md:p-4 rounded-lg" key={id}>
              <div className="flex justify-between items-center mb-2 md:mb-0">
                <div className="flex items-center">
                  <Avatar alt="User Avatar" src={img} />
                  <div className="ml-2 ">
                    <span className="font-semibold">{userName}</span>
                    <p className="text-gray-600 hidden md:block">{comment}</p>
                  </div>
                </div>
                <div className="text-gray-500">{time}</div>
              </div>
              <p className="text-gray-600 ml-1 md:hidden md:ml-12">{comment}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const HelpSupportSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-20">
      <h2 className="text-2xl font-semibold mb-6">Help & Support</h2>
      <ul className="space-y-2">
        <li>
          <a href="/faq" className="text-blue-500 hover:underline">
            FAQ
          </a>
        </li>
        <li>
          <a href="/contact" className="text-blue-500 hover:underline">
            Contact Us
          </a>
        </li>
        <li>
          <a href="/docs" className="text-blue-500 hover:underline">
            Documentation
          </a>
        </li>
      </ul>
    </div>
  )
}
