// ========================================
// BOSSONOGA - Main JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initSmoothScrolling();
    initMobileMenu();
    initNavbarScroll();
    initActiveNavigation();
    loadProducts();
    initContactForm();
    initModalHandlers();
    initIntersectionObserver();
});

// ========================================
// Init Functions
// ========================================
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            const target = document.querySelector(href);

            if (!target) return;

            e.preventDefault();

            const offset = 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            if (window.innerWidth <= 968) {
                document.getElementById('nav-menu')?.classList.remove('active');
            }
        });
    });
}

function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNavigation() {
        const scrollPos = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);
}

function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', handleContactSubmit);
}

function initModalHandlers() {
    const closeModalBtn = document.getElementById('close-modal');
    const modalOverlay = document.getElementById('modal-overlay');

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeProductModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeProductModal);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProductModal();

            if (typeof closeCart === 'function') closeCart();
            if (typeof closeCheckout === 'function') closeCheckout();
        }
    });
}

function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    observeAnimatedElements(observer);
}

function observeAnimatedElements(observer) {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    const philosophyCards = document.querySelectorAll('.philosophy-card');
    philosophyCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });
}

// ========================================
// Product Display Functions
// ========================================
function loadProducts() {
    renderProductGroup('bath-bombs-grid', products.bathBombs);
    renderProductGroup('balms-grid', products.balms);
    renderProductGroup('refill-baths-grid', products.refillBaths);
    renderProductGroup('scrubs-grid', products.scrubs);
    renderProductGroup('foot-baths-grid', products.footBaths);
    renderProductGroup('packages-grid', products.packages);
    renderProductGroup('kids-line-grid', products.kidsLine);
    renderProductGroup('accessories-grid', products.accessories);

    initIntersectionObserver();
}

function renderProductGroup(elementId, productArray) {
    const grid = document.getElementById(elementId);
    if (!grid) return;

    grid.innerHTML = productArray.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
    const hasVariants = Array.isArray(product.variants) && product.variants.length > 0;
    const hasSizeOptions = Array.isArray(product.sizeOptions) && product.sizeOptions.length > 0;
    const needsModal = hasVariants || hasSizeOptions || product.custom || product.commercial || product.details;
    const limitedBadge = product.limited ? '<span class="limited-badge">Limited 30kom</span>' : '';

    const imageContent = product.image
        ? `<img src="${product.image}" alt="${escapeHtml(product.name)}" class="product-card-img">`
        : `<i class="fas ${product.icon || 'fa-leaf'}"></i>`;

    const description = product.shortDescription || product.description || '';
    const displayPrice = getProductDisplayPrice(product);

    return `
        <div class="product-card" onclick="openProductModal('${escapeJs(product.id)}', '${escapeJs(product.category)}')">
            <div class="product-image">
                ${imageContent}
                ${limitedBadge}
            </div>
            <div class="product-info">
                <h3 class="product-title">${escapeHtml(product.name)}</h3>
                <p class="product-description">${escapeHtml(description)}</p>
                <div class="product-footer">
                    <span class="product-price">${displayPrice}</span>
                    ${
                        needsModal
                            ? `<button class="add-to-cart-btn" onclick="event.stopPropagation(); openProductModal('${escapeJs(product.id)}', '${escapeJs(product.category)}')">
                                    <i class="fas fa-eye"></i> Pogledaj
                               </button>`
                            : `<button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCartDirect('${escapeJs(product.id)}', '${escapeJs(product.category)}')">
                                    <i class="fas fa-shopping-bag"></i> Dodaj
                               </button>`
                    }
                </div>
            </div>
        </div>
    `;
}

function getProductDisplayPrice(product) {
    if (Array.isArray(product.sizeOptions) && product.sizeOptions.length > 0) {
        const firstOption = product.sizeOptions[0];
        const lastOption = product.sizeOptions[product.sizeOptions.length - 1];

        if (typeof firstOption === 'object' && typeof lastOption === 'object') {
            if (firstOption.price === lastOption.price) {
                return `${firstOption.price} KM`;
            }
            return `${firstOption.price} – ${lastOption.price} KM`;
        }
    }

    return `${product.price} KM`;
}

