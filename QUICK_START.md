# ⚡ Quick Start Guide

Get your portfolio website up and running in minutes!

## 🚀 Deploy to GitHub (Fastest Method)

**Just run this command:**
```powershell
.\deploy-to-github.ps1
```

That's it! The script will:
- ✅ Check Git installation
- ✅ Initialize repository
- ✅ Configure Git user
- ✅ Add remote repository
- ✅ Stage and commit all files
- ✅ Push to GitHub

**When prompted for password**: Use your GitHub Personal Access Token (not your password)

## 📦 First Time Setup

1. **Install Git** (if not installed):
   ```powershell
   winget install Git.Git
   ```
   Then restart your terminal.

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run locally**:
   ```bash
   npm run dev
   ```

4. **Deploy**:
   ```powershell
   .\deploy-to-github.ps1
   ```

## 🔑 Need a GitHub Token?

1. Go to: https://github.com/settings/tokens
2. Generate new token (classic)
3. Select `repo` scope
4. Copy and use as password

## 📚 More Information

- **Full deployment guide**: See [DEPLOY.md](./DEPLOY.md)
- **Project details**: See [README.md](./README.md)
- **Git installation**: See [INSTALL_GIT.md](./INSTALL_GIT.md)

---

**Ready?** Run `.\deploy-to-github.ps1` now! 🚀
