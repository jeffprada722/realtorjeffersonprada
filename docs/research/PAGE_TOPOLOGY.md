# Page Topology: realtorramonrodriguez.com

## Overall Layout
- Single-page scrolling layout
- No scroll-snap, no smooth scroll library
- Fixed header (z-index: 32) overlays everything
- White body background (#fff)
- WordPress + IDXBoost (real estate IDX plugin)

## Sections (top to bottom)

### 1. TopBar (inside header)
- **Type:** Fixed overlay (part of header)
- **Content:** Social links (FB, YouTube, Instagram, LinkedIn), language selector (EN/ES/BR), email + phone, Login/Register buttons
- **Interaction:** Static, language dropdown on click
- **z-index:** 32 (part of header)

### 2. Navbar (inside header)
- **Type:** Fixed overlay (part of header)
- **Content:** Brand name "Realtor Ramon Rodriguez / Coach de Real Estate - Broker Associate" + Avanti Way logo, nav links (Home, Featured Listings, Search, New Developments, About, The Avanti Way), Contact button
- **Interaction:** Static navigation, transparent over hero
- **z-index:** 32

### 3. HeroSection
- **Type:** Flow content
- **Content:** Video background (MP4, autoplay, loop, muted), h4 headings "A fresh take on" / "your real estate journey" (white, Raleway 60px), search bar (For Sale/Rent dropdown + address input + search button), "+ Advanced search options" link
- **Interaction:** Search bar is functional (form submit), select dropdown
- **Height:** 850px (desktop/tablet/mobile)
- **Dependencies:** Video asset

### 4. FeaturedListings
- **Type:** Flow content
- **Content:** h4 "Featured Listings" (Raleway 32px, centered), carousel of property cards (12 listings, 3 visible at a time), pagination dots (4 pages), "View All" button
- **Interaction:** Click-driven carousel (dots + auto), listing card image prev/next, favorite button
- **Card data:** Address, price, beds, baths, sqft, image, status badges (Pending, New Listing, Active Under Contract)

### 5. AboutSection
- **Type:** Flow content
- **Content:** Italic subtitle "Coach de Real Estate - Broker Associate" (16px, #777272), name "Realtor Ramon Rodriguez" (36px, black), bio paragraph (Spanish), "Meet" button (dark, links to /contact)
- **Interaction:** Static
- **Layout:** Two-column (text left, image right) on desktop, stacks on mobile

### 6. NewConstructions
- **Type:** Flow content
- **Content:** h4 "New Constructions" (Raleway 32px), carousel of development cards (6 items), prev/next arrow buttons, "View All" button
- **Interaction:** Click-driven carousel with arrow navigation
- **Cards:** Mercedes-Benz Places Miami, Shoma Bay, The Rider Residences, Domus Brickell Center, Ponce Park, 7200 Ave

### 7. CtaBanner
- **Type:** Flow content
- **Content:** "Turning Listings Into Landmarks," (50px) + "One Home at a Time." (48px), white text on #333 background
- **Interaction:** Static
- **Overlay:** Solid #333 background overlay

### 8. Footer
- **Type:** Flow content
- **Content:** Brand name + subtitle, Avanti Way logo, phone, email, address (8400 NW 33rd St, Unit 104, Doral, FL 33139), social links, legal disclaimer, TREM GROUP logo + "Powered by", Terms & Conditions, Privacy Policy, Accessibility, copyright
- **Background:** #333
- **Text:** White

## Font Stack
1. **Raleway** (headings: h4 section titles, hero heading)
2. **Open Sans** (body text, paragraphs)
3. **Lora** (button text)

## Color Palette
- Primary dark: #333333 (rgb(51,51,51)) - buttons, footer bg, header bg, CTA bg
- Black: #000000 - some text
- White: #ffffff - hero text, button text, footer text
- Muted gray: #777272 (rgb(119,114,114)) - subtitle text
- Light blue-gray: #EFF3FC - menu profile bg (minor)
