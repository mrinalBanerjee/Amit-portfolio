// Selecting all necessary elements
const nav = document.querySelector("nav");
const scrollBtn = document.querySelector(".scroll-button a");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const menu = document.querySelector(".menu");

// --- 1. Sticky Navbar & Scroll-to-Top Logic ---
window.onscroll = () => {
    // Check if the scroll position is more than 20px from the top
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // Add the 'sticky' class to the navbar
        nav.classList.add("sticky");
        // Make the scroll button visible
        scrollBtn.style.display = "block";
    } else {
        // Remove the 'sticky' class
        nav.classList.remove("sticky");
        // Hide the scroll button
        scrollBtn.style.display = "none";
    }
}

// --- 2. Mobile Menu Toggle Logic ---
menuBtn.onclick = () => {
    // Add 'active' class to navbar for menu slide-in
    nav.querySelector(".navbar").classList.add("active");
    // Disable the main scrollbar when menu is open (optional, but good UX)
    document.body.style.overflow = "hidden";
}

cancelBtn.onclick = () => {
    // Remove 'active' class to slide menu out
    nav.querySelector(".navbar").classList.remove("active");
    // Re-enable page scrolling
    document.body.style.overflow = "auto";
}

// --- 3. Close Menu when a link is clicked ---
// Select all menu links
const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Only run if the mobile menu is active
        if (nav.querySelector(".navbar").classList.contains("active")) {
            // Close the menu
            nav.querySelector(".navbar").classList.remove("active");
            // Re-enable page scrolling
            document.body.style.overflow = "auto";
        }
    });
});