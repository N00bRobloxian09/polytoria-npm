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
						resolve({
							id: response.data.ID,
							username: response.data.Username,
							description: response.data.Description,
							avatarhash: response.data.AvatarHash,
							membership: response.data.MembershipType,
							joined: response.data.TimeJoined,
							lastseen: response.data.LastSeen,
							datejoined: response.data.DateJoined,
							datelastseen: response.data.DateLastSeen,
							rank: response.data.Rank,
							tradevalue: response.data.TradeValue
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
						resolve({
							id: response.data.ID,
							username: response.data.Username,
							description: response.data.Description,
							avatarhash: response.data.AvatarHash,
							membership: response.data.MembershipType,
							joined: response.data.TimeJoined,
							lastseen: response.data.LastSeen,
							datejoined: response.data.DateJoined,
							datelastseen: response.data.DateLastSeen,
							rank: response.data.Rank,
							tradevalue: response.data.TradeValue
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
		};
