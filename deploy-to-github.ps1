param(
    [string]$CommitMessage = "Deploy from Cursor: Update portfolio website"
)

$repoUrl = "https://github.com/ITECHsoftware00/ABDULHALIMPOR.git"

Write-Host "`n======================================`nDeploying Project to GitHub`nRepository: $repoUrl`n======================================`n" -ForegroundColor Cyan

# --- Step 1: Verify Git Installation ---
Write-Host "[1/7] Verifying Git installation..." -ForegroundColor Yellow
try {
    git --version | Out-Null
    Write-Host "[OK] Git is installed and accessible." -ForegroundColor Green
} catch {
    Write-Host "[ERROR] Git is not installed or not in PATH." -ForegroundColor Red
    Write-Host "Please install Git for Windows:" -ForegroundColor Red
    Write-Host "  1. Download from: https://git-scm.com/download/win" -ForegroundColor Red
    Write-Host "  2. Or run: winget install Git.Git" -ForegroundColor Red
    Write-Host "  3. IMPORTANT: Restart your PowerShell/terminal after installation." -ForegroundColor Red
    Read-Host "Press Enter to exit after installing Git..."
    exit 1
}

# --- Step 2: Initialize Git Repository (if needed) ---
Write-Host "`n[2/7] Initializing Git repository..." -ForegroundColor Yellow
if (-not (Test-Path .git)) {
    git init | Out-Null
    Write-Host "[OK] Git repository initialized." -ForegroundColor Green
} else {
    Write-Host "[OK] Git repository already exists." -ForegroundColor Green
}

# --- Step 3: Configure Git User (if not configured) ---
Write-Host "`n[3/7] Checking Git user configuration..." -ForegroundColor Yellow
$userName = git config user.name
$userEmail = git config user.email

if (-not $userName -or -not $userEmail) {
    Write-Host "Git user name or email not set. Please provide them." -ForegroundColor Yellow
    $inputName = Read-Host "Enter your Git user name (e.g., Abdulhalim Muhammad)"
    $inputEmail = Read-Host "Enter your Git user email (e.g., your.email@example.com)"
    git config user.name "$inputName" | Out-Null
    git config user.email "$inputEmail" | Out-Null
    Write-Host "[OK] Git user configured." -ForegroundColor Green
} else {
    Write-Host "[OK] Git user configured: $userName <$userEmail>." -ForegroundColor Green
}

# --- Step 4: Add Remote Repository ---
Write-Host "`n[4/7] Setting up remote repository..." -ForegroundColor Yellow
$existingRemote = git remote get-url origin 2>&1
if ($LASTEXITCODE -eq 0) {
    if ($existingRemote -ne $repoUrl) {
        Write-Host "Existing remote 'origin' is different. Removing and re-adding..." -ForegroundColor Yellow
        git remote remove origin | Out-Null
        git remote add origin $repoUrl | Out-Null
        Write-Host "[OK] Remote 'origin' updated to $repoUrl." -ForegroundColor Green
    } else {
        Write-Host "[OK] Remote 'origin' is already set to $repoUrl." -ForegroundColor Green
    }
} else {
    git remote add origin $repoUrl | Out-Null
    Write-Host "[OK] Remote 'origin' added as $repoUrl." -ForegroundColor Green
}

# --- Step 5: Stage All Files ---
Write-Host "`n[5/7] Staging all changes..." -ForegroundColor Yellow
git add . | Out-Null
Write-Host "[OK] All relevant files staged (respecting .gitignore)." -ForegroundColor Green

# --- Step 6: Commit Changes ---
Write-Host "`n[6/7] Committing changes..." -ForegroundColor Yellow
$hasChangesToCommit = (git status --porcelain | Measure-Object).Count -gt 0
if ($hasChangesToCommit) {
    git commit -m "$CommitMessage" | Out-Null
    Write-Host "[OK] Changes committed with message: '$CommitMessage'." -ForegroundColor Green
} else {
    Write-Host "[OK] No changes to commit. Repository is up to date." -ForegroundColor Green
}

# --- Step 7: Set Main Branch and Push to GitHub ---
Write-Host "`n[7/7] Setting branch to 'main' and pushing to GitHub..." -ForegroundColor Yellow
git branch -M main | Out-Null

Write-Host "`n----- AUTHENTICATION REQUIRED -----`n" -ForegroundColor Red
Write-Host "You will be prompted for your GitHub credentials shortly.`n" -ForegroundColor Red
Write-Host "Username: ITECHsoftware00`n" -ForegroundColor Red
Write-Host "Password: USE A PERSONAL ACCESS TOKEN (PAT), NOT your GitHub password.`n" -ForegroundColor Red
Write-Host "To create a PAT:`n" -ForegroundColor Red
Write-Host "  1. Go to: https://github.com/settings/tokens`n" -ForegroundColor Red
Write-Host "  2. Click 'Generate new token' -> 'Generate new token (classic)'`n" -ForegroundColor Red
Write-Host "  3. Name your token (e.g., 'Cursor Deploy') and select the 'repo' scope.`n" -ForegroundColor Red
Write-Host "  4. Copy the generated token (it will only be shown once) and paste it as your password when prompted.`n" -ForegroundColor Red
Read-Host "Press Enter to proceed with push..."

git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n========================================`nSUCCESS! Project deployed to GitHub! `nView: $repoUrl`n========================================`n" -ForegroundColor Green
} else {
    Write-Host "`n========================================`nDEPLOYMENT FAILED!`n========================================`n" -ForegroundColor Red
    Write-Host "Please check the error messages above and ensure:`n" -ForegroundColor Red
    Write-Host "- Git is properly installed and configured.`n" -ForegroundColor Red
    Write-Host "- You used a Personal Access Token for authentication.`n" -ForegroundColor Red
    Write-Host "- You have push access to the repository: $repoUrl`n" -ForegroundColor Red
}

Write-Host "`nDeployment process finished.`n" -ForegroundColor Cyan
pause