# Behaviors: realtorramonrodriguez.com

## Header
- **Position:** Fixed at top, z-index 32
- **Background:** #333 (solid dark gray)
- **Transition:** 0.4s (suggests scroll-triggered changes but header stays #333)
- **Box shadow:** rgba(0,0,0,0.1) 0px 8px 6px -6px (subtle bottom shadow)
- **Height:** 100px with padding 20px 0

## Hero Video Background
- **Source:** video-bg-home.mp4 (Miami skyline aerial footage)
- **Behavior:** autoplay, loop, muted
- **Container:** .ip-video class, fills section (1440x900)
- **Overlay:** Content overlays video with text

## Featured Listings Carousel
- **Type:** Click-driven carousel
- **Mechanism:** IDXBoost greatslider jQuery plugin
- **Controls:** 4 pagination dots + auto-advance
- **Visible cards:** 3 at a time on desktop, 1 on mobile
- **Card interactions:** Image prev/next buttons, favorite heart button
- **Status badges:** "Pending", "new listing", "Active Under Contract" on some cards

## Property Card Image Carousel
- **Type:** Click-driven (prev/next buttons)
- **Per-card:** Each listing card has its own image carousel

## New Constructions Carousel
- **Type:** Click-driven carousel
- **Controls:** Left/right arrow buttons
- **Visible cards:** 3 at desktop, 1 at mobile
- **Card content:** Background image with title overlay at bottom

## Search Bar
- **Type:** Form with select dropdown + text input + search button
- **Dropdown options:** "For Sale", "For Rent"
- **Input placeholder:** "Enter an address, city, zip code or MLS number"
- **Link below:** "+ Advanced search options" (white text, links to /search)

## Language Selector
- **Type:** Click dropdown
- **Options:** EN (default), ES, BR

## Login/Register
- **Type:** Modal/panel system (IDXBoost auth)

## Responsive Breakpoints
- **Desktop:** Full nav visible, 3-col listings, 3-col new constructions
- **Mobile (390px):** Hamburger menu, 1-col listings, 1-col new constructions, stacked layout

## No Smooth Scroll
- No Lenis, Locomotive, or other smooth scroll library
- Standard browser scroll behavior
