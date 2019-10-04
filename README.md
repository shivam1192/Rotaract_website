# Rotaract_website
Above website have stack nodejs mongo and express in backend and html css bootstrap and javascript in frontend
**Setting up environment**
install nodejs---link: https://nodejs.org/en/
install mongodb---link: https://www.mongodb.com/download-center/community

*place the folder in C:\node
*open app.js file in vs code
*run command node app.js
*after running your server is started on the port 4000
*in your browser write localhost:4000
*yuppp!!!it's working

mongo installation in kali linux:
1) Download Binaries

curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.4.9.tgz
2) Extract Files

tar -zxvf mongodb-linux-x86_64-3.4.9.tgz
3) Copy Archive to Target Directory

mkdir -p mongodb
cp -R -n mongodb-linux-x86_64-3.4.9/ mongodb
4) Place location in the PATH variable.

export PATH=<mongodb-install-directory>/bin:$PATH
(Replace <mongodb-install-directory> with the path to the extracted MongoDB archive. For me this was /home/myusername/mongodb/mongodb-linux-x86_64-3.4.9)

Next comes running it:

1) Create Data Directory

mkdir -p /data/db
2) Set Permissions

This is making sure the user has read and write permissions for the directory. Find the directory in the terminal, and enter

chmod 777 /data/db
3) Run it!

mongod
exiting file : /root/mongodb/mongodb-linux-x86_64-3.4.9/
running mongo:
Go to your <mongodb installation dir>:

cd <mongodb installation dir>
Type ./bin/mongo to start mongo:

./bin/mongo

