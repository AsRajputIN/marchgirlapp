// Add smooth transition for mobile menu opening/closing
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    
    // Add transition class after DOM is loaded to prevent initial animation
    setTimeout(() => {
        mobileMenu.style.transition = 'all 0.1s ease-in-out';
    }, 100);

    // Close mobile menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-items a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            const bsCollapse = new bootstrap.Collapse(mobileMenu);
            bsCollapse.hide();
        });
    });

    // Header scroll effect
    const header = document.querySelector('.desktop-header');
    const scrollThreshold = 50;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Add fade-in-up animation to elements
    const animateElements = document.querySelectorAll('.promotional-section h2, .product-card, .journal-card');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateElements.forEach(element => {
        observer.observe(element);
    });

    // Product Showcase Parallax Effect
    const productShowcase = document.querySelector('.product-showcase');
    const title = productShowcase.querySelector('h2');
    const cards = productShowcase.querySelectorAll('.product-card');
    const productItems = productShowcase.querySelectorAll('.product-item');

    // Initialize Intersection Observer for fade-in effect
    const productObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe each product item
    productItems.forEach(item => {
        productObserver.observe(item);
    });

    // Parallax scroll effect
    window.addEventListener('scroll', () => {
        const rect = productShowcase.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.25;
            const cardRate = scrolled * 0.15;

            requestAnimationFrame(() => {
                title.style.setProperty('--parallax-speed', `${rate}px`);
                cards.forEach(card => {
                    card.style.setProperty('--parallax-speed-card', `${cardRate}px`);
                });
            });
        }
    });

    // Initial check for items in viewport
    productItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            item.classList.add('visible');
        }
    });
}); 


const brandImageUrls = [
    "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/155a65ae-eb81-4312-a3db-7c5f55cd6f9b/Google.png",
    "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/3046dde2-4802-4281-a803-527f8ff56adc/7-Eleven.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/bb92bbd5-da98-4f5f-a4e9-9ef690ffbce5/Mecca.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/e0931802-efd5-4dd4-9e9e-afbc8b980017/DDB.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/6ea905c4-26f4-42fa-9f47-882afab47069/Binge.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/07e11f3f-eea1-4467-83ff-2129496f54aa/Amaysim.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/3cf7aa89-273a-4456-9e75-a0b110fcba6e/AMP+Capital.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/d121a87f-6400-49b1-bc71-8dcfd309e345/ANZ.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/692ffad5-f985-4c83-825e-3a3d3ffb812f/ARN.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/398baba7-207b-4222-81c5-839c9d1cc2f9/Bankwest.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/34950c3f-021d-408a-9723-84d018a1bab7/AIA.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/e1967d07-bb06-4ae1-b5b9-03b0b3c861b2/Harpers+Bazaar.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/d8b244ce-9581-4470-ac99-f6653bc15554/CarSales.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/f36ac669-0f77-4389-81f6-c2060f96fdac/Australian+Open.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/248f202e-5300-4cf7-8026-f5c02a059007/Business+Chicks.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/4b95e58b-8f38-43b8-82b4-d2fad784f7c7/Cartology.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/8695703b-dff9-4e5f-922e-5433ceaf8e5e/Cellarmasters.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/c7f5a6ce-ec14-4f76-bee6-37dff2435790/Dan+Murphys.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/6d1de566-83e2-425c-b50d-bf20f317352c/Cathy+Freeman+Foundation.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/7115d004-6fa4-43e1-8240-cf1b669c8063/David+Jones.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/7f50bc52-ee78-49f9-a9b6-59590e1291bc/Dell.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/db68756c-74b3-4ca2-93cc-ca546216a246/Elantis.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/08e1e24b-82b9-499b-a799-5aee70c0b321/Envato.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/28a9a82a-074c-4d2f-bf46-f3f58230de04/Fancy+Plants.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/ef92999c-2930-4dc6-8324-a8133e56fe63/Finecast.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/afecb94b-89b7-4d9f-b7d0-166e8c7dab2a/Headspace.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/cdb93e67-a81c-4d0e-933c-18f9308f238f/Mecca+Maxima.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/2bb21cda-9557-4d6f-81ec-9df9bf36eec3/Metricon.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/1ff3dc28-1d1f-4f67-a85c-3d822164ccd2/Telstra+Purple.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/350f3be4-fb19-43fc-8ebe-b11ac69cf911/Mothers+Day+Classic.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/c665bd5e-d627-46cb-9893-bbe63bcca395/Nine.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/89a4d654-3b02-4e58-bca5-09403f9802b7/Optus.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/245b2a57-31cf-4a94-9fd8-5313879b4314/Keep+It+Cleaner.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/858715f2-05cf-42a4-8672-85131bb29124/Pexa.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/721a445f-6e14-47f5-a3c4-af48f97d9cc1/Seek.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/32413a7f-0bc2-4e74-8770-3314e271e0d4/Starlight.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/674e835b-4178-4af0-9b22-ed17af7295cf/Sunglass+Hut.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/0c0ac9d4-98a5-41c0-bf0c-f62fdc38eb7a/Swinburne.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/3acfdeeb-730f-49a8-8690-118c4d551089/Telstra.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/1424cc6f-77e9-4cd1-92c0-53895137190f/Belong.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/af4ad2cc-6ee6-4e09-bf8f-d7f5c7fa69a1/The+Chia+Co.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/b247283b-095a-41c4-86c1-325d4fb90650/QAGOMA.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/b9b89453-7486-4fa9-a3d0-0fe416da12b9/Afterpay.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/7347e5c9-4e96-4dd8-acd8-61ff9dfd41c5/Snapchat.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/59b83992-2a93-42e5-b008-2f6a2568a909/A2+Milk.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/c1099a97-64d0-46cd-a51a-941b0b8740b9/Vogue.png",
          "https://images.squarespace-cdn.com/content/v1/5f4dbf552006d865dded91f9/b4fed756-3e32-4a52-b969-554ef60832ad/Klarna.png"
      ];

