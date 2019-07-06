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
Echo '           VOU OTIMIZAR O PROJ NA PASTA BUID
Echo '             E PUBLICAR NO FIREBASE
Echo '                 E ABRIR NO CHROME
Echo '             
Echo '
PAUSE
echo on




echo OFF
Echo '
Echo '
Echo '
Echo '
Echo '             FAZENDO O BUILD
Echo '
Echo '
Echo '
Echo '
Echo '
echo on



CD "C:\dropbox\Dropbox\z-esc\Leonardo particular\projetos\2019 01 24 eCommerce Cath\PAGINA_com_firebase\public\_ProjLivro"
call npm run build




echo OFF
Echo '
Echo '
Echo '
Echo '
Echo '             FAZENDO O FIREBASE
Echo '
Echo '
Echo '
Echo '
Echo '
echo on

cd "C:\Dropbox\Dropbox\z-esc\Leonardo particular\projetos\2019 01 24 eCommerce Cath\PAGINA_com_firebase"
call firebase deploy





echo OFF
Echo '
Echo '
Echo '
Echo '
Echo '             ACABEI!
Echo '
Echo '
Echo '
Echo '
Echo '
echo on

timeout 3

start chrome https://leodecm3.ml/_ProjLivro/build/index.html
pause