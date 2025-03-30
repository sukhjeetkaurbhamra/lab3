# WEBD 6201 - Lab 3: AJAX & Fetch API

## Author Information
- **Name:** Sukhjeet Kaur
- **Student ID:** 100923006
- **Date Completed:** March 30, 2025

## Project Description
This project is a portfolio website that demonstrates the use of AJAX and Fetch API to create a dynamic blog page. The blog content is retrieved from JSONPlaceholder API, and images are fetched from Pixabay API. The website uses modern web technologies including HTML5, CSS3, JavaScript, jQuery, and Bootstrap.

## Features
- **Dynamic Blog Page** - Fetches and displays blog posts from an external API
- **Responsive Design** - Uses Bootstrap and Flexbox for a mobile-friendly layout
- **Image Integration** - Each blog post includes a relevant image from Pixabay
- **Form Validation** - Login and registration forms with jQuery validation
- **Error Handling** - Proper error handling for API calls

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- jQuery
- Bootstrap 5
- Font Awesome
- Fetch API
- JSONPlaceholder API
- Pixabay API

## Project Structure
```
project-root/
│
├── images/              # Image assets for the website
│
├── node_modules/        # Dependencies (not included in repository)
│
├── scripts/
│   ├── app.js           # Main JavaScript file
│   └── blog.js          # Blog functionality JavaScript
│
├── style/
│   └── style.css        # CSS styling
│
├── about.html           # About page
├── blog.html            # Blog page with dynamic content
├── contact.html         # Contact page
├── hr.html              # Human Resources page
├── index.html           # Home page
├── login.html           # Login page
├── products.html        # Products/Interests page
├── register.html        # Registration page
├── services.html        # Services page
│
├── package.json         # Project dependencies
├── package-lock.json    # Dependency lock file
└── README.md            # Project documentation
```

## Setup Instructions
1. Clone this repository
2. Run `npm install` to install dependencies
3. Open the project in your preferred code editor
4. If needed, replace the Pixabay API key in blog.js with your own key
5. Open index.html in a web browser to view the website

## API Integration
- **JSONPlaceholder API** - Used to fetch blog post data (titles and content)
- **Pixabay API** - Used to fetch relevant images for each blog post

## Responsive Design
The website is fully responsive and works on devices of all sizes, from mobile phones to desktop computers. This is achieved through:
- Bootstrap's responsive grid system
- Flexbox layout for the blog posts
- Media queries for custom styling at different breakpoints

## Lab Requirements Fulfilled
1. **Project Structure** - Created blog.html and blog.js files as required
2. **API Call with Fetch** - Implemented Fetch API calls to JSONPlaceholder and Pixabay
3. **Bootstrap Card Layout** - Each blog post uses a Bootstrap card component
4. **Flexbox Properties** - Used Flexbox for responsive layout
5. **Documentation** - Added comprehensive comments and documentation

## Future Improvements
- Add pagination for blog posts
- Implement a search functionality
- Create individual blog post pages
- Add categories and tags for blog posts
- Implement a comment system

## License
This project is created for educational purposes as part of the WEBD 6201 course.