@echo off
echo ===============================================================
echo   Pushing JALA Academy Assignments to GitHub (Manojkrish122)
echo ===============================================================
echo.

git remote -v
echo.
echo Pushing branch 'main' to origin...
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ===============================================================
    echo   SUCCESS! All 15 assignments are live on GitHub:
    echo   https://github.com/Manojkrish122/JALA-Academy-Front-End-Assignments
    echo ===============================================================
) else (
    echo.
    echo ===============================================================
    echo   If you saw 'Repository not found', please make sure you
    echo   created the empty repository first at:
    echo   https://github.com/new?name=JALA-Academy-Front-End-Assignments
    echo ===============================================================
)
echo.
pause
