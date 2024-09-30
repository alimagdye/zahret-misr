# Zahret Misr Website

## Overview

Welcome to the Zahret Misr website, a single-page application designed to showcase and export high-quality Egyptian agricultural products. The project focuses on providing an engaging user experience with modern web development practices.

## Table of Contents

1. [Overview](#Overview)
2. [Features](#Features)
3. [Technical Implementations](#Technical-Implementations)
4. [Technologies Used](#technologies-used)
5. [Setup and Installation](#setup-and-installation)
6. [Usage](#usage)
7. [Contact](#contact)

## Technologies Used
- HTML
- CSS
- JavaScript
- Intersection Observer API for lazy loading and reveal animations.
- Fetch API for form submissions.

## Features

### 1. Responsive Design
- The website is fully responsive, adapting seamlessly to various screen sizes, including mobile devices and desktops.

### 2. Product Cards
- Displays a grid of product cards for Fresh Fruits and Fresh Vegetables, each containing:
  - Product image with lazy loading for improved performance.
  - Product name and details overlay.
  - Clickable cards that open a modal with detailed information.

### 3. Modal for Product Details
- Each product card opens a modal displaying:
  - High-quality product image.
  - Product description, packing options, export months, and shipping options.
  - A "Contact Us" button for inquiries.

### 4. Lazy Loading Images
- Implemented lazy loading for images to enhance performance and reduce initial page load time.

### 5. Smooth Scrolling Navigation
- Smooth scrolling to sections for easy navigation, including:
  - Phone navigation that toggles a hidden menu.
  - Quick links to specific sections (e.g., FAQ, Contact Us).

### 6. Accordion for FAQ Section
- An accordion feature for expanding and collapsing frequently asked questions, improving user interaction and organization.

### 7. Modal and Overlay Management
- A well-structured modal system that includes:
  - Close functionality via overlay click or "Contact Us" button.
  - Scroll lock when the modal is open to prevent background scrolling.

### 8. Form Submission
- A functional contact form with:
  - Validation and error handling.
  - Integration with Web3Forms API for handling form submissions.
  - User feedback through success and error messages displayed in modals.

### 9. Dynamic Year Display
- Automatically updates the footer with the current year for a professional touch.

### 10. Accessible Navigation
- Uses semantic HTML and ARIA attributes to ensure the website is accessible to all users.


## Technical Implementations

### 1. Lazy Loading with Intersection Observer
- **Feature**: Implemented lazy loading for images using the Intersection Observer API to improve performance and enhance user experience. This approach ensures that images are loaded only when they come into the viewport, significantly reducing initial load time.

### 2. Modal Management
- **Feature**: Developed a dynamic modal system for displaying detailed product information. The modals are opened through JavaScript event listeners and include:
  - Closing functionality through a close button or clicking outside the modal on the overlay.
  - Smooth transition effects when opening and closing modals.

### 3. Form Validation and Submission
- **Feature**: Integrated a contact form that captures user inquiries with client-side validation to ensure all required fields are filled out correctly. Upon submission:
  - Utilized the Fetch API to send data to the Web3Forms API.
  - Handled success and error responses with appropriate user feedback displayed in modals.

### 4. Smooth Scrolling Navigation
- **Feature**: Implemented smooth scrolling for navigation links, enhancing user experience by providing a seamless transition between sections of the page. This was achieved using `scrollIntoView()` with smooth behavior settings.

### 5. Responsive Design with CSS Flexbox and Grid
- **Feature**: Used CSS Flexbox and Grid to create a responsive layout that adapts to various device sizes. This ensures that the product cards, navigation menus, and overall layout maintain a user-friendly interface across all platforms.

### 6. Accordion FAQ Section
- **Feature**: Designed an accordion feature for the FAQ section, allowing users to expand and collapse answers to questions. This implementation provides a cleaner and more organized presentation of information.

### 7. Dynamic Year Update
- **Feature**: Added a dynamic year display in the footer that updates automatically based on the current date, enhancing the professionalism and relevance of the website.

### 8. Accessibility Features
- **Feature**: Focused on accessibility by implementing semantic HTML elements and ARIA roles. This ensures that the website is usable by individuals with disabilities and adheres to web accessibility standards.

### 9. JavaScript Event Delegation
- **Feature**: Employed event delegation for handling events on dynamically generated product cards. This method optimizes performance by minimizing the number of event listeners in the DOM.

### 10. Error Handling
- **Feature**: Implemented robust error handling throughout the application, including form submissions and network requests. Users receive clear and informative messages for both success and error scenarios, enhancing user experience.

These technical implementations showcase the skills and thoughtful design considerations applied to the Zahret Misr website, making it a professional and user-friendly platform for showcasing agricultural products.
  

## Technologies Used
- HTML
- CSS
- JavaScript
- Intersection Observer API for lazy loading and reveal animations.
- Fetch API for form submissions.

## Setup and Installation

To set up this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/alimagdye/zahret-misr.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd zahret-misr
    ```
3. **Open `index.html` in your preferred browser. You must use live server to open it**.

## Usage

Once the project is set up, open `index.html` in your browser to explore the products and learn more about Zahret Misr. You can also visit the live website at https://alimagdye.github.io/zahret-misr/.

## Contact

Created by Ali Magdy. Feel free to contact me at alimagdye1@gmail.com for any questions or suggestions.

---

Thank you for checking out "Zahret Misr."
