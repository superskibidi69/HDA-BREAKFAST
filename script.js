    // Menu item data with nutrition facts
    const menuItems = {
      "bacon": {
        "displayName": "bacon",
        "calories": 130,
        "servingSize": "3 strips",
        "time": "12 minutes"
      },
      "french-toast": {
        "displayName": "french toast",
        "calories": 190,
        "servingSize": "3 slices",
        "time": "14 minutes"
      },
      "hash-browns": {
        "displayName": "hash browns",
        "calories": 165,
        "servingSize": "4 pieces",
        "time": "9 minutes"
      },
      "sunny-side-up": {
        "displayName": "a sunny side up egg",
        "calories": 70,
        "servingSize": "1 egg",
        "time": "3 minutes"
      },
      "waffles": {
        "displayName": "waffles",
        "calories": 218,
        "servingSize": "3 waffles",
        "time": "7 minutes"
      },
      "burrito": {
        "displayName": "a burrito",
        "calories": 234,
        "servingSize": "1 roll",
        "time": "7 minutes"
      },
      "pancakes": {
        "displayName": "some pancakes",
        "calories": 250,
        "servingSize": "3 pancakes",
        "time": "9 minutes"
      },
      "yogurt": {
        "displayName": "yogurt",
        "calories": 150,
        "servingSize": "1 cup",
        "time": "6 minutes"
      },
      "chocolate-milk": {
        "displayName": "a cup of chocolate milk",
        "calories": 197,
        "servingSize": "1 cup",
        "time": "3 minutes"
      },
       "milk": {
        "displayName": "a glass of milk",
        "calories": 67,
        "servingSize": "1 cup",
        "time": "2 minutes"
      },
      "oatmeal": {
        "displayName": "a cup of fruit oatmeal",
        "calories": 146,
        "servingSize": "1 cup",
        "time": "7 minutes"
      },
        "sausage": {
        "displayName": "sausages",
        "calories": 125,
        "servingSize": "3 links",
        "time": "3 minutes"
      },
        "smoothie": {
            "displayName": "a fruit smoothie",
         "calories": 75,
         "servingSize": "1 cup",
         "time": "2 minutes"
      },
      "icelandic-water": {
        "displayName": "bottled icelandic water",
        "calories": 0,
        "servingSize": "1 bottle",
        "time": "30 seconds"
      },
      "orange-juice": {
        "displayName": "fresh orange juice",
        "calories": 90,
        "servingSize": "1 cup",
        "time": "5 minutes"
      },
      "coffee": {
        "displayName": "coffee",
        "calories": 3,
        "servingSize": "1 cup",
         "time": "4 minutes"
      },
      "fruit-bowl": {
        "displayName": "a small fruit bowl",
        "calories": 120,
        "servingSize": "1 bowl",
        "time": "3 minutes"
      },
      "muffin": {
        "displayName": "a muffin",
        "calories": 186,
        "servingSize": "1 piece",
        "time": "8 minutes"
      },
      "oil-stick": {
        "displayName": "a few pieces of Youtiao (Chinese Doughnut)",
        "calories": 180,
        "servingSize": "2 sticks",
        "time": "9 minutes"
      },
      "cross": {
        "displayName": "a butter croissant",
        "calories": 204,
        "servingSize": "1 bun",
        "time": "10 minutes"
      },
              "ome": {
        "displayName": "a sizzling omelette",
        "calories": 100,
        "servingSize": "1 omelette",
        "time": "6 minutes"
      },
      "fry-dumpblings-jam":{
        "displayName": "a Jamaican fried dumpling",
        "calories": 158,
        "servingSize": "1 piece",
        "time": "15 minutes"
      },
      "cinnamon":{
        "displayName": "a cinnamon roll",
        "calories": 243,
        "servingSize": "1 roll",
        "time": "18 minutes"
      },
         "benedict":{
        "displayName": "a serving of eggs Benedict",
        "calories": 502,
        "servingSize": "1 muffin, 2 poached eggs",
        "time": "20 minutes"
      },
    };
