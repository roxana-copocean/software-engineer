# Backend Engineer's Portfolio Website

This is a personal portfolio website for a backend engineer, built using React and Sanity as the backend. The website showcases the engineer's skills, work experience, and projects.

## Technologies

- React
- Sanity
- Node-sass
- Framer Motion
- React Icons
- React Tooltip

## Project Structure

The project has the following main directories:

- `assets`: Contains images and other static assets.
- `components`: Contains reusable UI components such as Navbar, NavigationDots, and SocialMedia.
- `constants`: Exports images as an object, allowing for easy access to assets.
- `containers`: Holds the main sections of the website, including About, Footer, Header, Skills, and Work.
- `wrapper`: Contains AppWrap and MotionWrap components for wrapping other components with consistent styling and behavior.

## Usage

After setting up the project, you can navigate through the website to see the different sections:

- Header: displays an introduction to the backend engineer, including their name, role, and expertise. It features animated elements using Framer Motion to create a visually engaging experience.
- About: The `About` container provides an overview of the backend engineer's experience and expertise. It fetches data from Sanity to display information about the engineer and provides a link to their resume. The component uses Framer Motion for animations and hover effects.
- Skills: it showcases the backend engineer's key skills and professional experience. It uses Framer Motion for animations, and React Tooltip to provide more information on each experience item.
- Work: it displays the backend engineer's background experience and portfolio, including projects from different companies. It features interactive filters for each company, Framer Motion animations, and download links for the project files.

- Footer: it is designed to allow users to get in touch with the backend engineer by sending a message. It features a simple contact form along with contact information such as email and phone number.

## Website Screenshots

Here are some screenshots of the website:

### Home

![Home](/frontend_react_bogdan/src/assets/github/home.jpg)

### Experience

![Experience](/frontend_react_bogdan/src/assets/github/experience.jpg)

### Contact Form

![Contact Form](/frontend_react_bogdan/src/assets/github/form.jpg)


