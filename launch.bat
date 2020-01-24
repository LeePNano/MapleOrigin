@echo off
@title MapleOrigin Beta Build 6
set PATH=C:\Program Files\Java\jdk1.8.0_111\bin;%PATH%
set CLASSPATH=.;dist\*
java -Xmx2048m -Dwzpath=wz\ net.server.Server
pause