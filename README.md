# Omnichannel CommDesk

React + Vite + Tailwind CSS rebuild of the Gemini prototype in `reference/GeminiOriginalApp.jsx`.

## Scripts
- `npm run dev`
- `npm run build`
- `npm run preview`

## Deployment

This app is configured for Vercel Git deployments. Import the repository in Vercel with the Vite preset:

- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`
- Production Branch: `main`
- Node.js Version: `22.x`

Every push to `main` creates a production deployment. Pull requests and non-production branch pushes create Vercel preview deployments.

## Stack
React, Vite, Tailwind CSS v4, lucide-react, mock data only (no backend).
