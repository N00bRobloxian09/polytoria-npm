/* Polytoria.js => games.js */
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

				axios.get("https://api.polytoria.com/v1/games/info?id="+id)
					.then((response) => {
						resolve({
							id: response.data.ID,
							name: response.data.Name,
							description: response.data.Description,
							active: response.data.Active,
							owner: response.data.CreatorID,
							timecreated: response.data.CreatedAt,
							timeupdated: response.data.UpdatedAt
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
