# AI-Powered Approximate Estimator (AEs) - Landing Page

Welcome to the **AEs Landing Page** repository! This is a cutting-edge, visually stunning landing page for an upcoming AI-powered civil engineering estimation platform. It features interactive WebGL-style animations, seamless GSAP scrolling physics, and a modern Serverless MERN architecture ready for Vercel deployment.

## ✨ Features

- **Interactive Neural Background**: A fully custom vanilla HTML5 Canvas background integrated into React that simulates neural networks reacting to mouse movements.
- **GSAP Scroll Animations**: Highly optimized scroll-triggered animations utilizing GSAP's `ScrollTrigger` and Lenis smooth scrolling (including horizontal pinning workflows).
- **Tailwind CSS v4 & Glassmorphism**: Premium "dark mode first" aesthetic utilizing custom blur layers, neon glows (#0ea5e9 and #a855f7), and strict fluid typography.
- **Vercel Serverless Ready**: An integrated `/api` directory pre-configured for Express-style serverless API functions and MongoDB (`mongoose`) database connectivity.

## 🛠 Tech Stack

- **Frontend Core:** React 18, Vite
- **Styling:** Tailwind CSS v4
- **Animation & Physics:** GSAP, ScrollTrigger, Lenis
- **Backend (Serverless):** Vercel Serverless Functions (Node.js)
- **Database:** MongoDB / Mongoose

## 🚀 Getting Started

### 1. Run Locally

Ensure you have [Node.js](https://nodejs.org/) installed, then run the following commands in your terminal:

```bash
# Clone the repository
git clone https://github.com/rahulkumarbalai/AI-Powered-Approximate-Estimator-Landing-Page.git

# Navigate into the project directory
cd AI-Powered-Approximate-Estimator-Landing-Page

# Install dependencies
npm install

# Start the Vite development server
npm run dev
```

Visit `http://localhost:5173` to view the application in your browser.

### 2. Backend & Database Setup (Optional)

This project contains a serverless `/api` folder. To utilize the MongoDB connection locally or in production:

1. Create a `.env` file in the root directory.
2. Add your MongoDB connection string:
   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/aes-db
   ```
3. The `api/db.js` file will automatically pick this up when handling serverless API requests.

### 3. Deploy to Vercel

The project is natively designed for [Vercel](https://vercel.com). It contains a `vercel.json` config for strict routing.

1. Create a new project on Vercel.
2. Import this GitHub repository.
3. Add the `MONGODB_URI` to the Vercel Environment Variables section.
4. Click **Deploy**. Vercel will automatically build the Vite frontend into `/dist` and compile the `/api` directory as Serverless Edge Functions.

## 📄 License

This project is proprietary and intended for the AEs software ecosystem.
