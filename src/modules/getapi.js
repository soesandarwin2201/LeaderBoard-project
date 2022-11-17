const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/`;
const gameName = 'GIN';

const getID = async() => {
 const response = await fetch(`${url}`, {
   method: 'POST',
   body: JSON.stringify({
     name: gameName,
   }),
   headers: {
     'Content-type': 'application/json; charset=UTF-8',
   },
 });
 return response.json();
}

export { getID };