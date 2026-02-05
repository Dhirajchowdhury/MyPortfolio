import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// MongoDB Connection
const connectDB = async () => {
  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI)
      console.log('✅ MongoDB Connected')
    } else {
      console.log('⚠️  MongoDB URI not found. Running without database.')
    }
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message)
  }
}

connectDB()

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
})

const Contact = mongoose.model('Contact', contactSchema)

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio API is running!' })
})

// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    // Save to database if connected
    if (mongoose.connection.readyState === 1) {
      const contact = new Contact({ name, email, message })
      await contact.save()
    }

    // Here you can add email sending logic using nodemailer
    console.log('📧 New contact form submission:', { name, email })

    res.status(200).json({ 
      success: true, 
      message: 'Message received successfully!' 
    })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Server error' })
  }
})

// Get all contacts (admin route)
app.get('/api/contacts', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ error: 'Database not connected' })
    }
    
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json(contacts)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Server error' })
  }
})

// Gemini AI route (if you want to keep chatbot functionality)
app.post('/api/gemini', async (req, res) => {
  const { prompt } = req.body

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    )

    if (!response.ok) {
      throw new Error('Gemini API error')
    }

    const data = await response.json()
    res.json(data)
  } catch (error) {
    console.error('Gemini API Error:', error)
    res.status(500).json({ error: 'AI service unavailable' })
  }
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
