'use client'
import React, { useState } from 'react'
import Footer from '@/components/footer'
import NavContainer from '@/components/navContainer'
import {
  Alert,
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

const page = () => {
  return (
    <>
      <NavContainer>
        <Container>
          <FeedbackForm />
          <FeedbackHistory />
          <AnalyticsSection />
          <HelpSupportSection />
        </Container>
        <Footer />
      </NavContainer>
    </>
  )
}

export default page

const FeedbackForm = () => {
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    email: '',
    category: '',
    message: '',
  })
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFeedbackData({ ...feedbackData, [name]: value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Logic to submit feedback data (API call or other)
    setOpenSnackbar(true)
    // Reset form data
    setFeedbackData({
      name: '',
      email: '',
      category: '',
      message: '',
    })
  }

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false)
  }

  return (
    <div className="mt-32">
      <form onSubmit={handleSubmit}>
        <TextField
          required
          fullWidth
          label="Your Name"
          name="name"
          value={feedbackData.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Your Email"
          name="email"
          value={feedbackData.email}
          onChange={handleChange}
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            required
            labelId="category-label"
            name="category"
            value={feedbackData.category}
            onChange={handleChange}
          >
            <MenuItem value="suggestion">Suggestion</MenuItem>
            <MenuItem value="complaint">Complaint</MenuItem>
            <MenuItem value="bug">Bug Report</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          fullWidth
          label="Your Feedback"
          name="message"
          value={feedbackData.message}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit Feedback
        </Button>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Feedback submitted successfully!
        </Alert>
      </Snackbar>
    </div>
  )
}

const FeedbackHistory = () => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      category: 'Suggestion',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      category: 'Bug Report',
      message:
        'Nulla facilisi. Pellentesque vitae magna in risus ultricies sagittis.',
    },
  ])

  const handleDeleteFeedback = (id: any) => {
    setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id))
  }

  return (
    <div className="py-8">
      <Typography variant="h4" gutterBottom>
        Feedback History
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feedbacks.map((feedback) => (
              <TableRow key={feedback.id}>
                <TableCell>{feedback.name}</TableCell>
                <TableCell>{feedback.email}</TableCell>
                <TableCell>{feedback.category}</TableCell>
                <TableCell>{feedback.message}</TableCell>
                <TableCell>
                  <button onClick={() => handleDeleteFeedback(feedback.id)}>
                    <RiDeleteBin6Line />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
const AnalyticsSection = () => {
  return (
    <div className="p-4 space-y-4">
      <Typography variant="h4" gutterBottom>
        Analytics
      </Typography>
      <Paper elevation={3} className="p-4">
        <Typography variant="h5" gutterBottom>
          Total Sales
        </Typography>
        {/* Add your Total Sales chart here */}
      </Paper>
      <Paper elevation={3} className="p-4">
        <Typography variant="h5" gutterBottom>
          Profitability Analysis
        </Typography>
        {/* Add your Profitability Analysis chart here */}
      </Paper>
      <Paper elevation={3} className="p-4">
        <Typography variant="h5" gutterBottom>
          Supplier Performance
        </Typography>
        {/* Add your Supplier Performance chart here */}
      </Paper>
      <Paper elevation={3} className="p-4">
        <Typography variant="h5" gutterBottom>
          Forecasting
        </Typography>
        {/* Add your Forecasting chart here */}
      </Paper>
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
