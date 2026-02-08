# Software Design Document - Task 3: Hardware Management System

**Project Name:** Task 3 - Custom React Projects Page
**Course:** Cloud-Native Application Development
**Author:** Anita Woodford
**Date:** February 2026
**Version:** 1.0

## Table of Contents
1. [Document Overview](#1-document-overview)
2. [System Architecture](#2-system-architecture)
3. [Component Specifications](#3-component-specifications)
4. [State Management](#4-state-management)
5. [Data Models](#5-data-models)
6. [Design Patterns](#6-design-patterns)
7. [User Workflows](#7-user-workflows)
8. [API & Integration Points](#8-api--integration-points)
9. [Error Handling & Edge Cases](#9-error-handling--edge-cases)
10. [Performance Considerations](#10-performance-considerations)
11. [Security & Authentication](#11-security--authentication)
12. [Appendix: Code Examples](#12-appendix-code-examples)

---

## 1. Document Overview

This Software Design Document describes the architecture, design decisions, and implementation details of the Hardware Management System application. It is a frontend-only React application that demonstrates core React concepts including component composition, state management, routing, and Material-UI integration.

## 2. System Architecture

### 2.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        App (index.js)                      │
│                  React Router Configuration                │
└────────────────────────┬────────────────────────────────────┘
                         │
        ┌────────────────┼────────────────┐
        │                │                │
   ┌────▼─────┐   ┌─────▼──────┐   ┌────▼─────────┐
   │  SignIn  │   │ ProjectRoute
   │   Page   │   │ (Protected) │
   └──────────┘   └─────┬──────┘
                        │
                   ┌────▼──────────┐
                   │   Projects    │
                   │   Container   │
                   │  (State Mgmt) │
                   └────┬──────────┘
                        │
              ┌─────────┼─────────┐
              │         │         │
         ┌────▼──┐┌─────▼────┐┌──▼──────┐
         │Project││ProjectCard││Hardware │
         │ Card 1││ Card 2    ││Set Row  │
         └───────┘└───────────┘└─────────┘
```

### 2.2 Technology Stack

- **Frontend Framework:** React 19.2.4
- **Routing:** React Router DOM 7.13.0
- **UI Component Library:** Material-UI (MUI) 7.3.7
- **Build Tool:** Create React App 5.0.1
- **State Management:** React Hooks (useState)
- **Session Storage:** Browser localStorage
- **Styling:** CSS (Component-scoped)

### 2.3 Architecture Pattern

The application follows a hierarchical component architecture with unidirectional data flow:
- Top-level state management in Projects component
- Props-based parent-to-child communication
- Callback functions for child-to-parent events
- Material-UI dialogs for modal interactions

---

## 3. Component Design

### 3.1 App.jsx - Root Component

**Purpose:** Configure routing and implement route protection

**Responsibilities:**
- Set up React Router with two main routes
- Implement ProtectedRoute component for authentication
- Redirect unauthenticated users to sign-in page

**Key Logic:**
```javascript
ProtectedRoute checks if "currentUser" exists in localStorage
If exists: render protected component
If not: redirect to "/" (SignIn page)
```

**Props:** None (root component)

---

### 3.2 SignIn.jsx - Authentication Page

**Purpose:** Provide login interface for users

**Responsibilities:**
- Display login form with username and password fields
- Validate form inputs (both fields required)
- Store username in localStorage on successful sign-in
- Navigate to /projects route after authentication

**State:**
```javascript
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
```

**User Inputs:**
- Username field: Text input
- Password field: Password input
- Sign In button: Form submission

**Authentication Logic:**
- No real validation performed
- Any non-empty username and password combination accepted
- Username stored as "currentUser" in localStorage

**Navigation:**
- On success: Navigate to "/projects"
- On error: Display alert with error message

---

### 3.3 Projects.jsx - Main Container Component

**Purpose:** Manage global application state and render project cards

**Responsibilities:**
- Maintain projects array state
- Manage hardware inventory state (global)
- Handle project join/leave functionality
- Open/close dialogs for creating projects and requesting authorization
- Render all project cards
- Provide logout functionality

**State:**
```javascript
// Global hardware inventory (shared across all projects)
const [hardwareInventory, setHardwareInventory] = useState({
    "HWSet1": { checkedOut: 50, total: 100 },
    "HWSet2": { checkedOut: 0, total: 100 }
});

// Projects array with metadata
const [projects, setProjects] = useState([
    {
        id: "p1",
        name: "Project Name 1",
        authorizedUsers: "Anita, Alejandro, Casey",
        joined: false,
        hardwareSets: ["HWSet1", "HWSet2"]
    },
    // ... more projects
]);

// Dialog states
const [openNewProject, setOpenNewProject] = useState(false);
const [openAuthRequest, setOpenAuthRequest] = useState(false);
const [selectedProjectId, setSelectedProjectId] = useState(null);

// Form states
const [newProjectName, setNewProjectName] = useState("");
const [newProjectUsers, setNewProjectUsers] = useState("");
const [userName, setUserName] = useState("");
```

**Key Methods:**

**handleToggleJoin(projectId)**
- Toggles the "joined" status of a project
- Updates project card visual state (green background when joined)
- Does not modify any other project data

**handleHardwareUpdate(hardwareSetName, newCheckedOut)**
- Updates global hardware inventory
- Called from HardwareSetRow when check-in/check-out occurs
- Maintains checked-out count and total count

**handleCreateProject()**
- Validates project name is not empty
- Creates new project object with:
  - Unique ID (incremented)
  - Name from form input
  - Authorized users from form input
  - Default hardware sets (HWSet1, HWSet2)
  - Initially not joined
- Adds to projects array
- Closes dialog and clears form

**handleRequestAuth(projectId)**
- Validates name and project selection
- Appends user name to selected project's authorized users
- Updates user's project authorization list
- Displays confirmation alert
- Closes dialog and clears form

**handleSignOut()**
- Displays browser confirmation: "Are you sure you want to sign out?"
- On OK: Removes "currentUser" from localStorage
- On OK: Navigates to "/" (SignIn page)
- On Cancel: Does nothing

**UI Structure:**
- Header section with title, welcome message, and buttons
- ProjectCard components (maps over projects array)
- Two Material-UI Dialog components for modals

---

### 3.4 ProjectCard.jsx - Project Display Component

**Purpose:** Display individual project information with hardware management

**Responsibilities:**
- Render project metadata (name, authorized users)
- Render hardware set rows for each project
- Display join/leave button
- Pass hardware updates to parent

**Props:**
```javascript
{
    project: {
        id: string,
        name: string,
        authorizedUsers: string,
        joined: boolean,
        hardwareSets: string[]
    },
    hardwareInventory: object,
    onToggleJoin: function,
    onHardwareUpdate: function
}
```

**Rendering:**
- Left section: Project name and authorized users list
- Center section: Hardware set rows (mapped)
- Right section: Join/Leave button (conditional text)

**Visual States:**
- Green background when project.joined === true
- White background when project.joined === false

**Button Behavior:**
- Shows "Leave" when joined
- Shows "Join" when not joined
- Calls onToggleJoin callback on click

---

### 3.5 HardwareSetRow.jsx - Hardware Item Component

**Purpose:** Display and manage individual hardware set quantities

**Responsibilities:**
- Display hardware set name and current/total counts
- Provide quantity input field
- Implement check-in and check-out logic
- Validate user input
- Call parent callback to update inventory

**Props:**
```javascript
{
    hardwareSetName: string,        // e.g., "HWSet1"
    hwSet: {
        checkedOut: number,         // current checked-out quantity
        total: number               // total available quantity
    },
    onHardwareUpdate: function      // callback to update parent state
}
```

**State:**
```javascript
const [qty, setQty] = useState("");  // User input field value
```

**Key Methods:**

**handleQtyChange(event)**
- Updates qty state as user types
- Allows integer input only

**handleCheckInClick()**
- Validates input is positive integer
- Prevents checking in more than currently checked out
- Calculates: newCheckedOut = checkedOut - amount
- Ensures result >= 0 (no negative numbers)
- Calls onHardwareUpdate with new value
- Clears input field

**handleCheckOutClick()**
- Validates input is positive integer
- Checks if enough items available: amount <= (total - checkedOut)
- Calculates: newCheckedOut = checkedOut + amount
- Ensures don't exceed total quantity
- Calls onHardwareUpdate with new value
- Clears input field

**Display Format:**
- Hardware label shows: "HWSet1: 50/100" (checked_out/total)
- Input field placeholder: "Enter qty"

---

## 4. Data Model

### 4.1 State Structure

**Project Object:**
```javascript
{
    id: "p1",                              // Unique identifier
    name: "Project Name 1",                // Display name
    authorizedUsers: "User1, User2",       // Comma-separated list
    joined: false,                         // Join status for current user
    hardwareSets: ["HWSet1", "HWSet2"]    // Associated hardware sets
}
```

**Hardware Inventory:**
```javascript
{
    "HWSet1": {
        checkedOut: 50,    // Current checked-out quantity
        total: 100         // Total available quantity
    },
    "HWSet2": {
        checkedOut: 0,
        total: 100
    }
}
```

**Session Data (localStorage):**
```javascript
localStorage.currentUser = "username"  // Username of logged-in user
```

### 4.2 Data Flow

```
User Input → Event Handler → State Update → Re-render
                                ↑
                        (Unidirectional)
                        
Parent State → Props → Child Components → User Interaction
                             ↓
                        Callback Events
                             ↓
                        Parent Handler
```

---

## 5. User Workflows

### 5.1 Sign In Flow

```
1. User lands on "/" route
2. SignIn component renders
3. User enters username and password
4. User clicks "Sign In"
5. handleSignIn validates inputs
6. Username stored in localStorage
7. User navigated to "/projects"
8. ProtectedRoute recognizes authenticated user
9. Projects page loads
```

### 5.2 Join Project Flow

```
1. User views Projects page with three projects
2. User finds project with joined: false
3. User clicks "Join" button
4. handleToggleJoin(projectId) called
5. Project state updated: joined = true
6. ProjectCard re-renders with green background
7. Button text changes to "Leave"
```

### 5.3 Leave Project Flow

```
1. User views project with joined: true (green background)
2. User clicks "Leave" button
3. handleToggleJoin(projectId) called
4. Project state updated: joined = false
5. ProjectCard re-renders with white background
6. Button text changes to "Join"
```

### 5.4 Check In Hardware Flow

```
1. User enters quantity in hardware input field
2. User clicks "CHECK IN" button
3. handleCheckInClick called in HardwareSetRow
4. Input validated (positive integer)
5. newCheckedOut = checkedOut - amount (minimum 0)
6. onHardwareUpdate callback called with new value
7. Projects.handleHardwareUpdate updates global state
8. HardwareSetRow re-renders with new count
9. Input field cleared
```

### 5.5 Check Out Hardware Flow

```
1. User enters quantity in hardware input field
2. User clicks "CHECK OUT" button
3. handleCheckOutClick called in HardwareSetRow
4. Input validated (positive integer)
5. Check if amount <= (total - checkedOut)
6. newCheckedOut = checkedOut + amount
7. onHardwareUpdate callback called with new value
8. Projects.handleHardwareUpdate updates global state
9. HardwareSetRow re-renders with new count
10. Input field cleared
```

### 5.6 Create New Project Flow

```
1. User clicks "NEW PROJECT" button
2. Dialog opens (openNewProject state = true)
3. User enters project name (required)
4. User enters authorized users (optional)
5. User clicks "CREATE" button
6. handleCreateProject validates name
7. New project object created with:
   - Unique ID (p{length+1})
   - User input values
   - Default hardware sets
   - joined: false
8. New project added to projects array
9. State updated, causes re-render
10. Dialog closes, form cleared
11. New project card appears on page
```

### 5.7 Request Authorization Flow

```
1. User clicks "REQUEST AUTHORIZATION" button
2. Dialog opens (openAuthRequest state = true)
3. User enters their name
4. User selects project from dropdown
5. User clicks "REQUEST ACCESS" button
6. handleRequestAuth validates inputs
7. Selected project's authorizedUsers list appended with user name
8. Confirmation alert shown
9. Dialog closes, form cleared
10. ProjectCard re-renders with updated authorized users
```

### 5.8 Sign Out Flow

```
1. User clicks "SIGN OUT" button
2. handleSignOut called
3. Browser confirmation dialog appears
4. If OK clicked:
   a. "currentUser" removed from localStorage
   b. Navigate to "/" (SignIn page)
5. If Cancel clicked:
   a. Nothing happens, remain on Projects page
```

---

## 6. Material-UI Components Used

| Component | Usage | Location |
|-----------|-------|----------|
| Card | Project card container | ProjectCard |
| CardContent | Card content wrapper | ProjectCard |
| Button | Join/Leave, form actions | Multiple |
| Dialog | Modal for new project | Projects |
| DialogTitle | Modal title | Projects |
| DialogContent | Modal body | Projects |
| DialogActions | Modal buttons | Projects |
| TextField | Text inputs | SignIn, Projects |
| MenuItem | Dropdown options | Projects |
| Typography | Text display | Projects, SignIn |
| Box | Layout container | SignIn |
| LogoutIcon | Sign out button icon | Projects |

---

## 7. Technical Specifications

### 7.1 React Hooks Used

- **useState** - State management for all components
- **useNavigate** - Navigation between routes (SignIn, Projects)
- **useRouter** - Built-in React Router for route configuration

### 7.2 Event Handlers

All event handlers follow synchronous, immediate update patterns:
- Input changes: Immediate state update via onChange
- Button clicks: Synchronous callback execution
- Form submission: Validation then state update
- Navigation: Immediate route change

### 7.3 Form Validation

**SignIn Form:**
- Both username and password required (non-empty)
- Alert shown if validation fails

**New Project Dialog:**
- Project name required (non-empty)
- Authorized users optional

**Request Authorization Dialog:**
- Name required (non-empty)
- Project selection required

**Hardware Input:**
- Must be positive integer
- Must be <= maximum available (for check-out)
- Prevents negative quantities

### 7.4 CSS Structure

- Component-scoped stylesheets (.css files paired with .jsx)
- CSS-in-JS using Material-UI sx prop for inline styles
- Separate CSS files for custom styling:
  - Projects.css
  - ProjectCard.css
  - HardwareSetRow.css
  - SignIn.css

### 7.5 Routing Configuration

```javascript
// Routes:
/ → SignIn (public)
/projects → Projects (protected)

// Protection:
ProtectedRoute checks localStorage.currentUser
If exists: render component
If not: redirect to /
```

---

## 8. Design Patterns

### 8.1 Component Hierarchy Pattern

```
Unidirectional data flow from parent to child
Events bubble up through callback function props
State centralized in top-level container component
```

### 8.2 Controlled Components

All form inputs are controlled components:
- Input value bound to state
- onChange handler updates state
- setState in handler controls input value

### 8.3 Conditional Rendering

- Join/Leave button text conditional on joined status
- Background color conditional on joined status
- Dialog visibility conditional on openNewProject/openAuthRequest state

### 8.4 Props Pattern

- Heavy use of props for component communication
- Callback functions as props for parent notification
- Data objects as props for passing complex data

---

## 9. Constraints and Limitations

### 9.1 Frontend-Only Implementation

- No backend API or database
- All data stored in React state (ephemeral)
- Page refresh resets all data to initial state
- No data persistence between sessions

### 9.2 Authentication Limitations

- No real credential validation
- Any username/password accepted
- No password hashing or security measures
- Username stored in plain text in localStorage
- No role-based access control

### 9.3 Hardware Management

- Check-in/check-out modifies global inventory
- No transaction logs or audit trail
- No historical data tracking
- Hardware quantities reset on page refresh

### 9.4 Project Management

- No project creation validation beyond name requirement
- No unique project name enforcement
- No duplicate prevention for authorized users
- No project archival or deletion capability

### 9.5 UI/UX Constraints

- No loading states or spinner indicators
- No error boundary implementation
- No confirmation dialogs for destructive actions
- Limited form validation messaging

---

## 10. Implementation Notes

### 10.1 State Management Decision

**Decision:** Use React useState hooks with context at Projects level

**Rationale:**
- Simple state structure suitable for small application
- Hooks sufficient without Redux or Context API
- Meets Homework Requirements (custom event handler modifies state)
- Clear parent-child communication model

**Alternative Considered:** Redux
- Would be overengineering for this scope
- Added complexity not justified by requirements

### 10.2 Hardware Inventory Design

**Decision:** Global inventory shared across all projects

**Rationale:**
- Hardware sets referenced by name across projects
- Checking in/out affects global availability
- Single source of truth for quantities
- Prevents duplicate hardware tracking

### 10.3 Authorization Request Design

**Decision:** Append user name to authorized users string

**Rationale:**
- Simple implementation
- Demonstrates state immutability pattern
- No database needed for requirements
- Updates project immediately

---

## 11. Future Enhancement Opportunities

### 11.1 Backend Integration

- Connect to REST API for data persistence
- Implement real user authentication with JWT
- Store project and hardware data in database
- Add audit logging for hardware movements

### 11.2 Features to Add

- User profile pages
- Project archival and deletion
- Hardware inventory history
- Project member management
- Role-based access control (admin, user, viewer)
- Hardware reservation system
- Notifications for check-in/check-out

### 11.3 Code Improvements

- Extract dialogs to separate components
- Implement custom hooks for repeating logic
- Add context API for global state
- Implement error boundaries
- Add form validation library (Formik, React Hook Form)
- Extract constants to separate file
- Add JSDoc comments to all functions

### 11.4 Testing Strategy

- Unit tests for each component using Jest
- Integration tests for user workflows
- E2E tests using Cypress or Playwright
- Test coverage target: 80%+

### 11.5 Performance Optimization

- Implement React.memo for ProjectCard optimization
- Add lazy loading for large project lists
- Optimize re-renders with useMemo and useCallback
- Implement virtual scrolling for many projects

---

## 12. Conclusion

This Hardware Management System demonstrates a well-structured React application with proper component composition, state management, and user interaction handling. While limited to frontend-only for educational purposes, the architecture provides a solid foundation for backend integration and feature expansion.

The application successfully implements all Course Task 3 requirements:
- Material-UI components usage
- Custom component creation and reuse
- Props-based parent-child communication
- State management with event handlers
- Professional React development patterns

---

**Document Version History:**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Feb 2026 | Anita Woodford | Initial design document |