/* names*/ const firstNames = ['James', 'Mary', 'John', 'Karen', 'Hector', 'Jason', 'Mason', 'Dhruv', 'Ephraim', 'Patricia', 'Robert', 'Jennifer', 'Travis', 'Michael', 'Linda', 'William', 'Elizabeth', 'Jack', 'Alex', 'Tim', 'Timmy', 'Drona'];
const lastNames = ['S.', 'J.', 'W.', 'B.', 'A.', 'M.', 'D.', 'G.', 'R.', 'C.', 'T.', 'R.', 'K.'];
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
function updateFigurativeLanguage() {
  // Array of figurative language types with examples
  const figurativeLanguageTypes = [
    { 
      type: "Simile",
      example: "Our pancakes are as fluffy as clouds!"
    },
    { 
      type: "Metaphor",
      example: "Our orange juice is liquid sunshine in a glass!"
    },
    { 
      type: "Hyperbole",
      example: "Our bacon is so good it'll make you cry tears of joy for a week!"
    },
    { 
      type: "Personification",
      example: "Our waffles dance with flavor in your mouth!"
    },
    { 
      type: "Alliteration",
      example: "Perfectly prepared pancakes please picky people!"
    },
    { 
      type: "Onomatopoeia",
      example: "Crunch! Our hash browns are like chips!"
    },
    { 
      type: "Idiom",
      example: "Our breakfast burrito is the best thing since sliced bread!"
    }
  ];
  
  // Get day of week (0-6)
  const day = new Date().getDay();
  
  // Get today's figurative language
  const language = figurativeLanguageTypes[day];
  
  // Update the element
  const languageElement = document.getElementById('figurative-language');
  languageElement.innerHTML = `
    <strong>Today's Figurative Language:</strong> ${language.type}<br>
    <em>"${language.example}"</em>
  `;
  languageElement.style.opacity = '0';
  languageElement.style.animation = 'fadeIn 2s ease-out forwards';
}

// Initial update
updateFigurativeLanguage();

// Update every day at midnight (in case page stays open)
setInterval(updateFigurativeLanguage, 86400000); // 24 hours
 
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeIn', 'fadeIn');
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
      // food right
document.getElementById('food-fight-btn').addEventListener('click', () => {
  const items = document.querySelectorAll('.menu-item');
  
  // First, remove food fight animations but preserve other styles
  items.forEach(item => {
    // Clear any transform/transition styles we added
    item.style.transform = '';
    item.style.transition = '';
    item.style.animation = '';
    
    // Force reflow to ensure styles are cleared
    void item.offsetHeight;
  });
  
  // Scramble items
  items.forEach((item, index) => {
    const tx = (Math.random() * 250 - 106) + 'px';
    const ty = (Math.random() * 230 - 100) + 'px';
    const rot = (Math.random() * 90 - 42) + 'deg';
    
    item.style.setProperty('--tx', tx);
    item.style.setProperty('--ty', ty);
    item.style.setProperty('--rot', rot);
    
    item.style.transform = `translate(${tx}, ${ty}) rotate(${rot})`;
    item.style.transition = 'transform 0.76s ease-out';
  });
  
  // Reset with staggered timing and bounce effect
  setTimeout(() => {
    items.forEach((item, index) => {
      const delay = index * 80;
      
      setTimeout(() => {
        item.style.transition = 'transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
        item.style.transform = 'translate(0, 0) rotate(0deg)';
        
        setTimeout(() => {
          // Clean up our styles but leave original classes intact
          item.style.transform = '';
          item.style.transition = '';
          
          // Restore hover animations by reattaching event listeners
          const sticker = item.querySelector('.price-sticker');
          if (sticker) {
            item.addEventListener('mouseenter', () => {
              sticker.style.transform = 'rotate(' + (Math.random() * 30 - 15) + 'deg) scale(1.1)';
              sticker.style.transition = 'transform 0.2s ease';
            });
            
            item.addEventListener('mouseleave', () => {
              sticker.style.transform = 'rotate(15deg) scale(1)';
            });
          }
          
          // Show alert when last item finishes
          if (index === items.length - 1) {
            showCustomAlert('Haha, get pranked!');
          }
        }, 800);
      }, delay);
    });
  }, 3500);
});

