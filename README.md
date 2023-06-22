# NoSQL Social Media by CS

- - - - - - - - - - 
NOTE FROM DEVELOPER:
1. THIS APP IS STILL IN DEVELOPMENT, BUT ROUTES CREATED ARE FULLY FUNCTIONAL

- - - - - - - - - - 

I built this back end social media app by practing NoSQL skills and using MongoDB connected with Mongoose. The app can only be run from the command line and using an API client program, such as Insomnia.

### Collections (Tables)
- Users
- Thoughts (With a sub schema for Thoughts)

### List of built APIs in this application
- GET (ALL users, ONE user, ALL thoughts, ONE thought)
- POST (ONE user, ONE friend by user, ONE thought, ONE reaction per thought)
- PUT (CHANGE user's email and username, CHANGE thought text and creator)
- DELETE (DELETE a user, DELETE a friend by user, DELETE thought, DELETE reaction per thought)

### Installation

1. Git clone or download the application
2. Install all dependencies with 'npm i' on the command line at the root of the application
3. Run 'npm start' for the app to run on port 3401.
4. Load an API client program such as Insomnia to run CRUD commands as the application cannot be run on the browser. 
5. To test routes, visit the sub directory 'routes' for a complete list of routes built. 


