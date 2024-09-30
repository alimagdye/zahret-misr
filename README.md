# Zahret Misr Website

## Overview

Welcome to the Zahret Misr website, a single-page application designed to showcase and export high-quality Egyptian agricultural products. The project focuses on providing an engaging user experience with modern web development practices.

## Table of Contents

1. [Overview](#Overview)
2. [Technologies Used](#technologies-used)
3. [Features and Technical Implementations](#Features-and-Technical-Implementations)
5. [Setup and Installation](#setup-and-installation)
6. [Usage](#usage)
7. [Contact](#contact)

## Technologies Used
- HTML
- CSS
- JavaScript
- Intersection Observer API for lazy loading and reveal animations.
- Fetch API for form submissions.

## Features and Technical Implementations

### 1. Responsive Design
- The website is fully responsive, adapting seamlessly to various screen sizes, including mobile devices and desktops. CSS Flexbox and Grid are utilized to create a user-friendly interface.

### 2. Product Cards
- Displays a grid of product cards for Fresh Fruits and Fresh Vegetables, each containing:
  - Product image with lazy loading for improved performance, implemented using the Intersection Observer API.
  - Product name and details overlay.
  - Clickable cards that open a modal with detailed information, which includes smooth transition effects.

### 3. Modal for Product Details
- Each product card opens a modal displaying:
  - High-quality product image.
  - Product description, packing options, export months, and shipping options.
  - A "Contact Us" button for inquiries, with well-structured modal management allowing users to close the modal through a close button or clicking outside on the overlay.

### 4. Smooth Scrolling Navigation
- Smooth scrolling to sections enhances navigation, providing seamless transitions between sections, implemented using `scrollIntoView()`.

### 5. Accordion for FAQ Section
- An accordion feature for expanding and collapsing frequently asked questions, allowing for a cleaner presentation of information.

### 6. Form Submission
- A functional contact form with:
  - Client-side validation and error handling to ensure all required fields are filled out correctly.
  - Integration with the Web3Forms API for handling submissions, displaying user feedback through modals for both success and error responses.

### 7. Dynamic Year Display
- Automatically updates the footer with the current year for a professional touch, enhancing the relevance of the website.

### 8. Accessible Navigation
- Uses semantic HTML and ARIA attributes to ensure the website is accessible to all users, adhering to web accessibility standards.

### 9. JavaScript Event Delegation
- Employed event delegation for handling events on dynamically generated product cards, optimizing performance by minimizing the number of event listeners.

### 10. Error Handling
- Implemented robust error handling throughout the application, providing clear and informative messages for both success and error scenarios.

### 11. Deployment
- **GitHub Pages Deployment**: Since the original website wasn't published on their domain yet, I created a demo version using GitHub Pages, allowing users to explore the website's features without any setup requirements.


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

Thank you for checking out my project "Zahret Misr."
