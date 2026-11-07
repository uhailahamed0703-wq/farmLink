/**
 * Farmlink Core UI Controller & App Utilities
 */

// Format IDR Currency
function formatRupiah(number) {
  if (isNaN(number)) return "Rp 0";
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(number);
}

// Toast Notifications
const FarmlinkToast = {
  container: null,
  init() {
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.id = 'toast-container';
      document.body.appendChild(this.container);
    }
  },
  show(message, type = 'success', icon = null) {
    this.init();
    const toast = document.createElement('div');
    toast.className = `fl-toast fl-toast-${type}`;
    
    let defaultIcon = type === 'success' 
      ? '<i class="bi bi-check-circle-fill"></i>' 
      : '<i class="bi bi-info-circle-fill"></i>';
      
    toast.innerHTML = `
      <span>${icon || defaultIcon}</span>
      <div style="flex:1;">${message}</div>
    `;
    this.container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }
};

// Global App Initialization
document.addEventListener('DOMContentLoaded', () => {
  FarmlinkApp.init();
});

const FarmlinkApp = {
  init() {
    this.renderDemoRoleBar();
    this.updateCartBadge();
    this.setupCartDrawer();
    this.setupMobileBottomNav();

    // Listen for storage cart changes
    window.addEventListener('cart-updated', () => {
      this.updateCartBadge();
      this.renderCartDrawerItems();
    });
  },

  // Top quick role demo banner
  renderDemoRoleBar() {
    const existing = document.getElementById('demo-role-banner');
    if (existing) existing.remove();

    const currentUser = window.store.getCurrentUser();
    const currentRole = currentUser ? currentUser.role : 'guest';

    const banner = document.createElement('div');
    banner.id = 'demo-role-banner';
    banner.className = 'demo-role-banner';
    banner.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
        <span style="font-weight: 700;">🌱 FARMLINK DEMO MODE</span>
        <span style="opacity: 0.85;">Current: <strong>${currentUser ? currentUser.name : 'Guest'}</strong> (${currentRole.toUpperCase()})</span>
      </div>
      <div class="demo-role-pills">
        <span style="font-size:0.75rem; opacity:0.8; margin-right:4px;">Switch Demo Role:</span>
        <button class="demo-role-pill ${currentRole === 'buyer' ? 'active' : ''}" onclick="FarmlinkApp.switchRole('buyer')">
          👨‍🍳 Buyer (Chef Dewa)
        </button>
        <button class="demo-role-pill ${currentRole === 'farmer' ? 'active' : ''}" onclick="FarmlinkApp.switchRole('farmer')">
          👨‍🌾 Farmer (Pak Asep)
        </button>
        <button class="demo-role-pill ${currentRole === 'admin' ? 'active' : ''}" onclick="FarmlinkApp.switchRole('admin')">
          🛡️ Admin Portal
        </button>
        <button class="demo-role-pill" style="background: rgba(220, 38, 38, 0.4);" onclick="FarmlinkApp.resetData()">
          🔄 Reset Data
        </button>
      </div>
    `;

    document.body.insertBefore(banner, document.body.firstChild);
  },

  switchRole(role) {
    if (role === 'buyer') {
      window.store.setCurrentUser({
        id: "B01",
        role: "buyer",
        name: "Chef Dewa Santika",
        businessName: "Resto Nusantara Gourmet Bandung",
        avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=80"
      });
      FarmlinkToast.show("Switched to Buyer Demo (Chef Dewa)");
      setTimeout(() => {
        if (!window.location.pathname.includes('buyer-dashboard.html') && !window.location.pathname.includes('marketplace.html')) {
          window.location.href = 'buyer-dashboard.html';
        } else {
          location.reload();
        }
      }, 500);
    } else if (role === 'farmer') {
      window.store.setCurrentUser({
        id: "F01",
        role: "farmer",
        name: "Pak Asep Kurniawan",
        farmName: "Kebun Pasir Wangi Organic",
        location: "Lembang, West Java",
        avatar: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&q=80"
      });
      FarmlinkToast.show("Switched to Farmer Demo (Pak Asep - Lembang)");
      setTimeout(() => {
        if (!window.location.pathname.includes('farmer-dashboard.html')) {
          window.location.href = 'farmer-dashboard.html';
        } else {
          location.reload();
        }
      }, 500);
    } else if (role === 'admin') {
      window.store.setCurrentUser({
        id: "ADM01",
        role: "admin",
        name: "Farmlink Ops Admin",
        title: "Platform Lead"
      });
      FarmlinkToast.show("Switched to Farmlink Admin Portal");
      setTimeout(() => {
        if (!window.location.pathname.includes('admin-dashboard.html')) {
          window.location.href = 'admin-dashboard.html';
        } else {
          location.reload();
        }
      }, 500);
    }
  },

  resetData() {
    if (confirm("Reset all Farmlink demo data to original realistic sample state?")) {
      window.store.resetDemoData();
      FarmlinkToast.show("Sample data restored successfully!");
      setTimeout(() => location.reload(), 600);
    }
  },

  updateCartBadge() {
    const cart = window.store.getCart();
    const totalCount = cart.reduce((sum, i) => sum + i.quantity, 0);
    document.querySelectorAll('.cart-badge-count').forEach(el => {
      el.textContent = totalCount;
      el.style.display = totalCount > 0 ? 'flex' : 'none';
    });
  },

  // Setup Offcanvas Cart
  setupCartDrawer() {
    let backdrop = document.getElementById('fl-cart-backdrop');
    let drawer = document.getElementById('fl-cart-drawer');

    if (!drawer) {
      drawer = document.createElement('div');
      drawer.id = 'fl-cart-drawer';
      drawer.className = 'fl-cart-drawer';
      drawer.innerHTML = `
        <div style="padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--fl-border); display: flex; align-items: center; justify-content: space-between;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="bi bi-cart3" style="font-size: 1.3rem; color: var(--fl-primary);"></i>
            <h3 style="font-size: 1.15rem; font-weight: 700;">Wholesale Produce Cart</h3>
          </div>
          <button class="fl-btn-icon" onclick="FarmlinkApp.closeCartDrawer()">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
        <div id="cart-drawer-items" style="flex: 1; overflow-y: auto; padding: 1.25rem;">
          <!-- Items will render here -->
        </div>
        <div id="cart-drawer-footer" style="padding: 1.25rem 1.5rem; border-top: 1px solid var(--fl-border); background: #FAFDFB;">
          <!-- Subtotal & Checkout -->
        </div>
      `;
      document.body.appendChild(drawer);
    }

    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'fl-cart-backdrop';
      backdrop.className = 'fl-cart-backdrop';
      backdrop.onclick = () => this.closeCartDrawer();
      document.body.appendChild(backdrop);
    }

    // Attach click handlers to any .open-cart-btn
    document.querySelectorAll('.open-cart-btn').forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        this.openCartDrawer();
      };
    });
  },

  openCartDrawer() {
    this.renderCartDrawerItems();
    document.getElementById('fl-cart-drawer').classList.add('active');
    document.getElementById('fl-cart-backdrop').classList.add('active');
  },

  closeCartDrawer() {
    const drawer = document.getElementById('fl-cart-drawer');
    const backdrop = document.getElementById('fl-cart-backdrop');
    if (drawer) drawer.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
  },

  renderCartDrawerItems() {
    const listEl = document.getElementById('cart-drawer-items');
    const footerEl = document.getElementById('cart-drawer-footer');
    if (!listEl || !footerEl) return;

    const cart = window.store.getCart();
    if (cart.length === 0) {
      listEl.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--fl-text-secondary);">
          <div style="width: 64px; height: 64px; background: var(--fl-primary-light); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto; color: var(--fl-primary-dark); font-size: 1.8rem;">
            <i class="bi bi-basket2"></i>
          </div>
          <h4 style="font-weight: 700; color: var(--fl-text); margin-bottom: 0.35rem;">Your Cart is Empty</h4>
          <p style="font-size: 0.85rem; margin-bottom: 1.25rem;">Browse fresh direct harvests from verified local farmers.</p>
          <a href="marketplace.html" class="fl-btn fl-btn-primary fl-btn-sm" onclick="FarmlinkApp.closeCartDrawer()">
            Explore Marketplace
          </a>
        </div>
      `;
      footerEl.innerHTML = '';
      return;
    }

    listEl.innerHTML = cart.map(item => `
      <div style="display: flex; gap: 0.85rem; padding-bottom: 1rem; margin-bottom: 1rem; border-bottom: 1px solid var(--fl-border-light);">
        <img src="${item.image}" alt="${item.productName}" style="width: 68px; height: 68px; border-radius: 12px; object-fit: cover; flex-shrink: 0;" />
        <div style="flex: 1;">
          <h4 style="font-size: 0.925rem; font-weight: 700; color: var(--fl-text); line-height: 1.25;">${item.productName}</h4>
          <div style="font-size: 0.775rem; color: var(--fl-text-secondary); margin-bottom: 0.35rem;">
            ${item.farmName} • ${item.location}
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div style="font-weight: 800; color: var(--fl-primary-dark); font-size: 0.95rem;">
              ${formatRupiah(item.price * item.quantity)}
            </div>
            <div class="fl-stepper">
              <button class="fl-stepper-btn" onclick="FarmlinkApp.changeQuantity('${item.productId}', ${item.quantity - 5})">-</button>
              <input type="text" class="fl-stepper-val" value="${item.quantity} kg" readonly />
              <button class="fl-stepper-btn" onclick="FarmlinkApp.changeQuantity('${item.productId}', ${item.quantity + 5})">+</button>
            </div>
          </div>
        </div>
        <button onclick="FarmlinkApp.removeFromCart('${item.productId}')" style="background:none; border:none; color: #CBD5E1; cursor:pointer; height:fit-content; padding: 2px;">
          <i class="bi bi-trash3"></i>
        </button>
      </div>
    `).join('');

    const totals = window.store.getCartTotal();
    footerEl.innerHTML = `
      <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.4rem; color: var(--fl-text-secondary);">
        <span>Subtotal (${totals.itemCount} batches)</span>
        <span style="font-weight: 600; color: var(--fl-text);">${formatRupiah(totals.subtotal)}</span>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.4rem; color: var(--fl-text-secondary);">
        <span>Refrigerated Delivery</span>
        <span style="font-weight: 600; color: var(--fl-text);">${formatRupiah(totals.deliveryFee)}</span>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 1.05rem; font-weight: 800; margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px dashed var(--fl-border);">
        <span>Estimated Total</span>
        <span style="color: var(--fl-primary-dark);">${formatRupiah(totals.total)}</span>
      </div>
      <a href="cart-checkout.html" class="fl-btn fl-btn-primary" style="width: 100%; margin-top: 1rem; border-radius: var(--fl-radius-pill);">
        Proceed to B2B Checkout <i class="bi bi-arrow-right"></i>
      </a>
    `;
  },

  changeQuantity(productId, newQty) {
    window.store.updateCartQuantity(productId, Math.max(0, newQty));
  },

  removeFromCart(productId) {
    window.store.removeFromCart(productId);
    FarmlinkToast.show("Item removed from cart", "info");
  },

  quickAddToCart(productId, qty = 10) {
    window.store.addToCart(productId, qty);
    const prod = window.store.getProductById(productId);
    FarmlinkToast.show(`Added ${qty} kg of ${prod ? prod.name : 'Produce'} to cart!`, 'success');
  },

  // Setup iOS mobile bottom navigation bar
  setupMobileBottomNav() {
    const existing = document.querySelector('.ios-bottom-nav');
    if (existing) return;

    const path = window.location.pathname;
    const nav = document.createElement('nav');
    nav.className = 'ios-bottom-nav';
    nav.innerHTML = `
      <a href="index.html" class="ios-nav-item ${path.endsWith('index.html') || path === '/' ? 'active' : ''}">
        <i class="bi bi-house"></i>
        <span>Home</span>
      </a>
      <a href="marketplace.html" class="ios-nav-item ${path.includes('marketplace') ? 'active' : ''}">
        <i class="bi bi-shop"></i>
        <span>Explore</span>
      </a>
      <a href="farms-map.html" class="ios-nav-item ${path.includes('farms-map') ? 'active' : ''}">
        <i class="bi bi-geo-alt"></i>
        <span>Farms</span>
      </a>
      <a href="#" class="ios-nav-item open-cart-btn ${path.includes('cart') ? 'active' : ''}">
        <i class="bi bi-cart3"></i>
        <span>Cart</span>
        <span class="badge-dot cart-badge-count" style="display:none;"></span>
      </a>
      <a href="${this.getDashboardLink()}" class="ios-nav-item ${path.includes('dashboard') ? 'active' : ''}">
        <i class="bi bi-person-circle"></i>
        <span>Portal</span>
      </a>
    `;
    document.body.appendChild(nav);

    // Rebind cart button inside newly injected nav
    nav.querySelector('.open-cart-btn').onclick = (e) => {
      e.preventDefault();
      this.openCartDrawer();
    };
  },

  getDashboardLink() {
    const user = window.store.getCurrentUser();
    if (!user) return 'auth.html';
    if (user.role === 'farmer') return 'farmer-dashboard.html';
    if (user.role === 'admin') return 'admin-dashboard.html';
    return 'buyer-dashboard.html';
  }
};

