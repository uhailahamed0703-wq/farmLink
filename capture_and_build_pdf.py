import os
import subprocess
import time

CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
USER_DATA_DIR = "/tmp/chrome_dev_user_data"
SCREENSHOTS_DIR = "/Users/uhailahamed/farmlink/screenshots"

os.makedirs(SCREENSHOTS_DIR, exist_ok=True)

VIEWS = [
    {
        "id": "01_auth_page",
        "title": "1. Authentication & Role Selection (`auth.html`)",
        "url": "http://localhost:3000/auth.html",
        "filename": "01_auth_page.png",
        "window_size": "1280,920",
        "category": "Security & Access",
        "target_users": "Farmers, Commercial Business Buyers, Platform Administrators",
        "description": "This is the primary gateway for all Farmlink platform users. It provides streamlined authentication with dedicated tabbed registration workflows tailored to specific user types.",
        "key_features": [
            "1-Click Instant Demo Profiles (Chef Dewa for Buyers, Pak Asep for Farmers, and Farmlink Operations Lead for Admin)",
            "Farmer Registration Form with specialized fields: Farm Commercial Name, West Java Location, Land Size (Hectares), and Cultivation Method",
            "Business Buyer Registration Form for Restaurants, Supermarkets, Hotels, and Industrial Catering with business addresses and license info",
            "Local storage session persistence allowing immediate redirect to role-specific dashboards"
        ],
        "business_value": "Eliminates friction in onboarding rural farmers and busy executive chefs, with clear role separation and rapid demo switching for stakeholders."
    },
    {
        "id": "02_landing_hero",
        "title": "2. Public Marketplace Landing Page (`index.html`)",
        "url": "http://localhost:3000/index.html",
        "filename": "02_landing_hero.png",
        "window_size": "1280,950",
        "category": "Customer Acquisition & Overview",
        "target_users": "Prospective Restaurant Owners, Hotel F&B Directors, Agricultural Growers",
        "description": "The flagship landing page establishing Farmlink's brand, value proposition, and live agricultural price index. Designed with an Apple iOS aesthetic, soft green palette, and real agricultural landscape photography.",
        "key_features": [
            "Live West Java Farm Gate Price Index ticker showing real-time commodity rates (Romaine, Tomatoes, Chillies, Potatoes)",
            "Dynamic platform impact statistics: 580+ Verified Farms, 1,420 Tons Delivered, 320+ Businesses, and <4.5 Hour harvest-to-kitchen delivery slot",
            "Direct action buttons to explore wholesale produce, join as a farmer, or open the interactive West Java map",
            "Universal demo mode bar at the top allowing instant switching between user roles"
        ],
        "business_value": "Establishes transparency from day one by displaying benchmark farm-gate prices and building trust with commercial buyers seeking to cut out middlemen."
    },
    {
        "id": "03_marketplace",
        "title": "3. Wholesale B2B Produce Marketplace (`marketplace.html`)",
        "url": "http://localhost:3000/marketplace.html",
        "filename": "03_marketplace.png",
        "window_size": "1280,950",
        "category": "Procurement & Trading",
        "target_users": "Commercial Kitchen Buyers, Supermarket Procurement Leads, Food Businesses",
        "description": "The core e-commerce procurement engine. Commercial buyers can search, filter, and buy fresh agricultural produce directly from verified growers with wholesale volume tier pricing.",
        "key_features": [
            "Instant multi-attribute search across crop varieties, farmer names, and West Java highland locations",
            "Horizontal category filter pills: Vegetables, Leafy Greens, Root Crops, Fruits, Culinary Herbs, and Organic Specialties",
            "Advanced sidebar filters: Farming Method (Organic, Pesticide-Free, GAP), Origin Regency (Lembang, Pangalengan, Cianjur, Sukabumi, Subang), and Max Price Slider",
            "High-resolution crop photography with harvest dates, available stock in kg, customer star ratings, and 1-click quantity stepper"
        ],
        "business_value": "Enables commercial kitchens to order grade-A farm produce in wholesale quantities (50-500+ kg) with guaranteed price consistency and cold-chain integrity."
    },
    {
        "id": "04_product_detail",
        "title": "4. Product Specifications & Wholesale Tiers (`product-detail.html`)",
        "url": "http://localhost:3000/product-detail.html?id=PRD-001",
        "filename": "04_product_detail.png",
        "window_size": "1280,950",
        "category": "Product Intelligence",
        "target_users": "Executive Chefs, Purchasing Managers, Quality Control Inspectors",
        "description": "Comprehensive specification sheet for individual produce batches, including multi-tier volume discounts, farm verification certificates, and cold shelf-life data.",
        "key_features": [
            "Automated wholesale volume discount calculator (e.g. 25+ kg saves 5%, 100+ kg saves 12%)",
            "Integrated Batch Traceability strip with direct link to lab pesticide audit certificates",
            "Verified Producer Card showing farmer avatar, land size, farming practices, and direct WhatsApp contact",
            "Technical harvest metrics: Harvest date, cold shelf life at 6-8°C, minimum order quantity, and pesticide residue verification (0.0 ppm)"
        ],
        "business_value": "Gives culinary professionals complete confidence in produce freshness and safety while rewarding volume purchasing with automated wholesale pricing."
    },
    {
        "id": "05_farms_map",
        "title": "5. Nearby Farms Interactive Discovery Map (`farms-map.html`)",
        "url": "http://localhost:3000/farms-map.html",
        "filename": "05_farms_map.png",
        "window_size": "1280,950",
        "category": "Geospatial Discovery",
        "target_users": "Regional Buyers, Sustainability Officers, Farm Inspectors",
        "description": "An interactive map powered by Leaflet and OpenStreetMap displaying verified agricultural clusters throughout West Java (Lembang, Pangalengan, Cicurug, Pacet, Subang, Bogor).",
        "key_features": [
            "Interactive custom Leaflet farm pins color-coded by certification (Green for Organic, Blue for Pesticide-Free)",
            "Distance radius slider (15 to 120 km) with instant real-time distance calculations from buyer's kitchen location in Bandung",
            "Synchronized split-screen layout: Clicking a farm in the sidebar smoothly flies the map and opens a rich preview popup",
            "Farming method dropdown filter and direct links to public farm profiles"
        ],
        "business_value": "Empowers businesses to source hyper-locally to reduce food miles, minimize transit emissions, and guarantee same-day farm-to-table freshness."
    },
    {
        "id": "06_farmer_profile",
        "title": "6. Public Farmer Profile & Crop Catalog (`farmer-profile.html`)",
        "url": "http://localhost:3000/farmer-profile.html?id=F01",
        "filename": "06_farmer_profile.png",
        "window_size": "1280,950",
        "category": "Producer Transparency",
        "target_users": "Restaurant Chefs, Hotel F&B Buyers, Agricultural Partners",
        "description": "A dedicated public profile page celebrating the grower's heritage, land stewardship, official government certifications, and live available crops ready to order.",
        "key_features": [
            "Highland farm landscape cover photo, farmer portrait, and verified producer green seal",
            "Operational statistics: Cultivated land area (4.5 Ha), farming methodology, customer rating (4.9/5.0), and 580+ completed B2B deliveries",
            "Farm story detailing 3rd-generation heritage, regenerative soil practices, and mountain spring water irrigation",
            "Live catalog of active harvest listings ready for immediate procurement"
        ],
        "business_value": "Transforms anonymous agricultural commodities into human stories of craftsmanship, allowing restaurants to market authentic farm partnerships to their dining patrons."
    },
    {
        "id": "07_cart_checkout",
        "title": "7. Wholesale Procurement Cart & B2B Checkout (`cart-checkout.html`)",
        "url": "http://localhost:3000/cart-checkout.html",
        "filename": "07_cart_checkout.png",
        "window_size": "1280,950",
        "category": "Order Processing & Payment",
        "target_users": "Restaurant Purchasing Managers, Finance Teams, Logistics Coordinators",
        "description": "Consolidated B2B checkout handling multi-vendor farm orders, refrigerated cold-chain scheduling, delivery notes, and enterprise payment terms.",
        "key_features": [
            "Multi-item produce manifest with quantity steppers and automated bulk price recalculation",
            "Delivery scheduler with early morning kitchen arrival slots (05:00 - 07:30 AM prep window)",
            "Special handling notes for loading docks, kitchen bells, and produce temperature verification",
            "Enterprise payment options: BCA Corporate Virtual Account, Mandiri Net-30 invoice credit, and instant B2B QRIS"
        ],
        "business_value": "Accommodates commercial restaurant accounting standards (Net-30 payment terms) while organizing morning delivery logistics before daily lunch service begins."
    },
    {
        "id": "08_order_tracking",
        "title": "8. 7-Step Logistics Delivery Tracking (`order-tracking.html`)",
        "url": "http://localhost:3000/order-tracking.html?id=ORD-2026-881",
        "filename": "08_order_tracking.png",
        "window_size": "1280,950",
        "category": "Cold-Chain Logistics",
        "target_users": "Receiving Staff, Head Chefs, Transport Dispatchers",
        "description": "Comprehensive cold-chain delivery tracker featuring a 7-step telemetry timeline from farm harvest to kitchen delivery, live vehicle sensor data, and interactive status simulation.",
        "key_features": [
            "7-Step interactive delivery progress timeline: Order Placed -> Farmer Accepted -> Preparing Harvest -> Harvest Completed -> Picked Up -> In Transit -> Delivered",
            "Live refrigerated cold-box telemetry sensor monitoring (6.8°C target temperature)",
            "Dedicated driver information with direct Call and WhatsApp quick-connect buttons",
            "Built-in Demo Status Simulator allowing evaluators to step forward or rewind delivery status in real-time"
        ],
        "business_value": "Provides total visibility over perishable fresh vegetables, preventing cold-chain breaks and ensuring kitchens know exactly when morning ingredients arrive."
    },
    {
        "id": "09_traceability",
        "title": "9. QR Code Batch Traceability Certificate (`traceability.html`)",
        "url": "http://localhost:3000/traceability.html?batch=BATCH-ROM-2026-081",
        "filename": "09_traceability.png",
        "window_size": "1280,950",
        "category": "Food Safety & Compliance",
        "target_users": "Food Safety Officers, Michelin-starred Chefs, Hotel Auditors",
        "description": "Digital farm-to-table certificate confirming the authenticity, agricultural provenance, chemical residue analysis, and harvesting conditions for any individual crop crate.",
        "key_features": [
            "Official Farmlink cryptographic batch seal and unique Batch ID tracking",
            "Certified laboratory pesticide residue report: 0.0 ppm (Passed Sucofindo audit)",
            "Exact dawn harvesting timestamp and soil altitude records (1,250 meters above sea level)",
            "Integrated camera QR barcode scanner support plus instant sample batch selector pills for testing"
        ],
        "business_value": "Solves food safety liability for high-end dining and hospital catering by providing verifiable, audit-ready proof of clean, chemical-free agricultural practices."
    },
    {
        "id": "10_farmer_dashboard",
        "title": "10. Dedicated Farmer Dashboard (`farmer-dashboard.html`)",
        "url": "http://localhost:3000/farmer-dashboard.html",
        "filename": "10_farmer_dashboard.png",
        "window_size": "1280,950",
        "category": "Producer Operations",
        "target_users": "Agricultural Producers, Farm Managers, Rural Farming Cooperatives",
        "description": "The command center for farmers to manage their business: list upcoming harvests, update stock, accept incoming restaurant purchase orders, and monitor bank earnings.",
        "key_features": [
            "Key operational metrics: Active listed crops, pending morning harvest orders, and monthly revenue (Rp 48.250.000)",
            "Add Harvest Listing modal with real agricultural image selection, price per kg, and GAP farming labels",
            "Order management workflow with actions to accept orders, initiate harvest, and signal courier cold pickup",
            "Earnings tab with bank payout history and 1-click withdrawal requests to local Indonesian banks (BCA/Mandiri)"
        ],
        "business_value": "Empowers smallholder and commercial farmers with simple, accessible digital tools to sell directly to premium commercial buyers without relying on middlemen."
    },
    {
        "id": "11_buyer_dashboard",
        "title": "11. Commercial Business Buyer Dashboard (`buyer-dashboard.html`)",
        "url": "http://localhost:3000/buyer-dashboard.html",
        "filename": "11_buyer_dashboard.png",
        "window_size": "1280,950",
        "category": "Procurement Management",
        "target_users": "Executive Chefs, Restaurant General Managers, Supermarket Fresh Category Leads",
        "description": "Procurement hub for commercial buyers to manage ongoing standing subscriptions, active logistics deliveries, repeat farmer relationships, and monthly spending.",
        "key_features": [
            "Procurement spending overview: Total orders, active shipments, monthly budget, and active recurring subscriptions",
            "Standing automated delivery subscriptions (e.g. Weekly Monday & Thursday lettuce and tomato restocks)",
            "Saved Farmers directory with 1-click re-order capabilities",
            "Live active delivery monitoring card with cold-box telemetry status and direct tracking links"
        ],
        "business_value": "Automates routine kitchen ingredient procurement so chefs can focus on culinary creation rather than negotiating produce deliveries each morning."
    },
    {
        "id": "12_admin_dashboard",
        "title": "12. Administrator Operations Portal (`admin-dashboard.html`)",
        "url": "http://localhost:3000/admin-dashboard.html",
        "filename": "12_admin_dashboard.png",
        "window_size": "1280,950",
        "category": "Governance & Platform Control",
        "target_users": "Farmlink Operations Team, Platform Executives, Quality Assurance Auditors",
        "description": "System-wide administration portal for auditing farmer verification requests, overseeing platform gross merchandise value (GMV), and moderating agricultural listings.",
        "key_features": [
            "High-level financial telemetry: Platform GMV (Rp 842,5 Million), 1,420 completed orders, and active farmer counts",
            "Interactive Chart.js visualizations: Monthly GMV growth curve and West Java supply distribution by regency",
            "Farmer Verification Approval Queue: Inspect land certificates and grant official verified green seals",
            "Global order feed and product catalog moderation tools"
        ],
        "business_value": "Maintains strict quality standards across the two-sided agricultural marketplace, ensuring only verified farms and reputable commercial businesses transact."
    }
]

