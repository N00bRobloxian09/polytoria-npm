const fetch = require('axios');

function user(id, thing) {
  if(typeof(id) !== 'number') {
    
    const url = "https://api.polytoria.com/users/user?id=" + id;

    try {
        const response = await axios.get(url);
        const data = response.headers['content-location'];
        return data.thing;
    } catch (error) {
        throw error
    }
    
  }
  
}

module.exports = user;
