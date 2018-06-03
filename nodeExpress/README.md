To execute:
//0. create db folder

//1.Starts the mongoDB server on port 3000

//2.Access to mongo with user/pass

//3.populate data
>load ('createDB/createCollection.js');
>exit

//4.Execute Node/Express server on port 8080:
node AppServer.js 

//test
* http://localhost:8080/
* http://localhost:8080/app/info/hike/Twin%20Falls