print("=== STEP 1: Capturing High-Resolution Screenshots ===")

for idx, view in enumerate(VIEWS, 1):
    output_path = os.path.join(SCREENSHOTS_DIR, view["filename"])
    print(f"[{idx}/{len(VIEWS)}] Capturing {view['title']} -> {view['filename']}...")
    
    cmd = [
        CHROME_PATH,
        "--headless=new",
        "--disable-gpu",
        f"--user-data-dir={USER_DATA_DIR}",
        f"--window-size={view['window_size']}",
        f"--screenshot={output_path}",
        view["url"]
    ]
    
    res = subprocess.run(cmd, capture_output=True, text=True)
    if os.path.exists(output_path):
        size_kb = os.path.getsize(output_path) // 1024
        print(f"  ✓ Captured ({size_kb} KB)")
    else:
        print(f"  ✗ Failed: {res.stderr}")
    time.sleep(0.5)

print("\n=== STEP 2: Generating HTML Presentation Report ===")

html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>FARMLINK – Complete View-by-View System Architecture & UI/UX Documentation</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
    
    @page {{
      size: A4 portrait;
      margin: 15mm 15mm 15mm 15mm;
    }}
    
    * {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
    }}
    
    body {{
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      color: #18251D;
      background: #FFFFFF;
      line-height: 1.5;
      font-size: 11pt;
    }}
    
    /* Cover Page */
    .cover-page {{
      page-break-after: always;
      height: 96vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 40px 20px;
      border: 3px solid #16834A;
      border-radius: 20px;
      background: linear-gradient(175deg, #FAFDFB 0%, #EAF7EF 100%);
    }}
    
    .cover-badge {{
      display: inline-block;
      background: #16834A;
      color: #FFFFFF;
      font-size: 10pt;
      font-weight: 700;
      padding: 6px 16px;
      border-radius: 999px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }}
    
    .cover-title {{
      font-size: 38pt;
      font-weight: 900;
      color: #105C37;
      line-height: 1.1;
      margin: 20px 0 10px 0;
      letter-spacing: -0.03em;
    }}
    
    .cover-tagline {{
      font-size: 16pt;
      font-weight: 600;
      color: #16834A;
      margin-bottom: 25px;
    }}
    
    .cover-desc {{
      font-size: 12pt;
      color: #4A5568;
      max-width: 650px;
      line-height: 1.6;
    }}
    
    .cover-meta-grid {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
      margin-top: 30px;
      padding-top: 25px;
      border-top: 2px dashed #C8E8D5;
    }}
    
    .cover-meta-item strong {{
      display: block;
      color: #105C37;
      font-size: 11pt;
      margin-bottom: 2px;
    }}
    
    .cover-meta-item span {{
      color: #64748B;
      font-size: 10pt;
    }}
    
    /* View Detail Pages */
    .view-page {{
      page-break-after: always;
      padding-top: 10px;
    }}
    
    .view-page:last-child {{
      page-break-after: avoid;
    }}
    
    .view-header {{
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      border-bottom: 2px solid #16834A;
      padding-bottom: 8px;
      margin-bottom: 12px;
    }}
    
    .view-title {{
      font-size: 16pt;
      font-weight: 800;
      color: #105C37;
    }}
    
    .view-category {{
      font-size: 9pt;
      font-weight: 700;
      background: #EAF7EF;
      color: #16834A;
      padding: 3px 10px;
      border-radius: 999px;
      border: 1px solid #C8E8D5;
    }}
    
    .view-screenshot-frame {{
      width: 100%;
      border-radius: 12px;
      overflow: hidden;
      border: 1.5px solid #CBD5E1;
      box-shadow: 0 4px 14px rgba(0,0,0,0.06);
      margin-bottom: 14px;
      background: #F8FAFC;
    }}
    
    .view-screenshot-img {{
      width: 100%;
      height: auto;
      max-height: 480px;
      object-fit: cover;
      object-position: top;
      display: block;
    }}
    
    .view-caption-card {{
      background: #F7F9F7;
      border-radius: 12px;
      border: 1px solid #E2E8F0;
      padding: 14px 18px;
    }}
    
    .view-caption-title {{
      font-size: 11pt;
      font-weight: 800;
      color: #105C37;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      gap: 6px;
    }}
    
    .view-meta-row {{
      display: flex;
      gap: 20px;
      font-size: 8.5pt;
      color: #64748B;
      margin-bottom: 8px;
      padding-bottom: 6px;
      border-bottom: 1px dashed #CBD5E1;
    }}
    
    .view-meta-row span strong {{
      color: #1E293B;
    }}
    
    .view-desc-text {{
      font-size: 9.5pt;
      color: #334155;
      line-height: 1.45;
      margin-bottom: 8px;
    }}
    
    .view-features-list {{
      list-style: none;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4px 15px;
      font-size: 8.5pt;
      color: #1E293B;
      margin-bottom: 8px;
    }}
    
    .view-features-list li {{
      position: relative;
      padding-left: 14px;
      line-height: 1.35;
    }}
    
    .view-features-list li::before {{
      content: "✓";
      position: absolute;
      left: 0;
      color: #16834A;
      font-weight: bold;
    }}
    
    .view-impact-box {{
      background: #EAF7EF;
      border-left: 3px solid #16834A;
      padding: 6px 12px;
      font-size: 8.5pt;
      color: #105C37;
      border-radius: 0 6px 6px 0;
    }}
  </style>
