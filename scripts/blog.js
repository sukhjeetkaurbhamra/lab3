/*
 * blog.js
 * Blog JavaScript file for WEBD 6201 Lab 3
 * Author: Sukhjeet Kaur
 * Student ID: 100923006
 * Date Completed: 30/03/2025
 */

/**
 * IIFE - Immediately Invoked Function Expression for Blog functionality
 */
(function() {
    // Pixabay API key
    const PIXABAY_API_KEY = "49608506-b0d41e197c930123272ba8896";
    const POSTS_PER_PAGE = 20;
    
    // Array of blog post titles (English)
    const blogTitles = [
        "Getting Started with Web Development",
        "The Future of JavaScript Frameworks",
        "Understanding CSS Grid Layout",
        "Responsive Design Best Practices",
        "Mastering JavaScript Promises",
        "Introduction to TypeScript",
        "Web Development Tools You Should Know",
        "Creating Accessible Websites",
        "The Importance of Web Performance",
        "Frontend vs Backend Development",
        "HTML5 Features You Should Be Using",
        "CSS Tricks for Better Design",
        "JavaScript Error Handling Techniques",
        "Working with REST APIs",
        "User Experience Design Principles",
        "Mobile-First Development Approach",
        "Web Security Best Practices",
        "Using CSS Variables Effectively",
        "The Rise of Progressive Web Apps",
        "Modern JavaScript Features Explained"
    ];
    
    // Array of blog post content snippets (English)
    const blogContents = [
        "Web development has evolved tremendously over the past decade. From simple static HTML pages to complex, interactive applications, the journey has been remarkable. This article explores the fundamentals of web development and provides helpful resources for beginners.",
        "JavaScript frameworks continue to evolve rapidly. React, Angular, and Vue are currently leading the market, but new alternatives are emerging. This post examines current trends and predicts what the future might hold for JS frameworks.",
        "CSS Grid Layout provides a powerful two-dimensional system for creating complex layouts. This tutorial walks through the basics of Grid and shows how it can be used to create responsive designs without media queries.",
        "Responsive design is more important than ever with the variety of devices used to access websites. This article covers essential responsive design principles and techniques for creating websites that work well on any screen size.",
        "JavaScript Promises have revolutionized asynchronous programming. This guide explains how Promises work, how they compare to callbacks, and how to use them effectively in your projects.",
        "TypeScript adds static typing to JavaScript, making it easier to build and maintain large-scale applications. This introduction covers the basics of TypeScript and explains how to set up your first TypeScript project.",
        "The right tools can significantly improve your web development workflow. This roundup covers essential tools for code editing, debugging, testing, and deployment that every web developer should know about.",
        "Web accessibility is often overlooked but is crucial for ensuring websites are usable by everyone. This guide covers WCAG guidelines and practical techniques for making your websites more accessible.",
        "Web performance directly impacts user experience and conversion rates. This article explains key performance metrics, common bottlenecks, and optimization techniques for faster websites.",
        "The distinction between frontend and backend development is fundamental to understanding web development roles. This comparison explores the skills, tools, and responsibilities associated with each specialty.",
        "HTML5 introduced many new elements and APIs that enhance the capabilities of web pages. This overview highlights key HTML5 features that modern developers should be incorporating into their projects.",
        "CSS has evolved significantly, offering powerful styling capabilities. This collection of tips and tricks will help you solve common design challenges and add polish to your web projects.",
        "Proper error handling is essential for robust JavaScript applications. This tutorial covers try/catch blocks, error objects, custom errors, and strategies for graceful error recovery.",
        "REST APIs are the backbone of modern web applications. This guide explains how to work with REST APIs, including making requests, handling responses, and managing authentication.",
        "User experience design focuses on creating products that provide meaningful experiences to users. This article covers key UX principles and methods for improving the usability of your web applications.",
        "Mobile-first development prioritizes designing for mobile devices before scaling up to larger screens. This approach ensures optimal experiences across all devices and is explained in detail here.",
        "Security should be a priority for any web project. This article covers common vulnerabilities and best practices for protecting your websites and user data from security threats.",
        "CSS custom properties (variables) offer new possibilities for creating maintainable stylesheets. This tutorial shows how to use them effectively to simplify theming and responsive design.",
        "Progressive Web Apps combine the best of web and mobile apps. This guide explores PWA features, benefits, and implementation techniques for creating offline-capable web applications.",
        "JavaScript continues to evolve with new features added regularly. This overview explains recent additions to the language and how they can improve your code quality and developer experience."
    ];
    
    /**
     * Fetch blog posts from JSONPlaceholder API
     * @returns {Promise} Promise containing blog posts data
     */
    async function fetchBlogPosts() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            let data = await response.json();
            data = data.slice(0, POSTS_PER_PAGE); // Only get the first 20 posts
            
            // Replace the Latin content with English content
            data.forEach((post, index) => {
                post.title = blogTitles[index % blogTitles.length];
                post.body = blogContents[index % blogContents.length];
            });
            
            return data;
        } catch (error) {
            console.error("Error fetching blog posts:", error);
            return [];
        }
    }
    
