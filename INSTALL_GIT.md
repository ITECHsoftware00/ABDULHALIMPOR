# Install Git to Push to GitHub

## Quick Installation

### Option 1: Using Winget (Windows Package Manager)
```powershell
winget install --id Git.Git -e --accept-package-agreements --accept-source-agreements
```

### Option 2: Download Installer
1. Go to: https://git-scm.com/download/win
2. Download the installer
3. Run the installer (use default settings)
4. **Important**: Restart your terminal/PowerShell after installation

### Option 3: Using Chocolatey (if installed)
```powershell
choco install git
```

## After Installation

1. **Close and reopen your terminal/PowerShell**
2. Verify installation:
   ```bash
   git --version
   ```

3. **Configure Git** (first time only):
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

4. **Then run your commands**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git remote add origin https://github.com/ITECHsoftware00/Portfolio.git
   git branch -M main
   git push -u origin main
   ```

## Alternative: Use GitHub Desktop

If you prefer a GUI:
1. Download: https://desktop.github.com/
2. Sign in with your GitHub account
3. File > Add Local Repository
4. Select this folder
5. Click "Publish repository"
6. Repository name: `Portfolio`
7. Owner: `ITECHsoftware00`
