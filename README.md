# 🚀 MERN Stack Portfolio Website

A modern, fully responsive portfolio website built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring smooth animations, dark theme, and a functional contact form.

## ✨ Features

- **Modern UI/UX** - Clean, professional design with smooth animations using Framer Motion
- **Fully Responsive** - Works perfectly on all devices (mobile, tablet, desktop)
- **Dark Theme** - Eye-friendly dark mode with gradient accents
- **MERN Stack** - Full-stack application with MongoDB database
- **Contact Form** - Functional contact form with backend API
- **Project Showcase** - Filterable project gallery
- **Skills Section** - Display your tech stack with icons
- **Fast Performance** - Built with Vite for lightning-fast development and builds

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- Framer Motion (animations)
- React Icons
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS
- Dotenv

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd MyPortfolio
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Install Backend Dependencies
```bash
cd backend
npm install
cd ..
```

### 4. Setup Environment Variables
Create a `.env` file in the `backend` directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
GEMINI_API_KEY=your_gemini_api_key_here
```

### 5. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# For Windows
net start MongoDB

# For Mac/Linux
sudo systemctl start mongod
```

## 🚀 Running the Application

### Development Mode

**Terminal 1 - Start Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Start Frontend:**
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`
The backend API will run on `http://localhost:5000`

### Production Build
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
MyPortfolio/
├── backend/
│   ├── server.js          # Express server & API routes
│   ├── package.json       # Backend dependencies
│   └── .env              # Environment variables
├── public/
│   └── Images/           # Project images & assets
├── src/
│   ├── components/       # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # React entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
└── package.json          # Frontend dependencies
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** - Edit `src/components/Hero.jsx`
2. **About Section** - Edit `src/components/About.jsx`
3. **Projects** - Update projects array in `src/components/Projects.jsx`
4. **Skills** - Modify skills in `src/components/Skills.jsx`
5. **Contact Info** - Update contact details in `src/components/Contact.jsx`

### Change Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary: #6366f1;
  --secondary: #8b5cf6;
  --accent: #ec4899;
  /* ... */
}
```

### Add Your Images
Replace images in `public/Images/` folder:
- `Dhiraj image.jpg` - Your profile photo
- `about me 1.jpg` - About section image
- Project images for the projects section

## 📡 API Endpoints

### Contact Form
```
POST /api/contact
Body: { name, email, message }
```

### Get All Contacts (Admin)
```
GET /api/contacts
```

### Gemini AI (Optional)
```
POST /api/gemini
Body: { prompt }
```

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Change port in vite.config.js or backend/.env
```

### MongoDB Connection Error
- Ensure MongoDB is running
- Check MONGODB_URI in .env file
- For MongoDB Atlas, whitelist your IP address

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Dhiraj Chowdhury**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Framer Motion for animations
- React Icons for icon library
- Vite for blazing fast builds

---

Made with ❤️ using MERN Stack
