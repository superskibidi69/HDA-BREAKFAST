   // Menu item data with nutrition facts
    const menuItems = {
      "bacon": {
        "calories": 130,
        "servingSize": "3 strips",
        "time": "12 minutes"
      },
      "french-toast": {
        "calories": 190,
        "servingSize": "3 slices",
        "time": "14 minutes"
      },
      "hash-browns": {
        "calories": 165,
        "servingSize": "4 pieces",
        "time": "9 minutes"
      },
      "sunny-side-up": {
        "calories": 70,
        "servingSize": "1 egg",
        "time": "3 minutes"
      },
      "waffles": {
        "calories": 218,
        "servingSize": "3 waffles",
        "time": "7 minutes"
      },
      "pancakes": {
        "calories": 250,
        "servingSize": "3 pancakes",
        "time": "9 minutes"
      },
      "yogurt": {
        "calories": 150,
        "servingSize": "1 cup",
        "time": "6 minutes"
      },
      "chocolate-milk": {
        "calories": 197,
        "servingSize": "1 cup",
        "time": "3 minutes"
      },
       "milk": {
        "calories": 67,
        "servingSize": "1 cup",
        "time": "2 minutes"
      },
        "smoothie": {
         "calories": 75,
         "servingSize": "1 cup",
         "time": "2 minutes"
      },
      "icelandic-water": {
        "calories": 0,
        "servingSize": "1 bottle",
        "time": "30 seconds"
      },
      "orange-juice": {
        "calories": 90,
        "servingSize": "1 cup",
        "time": "5 minutes"
      },
      "coffee": {
        "calories": 3,
        "servingSize": "1 cup",
         "time": "4 minutes"
      },
      "fruit-bowl": {
        "calories": 120,
        "servingSize": "1 bowl",
        "time": "3 minutes"
      },
      "oil-stick": {
        "calories": 180,
        "servingSize": "2 sticks",
        "time": "9 minutes"
      },
      "cross": {
        "calories": 204,
        "servingSize": "1 piece",
        "time": "10 minutes"
      },
      "fry-dumpblings-jam":{
        "calories": 158,
        "servingSize": "1 piece",
        "time": "15 minutes"
      },
    };

    document.addEventListener('DOMContentLoaded', function() {
      // Check restaurant hours and update status
      function updateHoursStatus() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const currentTime = hours * 60 + minutes;
        
        const openTime = 6 * 60 + 30; // 6:30 am in minutes
        const closeTime = 10 * 60;    // 10:00 am in minutes
        
        const statusElement = document.getElementById('hours-status');
        
        if (currentTime >= openTime && currentTime < closeTime) {
          statusElement.textContent = 'We are currently open (6:30 AM - 10:00 AM)';
          statusElement.className = 'hours-status open';
        } else {
          statusElement.textContent = 'Sorry, we are closed now (Opens at 6:30 AM)';
          statusElement.className = 'hours-status closed';
        }
      }
      
      // Initial update
      updateHoursStatus();
      
      // Update every minute in case the page stays open
      setInterval(updateHoursStatus, 60000);

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeIn');
            entry.target.style.opacity = 1;
          }
        });
      }, {
        threshold: 0.15
      });

      document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
      });

      // Smooth scrolling for navigation links
      document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navMenu = document.getElementById('nav-menu');
            if (navMenu.classList.contains('active')) {
              navMenu.classList.remove('active');
            }
          }
        });
      });

      // Mobile menu toggle
      const mobileMenu = document.getElementById('mobile-menu');
      const navMenu = document.getElementById('nav-menu');
      
      if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
          navMenu.classList.toggle('active');
        });
      }

      // Make price stickers wiggle on hover
      document.querySelectorAll('.menu-item').forEach(item => {
        const sticker = item.querySelector('.price-sticker');
        
        item.addEventListener('mouseenter', () => {
          sticker.style.transform = 'rotate(' + (Math.random() * 30 - 15) + 'deg) scale(1.1)';
          sticker.style.transition = 'transform 0.2s ease';
        });
        
        item.addEventListener('mouseleave', () => {
          sticker.style.transform = 'rotate(15deg) scale(1)';
        });
      });
      
      // Modal functionality
      const modal = document.getElementById('item-modal');
      const closeModal = document.getElementById('close-modal');
      
      // Close modal when clicking X
      closeModal.addEventListener('click', function() {
        modal.classList.remove('active');
      });
      
      // Close modal when clicking outside content
      modal.addEventListener('click', function(e) {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });
      
      // Close modal with Escape key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
          modal.classList.remove('active');
        }
      });
      
      // Add click handlers to all menu items
      document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function() {
          const itemId = this.getAttribute('data-item');
          const itemData = menuItems[itemId];
          const itemTitle = this.querySelector('h3').textContent;
          const itemPrice = this.querySelector('.price-sticker').textContent;
          const itemImage = this.querySelector('img').src;
          const itemDescription = this.querySelector('p').textContent;
          
          // Populate modal
          document.getElementById('modal-title').textContent = itemTitle;
          document.getElementById('modal-price').textContent = itemPrice;
          document.getElementById('modal-image').src = itemImage;
          document.getElementById('modal-image').alt = itemTitle;
          document.getElementById('modal-description').textContent = itemDescription;
          
          // Populate nutrition facts
          const nutritionContainer = document.getElementById('nutrition-facts');
          nutritionContainer.innerHTML = '';
          
          // Add serving size first
          addNutritionFact(nutritionContainer, 'Serving size', itemData.servingSize);
          
          // Add calories
          addNutritionFact(nutritionContainer, 'Total calories', itemData.calories);
          
          ////others
          addNutritionFact(nutritionContainer, 'Time to prepare and serve', itemData.time);

          modal.classList.add('active');
        });
      });
      // Helper function to add nutrition facts
      function addNutritionFact(container, label, value) {
        const factElement = document.createElement('div');
        factElement.className = 'nutrition-fact';
        
        const labelElement = document.createElement('span');
        labelElement.className = 'nutrition-label';
        labelElement.textContent = label;
        
        const valueElement = document.createElement('span');
        valueElement.className = 'nutrition-value';
        valueElement.textContent = value;
        
        factElement.appendChild(labelElement);
        factElement.appendChild(valueElement);
        container.appendChild(factElement);
      }
      
      // Detect color scheme
      function detectColorScheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
          document.body.classList.add('light-mode');
        } else {
          document.body.classList.add('dark-mode');
        }
        
        // Listen for changes
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
          if (e.matches) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
          } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
          }
        });
      }
      
      detectColorScheme();
    });
