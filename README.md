# Time Clock App

A modern time clock application built with React, TypeScript, Express, and Prisma. Track employee work hours with an intuitive interface and robust backend.

## 🚀 Quick Start

**For detailed setup instructions, see [SETUP.md](./SETUP.md)**

```bash
# 1. Clone and install
git clone <repository-url>
cd "Time Clock"
npm install

# 2. Set up environment
cp .env.example .env
# Edit .env with your configuration

# 3. Run development server
npm run dev
```

Visit:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3001/api

## 📋 Features

- ⏰ Clock in/out functionality
- 📊 Time entry tracking and history
- 👤 User-based time management
- 🔄 Real-time updates
- 📱 Responsive design
- 🔐 Ready for authentication (Step 2)

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **SWC** - Fast compilation

### Backend
- **Express** - Web framework
- **TypeScript** - Type safety
- **Prisma** - Database ORM (Step 2)
- **PostgreSQL** - Database (via Railway)

## 📁 Project Structure

```
Time Clock/
├── server/              # Backend Express API
│   └── index.ts        # API routes and server setup
├── src/                # Frontend React app
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── ...
├── prisma/             # Database schema (Step 2)
├── .env                # Environment variables (local, not committed)
├── .env.example        # Environment template
├── package.json        # Dependencies and scripts
├── SETUP.md           # Detailed setup guide
└── README.md          # This file
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Run frontend + backend together |
| `npm run dev:client` | Run only frontend (port 5173) |
| `npm run dev:server` | Run only backend (port 3001) |
| `npm run build` | Build frontend for production |
| `npm run build:server` | Build backend for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

## 🌐 API Endpoints

All endpoints are prefixed with `/api`:

### Time Entries
- `GET /time-entries?userId=X` - Get all entries for user
- `GET /time-entries/active?userId=X` - Get active clock-in
- `POST /time-entries/clock-in` - Clock in
- `PATCH /time-entries/clock-out` - Clock out
- `GET /time-entries/:id` - Get specific entry
- `DELETE /time-entries/:id` - Delete entry

### Health Check
- `GET /health` - Server health status

## 🚧 Development Roadmap

- [x] **Step 1**: Backend server with Express + TypeScript
- [ ] **Step 2**: Database integration with Prisma + Railway PostgreSQL
- [ ] **Step 3**: Environment configuration (dev/prod)
- [ ] **Step 4**: Railway deployment setup
- [ ] **Step 5**: User authentication
- [ ] **Step 6**: Frontend UI components

## 👥 For Team Members

### First Time Setup
1. Make sure you have Node.js (v18+) installed
2. Clone this repository
3. Run `npm install`
4. Copy `.env.example` to `.env`
5. Run `npm run dev`

See [SETUP.md](./SETUP.md) for detailed instructions and troubleshooting.

### Working in Cursor
- Use `Ctrl/Cmd + K` to ask Cursor AI for help
- The AI understands the project structure and can help implement features
- Backend routes are in `server/index.ts`
- Frontend components go in `src/`

## 📝 Environment Variables

Required variables (see `.env.example`):

```env
PORT=3001                    # Backend server port
NODE_ENV=development         # Environment mode
DATABASE_URL=postgresql://...  # Database connection (Step 2)
```

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test locally: `npm run dev`
4. Commit: `git commit -m "Add your feature"`
5. Push: `git push origin feature/your-feature`
6. Create a Pull Request

## 📄 License

Private - Internal Use Only

## 🆘 Need Help?

- Check [SETUP.md](./SETUP.md) for detailed setup instructions
- Review the API documentation above
- Ask in team chat
- Use Cursor AI assistant (`Ctrl/Cmd + K`)

---

Built with ❤️ using React, TypeScript, and Express