// ========================================
// Product Modal Functions
// ========================================
function openProductModal(productId, category) {
    const product = findProduct(productId, category);
    if (!product) return;

    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');
    if (!modal || !modalBody) return;

    const hasVariants = Array.isArray(product.variants) && product.variants.length > 0;
    const hasSizeOptions = Array.isArray(product.sizeOptions) && product.sizeOptions.length > 0;
    const limitedBadge = product.limited ? '<span class="limited-badge">Limited 30kom</span>' : '';

    const defaultVariant = hasVariants ? product.variants[0] : null;
    const defaultSizeOption = hasSizeOptions ? product.sizeOptions[0] : null;
    const defaultPrice = getSelectedPrice(product, defaultSizeOption);
    const defaultImage = getSelectedImage(product, defaultVariant);

    modalBody.innerHTML = `
        <div class="modal-image" id="product-modal-image-wrapper">
            ${renderModalImage(defaultImage, product.name, product.icon)}
            ${limitedBadge}
        </div>

        <div class="modal-details"
             id="product-modal-details"
             data-product-id="${escapeHtml(product.id)}"
             data-category="${escapeHtml(product.category)}">

            <h2>${escapeHtml(product.name)}</h2>
            <div class="modal-price" id="modal-price">${defaultPrice} KM</div>

            <p class="modal-description" id="modal-description">
                ${escapeHtml(product.details || product.description || '')}
            </p>

            ${product.size ? `<p><strong>Osnovna veličina:</strong> ${escapeHtml(product.size)}</p>` : ''}

            ${
                hasSizeOptions
                    ? `
                    <div class="modal-variants">
                        <h4>Izaberite veličinu:</h4>
                        <div class="variant-options" id="size-options">
                            ${product.sizeOptions.map((sizeOpt, index) => {
                                const option = normalizeSizeOption(sizeOpt);
                                return `
                                    <button
                                        type="button"
                                        class="variant-option ${index === 0 ? 'active' : ''}"
                                        data-type="size"
                                        data-label="${escapeHtml(option.label)}"
                                        data-price="${option.price}"
                                        onclick="selectOption(this)">
                                        ${escapeHtml(option.label)}${option.price ? ` (${option.price} KM)` : ''}
                                    </button>
                                `;
                            }).join('')}
                        </div>
                    </div>
                    `
                    : ''
            }

            ${
                hasVariants
                    ? `
                    <div class="modal-variants">
                        <h4>Izaberite varijantu:</h4>
                        <div class="variant-options" id="variant-options">
                            ${product.variants.map((variant, index) => `
                                <button
                                    type="button"
                                    class="variant-option ${index === 0 ? 'active' : ''}"
                                    data-type="variant"
                                    data-variant="${escapeHtml(variant)}"
                                    onclick="selectOption(this)">
                                    ${escapeHtml(variant)}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                    `
                    : ''
            }

            ${
                product.loyalty
                    ? `
                    <div class="loyalty-info" style="background: #f9f3e8; padding: 1rem; border-radius: 8px; margin: 1rem 0; border-left: 4px solid var(--gold);">
                        <h4 style="color: var(--gold); margin-bottom: 0.5rem;">🎁 Loyalty Program</h4>
                        <p style="margin: 0; color: var(--grey);">${escapeHtml(product.loyalty)}</p>
                    </div>
                    `
                    : ''
            }

            <div class="modal-actions">
                <button class="btn btn-primary" onclick="addToCartFromModal('${escapeJs(product.id)}', '${escapeJs(product.category)}')">
                    <i class="fas fa-shopping-bag"></i> Dodaj u korpu
                </button>
            </div>
        </div>
    `;

    updateModalDynamicContent(product);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const modal = document.getElementById('product-modal');
    if (!modal) return;

    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function selectOption(button) {
    if (!button) return;

    const parent = button.parentElement;
    if (!parent) return;

    const optionButtons = parent.querySelectorAll('.variant-option');
    optionButtons.forEach(opt => opt.classList.remove('active'));
    button.classList.add('active');

    const modalDetails = document.getElementById('product-modal-details');
    if (!modalDetails) return;

    const productId = modalDetails.dataset.productId;
    const category = modalDetails.dataset.category;
    const product = findProduct(productId, category);

    if (!product) return;

    updateModalDynamicContent(product);
}

function updateModalDynamicContent(product) {
    const imageWrapper = document.getElementById('product-modal-image-wrapper');
    const priceElement = document.getElementById('modal-price');
    const descriptionElement = document.getElementById('modal-description');

    if (!imageWrapper || !priceElement || !descriptionElement) return;

    const selectedVariant = getSelectedVariant();
    const selectedSizeOption = getSelectedSizeOption();

    const selectedImage = getSelectedImage(product, selectedVariant);
    const selectedPrice = getSelectedPrice(product, selectedSizeOption);
    const selectedDescription = getSelectedDescription(product, selectedVariant);

    imageWrapper.innerHTML = `
        ${renderModalImage(selectedImage, product.name, product.icon)}
        ${product.limited ? '<span class="limited-badge">Limited 30kom</span>' : ''}
    `;

    priceElement.textContent = `${selectedPrice} KM`;
    descriptionElement.textContent = selectedDescription;
}

function renderModalImage(imagePath, productName, iconClass) {
    if (imagePath) {
        return `<img src="${imagePath}" alt="${escapeHtml(productName)}" class="product-modal-img">`;
    }

    return `<i class="fas ${iconClass || 'fa-leaf'}"></i>`;
}

function getSelectedVariant() {
    const activeVariant = document.querySelector('#variant-options .variant-option.active');
    return activeVariant ? activeVariant.dataset.variant || null : null;
}

function getSelectedSizeOption() {
    const activeSize = document.querySelector('#size-options .variant-option.active');
    if (!activeSize) return null;

    return {
        label: activeSize.dataset.label || '',
        price: Number(activeSize.dataset.price || 0)
    };
}

function getSelectedImage(product, variant) {
    if (variant && product.variantImages && product.variantImages[variant]) {
        return product.variantImages[variant];
    }

    return product.image || '';
}

function getSelectedPrice(product, selectedSizeOption) {
    if (selectedSizeOption && typeof selectedSizeOption.price === 'number' && selectedSizeOption.price > 0) {
        return selectedSizeOption.price;
    }

    return product.price || 0;
}

function getSelectedDescription(product, variant) {
    if (variant && product.variantDetails && product.variantDetails[variant]) {
        return product.variantDetails[variant];
    }

    return product.details || product.description || '';
}

function addToCartFromModal(productId, category) {
    const product = findProduct(productId, category);
    if (!product || typeof cart === 'undefined') return;

    const selectedVariant = getSelectedVariant();
    const selectedSizeOption = getSelectedSizeOption();
    const selectedPrice = getSelectedPrice(product, selectedSizeOption);

    const preparedProduct = {
        ...product,
        price: selectedPrice
    };

    const cartOptions = {
        variant: selectedVariant,
        size: selectedSizeOption ? selectedSizeOption.label : null
    };

    cart.addItem(preparedProduct, cartOptions);
    closeProductModal();
}

function addToCartDirect(productId, category) {
    const product = findProduct(productId, category);
    if (!product || typeof cart === 'undefined') return;

    cart.addItem(product, { variant: null, size: null });
}

// ========================================
// Helper Functions
// ========================================
function findProduct(productId, category) {
    let allProducts = [];

    switch (category) {
        case 'bathBombs':
            allProducts = products.bathBombs;
            break;
        case 'balms':
            allProducts = products.balms;
            break;
        case 'refillBaths':
            allProducts = products.refillBaths;
            break;
        case 'scrubs':
            allProducts = products.scrubs;
            break;
        case 'footBaths':
            allProducts = products.footBaths;
            break;
        case 'packages':
            allProducts = products.packages;
            break;
        case 'kidsLine':
            allProducts = products.kidsLine;
            break;
        case 'accessories':
            allProducts = products.accessories;
            break;
        default:
            allProducts = [];
    }

    return allProducts.find(product => product.id === productId) || null;
}

function normalizeSizeOption(sizeOption) {
    if (typeof sizeOption === 'object' && sizeOption !== null) {
        return {
            label: sizeOption.label || '',
            price: Number(sizeOption.price || 0)
        };
    }

    if (typeof sizeOption === 'string') {
        return {
            label: sizeOption,
            price: 0
        };
    }

    return {
        label: '',
        price: 0
    };
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function escapeJs(value) {
    return String(value)
        .replace(/\\/g, '\\\\')
        .replace(/'/g, "\\'");
}

// ========================================
// Contact Form Handler
// ========================================
function handleContactSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const contactData = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        date: new Date().toISOString()
    };

    console.log('Contact form submitted:', contactData);

    alert(`Hvala ${contactData.name}!\n\nVaša poruka je primljena.\nOdgovorićemo vam uskoro na ${contactData.email}.`);

    event.target.reset();
}
