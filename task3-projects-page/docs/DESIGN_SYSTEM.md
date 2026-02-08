# Design System & Style Guide
## Task 3: Hardware Management System

**Document Name:** Design System & Style Guide  
**Project:** Hardware Management System - Projects Page  
**Author:** Anita Woodford  
**Date:** February 2026  
**Version:** 1.0  

## Table of Contents
1. [Introduction](#1-introduction)
2. [Color Palette](#2-color-palette)
3. [Typography System](#3-typography-system)
4. [Spacing & Layout Grid](#4-spacing--layout-grid)
5. [Component Styling](#5-component-styling)
6. [Interactive Elements](#6-interactive-elements)
7. [Status Indicators](#7-status-indicators)
8. [Responsive Design](#8-responsive-design)
9. [Accessibility Standards](#9-accessibility-standards)
10. [Animations & Transitions](#10-animations--transitions)
11. [Material-UI Theme Configuration](#11-material-ui-theme-configuration)
12. [Icon System](#12-icon-system)
13. [Form Styling](#13-form-styling)
14. [Dialog & Modal Styling](#14-dialog--modal-styling)
15. [Usage Guidelines](#15-usage-guidelines)
16. [Document Control](#16-document-control)

---

## 1. Introduction

This Design System & Style Guide document defines the visual language, design tokens, and styling standards for the Hardware Management System application. It ensures consistency across all UI components and provides guidelines for future maintenance and expansion.

---

## 2. Color Palette

### 2.1 Primary Colors

**Primary Blue**
```
Hex: #1976D2
RGB: 25, 118, 210
Usage: Primary buttons, links, active states
Material-UI Default: primary color
Component: Button variant="contained"
```

**Primary Blue (Light)**
```
Hex: #42A5F5
RGB: 66, 165, 245
Usage: Hover states, secondary highlights
Material-UI Variant: primary light
```

**Primary Blue (Dark)**
```
Hex: #1565C0
RGB: 21, 101, 192
Usage: Active/pressed states, dark mode
Material-UI Variant: primary dark
```

### 2.2 Secondary Colors

**Error Red**
```
Hex: #D32F2F
RGB: 211, 47, 47
Usage: Sign Out button, error messages, destructive actions
Material-UI Default: error color
Component: Button variant="outlined" color="error"
```

**Error Red (Light)**
```
Hex: #EF5350
RGB: 239, 83, 80
Usage: Error state backgrounds, warning highlights
```

**Success Green**
```
Hex: #388E3C
RGB: 56, 142, 60
Usage: Joined project cards, success states, confirmation
Material-UI Variant: success
```

**Success Green (Light)**
```
Hex: #66BB6A
RGB: 102, 187, 106
Usage: Joined project card background (rgba applied)
Actual Used: rgba(56, 142, 60, 0.1) - very light green background
Component: ProjectCard with joined: true
```

### 2.3 Neutral Colors

**Black**
```
Hex: #000000
RGB: 0, 0, 0
Usage: Text, hardest contrast
```

**Dark Gray**
```
Hex: #212121
RGB: 33, 33, 33
Usage: Primary text, headings
Material-UI Default: text.primary
```

**Medium Gray**
```
Hex: #757575
RGB: 117, 117, 117
Usage: Secondary text, labels
Material-UI: text.secondary
```

**Light Gray**
```
Hex: #E0E0E0
RGB: 224, 224, 224
Usage: Borders, dividers, backgrounds
Material-UI: divider
```

**White**
```
Hex: #FFFFFF
RGB: 255, 255, 255
Usage: Backgrounds, cards, text on dark
Material-UI Default: background.paper
```

**Background Gray**
```
Hex: #FAFAFA
RGB: 250, 250, 250
Usage: Page backgrounds
Material-UI: background.default
```

### 2.4 Color Usage Matrix

| Component | Background | Border | Text | Hover |
|-----------|-----------|--------|------|-------|
| Sign In Card | White (#FFF) | Light Gray (#E0E0E0) | Dark Gray (#212121) | Light Gray (#FAFAFA) |
| Not Joined Project | White (#FFF) | Light Gray (#E0E0E0) | Dark Gray (#212121) | Light Gray (#FAFAFA) |
| Joined Project | Success (Light) | Success Green (#388E3C) | Dark Gray (#212121) | Success Green (#66BB6A) |
| Primary Button | Primary Blue (#1976D2) | Primary Blue (#1976D2) | White (#FFF) | Primary Dark (#1565C0) |
| Secondary Button | White (#FFF) | Primary Blue (#1976D2) | Primary Blue (#1976D2) | Light Gray (#FAFAFA) |
| Error Button (Sign Out) | White (#FFF) | Error Red (#D32F2F) | Error Red (#D32F2F) | Light Gray (#FAFAFA) |
| TextField | White (#FFF) | Light Gray (#E0E0E0) | Dark Gray (#212121) | Primary Blue (#1976D2) |
| Dialog | White (#FFF) | Light Gray (#E0E0E0) | Dark Gray (#212121) | N/A |

---

## 3. Typography

### 3.1 Font Family

**Primary Font: Roboto**
```
Font Family: Roboto (System Default for Material-UI)
Fallback Stack: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
Hosted By: Google Fonts (Material-UI default)
License: Open Source (Apache 2.0)
```

**Font Selection Rationale:**
- Material-UI default typography
- Professional, modern appearance
- Excellent readability
- Wide browser support
- Open source licensing

### 3.2 Typography Scale

**Heading 1 (h1) - Page Title**
```
Font Size: 32px (2rem)
Font Weight: 500 (Medium)
Line Height: 1.5
Letter Spacing: 0px
Usage: "Projects" page title
Component: Typography variant="h1"
Color: Dark Gray (#212121)
Margin Bottom: 16px
```

**Heading 2 (h2) - Dialog Titles**
```
Font Size: 24px (1.5rem)
Font Weight: 500 (Medium)
Line Height: 1.3
Letter Spacing: 0px
Usage: "Create New Project", "Request Authorization"
Component: DialogTitle
Color: Dark Gray (#212121)
Margin Bottom: 12px
```

**Heading 3 (h3) - Section Titles**
```
Font Size: 20px (1.25rem)
Font Weight: 500 (Medium)
Line Height: 1.4
Letter Spacing: 0px
Usage: Hardware set labels, project names
Color: Dark Gray (#212121)
```

**Body 1 - Standard Text**
```
Font Size: 16px (1rem)
Font Weight: 400 (Regular)
Line Height: 1.5
Letter Spacing: 0.5px
Usage: Form labels, project descriptions, authorized users list
Component: Typography variant="body1"
Color: Dark Gray (#212121)
Margin Bottom: 8px
```

**Body 2 - Secondary Text**
```
Font Size: 14px (0.875rem)
Font Weight: 400 (Regular)
Line Height: 1.43
Letter Spacing: 0.25px
Usage: Input helpers, secondary information, timestamps
Component: Typography variant="body2"
Color: Medium Gray (#757575)
```

**Caption - Small Text**
```
Font Size: 12px (0.75rem)
Font Weight: 400 (Regular)
Line Height: 1.66
Letter Spacing: 0.4px
Usage: Demo instructions, fine print
Component: Typography variant="caption"
Color: Medium Gray (#757575)
```

**Button Text**
```
Font Size: 14px (0.875rem)
Font Weight: 500 (Medium)
Line Height: 1.75
Letter Spacing: 0.5px
Text Transform: Uppercase (Material-UI Button default)
Usage: All button labels
Component: Button component
Color: Depends on button type
```

### 3.3 Typography Usage Examples

```javascript
// Page Title
<Typography variant="h1">Projects</Typography>

// Welcome Message
<Typography variant="body2" color="textSecondary">
  Welcome, {currentUser}!
</Typography>

// Project Name
<div className="project-name">Project Name 1</div>
// CSS: font-size: 18px; font-weight: 500;

// Authorized Users
<div className="project-users">Anita, Alejandro, Casey</div>
// CSS: font-size: 14px; font-weight: 400;

// Hardware Label
<div className="hw-label">HWSet1: 50/100</div>
// CSS: font-size: 14px; font-weight: 400;

// Input Field
<TextField label="Project Name" />
// Material-UI TextField with body1 font size
```

---

## 4. Spacing & Layout

### 4.1 Spacing Scale

**Base Unit: 8px**

All spacing uses multiples of 8px base unit for consistency.

```
xs: 4px (0.5 base unit)
sm: 8px (1 base unit)
md: 16px (2 base units)
lg: 24px (3 base units)
xl: 32px (4 base units)
2xl: 48px (6 base units)
3xl: 64px (8 base units)
```

### 4.2 Space Application

**Padding**
```
Cards/Sections: 16px (md)
Input Fields: 12px (custom)
Buttons: 8px vertical, 16px horizontal
Dialog Content: 20px
Dialogs Actions: 8px between buttons
```

**Margins**
```
Between Sections: 24px (lg)
Between Cards: 16px (md)
After Headings: 16px (md)
After Paragraphs: 12px (between body elements)
```

**Gap (Flex/Grid)**
```
Project Cards: 16px (md)
Hardware Rows: 8px (sm)
Button Groups: 8px (sm)
Form Fields: 12px (custom)
```

### 4.3 Layout Dimensions

**Page Container**
```
Max Width: Full viewport width
Padding: 24px (lg) on desktop, 16px (md) on mobile
```

**Project Card**
```
Display: Flex (horizontal)
Left Section: 200px width
Middle Section: Flexible (flex: 1)
Right Section: 120px width
Height: Auto (min-height: 120px)
```

**Hardware Row**
```
Display: Flex (horizontal)
Label Width: 150px
Input Width: 100px
Button Width: 100px each
Height: 40px
```

**Dialog**
```
Max Width: 600px (sm breakpoint in Material-UI)
Width: 90% on mobile, full dialog on desktop
Min Height: Auto (content-driven)
```

---

## 5. Component Styling

### 5.1 Button Styles

**Primary Button (NEW PROJECT)**
```
Variant: contained
Color: primary (blue)
Background: #1976D2
Text Color: White
Hover State: #1565C0 (darker)
Padding: 10px 24px
Font Weight: 500
Border Radius: 4px
```

**Secondary Button (REQUEST AUTHORIZATION)**
```
Variant: outlined
Color: primary (blue)
Background: White
Border: 1px solid #1976D2
Text Color: #1976D2
Hover State: Light blue background
Padding: 9px 23px
Font Weight: 500
Border Radius: 4px
```

**Danger Button (SIGN OUT)**
```
Variant: outlined
Color: error (red)
Background: White
Border: 1px solid #D32F2F
Text Color: #D32F2F
Icon: LogoutIcon (#D32F2F)
Hover State: Light red background
Padding: 9px 23px
Font Weight: 500
Border Radius: 4px
```

**Join/Leave Button (ProjectCard)**
```
Variant: contained
Color: primary (blue)
Background: #1976D2
Text Color: White
Width: 100px
Height: 40px
Font Weight: 500
Text: "Join" or "Leave"
```

**Dialog Buttons (CANCEL/CREATE, REQUEST ACCESS)**
```
CANCEL:
  Variant: text
  Color: primary
  Text Color: #1976D2
  Font Weight: 500

CREATE/REQUEST ACCESS:
  Variant: contained
  Color: primary
  Background: #1976D2
  Text Color: White
  Font Weight: 500
```

**CHECK IN / CHECK OUT**
```
Variant: outlined (optional, could be contained)
Color: primary
Background: White or #1976D2
Text Color: Dependent on variant
Size: Compact (small)
Width: 100px
Font Weight: 500
```

### 5.2 Card Styling

**Project Card - Not Joined**
```
Background: White (#FFFFFF)
Border: 1px solid #E0E0E0 (Light Gray)
Border Radius: 4px
Box Shadow: 0px 2px 4px rgba(0, 0, 0, 0.1)
Padding: 16px
Margin Bottom: 16px
```

**Project Card - Joined**
```
Background: rgba(56, 142, 60, 0.1) - Very light green
Border: 1px solid #388E3C (Success Green)
Border Radius: 4px
Box Shadow: 0px 2px 4px rgba(0, 0, 0, 0.1)
Padding: 16px
Margin Bottom: 16px
Indicates: User is member of this project
```

### 5.3 Input Field Styling

**TextField (Material-UI)**
```
Variant: outlined (default Material-UI)
Background: White (#FFFFFF)
Border: 1px solid #E0E0E0 (default), #1976D2 (focused)
Border Radius: 4px
Padding: 12px 12px (internal Material-UI)
Height: 56px (Material-UI default)
Font Size: 16px
Label Color: Medium Gray (#757575) (default), Primary Blue (focused)
```

**Hardware Qty Input**
```
Type: text (accepts numbers)
Placeholder: "Enter qty"
Width: 100px
Height: 40px
Padding: 8px 12px
Border: 1px solid #E0E0E0
Font Size: 14px
```

### 5.4 Dialog Styling

**Dialog Container**
```
Max Width: sm (600px)
Background: White (#FFFFFF)
Border Radius: 4px
Box Shadow: 0px 5px 25px rgba(0, 0, 0, 0.2)
```

**DialogTitle**
```
Background: White (#FFFFFF)
Border Bottom: 1px solid #E0E0E0
Padding: 20px
Font Size: 24px
Font Weight: 500
Color: Dark Gray (#212121)
```

**DialogContent**
```
Background: White (#FFFFFF)
Padding: 20px
Gap Between Fields: 12px
```

**DialogActions**
```
Background: White (#FFFFFF)
Border Top: 1px solid #E0E0E0
Padding: 16px
Gap Between Buttons: 8px
Justify: flex-end (buttons on right)
```

---

## 6. Icon Styling

### 6.1 Icons Used

**LogoutIcon (Sign Out Button)**
```
Icon: LogoutIcon from Material-UI Icons
Size: 20px (default for button icon)
Color: Error Red (#D32F2F)
Position: Left of button text
Margin Right: 8px
```

**Material-UI Icons Library**
```
Package: @mui/icons-material v7.3.7
All icons use Material Design guidelines
Consistent sizing across application
```

### 6.2 Icon Sizing

```
Small (Inline): 20px
Medium (Toolbar): 24px
Large (Logo/Hero): 48px
Extra Large: 64px+
```

---

## 7. Responsive Design

### 7.1 Breakpoints

**Desktop (Large)**
```
Width: >= 1200px
Project Cards: Full width with padding
Multiple columns if applicable
Hardware rows: Full width
```

**Tablet (Medium)**
```
Width: 600px - 1199px
Project Cards: Adjusted padding
Single column layout
Touch-friendly spacing
```

**Mobile (Small)**
```
Width: < 600px
Full width containers
Vertical stacking
Increased touch targets (44px minimum)
Increased padding for touch
```

### 7.2 Responsive Adjustments

**Sign In Page**
```
Desktop: Centered card (400px width)
Tablet: Centered card (85% width, max 500px)
Mobile: Full width with padding (16px)
```

**Projects Page**
```
Desktop: Grid layout possible
Tablet: Single column, full width cards
Mobile: Single column, full width cards
Header buttons: Stack horizontally on desktop, may wrap on mobile
```

**Project Cards**
```
Desktop: 3 columns side-by-side flex layout
Tablet: Full width, single column
Mobile: Full width, single column
Hardware section: Wraps or scrolls horizontally if needed
```

---

## 8. Visual Hierarchy

### 8.1 Emphasis Levels

**Level 1 - Highest Emphasis**
- Page title (h1, 32px)
- Primary action buttons
- Currently focused elements
- Error messages

**Level 2 - Medium Emphasis**
- Section titles (h2/h3)
- Secondary actions
- Primary text (body1)
- Joined project cards (green background)

**Level 3 - Lower Emphasis**
- Secondary text (body2)
- Disabled states
- Helper text
- Not-joined project cards (white background)

**Level 4 - Lowest Emphasis**
- Captions (12px)
- Hints and tips
- Grey text (#757575)

### 8.2 Visual Weight

```
Bold (700): Not used (exceeds Material-UI defaults)
Semi-Bold (600): Not used (exceeds Material-UI defaults)
Medium (500): Headings, button text, emphasis
Regular (400): Body text, standard usage
Light (300): Not typically used
```

---

## 9. Accessibility & Contrast

### 9.1 Color Contrast Ratios (WCAG AA)

**Text on Backgrounds**
```
Dark Gray (#212121) on White (#FFF): 18:1 ✓ (AAA)
Dark Gray (#212121) on Light Gray (#FAFAFA): 17:1 ✓ (AAA)
Medium Gray (#757575) on White (#FFF): 7:1 ✓ (AA)
White (#FFF) on Primary Blue (#1976D2): 4.5:1 ✓ (AA)
White (#FFF) on Error Red (#D32F2F): 5:1 ✓ (AA)
```

### 9.2 Focus States

**Keyboard Navigation**
```
Focus Outline: 2px solid Primary Blue (#1976D2)
Outline Offset: 2px
Applied to: All interactive elements (buttons, inputs, dialogs)
Material-UI: Automatically applied
```

### 9.3 Touch Targets

```
Minimum Size: 44px × 44px
Applied to: Buttons, clickable elements
Actual Button Size: 40px height (close, acceptable for course)
Spacing: 8px between targets
```

---

## 10. Animation & Transitions

### 10.1 Transition Timing

**Standard Transition Duration: 200ms - 300ms**
```
Button hover: 200ms
Dialog open/close: 300ms
State changes: 200ms
Color transitions: 200ms
```

**Easing Function: Material-UI Standard**
```
Ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
Used for: All transitions
Purpose: Smooth, professional appearance
```

### 10.2 Interactive Feedback

**Button Interactions**
```
Click: Ripple effect (Material-UI default)
Hover: Background color change + slight elevation
Focus: Outline + slight elevation
Active: Darker background color
```

**Card Interactions**
```
Hover: Slight elevation increase (box-shadow)
Joined State: Green background (no animation)
Focus: Outline on interactive elements
```

**Input Interactions**
```
Focus: Border color to Primary Blue
Label: Float animation (Material-UI)
Error: Border color to Error Red
Success: No specific animation
```

### 10.3 Disabled States

**Disabled Buttons**
```
Background: Light Gray (#E0E0E0)
Text Color: Medium Gray (#757575)
Opacity: 0.6
Cursor: not-allowed
No hover/focus effects
```

**Disabled Inputs**
```
Background: Light Gray (#F5F5F5)
Border: 1px solid Light Gray (#E0E0E0)
Text Color: Medium Gray (#757575)
Opacity: 0.6
Cursor: not-allowed
```

---

## 11. Status Indicators

### 11.1 Joined Status

**Joined (Green)**
```
Background Color: rgba(56, 142, 60, 0.1)
Border Color: #388E3C (Success Green)
Visual Cue: Light green background
Button State: "Leave" button visible
Meaning: User is member of project
```

**Not Joined (White)**
```
Background Color: White (#FFFFFF)
Border Color: Light Gray (#E0E0E0)
Visual Cue: White/neutral background
Button State: "Join" button visible
Meaning: User is not member of project
```

### 11.2 Validation States

**Valid State**
```
Border: 1px solid Light Gray (#E0E0E0)
Background: White (#FFFFFF)
Text Color: Dark Gray (#212121)
Helper Text: None or success message
```

**Invalid/Error State**
```
Border: 2px solid Error Red (#D32F2F)
Background: Light red tint (if applicable)
Text Color: Error Red (#D32F2F)
Helper Text: Error message in red
```

**Focused State**
```
Border: 2px solid Primary Blue (#1976D2)
Label Color: Primary Blue (#1976D2)
Background: White (#FFFFFF)
Helper Text: Visible for guidance
```

---

## 12. Theme Configuration (Material-UI)

### 12.1 Theme Object

```javascript
const theme = {
  palette: {
    primary: {
      main: '#1976D2',
      light: '#42A5F5',
      dark: '#1565C0',
      contrastText: '#fff',
    },
    error: {
      main: '#D32F2F',
      light: '#EF5350',
      dark: '#C62828',
    },
    success: {
      main: '#388E3C',
      light: '#66BB6A',
      dark: '#2E7D32',
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      300: '#E0E0E0',
      500: '#9E9E9E',
      700: '#757575',
      900: '#212121',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    divider: '#E0E0E0',
  },
  typography: {
    fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontSize: '32px',
      fontWeight: 500,
      lineHeight: '1.5',
    },
    h2: {
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: '1.3',
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '1.5',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '1.43',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
};
```

---

## 13. Design Pattern Examples

### 13.1 Button Pattern

**Primary Action**
```jsx
<Button variant="contained" color="primary" onClick={handleClick}>
  New Project
</Button>
```

**Secondary Action**
```jsx
<Button variant="outlined" color="primary" onClick={handleClick}>
  Request Authorization
</Button>
```

**Danger Action**
```jsx
<Button 
  variant="outlined" 
  color="error" 
  startIcon={<LogoutIcon />}
  onClick={handleClick}
>
  Sign Out
</Button>
```

### 13.2 Card Pattern

**Not Joined**
```jsx
<Card variant="outlined" className="project-card">
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

**Joined**
```jsx
<Card 
  variant="outlined" 
  className={`project-card ${project.joined ? 'joined' : ''}`}
>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

### 13.3 Input Pattern

```jsx
<TextField
  fullWidth
  label="Project Name"
  variant="outlined"
  value={projectName}
  onChange={(e) => setProjectName(e.target.value)}
  style={{ marginBottom: '16px' }}
/>
```

---

## 14. Dark Mode Considerations (Future)

**Note:** Current implementation uses light theme only. Future dark mode would follow these guidelines:

```
Primary: #90CAF9 (light blue on dark)
Text: #FFFFFF on dark backgrounds
Background: #121212 (dark grey-black)
Surface: #1E1E1E (slightly lighter than background)
```

---

## 15. Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | Feb 2026 | Initial design system | Anita Woodford |

---

## 16. References

- **Material Design Guidelines:** https://material.io/design
- **Material-UI Documentation:** https://mui.com
- **WCAG Accessibility Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/
- **Typography Best Practices:** https://material.io/design/typography/the-type-system.html

