# Christian Borja - Personal Trainer Website

A modern, SEO-optimized, mobile-responsive website for Christian Borja's holistic health & fitness coaching business in San Diego, CA.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** TailwindCSS
- **Language:** TypeScript
- **Deployment:** Static export (no backend required)

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ SEO optimized with proper meta tags and semantic HTML
- ✅ Fast performance with Next.js static export
- ✅ Modern, clean UI with green/natural color scheme
- ✅ Multiple service offerings showcase
- ✅ Testimonials and before/after section
- ✅ Service areas coverage for San Diego
- ✅ Contact form and call-to-action sections
- ✅ Smooth scroll navigation

## Project Structure

```
personal-trainer/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer with links
│   ├── HeroSection.tsx     # Hero section with CTA
│   ├── ServicesSection.tsx # Services grid
│   ├── AboutSection.tsx    # About/benefits section
│   ├── TestimonialsSection.tsx  # Client testimonials
│   ├── ServiceAreasSection.tsx  # San Diego service areas
│   ├── CTASection.tsx      # Call-to-action section
│   └── ContactSection.tsx  # Contact form
├── assets/
│   └── images/             # Image assets
└── public/                 # Static assets
```

## Getting Started

### Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

Build the static site:
```bash
npm run build
```

This creates an optimized production build in the `out/` directory.

### Deploy

The site is configured as a static export and can be deployed to any static hosting service:

- **Vercel:** Connect your repository and deploy automatically
- **Netlify:** Drag and drop the `out/` folder or connect repository
- **GitHub Pages:** Push the `out/` folder to gh-pages branch
- **AWS S3:** Upload the `out/` folder to an S3 bucket
- **Any static host:** Upload the contents of `out/`

## Customization

### Colors

The color scheme is defined in `tailwind.config.ts`:
- Primary colors: Green shades (health/nature theme)
- Natural colors: Warm grays and earth tones

### Content

All content is easily editable within the component files:
- Services: `components/ServicesSection.tsx`
- Testimonials: `components/TestimonialsSection.tsx`
- Service Areas: `components/ServiceAreasSection.tsx`
- Contact Info: `components/ContactSection.tsx` and `components/Footer.tsx`

### Images

Replace placeholder images in the components with actual photos:
1. Add images to `public/images/`
2. Update the component to use Next.js Image component
3. Reference the path as `/images/your-image.jpg`

### SEO

Update metadata in `app/layout.tsx`:
- Title
- Description
- Keywords
- Open Graph tags

## Key Sections

1. **Hero Section** - Eye-catching introduction with CTAs
2. **Services** - 6 service offerings with detailed features
3. **About** - Philosophy and benefits of training with Christian
4. **Testimonials** - Client success stories with before/after showcase
5. **Service Areas** - Coverage map for San Diego County
6. **CTA** - Strong call-to-action to book assessment
7. **Contact** - Form and contact information

## Mobile Responsiveness

The site uses TailwindCSS responsive utilities:
- Mobile-first design approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- All sections tested and optimized for all screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Christian Borja. All rights reserved.

