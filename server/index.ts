import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const isDevelopment = process.env.NODE_ENV !== 'production';

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ============================================
// TIME CLOCK ROUTES
// ============================================

// Get all time entries for a user
app.get('/api/time-entries', async (req: Request, res: Response) => {
  try {
    const { userId } = req.query;
    
    if (!userId) {
      res.status(400).json({ error: 'userId is required' });
      return;
    }

    // TODO: Replace with actual database query in step 2
    const mockEntries = [
      {
        id: '1',
        userId: userId,
        clockIn: new Date('2025-12-11T09:00:00'),
        clockOut: new Date('2025-12-11T17:00:00'),
        totalHours: 8,
      },
    ];

    res.json(mockEntries);
  } catch (error) {
    console.error('Error fetching time entries:', error);
    res.status(500).json({ error: 'Failed to fetch time entries' });
  }
});

// Get current active time entry (user is clocked in)
app.get('/api/time-entries/active', async (req: Request, res: Response) => {
  try {
    const { userId } = req.query;
    
    if (!userId) {
      res.status(400).json({ error: 'userId is required' });
      return;
    }

    // TODO: Replace with actual database query in step 2
    // Check if user has an active entry (clockOut is null)
    const mockActiveEntry = null; // or an active entry object

    res.json(mockActiveEntry);
  } catch (error) {
    console.error('Error fetching active time entry:', error);
    res.status(500).json({ error: 'Failed to fetch active time entry' });
  }
});

// Clock in - create a new time entry
app.post('/api/time-entries/clock-in', async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    
    if (!userId) {
      res.status(400).json({ error: 'userId is required' });
      return;
    }

    // TODO: Replace with actual database operations in step 2
    // 1. Check if user already has an active entry
    // 2. If yes, return error
    // 3. If no, create new entry with clockIn timestamp

    const newEntry = {
      id: Date.now().toString(),
      userId,
      clockIn: new Date(),
      clockOut: null,
      totalHours: null,
    };

    res.status(201).json(newEntry);
  } catch (error) {
    console.error('Error clocking in:', error);
    res.status(500).json({ error: 'Failed to clock in' });
  }
});

// Clock out - update existing time entry
app.patch('/api/time-entries/clock-out', async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    
    if (!userId) {
      res.status(400).json({ error: 'userId is required' });
      return;
    }

    // TODO: Replace with actual database operations in step 2
    // 1. Find active entry for user
    // 2. If not found, return error
    // 3. Update clockOut timestamp and calculate totalHours

    const updatedEntry = {
      id: '1',
      userId,
      clockIn: new Date('2025-12-11T09:00:00'),
      clockOut: new Date(),
      totalHours: 8,
    };

    res.json(updatedEntry);
  } catch (error) {
    console.error('Error clocking out:', error);
    res.status(500).json({ error: 'Failed to clock out' });
  }
});

// Get time entry by ID
app.get('/api/time-entries/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // TODO: Replace with actual database query in step 2
    const mockEntry = {
      id,
      userId: '1',
      clockIn: new Date('2025-12-11T09:00:00'),
      clockOut: new Date('2025-12-11T17:00:00'),
      totalHours: 8,
    };

    res.json(mockEntry);
  } catch (error) {
    console.error('Error fetching time entry:', error);
    res.status(500).json({ error: 'Failed to fetch time entry' });
  }
});

// Delete time entry
app.delete('/api/time-entries/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;

    if (!userId) {
      res.status(400).json({ error: 'userId is required' });
      return;
    }

    // TODO: Replace with actual database operations in step 2
    // 1. Find entry by id and userId
    // 2. Delete if exists

    res.json({ message: 'Time entry deleted successfully', id });
  } catch (error) {
    console.error('Error deleting time entry:', error);
    res.status(500).json({ error: 'Failed to delete time entry' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 API available at http://localhost:${PORT}/api`);
});

