# polytoria-npm
## Installation
`$ npm install polytoria-js`

## Usage
+ Users
    * GetById
    * GetByName
	* getFriendsById
	* getAppearanceById
	* getLatestUsers
	* getInventoryById
+ Guilds
    * GetById
+ Items
    * GetById
    * GetByInstanceId
+ Games
    * GetById


## Example
Getting player's id from username
```js
const p = require("polytoria-js")
p.users.getByName("Polytoria").then(function (res) {
	console.log("Polytoria's ID is "+ res.id);
}).catch(function (e) {
	console.error(e);
});
```

## Changelog
* 0.0.4 - Added more stuff
* 0.0.3 - Changed api endpoints to /v1/
* 0.0.2 - Added readme file to the package
* 0.0.1 - Initial release