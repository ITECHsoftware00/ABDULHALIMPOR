# 🚀 Deployment Guide

Quick guide to deploy your portfolio website to GitHub and hosting platforms.

## 📋 Prerequisites

1. **Git installed** on your system
   - Download: https://git-scm.com/download/win
   - Or run: `winget install Git.Git`
   - **Important**: Restart your terminal after installation

2. **GitHub Account** with repository access
   - Repository: https://github.com/ITECHsoftware00/ABDULHALIMPOR

3. **GitHub Personal Access Token** (for authentication)
   - Create at: https://github.com/settings/tokens
   - Select `repo` scope
   - Copy token immediately (shown only once)

## 🎯 Quick Deploy (One Command)

### PowerShell (Recommended)
```powershell
.\deploy-to-github.ps1
```

### Batch Script
```bash
.\push-to-github.bat
```

## 📝 Step-by-Step Manual Deployment

### 1. Initialize Git (if not already done)
```bash
git init
```

### 2. Configure Git User (first time only)
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 3. Add Remote Repository
```bash
git remote add origin https://github.com/ITECHsoftware00/ABDULHALIMPOR.git
```

If remote already exists:
```bash
git remote set-url origin https://github.com/ITECHsoftware00/ABDULHALIMPOR.git
```

### 4. Stage All Files
```bash
git add .
```

### 5. Commit Changes
```bash
git commit -m "Deploy portfolio website"
```

### 6. Set Main Branch
```bash
git branch -M main
```

### 7. Push to GitHub
```bash
git push -u origin main
```

**When prompted:**
- **Username**: `ITECHsoftware00`
- **Password**: Use your **Personal Access Token** (not your GitHub password)

## 🔐 Creating a Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. **Name**: `Portfolio Deploy` (or any name)
4. **Expiration**: Choose your preference (90 days recommended)
5. **Select scopes**: Check `repo` (Full control of private repositories)
6. Click **"Generate token"**
7. **Copy the token immediately** - you won't see it again!
8. Use this token as your password when pushing

## 🌐 Deploy to Hosting Platforms

### Vercel (Recommended for React/Vite)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Import repository: `ITECHsoftware00/ABDULHALIMPOR`
5. Framework Preset: **Vite**
6. Root Directory: `./` (default)
7. Build Command: `npm run build` (auto-detected)
8. Output Directory: `dist` (auto-detected)
9. Click **"Deploy"**

Your site will be live at: `https://your-project.vercel.app`

### Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Select repository: `ITECHsoftware00/ABDULHALIMPOR`
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **"Deploy site"**

Your site will be live at: `https://your-project.netlify.app`

### GitHub Pages

1. Build your project:
   ```bash
   npm run build
   ```

2. Go to repository Settings → Pages
3. Source: **Deploy from a branch**
4. Branch: `main` / Folder: `/dist`
5. Click **"Save"**

Your site will be live at: `https://itechsoftware00.github.io/ABDULHALIMPOR`

> **Note**: For GitHub Pages, you may need to update `vite.config.ts` to set the correct base path.

## 🔄 Updating Your Deployment

After making changes to your code:

1. **Stage and commit changes**:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   ```

2. **Push to GitHub**:
   ```bash
   git push origin main
   ```

3. **Hosting platforms** (Vercel/Netlify) will automatically rebuild and deploy!

## ❌ Troubleshooting

### Git not found
- **Solution**: Install Git and restart your terminal
- See: [INSTALL_GIT.md](./INSTALL_GIT.md)

### Authentication failed
- **Solution**: Use Personal Access Token, not password
- Create new token: https://github.com/settings/tokens

### Push rejected
- **Solution**: Pull first, then push
  ```bash
  git pull origin main --rebase
  git push origin main
  ```

### Repository not found
- **Solution**: Verify repository exists and you have push access
- Check: https://github.com/ITECHsoftware00/ABDULHALIMPOR

## 📞 Need Help?

- Check [README.md](./README.md) for project setup
- Review [INSTALL_GIT.md](./INSTALL_GIT.md) for Git installation
- GitHub Docs: https://docs.github.com

---

**Ready to deploy?** Run `.\deploy-to-github.ps1` now! 🚀
