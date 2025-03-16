/*
 * app.js
 * Main JavaScript file for WEBD 6201 Lab 2
 * Author: Sukhjeet Kaur
 * Student ID: 100923006
 * Date Completed: 16/03/2025
 */

/**
 * User Class
 * Represents a user with firstName, lastName, username, email and password properties
 */
class User {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = firstName.toLowerCase() + lastName.toLowerCase();
        this.email = email;
        this.password = password;
    }
}

/**
 * IIFE - Immediately Invoked Function Expression
 * This ensures all code is protected within this function scope
 */
(function () {
    function loadPageContent() {
        // Home page content
        const homeContent = `
            <div class="home-bg">
                <div class="bg-overlay h-100">
                    <div class="container">
                        <div class="row min-vh-100 align-items-center">
                            <div class="col-12 col-md-8 mx-auto text-center text-white">
                                <h1 class="display-4 fw-bold text-primary mb-4 textShadowWhite">Welcome to My Portfolio</h1>
                                <div class="bg-white text-dark p-4 rounded shadow">
                                    <p class="lead">Hi, I'm Sukhjeet Kaur, a passionate web developer and continuous learner.</p>
                                    <p>I specialize in creating dynamic, responsive web applications using modern technologies.</p>
                                    <hr class="my-4">
                                    <p>Explore my journey through web development, favorite media, and technical projects!</p>
                                    <a class="btn btn-primary btn-lg shadow" href="about.html" role="button">
                                        Learn More About Me
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Products (Interests) page content
        const interestsContent = `
            <div class="container py-5">
                <h1 class="text-center text-primary fw-bold mb-5">My Favorite Media</h1>
                <div class="row g-4">
                    <!-- Inception -->
                    <div class="col-md-4">
                        <div class="card h-100 text-center">
                        <div class="p-4">
                            <img src="./images/inception.png" alt="Inception Movie" class="card-img-top img-fluid">
                        </div>
                            <div class="card-body">
                                <h3 class="card-title h4">Inception</h3>
                                <p class="card-text">
                                    Christopher Nolan's masterpiece that explores the architecture of the mind through dreams 
                                    within dreams. This mind-bending thriller resonates deeply with me as it challenges our 
                                    perception of reality and demonstrates how complex ideas can be woven into compelling narratives. 
                                    The film's exploration of layered thinking and creative problem-solving mirrors my approach to 
                                    programming and web development.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Interstellar -->
                    <div class="col-md-4">
                        <div class="card h-100 text-center">
                        <div class="p-4">
                            <img src="./images/interstellar.png" alt="Interstellar Movie" class="card-img-top">
                        </div>
                            <div class="card-body">
                                <h3 class="card-title h4">Interstellar</h3>
                                <p class="card-text">
                                    Another Nolan masterpiece that transcends space and time. This film particularly moves me 
                                    because it combines cutting-edge science with deep emotional resonance. The themes of 
                                    perseverance, innovation, and the human spirit's limitless potential align perfectly with 
                                    my philosophy in technology and personal growth. The movie's exploration of complex 
                                    theoretical concepts inspires my approach to tackling challenging programming problems.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Atomic Habits -->
                    <div class="col-md-4">
                        <div class="card h-100 text-center">
                        <div class="p-4">
                            <img src="./images/atomic-habits.png" alt="Atomic Habits Book" class="card-img-top">
                        </div>
                            <div class="card-body">
                                <h3 class="card-title h4">Atomic Habits</h3>
                                <p class="card-text">
                                    James Clear's transformative book has revolutionized my approach to learning and skill 
                                    development. Its practical framework for building good habits has been instrumental in my 
                                    programming journey. The book's emphasis on small, consistent improvements rather than 
                                    dramatic changes has helped me maintain steady progress in learning new technologies and 
                                    improving my coding practices.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Services page content
        const servicesContent = `
            <div class="container py-5">
                <h1 class="text-center text-primary fw-bold mb-5">My Services</h1>
                <div class="row g-4">
                    <!-- Web Development -->
                    <div class="col-md-4">
                        <div class="card h-100 text-center">
                            <div class="p-4">
                                <img src="./images/html.png" alt="HTML5" class="card-img-top img-fluid mb-3">
                            </div>
                            <div class="card-body d-flex flex-column">
                                <h3 class="card-title h4">Web Development</h3>
                                <p class="card-text">
                                    Specialized in creating responsive, user-friendly websites using modern technologies.
                                    Proficient in HTML5, CSS3, and JavaScript. Focus on clean, maintainable code and 
                                    optimal user experience.
                                </p>
                                <ul class="list-group list-group-flush mt-3">
                                    <li class="list-group-item">
                                        <i class="fas fa-check text-success me-2"></i>Responsive Design
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fas fa-check text-success me-2"></i>Modern Frameworks
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fas fa-check text-success me-2"></i>Performance Optimization
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Frontend Development -->
                    <div class="col-md-4">
                        <div class="card h-100 text-center">
                            <div class="p-4">
                                <img src="./images/css.png" alt="Frontend Development" class="card-img-top img-fluid mb-3">
                            </div>
                            <div class="card-body d-flex flex-column">
                                <h3 class="card-title h4">Frontend Development</h3>
                                <p class="card-text">
                                    Creating engaging user interfaces with a focus on user experience and interactivity.
                                    Skilled in modern frontend frameworks and responsive design principles.
                                </p>
                                <ul class="list-group list-group-flush mt-3">
                                    <li class="list-group-item">
                                        <i class="fas fa-check text-success me-2"></i>Interactive UIs
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fas fa-check text-success me-2"></i>CSS Animations
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fas fa-check text-success me-2"></i>Cross-browser Compatibility
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Backend Development -->
                    <div class="col-md-4">
                        <div class="card h-100 text-center">
                            <div class="p-4">
                                <img src="./images/nodejs.png" alt="Backend Development" class="card-img-top img-fluid mb-3">
                            </div>
                            <div class="card-body d-flex flex-column">
                                <h3 class="card-title h4">Backend Development</h3>
                                <p class="card-text">
                                    Building robust server-side applications using Node.js and modern backend technologies.
                                    Focus on scalable and maintainable solutions.
                                </p>
                                <ul class="list-group list-group-flush mt-3">
                                    <li class="list-group-item">
                                        <i class="fas fa-check text-success me-2"></i>Node.js Development
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fas fa-check text-success me-2"></i>API Integration
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fas fa-check text-success me-2"></i>Database Management
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Resume Button -->
                <div class="text-center mt-5">
                    <a href="./documents/resume.pdf" class="btn btn-primary btn-lg shadow-sm" target="_blank">
                        <i class="fas fa-file-pdf me-2"></i>View My Resume
                    </a>
                </div>
            </div>
        `;

        // HR page content
        const hrContent = `
        <div class="container py-5">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center text-primary fw-bold mb-5">
                        <i class="fas fa-users me-2"></i>Human Resources
                    </h1>
                </div>
            </div>

            <div class="row g-4">
                <!-- Career Opportunities -->
                <div class="col-md-6">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body">
                            <h2 class="card-title h3 mb-4">
                                <i class="fas fa-briefcase text-primary me-2"></i>Career Opportunities
                            </h2>
                            <p class="card-text">Join our growing team of web development professionals! We're currently seeking talented individuals for the following positions:</p>
                            <ul class="list-group list-group-flush mt-3">
                                <li class="list-group-item">
                                    <i class="fas fa-code text-success me-2"></i>
                                    Frontend Developer
                                    <span class="badge bg-primary float-end">Full-time</span>
                                </li>
                                <li class="list-group-item">
                                    <i class="fas fa-server text-success me-2"></i>
                                    Backend Developer
                                    <span class="badge bg-primary float-end">Full-time</span>
                                </li>
                                <li class="list-group-item">
                                    <i class="fas fa-paint-brush text-success me-2"></i>
                                    UI/UX Designer
                                    <span class="badge bg-info float-end">Contract</span>
                                </li>
                                <li class="list-group-item">
                                    <i class="fas fa-tasks text-success me-2"></i>
                                    Project Manager
                                    <span class="badge bg-primary float-end">Full-time</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Company Benefits -->
                <div class="col-md-6">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body">
                            <h2 class="card-title h3 mb-4">
                                <i class="fas fa-gift text-primary me-2"></i>Company Benefits
                            </h2>
                            <p class="card-text">We offer competitive benefits to support our team members:</p>
                            <ul class="list-group list-group-flush mt-3">
                                <li class="list-group-item">
                                    <i class="fas fa-dollar-sign text-success me-2"></i>
                                    Competitive Salary
                                </li>
                                <li class="list-group-item">
                                    <i class="fas fa-heartbeat text-success me-2"></i>
                                    Health & Dental Coverage
                                </li>
                                <li class="list-group-item">
                                    <i class="fas fa-clock text-success me-2"></i>
                                    Flexible Work Hours
                                </li>
                                <li class="list-group-item">
                                    <i class="fas fa-laptop-house text-success me-2"></i>
                                    Remote Work Options
                                </li>
                                <li class="list-group-item">
                                    <i class="fas fa-graduation-cap text-success me-2"></i>
                                    Professional Development
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Apply Now Section -->
                <div class="col-12 mt-4">
                    <div class="card shadow-sm">
                        <div class="card-body text-center py-4">
                            <h2 class="card-title h3 mb-3">Interested in Joining Our Team?</h2>
                            <p class="card-text mb-4">Send your resume and portfolio to demonstrate your skills and experience.</p>
                            <a href="contact.html" class="btn btn-primary btn-lg">
                                <i class="fas fa-paper-plane me-2"></i>Apply Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        // About page content
        const aboutContent = `
        <div class="container py-5">
            <h1 class="text-center text-primary fw-bold mb-5">About Me</h1>
            <div class="row">
                <!-- Profile Image Section -->
                <div class="col-md-6 text-center mb-4">
                    <img src="./images/profile.png" alt="Sukhjeet Kaur" class="img-fluid h-50 rounded-circle shadow-sm">
                </div>

                <!-- Profile Information Section -->
                <div class="col-md-6">
                    <h2 class="mb-4">Sukhjeet Kaur</h2>
                    <p class="lead">
                        As a passionate web developer, I find immense joy in creating dynamic and responsive web applications.
                        My journey in web development has equipped me with strong foundations in modern web technologies.
                    </p>
                    <p>
                        I am deeply interested in thought-provoking media that challenges conventional thinking and inspires 
                        creative problem-solving approaches. This passion for exploring new ideas extends to my programming 
                        journey, where I constantly seek to learn and implement new technologies.
                    </p>

                    <!-- Technical Skills Section -->
                    <div class="mt-4">
                        <h3 class="mb-3">Technical Skills</h3>
                        <div class="row">
                            <div class="col-md-6">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <i class="fab fa-html5 text-danger me-2"></i>HTML
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fab fa-css3-alt text-primary me-2"></i>CSS
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fab fa-js text-warning me-2"></i>JavaScript
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <i class="fab fa-bootstrap text-purple me-2"></i>Bootstrap
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fas fa-mobile-alt text-success me-2"></i>Responsive Design
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Learning Journey -->
                    <div class="mt-4">
                        <h3 class="mb-3">Learning Journey</h3>
                        <p>
                            My passion for learning extends beyond formal education. I constantly challenge myself 
                            to master new programming concepts and technologies. This drive for continuous improvement 
                            helps me stay current with the latest web development trends and best practices.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        `;


        // Get current page and inject appropriate content
        const path = window.location.pathname;
        const mainContent = document.querySelector('main');

        if (path.includes('index.html') || path === '/') {
            mainContent.innerHTML = homeContent;
        } else if (path.includes('products.html')) {
            mainContent.innerHTML = interestsContent;
        } else if (path.includes('services.html')) {
            mainContent.innerHTML = servicesContent;
        } else if (path.includes('about.html')) {
            mainContent.innerHTML = aboutContent;
        } else if (path.includes('hr.html')) {
            mainContent.innerHTML = hrContent;
        }
    }

    /**
    * Update navigation elements
    * This handles both the regular navigation updates and login status
    */
    function updateNavigation() {
        // Get navigation bar
        const navbar = document.querySelector(".navbar-nav");
        if (!navbar) return;

        // Change Products to Interests
        const productsLink = document.querySelector('a[href*="products"]');
        if (productsLink) {
            productsLink.innerHTML = '<i class="fas fa-project-diagram"></i> Interests';
        }

        // Add Human Resources link
        const aboutLink = document.querySelector('a[href*="about"]');
        const contactLink = document.querySelector('a[href*="contact"]');
        if (aboutLink && contactLink) {
            const hrLink = document.createElement('li');
            hrLink.className = 'nav-item';
            hrLink.innerHTML = `
            <a class="nav-link px-3" href="hr.html">
                <i class="fas fa-users"></i> Human Resources
            </a>
        `;
            contactLink.parentElement.parentNode.insertBefore(hrLink, contactLink.parentElement);
        }

        // Check for login status and update navigation accordingly
        const isLoggedIn = sessionStorage.getItem("isLoggedIn");
        const username = sessionStorage.getItem("username");

        if (isLoggedIn === "true" && username) {
            // Find login link
            const loginLink = document.querySelector('a[href*="login"]');
            if (loginLink && loginLink.textContent.includes('Login')) {
                // Create username element if it doesn't exist
                if (!document.getElementById('userInfo')) {
                    const userInfoLi = document.createElement('li');
                    userInfoLi.className = 'nav-item';
                    userInfoLi.innerHTML = `
                    <span id="userInfo" class="nav-link navbar-text px-3">
                        <i class="fas fa-user"></i> ${username}
                    </span>
                `;

                    // Insert before login link
                    loginLink.parentElement.parentNode.insertBefore(userInfoLi, loginLink.parentElement);
                }

                // Change login to logout
                loginLink.innerHTML = '<i class="fas fa-sign-out-alt"></i> Logout';
                loginLink.href = '#';
                loginLink.id = 'logout';

                // Add logout handler
                loginLink.addEventListener('click', function (e) {
                    e.preventDefault();
                    sessionStorage.removeItem('isLoggedIn');
                    sessionStorage.removeItem('username');
                    window.location.href = 'login.html';
                });
            }
        }
    }

    /**
     * Create bottom navbar with copyright
     */
    function createBottomNavbar() {
        const bottomNav = document.createElement('nav');
        bottomNav.className = 'navbar fixed-bottom navbar-light bg-light';
        const currentDate = new Date();
        const dateString = currentDate.toLocaleDateString();
        bottomNav.innerHTML = `
            <div class="container-fluid">
                <span class="navbar-text">
                    © ${dateString} | WEBD 6201 Student. All rights reserved.
                </span>
            </div>
        `;
        document.body.appendChild(bottomNav);
    }

    /**
 * Handle login form validation and submission
 */
    function setupLoginForm() {
        const loginForm = $("#loginForm");

        if (loginForm.length > 0) {
            // Handle login form submission
            loginForm.on("submit", function (event) {
                event.preventDefault();

                const username = $("#username").val();
                const password = $("#password").val();

                if (!username || !password) {
                    showNotification("Login Error", "Please enter both username and password.");
                    return;
                }

                // Check if user exists in sessionStorage (from registration)
                const registeredUsers = JSON.parse(sessionStorage.getItem("registeredUsers") || "[]");
                const user = registeredUsers.find(u => u.username === username && u.password === password);

                if (user) {
                    // Login successful
                    sessionStorage.setItem("username", username);
                    sessionStorage.setItem("isLoggedIn", "true");

                    // Show success notification
                    showNotification("Login Successful", "You have been logged in successfully.");

                    // Redirect to index page after successful login
                    setTimeout(function () {
                        window.location.href = "index.html";
                    }, 2000);
                } else {
                    // Login failed
                    showNotification("Login Failed", "Invalid username or password. Please try again.");
                }
            });
        }
    }

    /**
     * Handle register form validation and submission
     */
    function setupRegisterForm() {
        const registerForm = $("#registerForm");
        const errorMessageDiv = $("#ErrorMessage");

        if (registerForm.length > 0) {
            // Form validation functions
            function validateFirstName() {
                const firstName = $("#firstName").val();
                if (firstName.length < 2) {
                    errorMessageDiv.text("First Name must be at least 2 characters long").show();
                    return false;
                }
                errorMessageDiv.hide();
                return true;
            }

            function validateLastName() {
                const lastName = $("#lastName").val();
                if (lastName.length < 2) {
                    errorMessageDiv.text("Last Name must be at least 2 characters long").show();
                    return false;
                }
                errorMessageDiv.hide();
                return true;
            }

            function validateEmail() {
                const email = $("#email").val();
                if (email.length < 8 || !email.includes("@")) {
                    errorMessageDiv.text("Email must be at least 8 characters long and include an @ symbol").show();
                    return false;
                }
                errorMessageDiv.hide();
                return true;
            }

            function validatePassword() {
                const password = $("#password").val();
                const confirmPassword = $("#confirmPassword").val();

                if (password.length < 6) {
                    errorMessageDiv.text("Password must be at least 6 characters long").show();
                    return false;
                }

                if (password !== confirmPassword) {
                    errorMessageDiv.text("Passwords do not match").show();
                    return false;
                }

                errorMessageDiv.hide();
                return true;
            }

            // Attach event listeners to form elements
            $("#firstName").on("blur", validateFirstName);
            $("#lastName").on("blur", validateLastName);
            $("#email").on("blur", validateEmail);
            $("#password, #confirmPassword").on("blur", validatePassword);

            // Handle form submission
            registerForm.on("submit", function (event) {
                event.preventDefault();

                // Validate all fields
                const isFirstNameValid = validateFirstName();
                const isLastNameValid = validateLastName();
                const isEmailValid = validateEmail();
                const isPasswordValid = validatePassword();

                // If all validations pass
                if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid) {
                    // Create User instance
                    const user = new User(
                        $("#firstName").val(),
                        $("#lastName").val(),
                        $("#email").val(),
                        $("#password").val()
                    );

                    // Log user object to console
                    console.log("User Created:", user);

                    // Store the user in sessionStorage for login validation
                    // Get existing users or initialize empty array
                    const registeredUsers = JSON.parse(sessionStorage.getItem("registeredUsers") || "[]");

                    // Add new user
                    registeredUsers.push(user);

                    // Save back to sessionStorage
                    sessionStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

                    // Clear the form
                    registerForm[0].reset();

                    // Show success message with username using custom notification
                    showNotification(
                        "Registration Successful",
                        `Your account has been created! Your username is "<span class="text-primary fw-bold">${user.username}</span>". You will be redirected to the login page.`
                    );

                    // Hide error message div if it was showing
                    errorMessageDiv.hide();

                    // Redirect to login page after 5 seconds
                    setTimeout(function () {
                        window.location.href = "login.html";
                    }, 5000);
                }
            });
        }
    }

    /**
     * Create and show a custom notification modal
     * @param {string} title - The title of the notification
     * @param {string} message - The message to display
     */
    function showNotification(title, message) {
        // Create modal elements
        const modalId = "customNotification";
        const modalHtml = `
                <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}Label" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header bg-primary text-white">
                                <h5 class="modal-title" id="${modalId}Label">${title}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>${message}</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

        // Remove any existing modal
        $("#" + modalId).remove();

        // Append to body
        $("body").append(modalHtml);

        // Create and show the Bootstrap modal
        const modal = new bootstrap.Modal(document.getElementById(modalId));
        modal.show();

        // Auto-hide after 2 seconds
        setTimeout(function () {
            modal.hide();
        }, 3000);
    }


    function checkLoginStatus() {
        // Check if user is logged in
        const isLoggedIn = sessionStorage.getItem("isLoggedIn");
        const username = sessionStorage.getItem("username");

        if (isLoggedIn === "true" && username) {
            // Get all navigation items
            const navLinks = document.querySelectorAll(".navbar-nav a");

            // Find the login and contact links
            let loginLink = null;
            let contactLi = null;

            navLinks.forEach(link => {
                const text = link.innerText.trim();
                if (text.includes("Login")) {
                    loginLink = link;
                }
                if (text.includes("Contact Us")) {
                    contactLi = link.parentElement;
                }
            });

            // If login link found, modify it
            if (loginLink) {
                // Add username after contact us if not already present
                if (contactLi && !document.getElementById("userInfo")) {
                    const userEl = document.createElement("li");
                    userEl.className = "nav-item";
                    userEl.innerHTML = `
                        <span id="userInfo" class="nav-link navbar-text px-3">
                            <i class="fas fa-user"></i> ${username}
                        </span>
                    `;
                    contactLi.after(userEl);
                }

                // Change login to logout
                loginLink.innerHTML = '<i class="fas fa-sign-out-alt"></i> Logout';
                loginLink.href = "#";
                loginLink.id = "logout";

                // Add logout click handler
                loginLink.onclick = function (e) {
                    e.preventDefault();
                    sessionStorage.removeItem("isLoggedIn");
                    sessionStorage.removeItem("username");
                    window.location.href = "login.html";
                };
            }
        }
    }

    /**
     * Handle contact form submission
     */
    function setupContactForm() {
        const contactForm = document.querySelector('#contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();

                // Get form data
                const formData = {
                    name: contactForm.querySelector('#name').value,
                    email: contactForm.querySelector('#email').value,
                    phone: contactForm.querySelector('#phone').value,
                    message: contactForm.querySelector('#message').value
                };

                // Log form data to console
                console.log('Form Data:', formData);

                // Redirect after 3 seconds
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 3000);
            });
        }
    }

    // Wait for DOM to be fully loaded before executing
    function Start() {
        loadPageContent();
        updateNavigation();
        createBottomNavbar();
        setupContactForm();
        setupLoginForm();
        checkLoginStatus();
        setupRegisterForm();
    }

    window.addEventListener('load', Start);
})();