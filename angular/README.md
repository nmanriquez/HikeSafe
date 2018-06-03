# Hikesafe
this project doesn't include the node_modules, please install them:
1. In path: angular/src/app

*npm install

2. In path: angular/expressServer

*npm install

-----
This script contains the last version of the DB: angular/expressServer/createDB/createCollection.js

please change the database name on it.

To run the script:
1. login to the mongo client side (mongodb server should be running):

*mongo --port 3000 -u username -p userpass --authenticationDatabase admin

2. load the script in the mongo shell:

*>load('createCollection.js');

-----
In order to run the app:

1. Run mongodb server

*mongod -port 3000 -dbpath "\data\db"

2. run node server inside path: angular/expressServer

*node AppServer.js

3. Run angular inside path: angular/

*ng serve

visit localhost
http://localhost:4200

