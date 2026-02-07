# CloudNativeHw2 - Frontend Web Application Porfolio

This repository contains a multi-part web development project demonstrating core web and React development skills, version control practices, and deployment with GitHub Pages. The work is organized as a progressive learning series, moving from static HTML/CSS to interactive React applications.

The goal of this repository is to demonstrate:
- Clean, standards-based HTML and CSS
- Responsive layout and accessibility-aware design
- Modern front-end development with React
- Practical use of Git and GitHub for version control
- Real-world deployment via GitHub Pages

---
## Live Website (Task 1)

**Deployed Site (GitHub Pages):**  
https://awarbler.github.io/CloudNativeHw2/

This site is served directly from the `/docs` folder in this repository.

This site demonstrates:

- Semantic HTML5 structure
- External stylesheet usage
- Responsive layout principles
- Navigation with in-page anchors
- Accessible image usage with alt text
- Consistent typography and spacing
- GitHub Pages deployment workflow

## Development Environment

**Tools and Technologies Used**
- Visual Studio Code
- Git & GitHub
- HTML5
- CSS3
- JavaScript (vanilla + React)
- Node.js
- GitHub Pages
- macOS + Terminal


## Repository Structure
```
CloudNativeHw2/
│
├── docs/ # Static one-page portfolio site (Task 1)
│ ├── index.html
│ ├── stylesheet.css
│ └── images/
│
├── Task2_React_TicTacToe/ # React tutorial application
│
├── Task3_React_Project/ # React projects page (in progress)
│
├── ReactHWvSp26.pdf # Project requirements
├── ReactProjectsrs.docx # Design notes
├── Software Design Document.docx # Documentation
└── README.md

```

# Project Components

### **Task 1 — Static One-Page Website (HTML/CSS)**
**Location:** `/docs`

Project Overview

Task 1 — Static HTML/CSS Portfolio Website (Completed)
A single-page, responsive personal portfolio site built using only HTML and CSS.

Key features:
- Semantic HTML5 document structure
- External CSS stylesheet
- Multiple content sections using <div> elements
- In-page navigation menu with anchor links
- Accessible image with descriptive alt text
- Footer with contact and social links
- Mobile-friendly viewport configuration
- GitHub Pages deployment

Key files:
- `docs/index.html`
- `docs/stylesheet.css`

### **Task 2 — React Tic-Tac-Toe Application**
**Location:** `Task2_React_TicTacToe/`

A React implementation of the classic Tic-Tac-Toe game based on the official React tutorial. This project demonstrates:

- Functional React components  
- State management  
- Event handling  
- Props passing  
- Component composition  
- Local development with Node and npm  

### **Task 3 — React Projects Page (In Progress)**
**Location:** `Task3_React_Project/`

A React-based projects dashboard that will showcase multiple projects using reusable components, props, and state management.

A React application that will:
- Display a portfolio of projects  
- Use reusable components  
- Demonstrate state management  
- Implement event handlers  
- Follow modern React best practices  

Setup & Local Development
-------------------------

This repository contains:

-   A **static HTML/CSS site** (Task 1) deployed via GitHub Pages from `/docs`

-   A **React Tic-Tac-Toe app** (Task 2)

-   A **React Projects app** (Task 3 --- in progress)

The setup steps differ depending on which task you are working on.

* * * * *
 Prerequisites (All Users)
----------------------------

### 1\. Install Git (if not already installed)

Check:

`git --version`

If not installed, download from: <https://git-scm.com/>

### 2\. Install Node.js (Required for Task 2 and Task 3)

Check:

`node --version`

If Node is not installed, download the **LTS version** from:\
<https://nodejs.org/>

* * * * *

Task 1 (Static HTML/CSS Site)
------------------------------------------------------

### Step 1 --- Clone the repository

`git clone https://github.com/awarbler/CloudNativeHw2.git
cd CloudNativeHw2`

### Step 2 --- Open the site locally (no server required)

On macOS:

`open docs/index.html`

Or in VS Code:

`code .`

Then right-click `docs/index.html` → **Open in Browser**

* * * * *

### Step 3 --- (Optional) Serve with a local web server

Install a simple static server:

`npm install -g serve`

Run it:

`serve docs`

Then open:

`http://localhost:3000`

* * * * *

Task 2 (React Tic-Tac-Toe)
---------------------------------------------------

### Step 1 --- Navigate into Task 2 folder

`cd Task2_React_TicTacToe`

### Step 2 --- Install dependencies

`npm install`

### Step 3 --- Run the app locally

`npm start`

Then open:

`http://localhost:3000`

If `npm start` fails, try:

`npm run dev`

* * * * *

Task 3 (React Projects Page)
-----------------------------------------------------

### Step 1 --- Navigate into Task 3 folder

`cd Task3_React_Project`

### Step 2 --- Install dependencies

`npm install`

### Step 3 --- Run the app locally

`npm start`

or

`npm run dev`

Then open:

`http://localhost:3000`


# GitHub Pages Configuration

GitHub Pages is configured to deploy from:

- **Branch:** `main`  
- **Folder:** `/docs`

Any changes pushed to files inside `/docs` will automatically update the live site.



GitHub Pages Deployment (Important)
-----------------------------------

Your live website is served from:

`CloudNativeHw2/docs/`

If you change any of these files:

-   `docs/index.html`

-   `docs/stylesheet.css`

-   files inside `docs/images/`

Then run:

`git add docs
git commit -m "Update Task 1 site"
git push origin main`

GitHub Pages will update automatically in ~1--2 minutes.

* * * * *

Troubleshooting
------------------

### "Node command not found"

Install Node.js: <https://nodejs.org/>

### "npm start fails"

`npm install
npm run dev`

### "Changes not showing on GitHub Pages"

Make sure your files are inside **`/docs`**, not only in `Task1_AJW4987_HTML_Site`.

* * * * *

Notes for Future Maintenance
-------------------------------

-   Task 1 = **Static site in `/docs`**

-   Task 2 = **React Tic-Tac-Toe in `Task2_React_TicTacToe`**

-   Task 3 = **React Projects in `Task3_React_Project`**

-   GitHub Pages always reads from **`/docs` on main branch**

* * * * *

Author
------------

**Anita Woodford**\
Austin, Texas\
GitHub: <https://github.com/awarbler>