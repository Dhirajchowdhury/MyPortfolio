# 🚀 Next.js Portfolio - World-Class Developer Portfolio

A jaw-dropping, futuristic portfolio website built with Next.js 14, featuring dark glassmorphism design, GSAP animations, Three.js effects, and physics-based interactions.

## ✨ Features Implemented

### 🎨 Design System
- **Dark Glassmorphism Theme** - Premium frosted glass effects throughout
- **Domain Color Coding** - Cyan (Frontend), Green (AI/ML), Purple (Blockchain), White (Full Stack)
- **Custom Cursor** - Glowing cyan orb with hover scaling
- **Smooth Scroll** - Lenis integration for buttery smooth scrolling
- **Noise Texture** - Subtle grain overlay for premium feel
- **HUD Corners** - Futuristic L-shaped corner brackets

### 📦 Completed Sections

#### 0. Preloader ✅
- Glitch text animation with GSAP TextPlugin
- Progress bar with cyan glow
- Burst exit animation

#### 1. Navbar ✅
- Transparent → frosted glass on scroll
- Active section highlighting
- Mobile hamburger menu with staggered animations
- Smooth scroll to sections

#### 2. Hero Section ✅
- HUD-style box with glowing corners
- Kinetic split text animation (roles cycle with flying letters)
- Profile photo with scanning effect and geometric overlay
- Aurora gradient blob background
- Three.js star particle field
- Social links with hover effects

#### 3. Tech Bike Scroll Sequence ✅
- GSAP ScrollTrigger pinned animation
- Tech icons fly in from random directions
- Assemble into Royal Enfield silhouette
- Wheels spin continuously
- Bike rides off screen
- Grid perspective background

#### 4. About + ID Card Section ✅
- Split layout: scrollable content + sticky ID card
- **ID Card Features:**
  - Metallic clip at top
  - Physics-based draggable ribbons
  - 3D mouse parallax tilt
  - Holographic shimmer following mouse
  - Click to flip (180° rotation)
  - Front: Photo, name, skills, college info
  - Back: QR code, quote, contact info, magnetic stripe

#### 5. Photo Marquee ✅
- Infinite horizontal scrolling
- Tilted photos (±2deg alternating)
- Glassmorphism frames
- Gradient edge masks
- Pause on hover

#### 6. Skills Section ✅
- Filterable by domain (All, Frontend, Backend, AI/ML, Blockchain, Tools)
- GSAP entrance animation (fly in from random directions)
- Domain-colored glow borders
- Hover scale effects
- 25+ tech stack icons

### 🎯 Remaining Sections (Placeholders Added)

- **Projects** - Filterable project cards with hover effects
- **Experience/Timeline** - Vertical glowing timeline
- **Achievements** - Grid with shimmer animations
- **Blog** - 3 featured articles with tilt effect
- **Contact** - Form + 3D grid background
- **Footer** ✅ - Completed with gradient line and social links

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + CSS Modules
- **Animations:** GSAP (ScrollTrigger, TextPlugin), Framer Motion
- **3D:** Three.js, @react-three/fiber, @react-three/drei
- **Smooth Scroll:** Lenis
- **Physics:** React Spring, Matter.js (for ribbons)
- **Icons:** React Icons, Simple Icons
- **Deployment:** Vercel

## 📁 Project Structure

```
nextjs-portfolio/
├── app/
│   ├── layout.js          # Root layout with Lenis, cursor, preloader
│   ├── page.js            # Main page with all sections
│   └── globals.css        # Global styles, design system
├── components/
│   ├── ui/
│   │   ├── CustomCursor.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Preloader.jsx
│   │   ├── Hero.jsx
│   │   ├── TechBike.jsx
│   │   ├── About.jsx
│   │   ├── PhotoMarquee.jsx
│   │   └── Skills.jsx
│   ├── three/
│   │   └── HeroParticles.jsx
│   └── id-card/
│       ├── IDCard.jsx
│       ├── Ribbon.jsx
│       ├── CardFront.jsx
│       └── CardBack.jsx
├── data/
│   ├── skills.js
│   ├── projects.js
│   ├── experience.js
│   ├── achievements.js
│   └── blog.js
└── public/
    └── images/           # Add your images here
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. **Navigate to project:**
```bash
cd nextjs-portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Add your images:**
Place your images in `public/images/`:
- `profile.jpg` - Your profile photo
- `photo1.jpg` to `photo6.jpg` - Personal photos for marquee
- `project1.jpg` to `project6.jpg` - Project screenshots

4. **Update placeholders:**
Search for `[YOUR_NAME]`, `[YOUR_EMAIL]`, `[COLLEGE_NAME]`, etc. and replace with your actual information.

5. **Run development server:**
```bash
npm run dev
```

6. **Open browser:**
Navigate to `http://localhost:3000`

## 🎨 Customization

### Colors
Edit `app/globals.css`:
```css
:root {
  --accent-cyan: #00f5ff;
  --accent-green: #39ff14;
  --accent-purple: #7c3aed;
}
```

### Content
Update data files in `/data` folder:
- `skills.js` - Your tech stack
- `projects.js` - Your projects
- `experience.js` - Work history
- `achievements.js` - Awards & certifications
- `blog.js` - Blog posts

### Fonts
Current fonts (loaded from Google Fonts):
- **Headings:** Space Grotesk
- **Body:** Inter
- **Code:** JetBrains Mono

Change in `app/globals.css` if needed.

## 📱 Responsive Design

- **Desktop (1280px+):** Full experience with all animations
- **Tablet (768px-1279px):** Adapted layouts, scaled elements
- **Mobile (<768px):** Single column, Three.js replaced with SVG, touch-friendly

## ⚡ Performance

- Lazy loading for Three.js components
- Dynamic imports with `ssr: false`
- Optimized images with Next.js Image component
- GSAP context cleanup
- Respects `prefers-reduced-motion`

## 🎯 Next Steps

1. Complete remaining sections (Projects, Experience, Blog, Contact)
2. Add real content and images
3. Test across all devices
4. Deploy to Vercel
5. Connect custom domain

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**[YOUR_NAME]**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

---

Built with ❤️ using Next.js, GSAP, Three.js, and lots of coffee ☕