</head>
<body>

  <!-- COVER PAGE -->
  <div class="cover-page">
    <div>
      <span class="cover-badge">Platform System Architecture & UI/UX Audit</span>
      <h1 class="cover-title">FARMLINK</h1>
      <div class="cover-tagline">"Connecting Farms. Growing Businesses."</div>
      <p class="cover-desc">
        Farmlink is a production-grade agricultural B2B digital marketplace connecting local verified farmers with commercial food businesses—including restaurants, supermarkets, hotels, and institutional caterers. This document details each screen, interaction pattern, and business functionality across the ecosystem.
      </p>
    </div>

    <div>
      <div class="cover-meta-grid">
        <div class="cover-meta-item">
          <strong>Operating Environment</strong>
          <span>Local Development Stack (Node.js / Python HTTP 3000)</span>
        </div>
        <div class="cover-meta-item">
          <strong>Design System</strong>
          <span>Apple iOS Theme • Inter Typography • Emerald & Forest Green</span>
        </div>
        <div class="cover-meta-item">
          <strong>Geographic Pilot Area</strong>
          <span>West Java Agricultural Hub (Lembang, Pangalengan, Cianjur, Sukabumi, Subang)</span>
        </div>
        <div class="cover-meta-item">
          <strong>User Stakeholders</strong>
          <span>Farmers (Producers) • Commercial Buyers (F&B) • Platform Administrators</span>
        </div>
      </div>
    </div>
  </div>
