# Zahret Misr Website

## Overview

Welcome to the Zahret Misr website, a single-page application designed to showcase and export high-quality Egyptian agricultural products. The project focuses on providing an engaging user experience with modern web development practices.

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

## Technologies Used
- HTML
- CSS
- JavaScript
- Intersection Observer API for lazy loading and reveal animations.
- Fetch API for form submissions.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
