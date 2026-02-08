# React Projects Page — Task 3 (Cloud-Native Frontend)

## Table of Contents

- [React Projects Page — Task 3 (Cloud-Native Frontend)](#react-projects-page--task-3-cloud-native-frontend)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Component Architecture](#component-architecture)
    - [Component Responsibilities](#component-responsibilities)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation (macOS / Linux)](#installation-macos--linux)
  - [Running the App](#running-the-app)
  - [Usage](#usage)
  - [Troubleshooting](#troubleshooting)
  - [Future Work](#future-work)
  - [Acknowledgments](#acknowledgments)
  - [Author](#author)

---

## Overview

This repository contains the **Task 3: Custom React App** implementation for a cloud-native frontend course. The project implements a reusable **Projects page** that models a simplified hardware checkout interface using React and Material UI.

The application is currently a **frontend-only prototype** that uses hardcoded data stored in React state. The design is intentionally modular so it can be connected to a backend API in a later phase of the course.

---

## Features

* List of authorized projects displayed dynamically
* Per-project hardware set display with quantities
* Controlled input fields for “Enter qty”
* Check In / Check Out action buttons (UI placeholders)
* Join / Leave toggle that updates React state
* Reusable component hierarchy with props passing
* Layout built with Material UI components

---

## Tech Stack

* React (Create React App)
* Material UI (MUI)

  * Card
  * CardContent
  * Button
  * TextField
* JavaScript (ES6+)

---

## Component Architecture

```
App
└── Projects
    ├── ProjectCard (reused per project)
    │   └── HardwareSetRow (reused per hardware set)
```

### Component Responsibilities

**Projects.jsx**

* Owns the `projects` state
* Implements `handleToggleJoin` to modify state
* Passes project data and event handlers via props
* Renders a list of `ProjectCard` components

**ProjectCard.jsx**

* Receives a single `project` object via props
* Displays project name and authorized users
* Renders a Join/Leave button
* Maps over `hardwareSets` and renders `HardwareSetRow`

**HardwareSetRow.jsx**

* Receives a `hwSet` object via props
* Displays hardware name and checkout counts
* Manages local state for quantity input
* Provides Check In / Check Out buttons

---

## Project Structure

```
task3-projects-page/
│
├── public/
│   └── index.html
│
├── src/
│   ├── App.js
│   ├── App.css
│   ├── components/
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectCard.css
│   │   ├── HardwareSetRow.jsx
│   │   └── HardwareSetRow.css
│
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

* Node.js (LTS recommended)
  [https://nodejs.org](https://nodejs.org)

### Installation (macOS / Linux)

1. Clone the repository

```bash
git clone <your-repo-url>
cd task3-projects-page
```

2. Install dependencies

```bash
npm install
```

---

## Running the App

Start the development server:

```bash
npm start
```

Then open:

```
http://localhost:3000
```

You should see:

* Three sample projects
* Two hardware sets per project
* A working Join/Leave toggle

---

## Usage

* Click **Join** to join a project
* Click **Leave** to leave a project
* Enter a quantity in “Enter qty”
* Click **Check In** or **Check Out** (currently UI-only placeholders)

---

## Troubleshooting

**`npm` not found**
Install Node.js from [https://nodejs.org](https://nodejs.org)

**Port 3000 already in use**

```bash
PORT=3001 npm start
```

**Blank screen**

```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

**Styles not loading**

* Confirm `App.css` is imported in `App.js`
* Verify file paths in imports

---

## Future Work

* Connect to a backend API
* Persist project membership
* Implement real Check In / Check Out logic
* Add authentication
* Improve responsive layout

---

## Acknowledgments

* Course instructor and teaching team
* React documentation
* Material UI documentation

---

## Author

**Anita Woodford**
Software Engineering Graduate Student

University of Texas at Austin 