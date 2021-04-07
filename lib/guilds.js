/* Polytoria.js => guilds.js */
const axios = require("axios");
		
		const getbyid = (id) =>
			new Promise(function(resolve, reject) {
				if (typeof (id) !== "number" || !id || id <= 0) {
					reject([{
						code: 0,
						message: "Invalid Id"
					}]);
					return;
				}
				
				axios.get("https://api.polytoria.com/guild/info?id="+id)
					.then((response) => {
						resolve({
							id: response.data.ID,
							name: response.data.Name,
							description: response.data.Description,
							verified: response.data.Verified,
							ownerid: response.data.OwnerID,
							timecreated: response.data.CreatedAt
						});
						return;
					})
					.catch(error => {
						reject([{
							code: 0,
							message: "Request failed, ID: "+id+", ERR:"+error
						}]);
					})
			});
			
		module.exports = {
			getById: getbyid,
		};