// Helper function to show custom alerts
function showCustomAlert(message) {
  const customAlert = document.getElementById('custom-alert');
  const alertOverlay = document.getElementById('alert-overlay');
  const alertMessage = customAlert.querySelector('p');
  
  alertMessage.textContent = message;
  customAlert.style.display = 'block';
  alertOverlay.style.display = 'block';
  
  // Reset close button event listener
  const closeAlert = document.getElementById('close-alert');
  closeAlert.onclick = function() {
    customAlert.style.display = 'none';
    alertOverlay.style.display = 'none';
  };
}
document.addEventListener('DOMContentLoaded', function() {
  const sizzleSound = document.getElementById('sizzle-sound');
  // Only target these specific menu items
  const sizzleItems = document.querySelectorAll(
    '.menu-item[data-item="bacon"], ' +
    '.menu-item[data-item="oil-stick"], ' +
    '.menu-item[data-item="fry-dumpblings-jam"]'
  );

  sizzleItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      sizzleSound.currentTime = 0;
      sizzleSound.play().catch(e => console.log("Audio play failed:", e));
    });
    
    item.addEventListener('mouseleave', () => {
      sizzleSound.pause();
    });
  });
});
// Enhanced Contact Form Animation
document.addEventListener('DOMContentLoaded', function() {
  const contactSection = document.querySelector('.contact');
  const contactForm = document.getElementById('contact-form');
  
  if (contactSection && contactForm) {
    // Animate contact section into view
    setTimeout(() => {
      contactSection.classList.add('visible');
      
      // Animate form elements sequentially
      const formGroups = document.querySelectorAll('.form-group');
      formGroups.forEach((group, index) => {
        setTimeout(() => {
          group.classList.add('active');
        }, 150 * index);
      });
      
      // Animate submit button last
      setTimeout(() => {
        const submitBtn = document.getElementById('submit-contact');
        if (submitBtn) submitBtn.classList.add('visible');
      }, 150 * formGroups.length);
    }, 300);
    
    // Form submission handler
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const contactData = {
        name: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        message: document.getElementById('contact-message').value
      };
      
      console.log("Contact Form Submitted:", contactData);
      
      // Hide form with animation
      contactForm.style.opacity = '0';
      contactForm.style.transform = 'translateY(-20px)';
      
      // Show confirmation with animation
      setTimeout(() => {
        contactForm.style.display = 'none';
        const confirmation = document.getElementById('contact-confirmation');
        confirmation.classList.add('visible');
        
        // Optional: Reset form after 5 seconds
        setTimeout(() => {
          confirmation.classList.remove('visible');
          contactForm.reset();
          contactForm.style.display = 'block';
          setTimeout(() => {
            contactForm.style.opacity = '1';
            contactForm.style.transform = 'translateY(0)';
          }, 50);
        }, 5000);
      }, 300);
    });
  }
});
      /* bacon */
      let isBaconMode = false;
const originalImages = {};

document.querySelector('.logo').addEventListener('click', function() {
  const menuItems = document.querySelectorAll('.menu-item');
  
  // Immediately change images before animation
  if (!isBaconMode) {
    menuItems.forEach(item => {
      const img = item.querySelector('img');
      if (!originalImages[item.dataset.item]) {
        originalImages[item.dataset.item] = {
          src: img.src,
          alt: img.alt
        };
      }
      img.src = 'https://hda-breakfast.vercel.app/IMG_0752.jpeg';
      img.alt = 'Bacon';
    });
    showCustomAlert('Everything is bacon now! 🥓');
  } else {
    menuItems.forEach(item => {
      const img = item.querySelector('img');
      const original = originalImages[item.dataset.item];
      if (original) {
        img.src = original.src;
        img.alt = original.alt;
      }
    });
    showCustomAlert('Images restored!');
  }

  // Apply animation to all images
  menuItems.forEach(item => {
    const img = item.querySelector('img');
    img.classList.add('image-transition');
    
    setTimeout(() => {
      img.classList.remove('image-transition');
    }, 500);
  });

  isBaconMode = !isBaconMode;
});

