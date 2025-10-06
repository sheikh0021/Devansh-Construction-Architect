# Devansh Constro & Architect Website

A professional, fully responsive website for Devansh Constro & Architect - a leading construction and architectural firm in Pune, Maharashtra.

## 🏗️ Features

- **Modern Design**: Clean, professional, and trustworthy design with blue, white, grey, and golden accents
- **Fully Responsive**: Mobile-first responsive design that works on all devices
- **SEO Optimized**: Comprehensive SEO with meta tags, schema markup, and optimized content
- **Fast Performance**: Built with Next.js 14 for optimal performance and loading speed
- **Interactive Animations**: Smooth animations using Framer Motion
- **Contact Integration**: Contact form, phone, email, and map integration
- **Project Portfolio**: Showcase of completed projects with filtering and search
- **Service Details**: Comprehensive architectural and construction services

## 📱 Pages

1. **Home Page** - Hero section with services overview and company highlights
2. **About Us** - Company story, mission, values, and team information
3. **Services** - Detailed architectural and construction services
4. **Projects** - Portfolio showcase with filtering and search functionality
5. **Contact** - Contact form, company information, and map integration

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sheikh0021/Devansh-Construction-Architect.git
cd devansh-construction
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section
│   ├── SectionTitle.tsx   # Section titles
│   ├── ServiceCard.tsx    # Service cards
│   ├── ProjectCard.tsx    # Project cards
│   └── ContactForm.tsx    # Contact form
├── public/                # Static assets
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.js         # Next.js configuration
```

## 🔧 Customization

### Adding New Projects
Edit the `projects` array in `app/projects/page.tsx` to add new portfolio items.

### Updating Services
Modify the `architecturalServices` and `constructionServices` arrays in `app/services/page.tsx`.

### Changing Contact Information
Update contact details in:
- `components/Header.tsx`
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `app/layout.tsx` (schema markup)

## 📈 SEO Features

- Meta titles and descriptions for all pages
- Schema markup for Local Business
- Open Graph tags for social sharing
- Structured headings (H1, H2, H3)
- Optimized images and content
- Fast loading performance
