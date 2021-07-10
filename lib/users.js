/* Polytoria.js => users.js */

const axios = require("axios");
		
		const getbyid = (uid) =>
			new Promise(function(resolve, reject) {
				if (typeof (uid) !== "number" || !uid || uid <= 0) {
					reject([{
						code: 0,
						message: "Invalid userId"
					}]);
					return;
				}
				
				axios.get("https://api.polytoria.com/v1/users/user?id="+uid)
					.then((response) => {
						let responseData = response.data

						resolve({
							id: responseData.ID,
							username: responseData.Username,
							description: responseData.Description,
							avatarhash: responseData.AvatarHash,
							membership: responseData.MembershipType,
							joined: responseData.TimeJoined,
							lastseen: responseData.LastSeen,
							datejoined: responseData.DateJoined,
							datelastseen: responseData.DateLastSeen,
							rank: responseData.Rank,
							tradevalue: responseData.TradeValue
						});
						return;
					})
					.catch(error => {
						reject([{
							code: 0,
							message: "Request failed, UID: "+uid+", ERR:"+error
						}]);
					})
			});
			
			const getbyname = (username) =>
			new Promise(function(resolve, reject) {
				if (typeof (username) !== "string" || !username) {
					reject([{
						code: 0,
						message: "Invalid username"
					}]);
					return;
				}
				
				axios.get("https://api.polytoria.com/v1/users/getbyusername?username="+username)
					.then((response) => {
						let responseData = response.data

						resolve({
							id: responseData.ID,
							username: responseData.Username,
							description: responseData.Description,
							avatarhash: responseData.AvatarHash,
							membership: responseData.MembershipType,
							joined: responseData.TimeJoined,
							lastseen: responseData.LastSeen,
							datejoined: responseData.DateJoined,
							datelastseen: responseData.DateLastSeen,
							rank: responseData.Rank,
							tradevalue: responseData.TradeValue
						});
						return;
					})
					.catch(error => {
						reject([{
							code: 0,
							message: "Request failed, ERR:"+error
						}]);
					})
			});
			
			const getfriends = (uid) =>
			new Promise(function(resolve, reject) {
				if (typeof (uid) !== "number" || !uid || uid <= 0) {
					reject([{
						code: 0,
						message: "Invalid userId"
					}]);
					return;
				}
				
				axios.get("https://api.polytoria.com/v1/users/friends?id="+uid)
					.then((response) => {
						resolve({
							data: response.data
						});
						return;
					})
					.catch(error => {
						reject([{
							code: 0,
							message: "Request failed, ERR:"+error
						}]);
					})
			});
			
			const getchar = (uid) =>
			new Promise(function(resolve, reject) {
				if (typeof (uid) !== "number" || !uid || uid <= 0) {
					reject([{
						code: 0,
						message: "Invalid userId"
					}]);
					return;
				}
				
				axios.get("https://api.polytoria.com/v1/users/getappearance?id="+uid)
					.then((response) => {
						resolve({
							hash: response.data.AvatarHash,
							headBodyColor: response.data.BodyColors.Head,
							leftArmBodyColor: response.data.BodyColors.LeftArm,
							torsoBodyColor: response.data.BodyColors.Torso,
							rightArmBodyColor: response.data.BodyColors.RightArm,
							leftLegBodyColor: response.data.BodyColors.LeftLeg,
							rightLegBodyColor: response.data.BodyColors.RightLeg,
							hat1: response.data.Wearables.Hat1,
							hat2: response.data.Wearables.Hat2,
							hat3: response.data.Wearables.Hat3,
							tool: response.data.Wearables.Tool,
							face: response.data.Wearables.Face,
							shirt: response.data.Wearables.Shirt,
							pants: response.data.Wearables.Pants,
							tshirt: response.data.Wearables.TShirt,
							head: response.data.Wearables.Head
						});
						return;
					})
					.catch(error => {
						reject([{
							code: 0,
							message: "Request failed, ERR:"+error
						}]);
					})
			});
			
			const latestusers = (page, limit) =>
			new Promise(function(resolve, reject) {
				if (typeof (page) !== "number") {
					reject([{
						code: 0,
						message: "Invalid page"
					}]);
					return;
				}
				if(page == "") {
					if(page == 0) {
						//ok
					} else {
						reject([{
							code: 0,
							message: "Invalid page"
						}]);
						return;
					}
				}
				
				if (typeof (limit) !== "number") {
					reject([{
						code: 0,
						message: "Invalid limit"
					}]);
					return;
				}
				
				axios.get("https://api.polytoria.com/v1/users/latest?page="+page+"&limit="+limit)
					.then((response) => {
						resolve({
							data: response.data
						});
						return;
					})
					.catch(error => {
						reject([{
							code: 0,
							message: "Request failed, ERR:"+error
						}]);
					})
			});
			
			const invbyid = (uid, limited, limit, page) =>
			new Promise(function(resolve, reject) {
				if (typeof (uid) !== "number" || !uid || uid <= 0) {
					reject([{
						code: 0,
						message: "Invalid userId"
					}]);
					return;
				}
				if (typeof (page) !== "number") {
					reject([{
						code: 0,
						message: "Invalid page"
					}]);
					return;
				}
				if (typeof (limit) !== "number") {
					reject([{
						code: 0,
						message: "Invalid limit"
					}]);
					return;
				}
				if (typeof (limited) !== "boolean") {
					reject([{
						code: 0,
						message: "Invalid show limiteds value"
					}]);
					return;
				}
				
				axios.get("https://api.polytoria.com/v1/users/inventory?id=" + uid +" &limited=" + limited + "&limit=" + limit + "&page=" + page)
					.then((response) => {
						resolve({
							data: response.data
						});
						return;
					})
					.catch(error => {
						reject([{
							code: 0,
							message: "Request failed, ERR:"+error
						}]);
					})
			});
			
			
		module.exports = {
			getById: getbyid,
			getByName: getbyname,
			getFriendsById: getfriends,
			getAppearanceById: getchar,
			getLatestUsers: latestusers,
			getInventoryById: invbyid
		};