// Menu Search Functionality (Name Only)
const menuSearch = document.getElementById('menu-search');
if (menuSearch) {
  menuSearch.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const allMenuItems = document.querySelectorAll('.menu-item');
    const allMenuSections = document.querySelectorAll('.menu-section');

    // Show all if empty
    if (searchTerm === '') {
      allMenuItems.forEach(item => item.classList.remove('hidden'));
      allMenuSections.forEach(section => section.classList.remove('hidden'));
      document.getElementById('no-results-message')?.remove();
      return;
    }

    let hasVisibleItems = false;
    
    allMenuSections.forEach(section => {
      const sectionItems = section.querySelectorAll('.menu-item');
      let sectionHasVisibleItems = false;
      
      sectionItems.forEach(item => {
        const itemName = item.querySelector('h3').textContent.toLowerCase();
        
        if (itemName.includes(searchTerm)) { // Only check name now
          item.classList.remove('hidden');
          sectionHasVisibleItems = true;
        } else {
          item.classList.add('hidden');
        }
      });
      
      if (sectionHasVisibleItems) {
        section.classList.remove('hidden');
        hasVisibleItems = true;
      } else {
        section.classList.add('hidden');
      }
    });

    // No results message
    const noResultsMsg = document.getElementById('no-results-message');
    if (!hasVisibleItems) {
      if (!noResultsMsg) {
        const msg = document.createElement('p');
        msg.id = 'no-results-message';
        msg.textContent = 'No dishes found. Check your spelling, or look for a different dish.';
        msg.style.textAlign = 'center';
        msg.style.margin = '40px 0';
        msg.style.color = 'var(--text-secondary)';
        document.querySelector('.menu').appendChild(msg);
      }
    } else if (noResultsMsg) {
      noResultsMsg.remove();
    }
  });
}
// Updated Food Fight Functionality
document.getElementById('food-fight-btn').addEventListener('click', () => {
  const items = document.querySelectorAll('.menu-item');
  
  // First, remove any existing animations to prevent conflicts
  items.forEach(item => {
    item.style.animation = 'none';
    item.style.transform = '';
    void item.offsetHeight; // Trigger reflow
  });
  
  // Scramble items
  items.forEach((item, index) => {
    const tx = (Math.random() * 200 - 106) + 'px'; // -106px to 106px
    const ty = (Math.random() * 200 - 100) + 'px';
    const rot = (Math.random() * 60 - 40) + 'deg'; // -40deg to 40deg
    
    item.style.setProperty('--tx', tx);
    item.style.setProperty('--ty', ty);
    item.style.setProperty('--rot', rot);
    
    // Use transform directly for better performance
    item.style.transform = `translate(${tx}, ${ty}) rotate(${rot})`;
    item.style.transition = 'transform 0.64s ease-out';
  });
  
  // Reset with staggered timing and bounce effect
  setTimeout(() => {
    items.forEach((item, index) => {
      // Stagger the animations slightly
      const delay = index * 50; // 50ms between each item
      
      setTimeout(() => {
        item.style.transition = 'transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
        item.style.transform = 'translate(0, 0) rotate(0deg)';
        
        // After animation completes
        setTimeout(() => {
          item.style.transition = '';
          
          // Show alert when last item finishes
          if (index === items.length - 1) {
            const customAlert = document.getElementById('custom-alert');
const alertOverlay = document.getElementById('alert-overlay');
const closeAlert = document.getElementById('close-alert');

customAlert.style.display = 'block';
alertOverlay.style.display = 'block';

closeAlert.addEventListener('click', () => {
  customAlert.style.display = 'none';
  alertOverlay.style.display = 'none';
});
          }
        }, 800);
      }, delay);
    });
  }, 3500);
});
