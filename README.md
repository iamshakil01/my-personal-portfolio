# Portfolio Website - Full Stack

A modern, responsive portfolio website built with React, Node.js, and Tailwind CSS.

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Material Icons & Font Awesome** - Icon libraries

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
Portfolio/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.jsx        # Main App component
│   │   ├── main.jsx       # Entry point
│   │   └── index.css      # Global styles
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── server/                # Node.js backend
│   ├── routes/
│   │   └── portfolio.js   # API routes
│   ├── server.js          # Express server
│   ├── package.json
│   └── .env               # Environment variables
└── package.json           # Root package.json
```

## 🛠️ Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Setup Instructions

1. **Install all dependencies:**
   ```bash
   npm run install-all
   ```

   Or manually:
   ```bash
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

2. **Run the development servers:**

   From the root directory:
   ```bash
   npm run dev
   ```

   Or run them separately:
   ```bash
   # Terminal 1 - Run backend server
   cd server
   npm run dev

   # Terminal 2 - Run frontend
   cd client
   npm run dev
   ```

3. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 🔌 API Endpoints

- `GET /api/health` - Health check
- `GET /api/portfolio` - Get all portfolio data
- `GET /api/portfolio/profile` - Get profile information
- `GET /api/portfolio/services` - Get services list
- `GET /api/portfolio/skills` - Get skills list
- `POST /api/portfolio/contact` - Submit contact form

## ✨ Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark mode support
- ✅ Smooth scrolling navigation
- ✅ Animated hero section with blob background
- ✅ Services showcase
- ✅ Portfolio/Projects gallery
- ✅ Skills section with experience details
- ✅ Education timeline
- ✅ Contact section
- ✅ RESTful API backend
- ✅ Modern component architecture

## 🎨 Customization

### Update Personal Information
Edit the following files:
- `client/src/components/*.jsx` - Update component content
- `server/routes/portfolio.js` - Update API data

### Change Colors
Edit `client/tailwind.config.js`:
```javascript
colors: {
  primary: "#7C3AED",      // Change primary color
  "primary-light": "#A78BFA",
  "primary-dark": "#5B21B6",
}
```

## 📦 Build for Production

```bash
# Build frontend
cd client
npm run build

# The build files will be in client/dist/
```

## 🚀 Deployment

### Frontend (Vercel, Netlify)
1. Build the project: `cd client && npm run build`
2. Deploy the `client/dist` folder

### Backend (Heroku, Railway, Render)
1. Deploy the `server` folder
2. Set environment variables in your hosting platform

## 📝 License

MIT License - feel free to use this project for your own portfolio!

## 👤 Author

**Chris Smith**
- Website: [Portfolio](http://localhost:3000)
- Email: contact@chrissmith.com

---

Made with ❤️ using React and Node.js
