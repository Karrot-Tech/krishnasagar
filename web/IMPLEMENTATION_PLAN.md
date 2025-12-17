# Master Implementation Plan: Sai Leela Rahasya

## Project Goal
Build a multilingual, static web application (PWA) to serve as a digital study guide for Krishnaji's teachings, featuring a lightweight stack (Next.js + Tailwind + Static JSON).

---

## Phase 1: Setup & Infrastructure [COMPLETED]
**Goal**: Establish the technical foundation and global layout.

### 1.1 Project Setup
- **Stack**: Next.js 15 (App Router), Tailwind CSS v4, TypeScript.
- **Theme**: Custom "White, Ochre, Gold" palette.
- **Status**: ✅ Done.

### 1.2 Data Structure
- **Files**: `glossary.json` (multilingual), `chapters.json` (mock YouTube IDs).
- **Status**: ✅ Done.

### 1.3 Global Layout
- **Components**:
    - `Header`: Fixed top bar with Title, Hamburger, Search.
    - `BottomNav`: Fixed bottom bar for mobile-first navigation.
    - `Layout`: Wrapper enforcing the shell structure.
- **Status**: ✅ Done.

### 1.4 Language Support
- **Feature**: Global language switch (`en`, `es`, `hi`).
- **Tech**: React Context + LocalStorage persistence.
- **Status**: ✅ Done.

---

## Phase 2: Core Feature Implementation [IN PROGRESS]
**Goal**: Implement the primary content and interactivity.

### 2.1 Interactive Satcharitra [COMPLETED]
- **Routes**: `/satcharitra` (List), `/satcharitra/[id]` (Detail).
- **UI**: 
    - Desktop: Sticky Video (Left) + Scrollable Text (Right).
    - Mobile: Stacked layout.
- **Status**: ✅ Done.

### 2.2 Universal Glossary [COMPLETED]
- **Route**: `/glossary`.
- **Features**: Client-side Search (Terms/Definitions), Sorting (A-Z).
- **Status**: ✅ Done.

### 2.3 Glossary Overlay (Tap-to-Define) [COMPLETED]
- **Analysis**: `ChapterTextViewer` component parsing text with Regex.
- **UI**: Interactive Gold text -> Overlay Card with definition.
- **Status**: ✅ Done.

### 2.4 PWA Manifest & Deployment [PENDING]
**Goal**: Make the app installable (Add to Home Screen).
- **Changes**:
    - [ ] Create `public/manifest.json` (Name, Icons, `display: standalone`).
    - [ ] Add `viewport` meta tags for mobile optimization.
    - [ ] Ensure static export configuration (if deploying to strictly static host) or standalone build.

### 2.5 Satsang Community Feature [PENDING]
**Goal**: "Upcoming Events" page.
- **Data**: Create `src/data/satsangs.json` (Events list).
- **Route**: `/satsang` page.
- **UI Components**:
    - **Header**: Inspiring quote.
    - **Live Banner**: Highlight "Happening Now" or next immediate event.
    - **Event List**: Card-based list of upcoming and past gatherings.

---

## Phase 3: Content Integration & Refinement [FUTURE]
**Goal**: Polish, SEO, and Real Data integration.

### 3.1 Dynamic Content
- **Task**: Replace mock YouTube IDs with real API data (or expanded JSON).
- **Task**: Implement "Subtitle Sync" mock (highlight text based on video timestamp).

### 3.2 SEO & Accessibility
- **Tasks**:
    - Dynamic Metadata (Title/Description per chapter).
    - A11y Audit (Contrast, Screen Reader checks).

### 3.3 Final Build
- **Task**: Full production build and verification on hosting platform (Vercel/Firebase).
