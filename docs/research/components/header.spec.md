# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Screenshot:** `docs/design-references/desktop-fullpage-1440.png` (top area)
- **Interaction model:** static + click-driven (mobile menu, language dropdown)

## Structure
Two-row fixed header:
1. TopBar: social links, language selector, contact info, login/register
2. Navbar: brand name + Avanti Way logo, nav links, Contact button

## Computed Styles

### Header container
- position: fixed
- top: 0px
- z-index: 32
- background-color: rgb(51, 51, 51)
- height: 100px
- width: 100%
- box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 6px -6px
- transition: 0.4s
- padding: 20px 0

### Nav links
- font-family: "Open Sans", sans-serif
- font-size: 15px
- color: rgb(255, 255, 255)

### Contact button
- background-color: rgb(51, 51, 51)
- color: rgb(255, 255, 255)
- border: 1px solid white
- padding: 8px 20px

## States & Behaviors
### Mobile menu
- Trigger: click on hamburger icon (below 768px)
- Opens full-screen overlay with nav links

## Assets
- Avanti Way logo: `/images/logo-avanti-white.png`
- Icons: FacebookIcon, YoutubeIcon, InstagramIcon, LinkedinIcon, MenuIcon, XIcon

## Text Content
- Brand: "Realtor Ramon Rodriguez"
- Subtitle: "Coach de Real Estate - Broker Associate"
- Nav: Home, Featured Listings, Search, New Developments, About, The Avanti Way
- Contact info: ramon@avantiway.com, +1(305) 497-5435

## Responsive Behavior
- Desktop: Full two-row layout
- Mobile (<768px): Hamburger menu, TopBar hidden
