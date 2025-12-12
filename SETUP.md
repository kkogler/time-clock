# Time Clock App - Development Setup Guide

This guide will help you get the Time Clock app running on your local machine in Cursor.

## Prerequisites

Before you begin, make sure you have installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **Cursor IDE** - [Download here](https://cursor.sh/)

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd "Time Clock"
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages for both frontend and backend.

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```bash
# On Windows (PowerShell)
Copy-Item .env.example .env

# On Mac/Linux
cp .env.example .env
```

Then edit `.env` and configure your settings:
- For local development, you can keep the default `PORT=3001`
- For database setup (Step 2), you'll need to add your `DATABASE_URL`

### 4. Run the Development Server

Start both frontend and backend together:

```bash
npm run dev
```

Or run them separately in different terminals:

```bash
# Terminal 1 - Frontend (Vite)
npm run dev:client

# Terminal 2 - Backend (Express)
npm run dev:server
```

### 5. Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001/api
- **Health Check**: http://localhost:3001/api/health

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Run both frontend and backend concurrently |
| `npm run dev:client` | Run only the frontend (Vite dev server) |
| `npm run dev:server` | Run only the backend (Express server with hot reload) |
| `npm run build` | Build frontend for production |
| `npm run build:server` | Build backend for production |
| `npm run lint` | Run ESLint on the codebase |
| `npm run preview` | Preview production build locally |

## Project Structure

```
Time Clock/
├── server/              # Backend Express server
│   └── index.ts        # Main server file with API routes
├── src/                # Frontend React app
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── prisma/             # Database schema (Step 2)
├── .env                # Environment variables (not committed)
├── .env.example        # Example environment variables
├── package.json        # Dependencies and scripts
└── tsconfig.*.json     # TypeScript configurations
```

## API Endpoints

The backend provides these endpoints (currently with mock data until Step 2):

### Time Entries
- `GET /api/time-entries?userId=X` - Get all time entries for a user
- `GET /api/time-entries/active?userId=X` - Get active clock-in entry
- `POST /api/time-entries/clock-in` - Clock in (create new entry)
  ```json
  { "userId": "user123" }
  ```
- `PATCH /api/time-entries/clock-out` - Clock out (update entry)
  ```json
  { "userId": "user123" }
  ```
- `GET /api/time-entries/:id` - Get specific entry
- `DELETE /api/time-entries/:id` - Delete entry

## Troubleshooting

### Port Already in Use
If you see "EADDRINUSE" error:
1. Check what's using the port: 
   ```bash
   # Windows
   netstat -ano | findstr :3001
   
   # Mac/Linux
   lsof -i :3001
   ```
2. Kill the process or change the PORT in `.env`

### Dependencies Not Installing
Try clearing the cache:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
Make sure you're using TypeScript ~5.9.3:
```bash
npm list typescript
```

## Next Steps

After completing the basic setup:
1. ✅ **Step 1**: Backend server (COMPLETE)
2. **Step 2**: Database with Prisma + Railway
3. **Step 3**: Environment configuration (dev vs production)
4. **Step 4**: Railway deployment setup

## Getting Help

- Check the main [README.md](./README.md) for project overview
- Review API documentation above
- Ask in the team chat

## Tips for Working in Cursor

- Use `Ctrl/Cmd + K` to ask Cursor AI for help
- Cursor will auto-detect the project structure
- The AI can help you implement features using the existing API endpoints
- All backend routes are in `server/index.ts` - easy to extend!

---

Happy coding! 🚀