/**
 * Fetch a more relevant image from Pixabay API based on post title
 * @param {string} title - Blog post title
 * @returns {Promise} Promise containing image URL
 */
async function fetchPostImage(title) {
    try {
        // Ensure title is valid and not empty
        if (!title || typeof title !== 'string') {
            return fetchDefaultImage();
        }
        
        // Extract meaningful keywords from the title
        const keywords = extractKeywords(title);
        
        // Make API request with proper encoding
        const apiUrl = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(keywords)}&image_type=photo&per_page=3&safesearch=true`;
        
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // If we have images, return a random one from the results
        if (data.hits && data.hits.length > 0) {
            const randomIndex = Math.floor(Math.random() * Math.min(data.hits.length, 3));
            return data.hits[randomIndex].webformatURL;
        } else {
            // If no results, try with a more general keyword from the title
            return fetchDefaultImage();
        }
    } catch (error) {
        console.error("Error fetching image:", error);
        return fetchDefaultImage();
    }
}

/**
 * Extract meaningful keywords from a blog post title
 * @param {string} title - The blog post title
 * @returns {string} Keywords for image search
 */
function extractKeywords(title) {
    // List of non-meaningful words to filter out
    const stopWords = ['a', 'an', 'the', 'and', 'or', 'but', 'of', 'for', 'with', 'in', 'on', 'at', 'to', 'from', 'by'];
    
    // Special cases mapping for better image results
    const keywordMapping = {
        'web development': 'coding',
        'javascript': 'javascript code',
        'css': 'web design',
        'html': 'html code',
        'responsive': 'responsive design',
        'typescript': 'programming',
        'frontend': 'website',
        'backend': 'server',
        'security': 'cybersecurity',
        'performance': 'speed',
        'design': 'web design',
        'user experience': 'ux design',
        'progressive web': 'mobile app',
        'mobile': 'smartphone'
    };
    
    // Check for special keywords in the title
    for (const [key, value] of Object.entries(keywordMapping)) {
        if (title.toLowerCase().includes(key)) {
            return value;
        }
    }
    
    // If no special keywords found, get meaningful words from title
    const words = title.toLowerCase().split(' ');
    const filteredWords = words.filter(word => !stopWords.includes(word) && word.length > 3);
    
    // If we have meaningful words, use the first one
    if (filteredWords.length > 0) {
        return filteredWords[0];
    }
    
    // Default fallback
    return 'technology';
}

/**
 * Fetch a default technology-related image
 * @returns {Promise} Promise containing image URL
 */
async function fetchDefaultImage() {
    try {
        // Array of technology-related search terms
        const techTerms = ['coding', 'technology', 'computer', 'programming', 'web design', 'developer'];
        
        // Pick a random term
        const randomTerm = techTerms[Math.floor(Math.random() * techTerms.length)];
        
        const fallbackResponse = await fetch(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(randomTerm)}&image_type=photo&per_page=10&safesearch=true`);
        
        if (!fallbackResponse.ok) {
            throw new Error(`HTTP error on fallback! Status: ${fallbackResponse.status}`);
        }
        
        const fallbackData = await fallbackResponse.json();
        
        if (fallbackData.hits && fallbackData.hits.length > 0) {
            const randomIndex = Math.floor(Math.random() * Math.min(fallbackData.hits.length, 10));
            return fallbackData.hits[randomIndex].webformatURL;
        } else {
            // Ultimate fallback
            return "https://via.placeholder.com/600x400?text=Technology";
        }
    } catch (error) {
        console.error("Error fetching default image:", error);
        return "https://via.placeholder.com/600x400?text=Technology";
    }
}
    
    /**
     * Create a blog post card element
     * @param {Object} post - Blog post data
     * @param {string} imageUrl - URL of the image for the post
     * @returns {HTMLElement} - Card element containing blog post
     */
    function createBlogPostCard(post, imageUrl) {
        const postElement = document.createElement("div");
        postElement.className = "col-12 col-md-6 col-lg-4 mb-4 blog-card";
        
        // Generate random reading time between 3-8 minutes
        const readingTime = Math.floor(Math.random() * 6) + 3;
        
        // Create a short excerpt from the body
        const excerpt = post.body.length > 150 ? 
            post.body.substring(0, 150) + '...' : 
            post.body;
        
        // Create card content
        postElement.innerHTML = `
            <div class="card h-100 shadow-sm border-0">
                <img src="${imageUrl}" class="card-img-top blog-card-img" alt="Image for ${post.title}">
                <div class="card-body">
                    <h5 class="card-title blog-card-title">${post.title}</h5>
                    <p class="card-text blog-card-text">${excerpt}</p>
                </div>
                <div class="card-footer bg-transparent border-top-0">
                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted"><i class="fas fa-user-circle me-1"></i> Author ${post.userId}</small>
                        <small class="text-muted"><i class="fas fa-clock me-1"></i> ${readingTime} min read</small>
                    </div>
                </div>
            </div>
        `;
        
        return postElement;
    }
    
    /**
     * Render blog posts to the page
     */
    async function renderBlogPosts() {
        const blogContainer = document.getElementById("blogContainer");
        const loadingSpinner = document.getElementById("loadingSpinner");
        
        try {
            // Show loading spinner
            loadingSpinner.style.display = "block";
            
            // Fetch blog posts
            const posts = await fetchBlogPosts();
            
            // Clear blog container
            blogContainer.innerHTML = "";
            
            if (posts.length === 0) {
                blogContainer.innerHTML = `
                    <div class="alert alert-warning" role="alert">
                        <i class="fas fa-exclamation-circle me-2"></i>
                        No blog posts found. Please try again later.
                    </div>
                `;
                loadingSpinner.style.display = "none";
                return;
            }
            
            // Create a row for flexbox layout
            const row = document.createElement("div");
            row.className = "row g-4";
            
            // Process each post
            for (const post of posts) {
                try {
                    // Fetch image for post - use title as search term
                    const imageUrl = await fetchPostImage(post.title);
                    
                    // Create blog post card
                    const postElement = createBlogPostCard(post, imageUrl);
                    
                    // Add to row
                    row.appendChild(postElement);
                } catch (error) {
                    console.error(`Error processing post ${post.id}:`, error);
                    // Continue with next post even if one fails
                }
            }
            
            // Add row to container
            blogContainer.appendChild(row);
            
            // Hide loading spinner
            loadingSpinner.style.display = "none";
        } catch (error) {
            console.error("Error rendering blog posts:", error);
            
            // Hide loading spinner
            loadingSpinner.style.display = "none";
            
            // Show error message
            blogContainer.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    <i class="fas fa-exclamation-circle me-2"></i>
                    Error loading blog posts. Please try again later.
                </div>
            `;
        }
    }
    
    /**
     * Initialize blog page
     */
    function init() {
        console.log("Blog page initialized");
        renderBlogPosts();
    }
    
    // Initialize blog when DOM is loaded
    window.addEventListener("DOMContentLoaded", init);
})();