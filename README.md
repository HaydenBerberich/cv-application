# CV Application

A simple CV builder built with React and Vite.

## Features

- Enter and display general contact information
- Add education details, including school, program, and dates
- Add work experience, including job title, company, description, and dates
- Switch each section between editing and display modes

## Tech Stack

- React
- JavaScript
- Vite
- CSS

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/HaydenBerberich/cv-application.git
cd cv-application
npm install
npm run dev
```

Open the local URL printed by Vite to use the application.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the production application |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── components/
│   ├── Education.jsx
│   ├── Experience.jsx
│   └── General.jsx
├── App.jsx
├── App.css
└── main.jsx
```

Each section manages its form data and editing state with React state.