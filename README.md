# APEX PRO - Premium Commercial Vehicles Website

A professional, bilingual (Lithuanian/English) one-page website for APEX PRO, a premium commercial vehicle import and sales business based in Lithuania.

![APEX PRO](https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop)

## ✨ Features

- **Premium Design** - Dark theme with gold accents, professional aesthetic
- **Bilingual** - Full Lithuanian and English support with language switcher
- **Responsive** - Mobile-first design, works on all devices
- **Google Sheets Integration** - Manage vehicle inventory from a spreadsheet
- **Contact Form** - Formspree integration for form submissions
- **GDPR Compliant** - Cookie consent banner with analytics control
- **SEO Optimized** - Meta tags, Open Graph, JSON-LD structured data
- **Performance** - Optimized images, code splitting, lazy loading
- **Animations** - Smooth scroll, fade-in effects with Framer Motion

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/apex-pro-website.git
cd apex-pro-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Edit `.env.local` with your values:
```env
NEXT_PUBLIC_GOOGLE_SHEETS_URL=your_google_sheets_csv_url
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
NEXT_PUBLIC_WHATSAPP_NUMBER=370XXXXXXXX
NEXT_PUBLIC_EMAIL=info@apexpro.lt
NEXT_PUBLIC_PHONE=+370 XXX XXXXX
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## 📊 Google Sheets Setup

### Step 1: Create a Google Sheet

Create a new Google Sheet with these columns (exact names):

| Column Name | Type | Example |
|-------------|------|---------|
| image_url | URL | https://... |
| make | Text | Mercedes-Benz |
| model | Text | Sprinter 316 CDI |
| year | Number | 2019 |
| mileage | Number | 145000 |
| price | Number | 18500 |
| fuel_type | Text | Diesel |
| transmission | Text | Automatic |
| body_type | Text | L3H2 Furgon |
| description_lt | Text | Puikios būklės... |
| description_en | Text | Excellent condition... |
| status | Text | available / reserved / sold |

### Step 2: Publish to Web

1. Go to **File → Share → Publish to web**
2. Select **Entire Document** and **CSV** format
3. Click **Publish**
4. Copy the URL

### Step 3: Add to Environment

Add the URL to your `.env.local`:
```env
NEXT_PUBLIC_GOOGLE_SHEETS_URL=https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv
```

### Vehicle Status Values

- `available` - Shows in inventory with "Inquire" button
- `reserved` - Shows with "Reserved" badge
- `sold` - Hidden from inventory

## 📧 Contact Form Setup (Formspree)

1. Create a free account at [Formspree](https://formspree.io)
2. Create a new form
3. Copy your form ID (e.g., `abcd1234`)
4. Add to `.env.local`:
```env
NEXT_PUBLIC_FORMSPREE_ID=abcd1234
```

## 📈 Google Analytics Setup

1. Create a GA4 property at [Google Analytics](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Analytics will only load after user gives cookie consent (GDPR compliant).

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Netlify

1. Push code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Import your repository
4. Add environment variables
5. Deploy!

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Formspree
- **Data**: Google Sheets (CSV) + Papa Parse

## 📁 Project Structure

```
apex-pro-website/
├── app/
│   ├── layout.tsx       # Root layout with providers
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Inventory.tsx    # Vehicle inventory grid
│   ├── VehicleCard.tsx  # Individual vehicle card
│   ├── About.tsx        # About section
│   ├── HowItWorks.tsx   # Process steps
│   ├── Contact.tsx      # Contact section
│   ├── ContactForm.tsx  # Contact form
│   ├── Footer.tsx       # Footer
│   ├── CookieConsent.tsx # GDPR cookie banner
│   ├── Analytics.tsx    # GA4 integration
│   ├── LanguageProvider.tsx # i18n context
│   └── LanguageSwitcher.tsx # LT/EN switcher
├── lib/
│   ├── translations.ts  # All text content
│   ├── sheets.ts        # Google Sheets integration
│   ├── types.ts         # TypeScript types
│   └── utils.ts         # Utility functions
├── public/
│   └── favicon.ico
├── .env.example
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change brand colors:

```typescript
colors: {
  apex: {
    black: '#0A0A0A',
    gold: '#C9A227',
    // ...
  }
}
```

### Content

Edit `lib/translations.ts` to change all text content in both languages.

### Images

Replace placeholder images with your own:
- Hero background
- Vehicle images (via Google Sheets `image_url` column)

## 📝 License

MIT License - feel free to use for your own projects.

## 🤝 Support

For questions or support, contact: info@apexpro.lt

---

Built with ❤️ for APEX PRO
