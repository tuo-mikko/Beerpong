export const getScore = async () => {
  try {
    const scores = await fetch('http://localhost:5000/results');
    const jsonData = await scores.json();
    return jsonData;
  } catch (error) {
    console.error(error.message);
  }
};

export const calcWinning = (players) => {
  try {
    if (players[0].wins > players[1].wins) {
      return players[0].player_name;
    }
    return players[1].player_name;
  } catch (error) {
    console.error(error.message);
  }
};
