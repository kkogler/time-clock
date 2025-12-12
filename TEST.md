# Quick Test Guide

After setting up the project, run these tests to verify everything works:

## 1. Installation Test

```bash
npm install
```

✅ Should complete without errors and install ~290 packages

## 2. Server Start Test

```bash
npm run dev:server
```

✅ You should see:
```
🚀 Server running on http://localhost:3001
📊 API available at http://localhost:3001/api
```

Keep this running and open a new terminal for the next tests.

## 3. API Health Check

### Option A: Browser
Open http://localhost:3001/api/health

✅ Should show:
```json
{"status":"ok","timestamp":"2025-12-12T..."}
```

### Option B: PowerShell
```powershell
Invoke-WebRequest -Uri "http://localhost:3001/api/health" -UseBasicParsing | Select-Object -ExpandProperty Content
```

### Option C: Mac/Linux
```bash
curl http://localhost:3001/api/health
```

## 4. Test Time Entries Endpoint

### PowerShell
```powershell
Invoke-WebRequest -Uri "http://localhost:3001/api/time-entries?userId=test-user" -UseBasicParsing | Select-Object -ExpandProperty Content
```

### Mac/Linux/Git Bash
```bash
curl "http://localhost:3001/api/time-entries?userId=test-user"
```

✅ Should return mock data:
```json
[{"id":"1","userId":"test-user","clockIn":"...","clockOut":"...","totalHours":8}]
```

## 5. Test Clock In (POST Request)

### PowerShell
```powershell
$body = @{ userId = "test-user" } | ConvertTo-Json
Invoke-WebRequest -Uri "http://localhost:3001/api/time-entries/clock-in" -Method POST -Body $body -ContentType "application/json" -UseBasicParsing | Select-Object -ExpandProperty Content
```

### Mac/Linux/Git Bash
```bash
curl -X POST http://localhost:3001/api/time-entries/clock-in \
  -H "Content-Type: application/json" \
  -d '{"userId":"test-user"}'
```

✅ Should return a new time entry with current timestamp

## 6. Frontend Test

Stop the backend (Ctrl+C) and run:

```bash
npm run dev
```

This starts BOTH frontend and backend together.

✅ You should see:
```
VITE v7.x.x  ready in xxx ms
➜  Local:   http://localhost:5173/

🚀 Server running on http://localhost:3001
📊 API available at http://localhost:3001/api
```

Open http://localhost:5173 in your browser.

✅ Should see the default React + Vite page (we'll build the UI later)

## 7. Proxy Test

With `npm run dev` running, test that the frontend can reach the backend:

Open browser console on http://localhost:5173 and run:

```javascript
fetch('/api/health')
  .then(r => r.json())
  .then(console.log)
```

✅ Should log: `{status: "ok", timestamp: "..."}`

## Troubleshooting

### Port Already in Use
```powershell
# Windows - Find and kill process on port 3001
Get-NetTCPConnection -LocalPort 3001 -State Listen -ErrorAction SilentlyContinue
# Note the OwningProcess ID, then:
Stop-Process -Id <ProcessId> -Force
```

```bash
# Mac/Linux
lsof -ti:3001 | xargs kill -9
```

### Dependencies Not Installing
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
Make sure you're in the project directory:
```bash
cd "Time Clock"
pwd  # or cd on Windows
```

## All Tests Passing? ✅

You're ready to start developing! 

Next steps:
- Read [SETUP.md](./SETUP.md) for detailed documentation
- Check [README.md](./README.md) for project overview
- Start building features with Cursor AI assistance

---

If any test fails, check the error message and refer to SETUP.md troubleshooting section.

