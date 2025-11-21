 
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'primary-blue': '#007AFF', // Used in original nav
                        'dark-bg': '#1f2937',
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    }
                }
            }
        }
    

    // JavaScript to handle the mobile menu toggle and close on link click
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
