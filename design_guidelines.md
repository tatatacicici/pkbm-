# Design Guidelines: KampusGratis LMS Platform

## Design Approach

**Selected Approach:** Design System + Educational Platform Reference  
**Primary References:** Canvas LMS, Google Classroom, Notion (for clean information architecture)  
**Justification:** Indonesian educational platform requiring clarity, trust, and accessibility for three distinct user roles (Admin, Pelajar, Guru) with localized interface.

## Core Design Principles

1. **Role-Based Clarity:** Distinct visual hierarchies for Admin, Pelajar, and Guru dashboards
2. **Trust & Security:** Professional appearance with clear role indicators
3. **Accessibility:** WCAG 2.1 AA compliance, mobile-first for Indonesian users
4. **Localized Experience:** Indonesian language support with culturally appropriate imagery

---

## Typography System

**Font Families:**
- **Primary:** Inter (via Google Fonts CDN)
- **Headings:** Inter, weight 600-700
- **Body:** Inter, weight 400-500

**Type Scale:**
- **H1:** text-4xl md:text-5xl, font-semibold
- **H2:** text-3xl md:text-4xl, font-semibold
- **H3:** text-2xl, font-semibold
- **Body:** text-base, font-normal
- **Small:** text-sm

---

## Layout System

**Spacing Units:** 2, 4, 6, 8, 12, 16, 20, 24
- Micro: p-2, gap-2
- Standard: p-4, gap-4, m-4
- Section: p-6, py-8
- Large: p-12, py-16, py-20

**Grid System:**
- Container: max-w-7xl mx-auto px-4 md:px-6 lg:px-8
- Forms: max-w-md
- Dashboards: max-w-4xl

---

## Page-Specific Design

### Login Page

**Layout:**
- Split-screen desktop (lg:grid lg:grid-cols-2)
- Left: Campus imagery with gradient overlay, institution logo (p-8), statistics badges
- Right: Login form (max-w-md mx-auto px-6 py-12)

**Form Elements:**
- Heading: "Selamat Datang Kembali" (text-3xl font-semibold mb-2)
- Subheading: "Masuk ke akun KampusGratis Anda" (text-base mb-8)
- Input fields: h-12, rounded-lg, px-4
- Button: w-full h-12 rounded-lg
- Footer: "Lupa password?" link (text-sm mt-6)

**Hero Image:** Full-height Indonesian campus scene with students in modern learning environment, natural lighting

### Role-Based Dashboards

**Admin Dashboard:**
- Top navbar: h-16, fixed, institution logo, user dropdown with "Admin" badge
- Sidebar: w-64 (Manajemen Users, Fakultas, Mata Kuliah, Events, Laporan)
- Main: Statistics cards grid (4 columns), user management table, recent activities

**Guru Dashboard:**
- Sidebar: Kelas Saya, Mata Kuliah, Nilai, Kalender
- Main: Active classes grid (3 columns), student progress charts, assignment queue

**Pelajar Dashboard:**
- Sidebar: Dashboard, Mata Kuliah Saya, Tugas, Nilai, Jadwal
- Main: Enrolled courses grid (3 columns), upcoming deadlines, grade overview

---

## Component Library

**Cards:**
- Standard: p-6, rounded-xl, shadow-sm
- Course card: aspect-video image, p-6 body with course code badge, title (text-lg font-semibold), instructor info, progress bar

**Badges:**
- Role: px-3 py-1, text-xs font-semibold, rounded-full (Admin: distinct styling, Guru: distinct styling, Pelajar: distinct styling)
- Status: px-2 py-0.5, text-xs, rounded

**Navigation:**
- Sidebar items: p-4, rounded-lg, mb-2 with Heroicons (20x20)
- Active state: distinct background
- User dropdown: avatar (w-10 h-10 rounded-full) + name + role badge

**Forms:**
- Input: h-12, px-4, rounded-lg, border-2
- Label: text-sm font-medium mb-2
- Button: h-12 px-6 rounded-lg font-medium

**Tables (Admin):**
- Headers: font-semibold, border-b
- Rows: p-4, hover state
- Actions: Icon buttons (w-8 h-8)

---

## Images

**Login Hero:** Indonesian university campus with students collaborating, modern facilities, natural daylight (gradient overlay for text contrast)

**Course Thumbnails:** Subject-specific imagery (aspect-video), default: branded placeholder with course code

**User Avatars:** Rounded-full with initials fallback

---

## Responsive Behavior

**Mobile (< 768px):** Single column, hamburger menu, stacked cards, bottom navigation for Pelajar
**Tablet (768px-1024px):** 2-column grids, collapsible sidebar
**Desktop (> 1024px):** 3-column grids, persistent sidebar, multi-column layouts

---

## Icons

**Library:** Heroicons (outline for navigation, solid for emphasis)
**Sizes:** 16x16 (small), 20x20 (standard), 24x24 (prominent)

---

## Animations

**Minimal Motion:**
- Hover: opacity/shadow changes (duration-200)
- Dropdowns: slide-down (duration-150)
- Loading: Skeleton screens
- No scroll effects or parallax

---

## Accessibility

- Touch targets: min 44px
- Focus: 4px ring offset
- Form validation: Visual + text
- Semantic HTML
- Contrast: 4.5:1 minimum
- ARIA labels on icon buttons