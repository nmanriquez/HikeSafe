Angular and nodeExpress server are separated in this azure folder.

The azure_project is the one that actually will work on azure, and it 
will use a compressed version of angular.

# I. To create the compressed version of angular, inside angular_cli directory

1. npm install

2. Check that the express routes calls from the angular service are changed:

take off "http://localhost:8080", use only "/app/info/hike/"

3. Generate the compressed version, execute from /azure/angular_cli

ng build --prod

4. This command will create a folder named "dist"


# II. Before doing the deployment

1. Copy the "dist" folder into this directory 

2. Change the mongodb conection to mLab url, in DataAccess.ts

3.b. tsc DataAccess.ts


Check some changes:

1. Check that App.ts contains:

	this.express.use('/', express.static(__dirname + 'dist'));
	
1.b. tsc App.ts (if any change)

2. Check that package.json contains this line:

 "start": "node AppServer.js"

3. Check that the port called from AppServer.ts is:

server.listen(process.env.PORT || 8080);

3.b tsc AppServer.ts (if any change)





