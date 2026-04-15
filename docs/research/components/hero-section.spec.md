# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** static (video autoplay, search form)

## Structure
Full-viewport section with video background, heading text, and search bar.

## Computed Styles

### Section container
- height: 850px (desktop/tablet/mobile)
- min-height: 850px
- display: flex
- justify-content: center
- align-items: center
- position: relative
- padding: 35px 0 75px

### Heading (h4)
- font-family: Raleway, sans-serif
- font-size: 60px (desktop), 50px (mobile)
- font-weight: 400
- color: rgb(255, 255, 255)
- line-height: 67.5px

### Search bar container
- width: 650px
- height: 50px
- border-radius: 2px
- display: flex
- background: white

### Search select
- width: 130px
- font-size: 14px
- color: black
- background: white

### Search input
- font-size: 14px
- padding: 0 47px 0 10px
- height: 50px

### Advanced search link
- color: white
- font-size: 14px

## Assets
- Video: `/videos/video-bg-home.mp4` (autoplay, loop, muted)

## Text Content
- "A fresh take on"
- "your real estate journey"
- "+ Advanced search options"
