const poly = require("./index.js");


/* ==== Users ==== */
// Get by id and echo username
poly.users.getById(1).then(function (res) {
	console.log("GetUserById => "+ res.username);
}).catch(function (e) {
	console.error(e);
});

// Get by username and echo id
poly.users.getByName("Polytoria").then(function (res) {
	console.log("GetUserByUsername => "+ res.id);
}).catch(function (e) {
	console.error(e);
});

/* ==== Guilds ==== */
// Get by id and echo name
poly.guilds.getById(1).then(function (res) {
	console.log("GetGroupById => "+ res.name);
}).catch(function (e) {
	console.error(e);
});


/* ==== Games ==== */
// Get by id and echo name
poly.games.getById(1).then(function (res) {
	console.log("GetGameById => "+ res.name);
}).catch(function (e) {
	console.error(e);
});



/* ==== Items ==== */
// Get by id and echo name + sales
poly.items.getById(1810).then(function (res) {
	console.log("GetItemById => "+ res.name);
	console.log("GetItemSales => "+ res.sales);
}).catch(function (e) {
	console.error(e);
});

// Get by instanceid and echo original id -- Getting my traffic cone, aka instanceid 1944
poly.items.getByInstanceId(1944).then(function (res) {
	console.log("GetItemByInstanceId => "+ res.assetid); //original id
	console.log("GetItemOwnerByInstanceId => "+ res.userid); //item owner id
	console.log("GetItemSerialByInstanceId => "+ res.serial); //item owner id
}).catch(function (e) {
	console.error(e);
});