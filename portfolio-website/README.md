# Personal Portfolio Website

**Student Name**: Tsunami  
**Course**: Web Development Fundamentals  
**Date**: March 2026

---

## Website Overview

This is a 4-page personal portfolio website built with pure HTML, CSS, and JavaScript. The website showcases personal profile, photo gallery, and contact information with responsive design and basic interactive features.

**Website URL**: [To be filled after deployment]

---

## Page Structure

The website consists of the following 4 independent pages:

### 1. Home (index.html)
- **Function**: Website entry point, providing navigation and introduction
- **Content**:
  - Welcome message and website introduction
  - Preview cards for three main sections (Profile, Gallery, Contact)
  - Interactive experience area (username input, color change, screen info)
- **Features**: Gradient background hero section, card-based layout

### 2. Profile (profile.html)
- **Function**: Display personal information and background
- **Content**:
  - Personal avatar (clear face visible)
  - Basic information (name, identity, location)
  - Detailed self-introduction (over 200 words)
  - Education background timeline
  - Skills and expertise display
- **Features**: Circular avatar design, timeline layout

### 3. Gallery (gallery.html)
- **Function**: Display 5 personal photos
- **Content**:
  - 5 selected personal photos:
    1. Personal portrait
    2. Travel photo
    3. Hobby photo
    4. Travel photo
    5. Personal interest
- **Features**: Grid layout, image hover zoom effect, clean design without descriptions

### 4. Contact Me (contact.html)
- **Function**: Provide contact information and contact form
- **Content**:
  - Multiple contact methods (email: 1913623236@qq.com, QQ, location)
  - Contact form (name, email, subject, message)
  - Form validation functionality
  - Frequently Asked Questions (FAQ)
- **Features**: Two-column layout, form validation feedback

---

## CSS Techniques

### CSS Properties Used (more than 10)

1. **color** - Set text color
2. **font-family** - Set font family
3. **background-color** / **background** - Set background color and gradients
4. **padding** - Set inner spacing
5. **margin** - Set outer spacing
6. **border** / **border-radius** - Set borders and rounded corners
7. **display** (flex, grid, block, inline-block) - Set display mode
8. **position** (sticky, relative) - Set positioning
9. **box-shadow** - Set shadow effects
10. **transition** - Set transition animations
11. **transform** (translate, scale) - Set transformations
12. **object-fit** - Set image fill mode
13. **overflow** - Set overflow handling
14. **text-align** / **text-decoration** - Set text styles
15. **cursor** - Set cursor style
16. **z-index** - Set stacking order
17. **line-height** - Set line height
18. **max-width** / **min-height** - Set size constraints

### Layout Techniques

- **Flexbox**: Used for navigation bar, profile header, timeline, etc.
- **CSS Grid**: Used for card grids, gallery grids, skills grids
- **Responsive Design**: Media queries for different screen sizes
  - Desktop view (default)
  - Tablet view (max-width: 768px)
  - Mobile view (max-width: 480px)

### Animations and Transition Effects

1. **Button hover effects**: Background color change, lift up, shadow
2. **Card hover effects**: Lift up, enhanced shadow
3. **Image hover effects**: Scale up 1.05x
4. **Navigation link hover**: Color change
5. **Page load animation**: Fade-in effect (fadeIn keyframes)
6. **Color change button**: Smooth color transition

---

## JavaScript Features

### Implemented Features

#### 1. Username Display Feature
- **File**: `js/main.js` - `initUsernameFeature()`
- **Function**: 
  - Display personalized welcome message at top of page after user enters name
  - Support clicking confirm button or pressing Enter to submit
  - Show welcome alert
- **Implementation**: Use `getElementById` to get elements, `addEventListener` to listen for events

#### 2. Button Color Change Feature
- **File**: `js/main.js` - `initColorChangeFeature()`
- **Function**:
  - Click button to cycle through 8 different colors
  - Colors include: Red, Blue, Green, Orange, Purple, Teal, Dark Gray, Pink
  - Smooth color transition effect
- **Implementation**: Use color array and index cycling

#### 3. Screen Information Display Feature
- **File**: `js/main.js` - `initScreenInfoFeature()`
- **Function**:
  - Click button to display detailed screen information
  - Display content: Screen resolution, available resolution, color depth, pixel ratio, window size, browser info
  - Also output information to console
- **Implementation**: Use `window.screen` and `window` objects to get information

#### 4. Contact Form Feature
- **File**: `js/main.js` - `initContactForm()`
- **Function**:
  - Form validation (name, email format, subject, message length)
  - Real-time error prompts
  - Show success message after submission
  - Form reset
- **Implementation**: Use regular expressions to validate email, `preventDefault` to prevent default submission

#### 5. Additional Features
- **Smooth scroll**: Anchor links smoothly scroll to target position
- **Navigation bar scroll effect**: Enhance navigation bar shadow when scrolling
- **Console welcome message**: Display welcome message in browser console

---

## File Structure

```
portfolio-website/
├── index.html              # Home page
├── profile.html            # Profile page
├── gallery.html            # Gallery page
├── contact.html            # Contact page
├── css/
│   └── style.css           # External stylesheet
├── js/
│   └── main.js             # External JavaScript file
├── images/
│   ├── profile-photo.jpg   # Personal avatar
│   ├── photo1.jpg          # Gallery photo 1
│   ├── photo2.jpg          # Gallery photo 2
│   ├── photo3.jpg          # Gallery photo 3
│   ├── photo4.jpg          # Gallery photo 4
│   ├── photo5.jpg          # Gallery photo 5
│   └── README.txt          # Photo instructions
└── README.md               # Project documentation
```

---

## Code Characteristics

### Semantic HTML
- Use semantic tags like `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Use `<aside>` for sidebar content
- Proper heading hierarchy (h1-h3)

### Code Comments
- HTML files: Comments every ~10 lines explaining the code
- CSS files: Detailed comments for each section explaining selector purposes
- JavaScript files: Detailed comments for each function explaining functionality and implementation logic

### Code Standards
- Consistent indentation (4 spaces)
- Clear naming conventions
- Modular CSS and JavaScript

---

## Deployment Instructions

### Deploy to InfinityFree

1. **Register Account**:
   - Visit https://www.infinityfree.net/
   - Click "Sign Up" to register a free account
   - Verify email

2. **Create Website**:
   - Login to control panel
   - Click "New Account" to create a new account
   - Choose free subdomain or use your own domain
   - Wait for account creation to complete (~1-2 minutes)

3. **Upload Files**:
   - Find "Online File Manager" or "FTP" in control panel
   - Enter `htdocs` folder
   - Upload all website files (maintain folder structure)
   - Ensure photo files are uploaded to `images` folder

4. **Access Website**:
   - Use the provided free domain to access the website
   - Example: `http://yourname.epizy.com`

### Photo Preparation

Before deployment, please prepare the following photos and put them in the `images` folder:
- `profile-photo.jpg` - Personal avatar (clear face)
- `photo1.jpg` - `photo5.jpg` - 5 personal photos

---

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## Contact Information

- **Email**: 1913623236@qq.com
- **QQ**: 1913623236
- **Name**: Tsunami

---

## Copyright Information

© 2026 Tsunami. All rights reserved.

This website is a learning project, all code is originally written.