// Unified custom alert function
function showCustomAlert(message) {
  const customAlert = document.getElementById('custom-alert');
  const alertOverlay = document.getElementById('alert-overlay');
  const alertMessage = customAlert.querySelector('p');
  
  // Remove any existing event listeners to prevent duplicates
  const closeAlert = document.getElementById('close-alert');
  const newCloseAlert = closeAlert.cloneNode(true);
  closeAlert.parentNode.replaceChild(newCloseAlert, closeAlert);
  
  // Set new message
  alertMessage.textContent = message;
  
  // Show alert
  customAlert.style.display = 'block';
  alertOverlay.style.display = 'block';
  
  // Add new event listener
  newCloseAlert.addEventListener('click', function() {
    customAlert.style.display = 'none';
    alertOverlay.style.display = 'none';
  });
}
document.getElementById('close-alert').addEventListener('click', function() {
  document.getElementById('custom-alert').style.display = 'none';
  document.getElementById('alert-overlay').style.display = 'none';
});

// fake orders
let notificationInterval;
let isNotificationShowing = false; // Track if a notification is currently visible

function showRandomOrder() {
  if (isNotificationShowing) return; // Skip if one is already showing
  
  const notification = document.getElementById('order-notification');
  const itemKeys = Object.keys(menuItems);
  const randomKey = itemKeys[Math.floor(Math.random() * itemKeys.length)];
  const itemName = menuItems[randomKey].displayName;
  const funnyComments = [
  "and demanded extra!",
  "while doing a little dance!",
  "and tipped 100%!",
  "then asked for the chef's autograph!",
  "while singing 'I Want It That Way'!",
  "and immediately ordered seconds!",
  "but tripped and spilled their order!",
  "while scrolling on the HDA Breakfast TikTok! (We don't have one)",
  "while playing Brawl Stars on their phone!",
  "and complained about the temperature, so they went to speak to the manager!",
  "and complained about the texture, so they demanded to speak to the manager!",
  "while singing 'Africa'!",
  "and tried to pay with Monopoly money!",
  "and whispered, 'This dish... it speaks to me.'",
  "then left a note saying, ‘Whoever made this, I hope you have a wonderful day. It tastes amazing.’",
  "then bought an extra meal to give to someone in need.",
  "and after finishing, declared it the best breakfast they’ve ever eaten."
  
];
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const randomComment = funnyComments[Math.floor(Math.random() * funnyComments.length)];

  // Reset animation
  notification.style.animation = 'none';
  void notification.offsetWidth; // Trigger reflow
  notification.textContent = `${randomFirstName} ${randomLastName} just ordered ${itemName} ${randomComment}`;
  
  isNotificationShowing = true;
  notification.style.animation = 'floatUp 4.7329383829293s ease-out forwards';

  // Reset flag when animation completes
  notification.addEventListener('animationend', () => {
    isNotificationShowing = false;
  }, { once: true });

  console.log('New order:', randomFirstName, randomLastName, itemName); 
}

function startOrderNotifications() {
  if (notificationInterval) {
    clearInterval(notificationInterval);
  }
  
  function scheduleNext() {
    const delay = Math.random() * 7000 + 3000; // 3-10 seconds
    notificationInterval = setTimeout(() => {
      showRandomOrder();
      scheduleNext(); // Schedule the next one
    }, delay);
  }
  
  // Initial call
  showRandomOrder();
  scheduleNext();
}

document.addEventListener('DOMContentLoaded', startOrderNotifications);
