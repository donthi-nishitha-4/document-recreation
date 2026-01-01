# Task 2 – Internship Task Document Rebuild

## Project Overview
This project recreates the **Task 1 Internship Document** using **Handlebars** templating and **Vite** as the bundler.  
It dynamically injects data from a JSON file into a Handlebars template and builds a static HTML page.

---

## Technology Stack
- **Templating Engine:** Handlebars  
- **Bundler / Task Runner:** Vite  
- **Languages / Tools:** HTML5, CSS3, JavaScript, Node.js, npm  

---

## Project Structure

ks2/
├─ src/
│ ├─ index.html # Main HTML template
│ ├─ assets/ # CSS and other assets
│ ├─ data/task1.json # JSON data for Handlebars
│ └─ main.js # JS imports CSS and initializes page
├─ dist/ # Compiled output after build
├─ vite.config.js # Vite configuration
├─ package.json
└─ README.md


---

## How to Run Locally

1. Install dependencies:

npm install

2. Start the development server:

npm run dev


Opens browser at http://localhost:5173/

Page updates automatically on file changes (CSS, templates, JSON).

3. Build for production:

npm run build


Compiled files will be in the dist/ folder.

Preview production build:

npx vite preview

Features

Dynamic page rendering using Handlebars templates

CSS bundled automatically with Vite

Production-ready build with hashed CSS/JS assets

Fully responsive layout (Task 1 document recreated)

Live Preview: 
