// DOM elements
const navItems = document.querySelectorAll('.pill-nav__item');
const sections = document.querySelectorAll('.section');

// Navigation functionality
function initNavigation() {
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      switchSection(targetId);
      setActiveTab(this);
    });
  });
}

// Switch between sections
function switchSection(targetId) {
  // Hide all sections
  sections.forEach(section => {
    section.classList.add('hidden');
  });
  
  // Show target section
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.classList.remove('hidden');
    
    // Add fade-in effect
    targetSection.style.opacity = '0';
    setTimeout(() => {
      targetSection.style.opacity = '1';
    }, 50);
  }
}

// Set active tab
function setActiveTab(activeItem) {
  // Remove active class from all items
  navItems.forEach(item => {
    item.classList.remove('active');
  });
  
  // Add active class to clicked item
  activeItem.classList.add('active');
}

// Smooth scroll to top when switching sections
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Enhanced section switching with scroll
function switchSectionWithScroll(targetId) {
  switchSection(targetId);
  scrollToTop();
}

// Update navigation to include scroll
function initEnhancedNavigation() {
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      switchSectionWithScroll(targetId);
      setActiveTab(this);
    });
  });
}

// Card hover effects
function initCardEffects() {
  const cards = document.querySelectorAll('.card-glass');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// Intersection Observer for scroll-based navigation
function initScrollNavigation() {
  const options = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        const correspondingNavItem = document.querySelector(`[data-target="${sectionId}"]`);
        if (correspondingNavItem) {
          setActiveTab(correspondingNavItem);
        }
      }
    });
  }, options);
  
  // Only observe visible sections
  sections.forEach(section => {
    if (!section.classList.contains('hidden')) {
      observer.observe(section);
    }
  });
}

// Keyboard navigation
function initKeyboardNavigation() {
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab' && event.shiftKey) {
      // Handle shift+tab if needed
      return;
    }
    
    // Handle arrow key navigation
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      const activeTab = document.querySelector('.pill-nav__item.active');
      const activeIndex = Array.from(navItems).indexOf(activeTab);
      
      let newIndex;
      if (event.key === 'ArrowLeft') {
        newIndex = activeIndex > 0 ? activeIndex - 1 : navItems.length - 1;
      } else {
        newIndex = activeIndex < navItems.length - 1 ? activeIndex + 1 : 0;
      }
      
      const newTab = navItems[newIndex];
      const targetId = newTab.getAttribute('data-target');
      switchSectionWithScroll(targetId);
      setActiveTab(newTab);
      newTab.focus();
    }
  });
}

// Performance optimization: Preload images
function preloadImages() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => {
    imageObserver.observe(img);
  });
}

// Add smooth transitions to sections
function initSectionTransitions() {
  sections.forEach(section => {
    section.style.transition = 'opacity 0.5s ease-in-out';
  });
}

// Initialize all functionality
function init() {
  initEnhancedNavigation();
  initCardEffects();
  initKeyboardNavigation();
  initSectionTransitions();
  preloadImages();
  
  // Set initial state
  const homeSection = document.getElementById('home-section');
  if (homeSection) {
    homeSection.classList.remove('hidden');
    homeSection.style.opacity = '1';
  }
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

// Handle window resize for responsive behavior
window.addEventListener('resize', function() {
  // Recalculate any position-dependent elements if needed
  clearTimeout(this.resizeTimer);
  this.resizeTimer = setTimeout(function() {
    // Any resize-specific logic can go here
  }, 250);
});

// Add loading state management
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});

// Export functions for potential external use
window.GlassMorphApp = {
  switchSection: switchSectionWithScroll,
  setActiveTab: setActiveTab,
  init: init
};