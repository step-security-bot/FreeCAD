@echo off
@setlocal
rem this is a good place for clcache environment variables
set CLCACHE_HARDLINK=1
C:\Python35\python.exe C:\projects\freecad\clcache-3.2.0\clcache.py %*
