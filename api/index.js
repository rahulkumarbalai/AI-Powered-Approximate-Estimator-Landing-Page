import { connectToDatabase } from './db.js';

export default async function handler(req, res) {
  // CORS setup if you are calling this from a different domain
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Try to connect to MongoDB
  try {
    await connectToDatabase();
  } catch (error) {
    return res.status(500).json({ error: 'Database connection failed', details: error.message });
  }

  // Handle requests
  if (req.method === 'GET') {
    return res.status(200).json({
      status: 'success',
      message: 'AEs Serverless API is up and running!',
      timestamp: new Date().toISOString()
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
