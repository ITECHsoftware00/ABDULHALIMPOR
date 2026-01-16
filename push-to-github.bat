@echo off
echo ========================================
echo Pushing Portfolio to GitHub
echo ========================================
echo.

REM Check if git is available
where git >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Git is not installed or not in PATH.
    echo.
    echo Please install Git for Windows:
    echo 1. Download from: https://git-scm.com/download/win
    echo 2. Or run: winget install Git.Git
    echo 3. Restart your terminal after installation
    echo.
    pause
    exit /b 1
)

echo [1/6] Checking Git status...
git --version
echo.

echo [2/6] Initializing Git repository (if needed)...
if not exist .git (
    git init
    echo Git repository initialized.
) else (
    echo Git repository already exists.
)
echo.

echo [3/6] Adding all files...
git add .
echo.

echo [4/6] Creating commit...
git commit -m "Initial commit: Portfolio website with all pages working"
echo.

echo [5/6] Setting remote repository...
git remote remove origin 2>nul
git remote add origin https://github.com/ITECHsoftware00/ABDULHALIMPOR.git
echo Remote added: https://github.com/ITECHsoftware00/ABDULHALIMPOR.git
echo.

echo [6/6] Pushing to GitHub...
git branch -M main
git push -u origin main
echo.

if %ERRORLEVEL% EQU 0 (
    echo ========================================
    echo SUCCESS! Your code has been pushed to GitHub!
    echo ========================================
    echo.
    echo View your repository at:
    echo https://github.com/ITECHsoftware00/ABDULHALIMPOR
    echo.
) else (
    echo ========================================
    echo ERROR: Push failed!
    echo ========================================
    echo.
    echo Possible reasons:
    echo - You need to authenticate with GitHub
    echo - The repository might not exist or you don't have access
    echo - Check your GitHub credentials
    echo.
    echo To authenticate, you may need to:
    echo 1. Use GitHub Personal Access Token
    echo 2. Or use GitHub Desktop
    echo 3. Or configure SSH keys
    echo.
)

pause
