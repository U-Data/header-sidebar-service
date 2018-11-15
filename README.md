# U-Data

> The header and the sidebar module that displays course information

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Usage
1. Start database in terminal: mysql.server start
2. In a separate tab in terminal, seed database
```npm run seed```
3. In a separate tab in terminal, run server: 
```npm start```
4. In a separate tab in terminal, run webpack: 
```npm run build```
5. hosted on localhost:3003

## Requirements

1. Install dependies: npm install
2. Have >=mysql 5.7.23 downloaded

##API Routes:

| Route/endpoint             | Description                          | Method  |
| -------------------------- |:------------------------------------:| -------:|
| /courses/:id/              | get all data for a single course     | GET     |
| /courses/                  | get all data for all courses         | GET     |
| /courses/:id/              | delete all data for a single course  | DELETE  |
| /courses/:id/              | update data for a single course      | PATCH   |
| /courses/                  | add a new course                     | POST    |

### Installing Dependencies

From within the root directory:

npm install

