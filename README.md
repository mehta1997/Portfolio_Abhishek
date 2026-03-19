# Portfolio Website - Abhishek Mehta

Modern portfolio website built with Next.js 14 (App Router), Tailwind CSS, and React.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio-abhishek-mehta/
├── app/
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # UI components (Button, Card, etc.)
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── ExperienceSection.jsx
│   ├── SkillsSection.jsx
│   ├── ProjectsSection.jsx
│   ├── ContactSection.jsx
│   └── Footer.jsx
├── lib/
│   ├── data.js            # Portfolio content data
│   └── utils.js           # Utility functions
├── public/
│   └── Abhishek_Mehta_Resume.pdf
└── package.json
```

## ✏️ Customization

### Update Your Information

Edit `/lib/data.js` to update:
- Personal information (name, email, location, etc.)
- Work experience
- Skills and technologies
- Projects
- EmailJS configuration

### Replace Resume

Replace `/public/Abhishek_Mehta_Resume.pdf` with your own PDF file.

### Change Colors

Edit `/app/globals.css` to customize the color scheme.

## 📧 EmailJS Setup

The contact form uses EmailJS. To use your own:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update credentials in `/lib/data.js`:

```javascript
export const emailJSConfig = {
  serviceId: "your_service_id",
  templateId: "your_template_id",
  publicKey: "your_public_key"
}
```

## 🏗️ Building for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload .next folder to Netlify
```

### Deploy to Other Platforms

The build output is in the `.next` folder. Configure your hosting to:
1. Run `npm install`
2. Run `npm run build`
3. Run `npm start`

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4
- **UI Components**: Custom + Radix UI primitives
- **Icons**: Lucide React
- **Email**: EmailJS
- **Language**: JavaScript (React)

## 📦 Key Features

✅ Modern Next.js 14 with App Router
✅ Fully responsive design
✅ Dark theme with cyan/teal accents
✅ Working contact form (EmailJS)
✅ Resume download functionality
✅ Project filtering
✅ Smooth scroll navigation
✅ SEO optimized
✅ Fast performance

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 License

Open source and free to use for personal portfolios.

## 📞 Support

Email: Abhishekmehtauk@gmail.com
LinkedIn: [abhishek-mehta-029651180](https://linkedin.com/in/abhishek-mehta-029651180)
GitHub: [mehta1997](https://github.com/mehta1997)

---

**Built with ❤️ using Next.js 14 & Tailwind CSS**
