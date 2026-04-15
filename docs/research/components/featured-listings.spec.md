# FeaturedListings Specification

## Overview
- **Target file:** `src/components/FeaturedListings.tsx`
- **Interaction model:** click-driven carousel

## Structure
Section heading + carousel of property cards + pagination dots + View All button.

## Computed Styles

### Section heading
- font-family: Raleway, sans-serif
- font-size: 32px
- font-weight: 400
- color: rgb(51, 51, 51)
- text-align: center

### View All button
- font-family: Lora, serif
- background-color: rgb(51, 51, 51)
- color: rgb(255, 255, 255)
- padding: 16px 24px
- width: 230px
- border: 1px solid rgb(51, 51, 51)
- border-radius: 0

## Carousel
- 3 visible cards on desktop, 1 on mobile
- 4 pages of content
- Click-driven pagination dots

## Data
12 property listings with address, price, beds, baths, sqft, optional status badge.
