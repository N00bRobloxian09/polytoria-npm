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
    * getById
    * getGuildMembers
+ Items
    * GetById
    * GetByInstanceId
+ Games
    * GetById


## Examples
Getting Player's ID from username
```js
const poly = require("polytoria-js")

poly.users.getByName("Polytoria").then(function (response) {
	console.log("Polytoria's ID is " + response.id);
}).catch(function (err) {
	console.error(err);
});
```

Getting Player's Inventory by ID

```js

// getInventoryById(userId (int), showOnlyLimited (bool), itemLimit (int), page (int))

const poly = require("polytoria-js")

poly.users.getInventoryById(451, false, 1, 0).then(function (res) {
	res.forEach((item) => {
        if(item == null) return;
        
		console.log("inventory => "+  item.ID);
	});
}).catch(function (e) {
	console.error(e);
});
```

## Changelog
* 0.0.5 - Code refactoring, more examples
* 0.0.4 - Added more stuff
* 0.0.3 - Changed api endpoints to /v1/
* 0.0.2 - Added readme file to the package
* 0.0.1 - Initial release