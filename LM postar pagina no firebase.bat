echo off
cls
Echo '
Echo '
Echo '
Echo '
Echo '
Echo '                     Ola Leonardo
Echo '
Echo '
Echo '
Echo '
Echo '           enter = publica site
Echo '             1   = roda localmente no npm localhost
Echo '
set /p op=" "
if "%op%"=="1" goto rodalocalmente


echo you picked publica

echo on
:: ADD ALL git
git add .
::commit git
git commit -am "humm"
::manda para o alem
git push origin master

start chrome https://meusitelm-cbb2f.firebaseapp.com/
start firebase deploy
start "Git commit push maste.bat"
echo  1
pause
exit




exit
:rodalocalmente
echo you picked rodalocalmente
echo on
firebase serve
pause
exit





