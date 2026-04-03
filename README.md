# Abdulhalim Muhammad - Portfolio Website

A modern, responsive portfolio website showcasing professional work, experience, and services. Built with React, TypeScript, and Vite.

## 🚀 Features

- **Modern UI/UX**: Dark mode support with smooth animations
- **Responsive Design**: Works perfectly on all devices
- **AI Chat Widget**: Integrated AI assistant powered by Google Gemini
- **Project Showcase**: Detailed project pages with case studies
- **Interactive Elements**: Custom cursor, smooth scrolling, and animations
- **Performance Optimized**: Fast loading with Vite build system

## 📋 Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git** (for deployment)

## 🛠️ Installation

1. **Clone the repository** (or download the project):
   ```bash
   git clone https://github.com/ITECHsoftware00/ABDULHALIMPOR.git
   cd ABDULHALIMPOR
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional, for AI chat):
   Create a `.env.local` file in the root directory:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:3000`

## 📦 Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

Preview the production build:
```bash
npm run preview
```

## 🚀 Deployment

### Quick Deploy to GitHub

**Option 1: Using PowerShell Script (Recommended)**
```powershell
.\deploy-to-github.ps1
```

**Option 2: Using Batch Script**
```bash
.\push-to-github.bat
```

**Option 3: Manual Deployment**
```bash
git init
git add .
git commit -m "Deploy portfolio website"
git remote add origin https://github.com/ITECHsoftware00/ABDULHALIMPOR.git
git branch -M main
git push -u origin main
```

> **Note**: You'll need a GitHub Personal Access Token for authentication. See [DEPLOY.md](./DEPLOY.md) for detailed instructions.

### Deploy to Hosting Platforms

#### Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Framework Preset: **Vite**
4. Deploy!

#### Netlify
1. Go to [netlify.com](https://netlify.com)
2. Import from Git
3. Build command: `npm run build`
4. Publish directory: `dist`

#### GitHub Pages
1. Go to repository Settings > Pages
2. Source: Deploy from a branch
3. Branch: `main` / Folder: `dist`
4. Note: You may need to configure the base path in `vite.config.ts`

## 📁 Project Structure

```
abdulhalim/
├── components/          # React components
│   ├── Hero.tsx
│   ├── AboutSection.tsx
│   ├── Services.tsx
│   ├── Works.tsx
│   ├── Contact.tsx
│   └── ...
├── App.tsx             # Main app component
├── index.tsx           # Entry point
├── index.html          # HTML template
├── constants.tsx        # Project data
├── types.ts            # TypeScript types
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies
```

## 🎨 Customization

- **Colors**: Edit CSS variables in `index.html` (lines 48-65)
- **Content**: Update `constants.tsx` for projects, services, and testimonials
- **Styling**: Modify Tailwind classes in component files

## 🔧 Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Routing
- **Tailwind CSS** - Styling (via CDN)
- **Google Gemini AI** - AI chat widget

## 📝 License

This project is private and proprietary.

## 👤 Author

**Abdulhalim Muhammad**
- Email: tsolution418@gmail.com
- Phone: +380 95 159 4897

## 📚 Additional Resources

- [Deployment Guide](./DEPLOY.md) - Detailed deployment instructions
- [Git Installation](./INSTALL_GIT.md) - Git setup guide

---

**Ready to deploy?** Run `.\deploy-to-github.ps1` to push to GitHub!
