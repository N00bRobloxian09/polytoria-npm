/* Polytoria.js => item.js */
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
				
				axios.get("https://api.polytoria.com/v1/asset/info?id="+id)
					.then((response) => {
						let responseData = response.data;

						resolve({
							id: responseData.id,
							name: responseData.name,
							description: responseData.description,
							creator: responseData.creator,
							creatortype: responseData.creator_type,
							pricetype: responseData.currency,
							price: responseData.price,
							pricealt: responseData.price_alt,
							timecreated: responseData.time_created,
							timeupdated: responseData.time_updated,
							sales: responseData.sales,
							favourites: responseData.favourites,
							type: responseData.type,
							moderationstatus: responseData.moderation_status,
							islimited: responseData.is_limited,
							stock: responseData.total_stock,
							onsaleuntil: responseData.onsale_until,
							value: responseData.value,
							version: responseData.version
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
						let responseData = response.data;

						resolve({
							id: responseData.InstanceID,
							assetid: responseData.AssetID,
							userid: responseData.UserID,
							type: responseData.Type,
							serial: responseData.Serial
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
			
		module.exports = {
			getById: getbyid,
			getByInstanceId: getinstance,
		};
