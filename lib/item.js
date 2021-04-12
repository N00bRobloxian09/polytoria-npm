/* Polytoria.js => item.js */
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
				
				axios.get("https://api.polytoria.com/v1/asset/info?id="+id)
					.then((response) => {
						resolve({
							id: response.data.id,
							name: response.data.name,
							description: response.data.description,
							creator: response.data.creator,
							creatortype: response.data.creator_type,
							pricetype: response.data.currency,
							price: response.data.price,
							pricealt: response.data.price_alt,
							timecreated: response.data.time_created,
							timeupdated: response.data.time_updated,
							sales: response.data.sales,
							favourites: response.data.favourites,
							type: response.data.type,
							moderationstatus: response.data.moderation_status,
							islimited: response.data.is_limited,
							stock: response.data.total_stock,
							onsaleuntil: response.data.onsale_until,
							value: response.data.value,
							version: response.data.version
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
			
			const getinstance = (id) =>
			new Promise(function(resolve, reject) {
				if (typeof (id) !== "number" || !id || id <= 0) {
					reject([{
						code: 0,
						message: "Invalid Id"
					}]);
					return;
				}
				
				axios.get("https://api.polytoria.com/v1/asset/instance?id="+id)
					.then((response) => {
						resolve({
							id: response.data.InstanceID,
							assetid: response.data.AssetID,
							userid: response.data.UserID,
							type: response.data.Type,
							serial: response.data.Serial
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
			getByInstanceId: getinstance,
		};
