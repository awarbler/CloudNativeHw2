# Task 3 — Custom React Projects Page

## Overview

This project implements **Task 3: Custom React App** for the Cloud-Native Application Development course. The goal of this assignment was to design and implement a front-end **Projects page** using React that models part of the team project UI.

The page allows a user to:

* View a list of projects they are authorized to join
* See hardware sets associated with each project
* Enter quantities for hardware check-in/check-out
* Join or leave projects using a state-changing button

This implementation is **front-end only** and uses hardcoded data in React state (no database or backend connection).

---

## Technology Stack

This project was built using:

* **React (Create React App)**
* **Material UI (MUI)**

  * Card, CardContent
  * Button
  * TextField

---

## Component Structure

The application is organized into the following React components:

```
App
└── Projects
    ├── ProjectCard (reused for each project)
    │   └── HardwareSetRow (reused for each hardware set)
```

### Component Responsibilities

**Projects.jsx**

* Holds application state (`projects`)
* Defines `handleToggleJoin` to modify state
* Maps over projects and renders `ProjectCard`

**ProjectCard.jsx**

* Receives a single project via props
* Displays:

  * Project name
  * Authorized users
  * Join/Leave button
* Maps over `hardwareSets` and renders `HardwareSetRow`

**HardwareSetRow.jsx**

* Receives one hardware set via props
* Displays:

  * Hardware set name and counts
  * “Enter qty” input
  * Check In / Check Out buttons

---

## How This Satisfies Task 3 Requirements

| Requirement                                          | How it is met                                            |
| ---------------------------------------------------- | -------------------------------------------------------- |
| Use at least two Material UI components              | Card, CardContent, Button, TextField                     |
| Implement at least two components besides `Projects` | `ProjectCard`, `HardwareSetRow`                          |
| Reuse a custom component multiple times              | `ProjectCard` and `HardwareSetRow` are both reused       |
| Pass props parent → child at least twice             | `Projects → ProjectCard`, `ProjectCard → HardwareSetRow` |
| Custom event handler modifies state                  | `handleToggleJoin` updates `joined` state                |

---

## **Requirement of Stakeholder: Development Setup (Frontend)**

The frontend is built using **Create React App**.

### Step-by-Step (macOS / Linux)

**1. Clone the repository**

```bash
git clone <your-repo-url>
cd task3-projects-page
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm start
```

**4. Open in your browser**

```
http://localhost:3000
```

You should see:

* Three sample projects
* Two hardware sets per project
* A working Join/Leave toggle

---

## How to Run This Project (Later)

### 1) Install dependencies

From inside `task3-projects-page/`:

```bash
npm install
```

### 2) Start the development server

```bash
npm start
```

Then open your browser to:

```
http://localhost:3000
```

You should see the Projects page with:

* Three sample projects
* Two hardware sets per project
* Working Join/Leave toggle

---

## Folder Layout

```
Folder Layout

task3-projects-page/
│
├── public/
│   └── index.html
│
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   │
│   ├── components/
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectCard.css
│   │   ├── HardwareSetRow.jsx
│   │   └── HardwareSetRow.css
│   │
│   └── pages/
│       ├── SignIn.jsx
│       └── SignIn.css
│
├── package.json
└── README.md   ← (this file)

```

---

## Notes

* This project does **not** include `node_modules` in the submission zip.
* All project data is currently hardcoded for demonstration purposes.
* The UI approximates the instructor’s sketch but does not yet connect to a backend.

---

## Login for Grading

This project does not perform real authentication. Any username and password will be accepted.
For example:
- username: top
- password: a
or
- username: a
- password: a


## Author

Anita Woodford
University of Texas at Austin
Cloud-Native Application Development — Task 3