"""

for view in VIEWS:
    features_html = "".join([f"<li>{feat}</li>" for feat in view["key_features"]])
    screenshot_src = f"screenshots/{view['filename']}"
    
    html_content += f"""
  <!-- PAGE: {view['id']} -->
  <div class="view-page">
    <div class="view-header">
      <h2 class="view-title">{view['title']}</h2>
      <span class="view-category">{view['category']}</span>
    </div>

    <!-- Screenshot Image -->
    <div class="view-screenshot-frame">
      <img src="{screenshot_src}" alt="{view['title']}" class="view-screenshot-img" />
    </div>

    <!-- Description & Analysis Under Screenshot -->
    <div class="view-caption-card">
      <div class="view-caption-title">
        <span>🔎 Overview & Interaction Architecture</span>
      </div>

      <div class="view-meta-row">
        <span><strong>Target Users:</strong> {view['target_users']}</span>
        <span><strong>Endpoint:</strong> <code>{view['url'].split('/')[-1]}</code></span>
      </div>

      <p class="view-desc-text">
        {view['description']}
      </p>

      <ul class="view-features-list">
        {features_html}
      </ul>

      <div class="view-impact-box">
        <strong>Strategic Business Value:</strong> {view['business_value']}
      </div>
    </div>
  </div>
"""

html_content += """
</body>
</html>
"""

report_html_path = "/Users/uhailahamed/farmlink/pdf_report.html"
with open(report_html_path, "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"✓ Created {report_html_path}")

print("\n=== STEP 3: Compiling to High-Quality PDF Document ===")
pdf_output_path = "/Users/uhailahamed/farmlink/farmlink_all_views_documentation.pdf"

cmd_pdf = [
    CHROME_PATH,
    "--headless=new",
    "--disable-gpu",
    f"--user-data-dir={USER_DATA_DIR}",
    "--print-to-pdf-no-header",
    f"--print-to-pdf={pdf_output_path}",
    f"file://{report_html_path}"
]

res = subprocess.run(cmd_pdf, capture_output=True, text=True)
if os.path.exists(pdf_output_path):
    size_mb = round(os.path.getsize(pdf_output_path) / (1024 * 1024), 2)
    print(f"\n🎉 SUCCESS: PDF generated successfully at:\n  {pdf_output_path} ({size_mb} MB)")
else:
    print(f"\n❌ Error generating PDF: {res.stderr}")

