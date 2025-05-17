// Add at the beginning of the script
if (document.querySelector('.mobile-nav-toggle')) {
  document.querySelector('.mobile-nav-toggle').remove();
}
if (document.querySelector('.mobile-nav')) {
  document.querySelector('.mobile-nav').remove();
}
// Mobile Navigation Script for KN Graphic Menara
document.addEventListener('DOMContentLoaded', function() {
    // Get the current page URL to determine active link
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';
    
    // Create mobile navigation toggle button
    const mobileNavToggle = document.createElement('button');
    mobileNavToggle.className = 'mobile-nav-toggle';
    mobileNavToggle.innerHTML = '☰';
    document.body.appendChild(mobileNavToggle);
    
    // Create mobile navigation menu
    const mobileNav = document.createElement('div');
    mobileNav.className = 'mobile-nav';
    
    // Add navigation links
    const navLinks = [
      { href: 'home.html', text: 'Accueil' },
      { href: 'services.html', text: 'Services' },
      { href: 'portfolio.html', text: 'Portfolio' },
      { href: 'aboutus.html', text: 'À propos' },
      { href: 'contactus.html', text: 'Contact' }
    ];
    
    navLinks.forEach(link => {
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.text;
      if (currentPage === link.href) {
        a.className = 'active';
      }
      mobileNav.appendChild(a);
    });
    
    document.body.appendChild(mobileNav);
    
    // Toggle mobile navigation
    mobileNavToggle.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
      mobileNavToggle.innerHTML = mobileNav.classList.contains('active') ? '✕' : '☰';
    });
    
    // Close mobile navigation when clicking outside
    document.addEventListener('click', function(event) {
      if (!mobileNav.contains(event.target) && event.target !== mobileNavToggle) {
        mobileNav.classList.remove('active');
        mobileNavToggle.innerHTML = '☰';
      }
    });
    
    // Responsive image handling
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" for performance
      img.setAttribute('loading', 'lazy');
      
      // Make sure images don't break layout
      img.addEventListener('error', function() {
        this.style.display = 'none';
      });
    });
    
    // Enhancement for SVG navigation on desktop
    if (window.innerWidth > 768) {
      document.querySelectorAll('svg a').forEach(link => {
        // Improve hover effects
        link.addEventListener('mouseenter', function() {
          const navItem = this.querySelector('.nav-item');
          const underline = this.querySelector('.nav-underline');
          
          if (navItem && !this.querySelector('.active-nav')) {
            navItem.setAttribute('fill', '#0057A8');
          }
          
          if (underline && !this.querySelector('.active-nav')) {
            underline.style.opacity = '1';
          }
        });
        
        link.addEventListener('mouseleave', function() {
          const navItem = this.querySelector('.nav-item');
          const underline = this.querySelector('.nav-underline');
          
          if (navItem && !this.querySelector('.active-nav')) {
            navItem.setAttribute('fill', '#000000');
          }
          
          if (underline && !this.querySelector('.active-nav')) {
            underline.style.opacity = '0';
          }
        });
      });
    }
    
    // Fix scroll issues on smaller screens
    window.addEventListener('resize', function() {
      if (window.innerWidth <= 768) {
        document.body.style.paddingTop = '0px';
        document.body.style.paddingBottom = '0px';
      } else {
        document.body.style.paddingTop = '0';
      }
    });
    
    // Trigger resize event once to set initial state
    window.dispatchEvent(new Event('resize'));
  });
  // Function to check if the screen is in mobile mode
function isMobile() {
    return window.matchMedia("(max-width: 768px)").matches;
}

// Function to handle the navigation visibility
function handleNavVisibility() {
    const svg = document.querySelector('svg[viewBox="0 0 1200 100"]');
    if (!svg) return;

    // Always keep the logo visible
    const logo = svg.querySelector('.logo');
    if (logo) logo.style.display = 'block';

    if (isMobile()) {
        // Hide all navigation items (text and underlines)
        const navItems = svg.querySelectorAll('.nav-item-container');
        navItems.forEach(item => {
            item.style.display = 'none';
        });
    } else {
        // Show all navigation items
        const navItems = svg.querySelectorAll('.nav-item-container');
        navItems.forEach(item => {
            item.style.display = 'block';
        });
    }
}

// Run on load and when window is resized
window.addEventListener('load', handleNavVisibility);
window.addEventListener('resize', handleNavVisibility);
  