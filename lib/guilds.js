/* Polytoria.js => guilds.js */

const axios = require("axios");
		
		const getbyid = (id) =>
			new Promise(function(resolve, reject) {
				if (typeof (id) !== "number" || !id || id <= 0) {
					reject([{
						code: 0,
						message: "Invalid ID"
					}]);
					return;
				}
				
				axios.get("https://api.polytoria.com/v1/guild/info?id=" + id)
					.then((response) => {
						let responseData = response.data;

						resolve({
							id: responseData.ID,
							name: responseData.Name,
							description: responseData.Description,
							verified: responseData.Verified,
							ownerid: responseData.OwnerID,
							timecreated: responseData.CreatedAt
						});
						return;
					})
					.catch(error => {
						reject([{
							code: 0,
							message: "Request failed, ID: " + id + ", ERR: " + error
						}]);
					})
			});

			const getguildmembers = (id, role, page) => 
				new Promise((resolve, reject) => {
					if (typeof(id) !== "number" || !id || id <= 0) {
						reject([{
							code: 0,
							message: "Invalid ID"
						}]);
						return;
					};

					if (typeof(role) != "number" || !role || role < 0) {
						reject([{
							code: 0,
							message: "Invalid Role"
						}]);
						return;
					};

					if (typeof(page) != "number" || page <= 0) {
						reject([{
							code: 0,
							message: "Invalid Page"
						}]);
						return;
					} else {
						if (page == null) {
							page = 1;
						};
					};

					// Outdated endpoint being used temporarily - can be updated when a new replacement is provided.

					axios.get("https://polytoria.com/api/fetch/guilds/members?gid=" + id +"&role=" + role + "&page=" + page)
					.then((response) => {
						resolve(response.data);
						return;
					})
					.catch(error => {
						reject([{
							code: 0,
							message: "Request failed, ID: " + id + ", ERR: " + error
						}]);
					})
				});
			
		module.exports = {
			getById: getbyid,
			getGuildMembers: getguildmembers
		};
