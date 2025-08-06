# Albufera Paella Club website

AI Mockup of site design: https://albuferapaellaclub-0c8ybme.gamma.site/

Goal of project: Build fullstack application for a site that serves marketing, public engagement, and admin functions.

## Key features:

1. Home/about page
2. Events, past and upcoming
3. Contact form logging responses directly to the database
4. Admin view - View all contact forms submitted and sort/filter

## Tech stack:

- React native frontend
- MUI components
- Vite
- Auth middleware with JWT bearer tokens
- Express.js backend
- PostgreSQL database

## Architecture

API-first, React router for segmenting actions into various endpoints (see below).

- Public API endpoints:
  - GET /api/events - Retrieve upcoming events
  - POST /api/contacts - Submit contact form data
  - POST /api/users/login - Authenticate admin users
- Protected API endpoints:
  - GET /api/contacts - Retrieve all contact submissions
  - POST /api/events - Create new event
  - PUT /api/events/:id - Update existing event
  - DELETE /api/events/:id - Remove event
  - POST /api/users/register - Create new admin user

## Prerequisites:

- node.js

## Quick Start:

- `cd albufera`
- `npm install`
- `npm run dev` // runs server
- `cd frontend`
- `npm install`
- `npm run dev` // runs client