const brandCarousel = document.getElementById('brandCarousel');
const prevBrandBtn = document.getElementById('prevBrandBtn');
const nextBrandBtn = document.getElementById('nextBrandBtn');

// Add images to the carousel
brandImageUrls.forEach(url => {
    const item = document.createElement('div');
    item.className = 'brand-carousel-item';
    
    const img = document.createElement('img');
    img.src = url;
    img.alt = "Brand Logo";
    img.loading = "lazy";
    
    item.appendChild(img);
    brandCarousel.appendChild(item);
});

// Navigation functionality with infinite loop
let currentBrandIndex = 0;
const brandItemWidth = 190 + 20; // width + margin
const visibleBrandItems = Math.floor(document.querySelector('.brand-carousel-viewport').clientWidth / brandItemWidth);

function updateBrandCarousel() {
    brandCarousel.style.transform = `translateX(-${currentBrandIndex * brandItemWidth}px)`;
}

prevBrandBtn.addEventListener('click', () => {
    currentBrandIndex = (currentBrandIndex - 1 + brandImageUrls.length) % brandImageUrls.length;
    updateBrandCarousel();
});

nextBrandBtn.addEventListener('click', () => {
    currentBrandIndex = (currentBrandIndex + 1) % brandImageUrls.length;
    updateBrandCarousel();
});

// Auto-scroll (optional)
let brandAutoScroll = setInterval(() => {
    currentBrandIndex = (currentBrandIndex + 1) % brandImageUrls.length;
    updateBrandCarousel();
}, 3000);

// Pause auto-scroll on hover
brandCarousel.addEventListener('mouseenter', () => {
    clearInterval(brandAutoScroll);
});

brandCarousel.addEventListener('mouseleave', () => {
    brandAutoScroll = setInterval(() => {
        currentBrandIndex = (currentBrandIndex + 1) % brandImageUrls.length;
        updateBrandCarousel();
    }, 3000);
});

// Handle window resize
window.addEventListener('resize', () => {
    visibleBrandItems = Math.floor(document.querySelector('.brand-carousel-viewport').clientWidth / brandItemWidth);
});