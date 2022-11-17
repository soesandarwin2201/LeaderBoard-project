const gameID = 'DYBeVIn1FrSQ9x6blxe0';

const postData = async (person) => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`,
    {
      method: 'POST',
      body: JSON.stringify({
        user: person.user,
        score: person.score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  return response.json();
};

const getData = async () => {
  const gameUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`;

  const response = await fetch(`${gameUrl}`, {
    method: 'Get',
  });
  return response.json();
};

export { postData, getData };