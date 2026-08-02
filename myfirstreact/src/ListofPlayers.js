import React from "react";

function ListofPlayers() {
  const players = [
    { name: "Virat Kohli", score: 95 },
    { name: "Rohit Sharma", score: 85 },
    { name: "Shubman Gill", score: 60 },
    { name: "KL Rahul", score: 72 },
    { name: "Hardik Pandya", score: 68 },
    { name: "Ravindra Jadeja", score: 75 },
    { name: "R. Ashwin", score: 55 },
    { name: "Mohammed Shami", score: 45 },
    { name: "Jasprit Bumrah", score: 80 },
    { name: "Mohammed Siraj", score: 66 },
    { name: "Kuldeep Yadav", score: 90 }
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>

      <h3>All Players</h3>
      {players.map((player, index) => (
        <p key={index}>
          {player.name} - {player.score}
        </p>
      ))}

      <h3>Players with Score Below 70</h3>
      {below70.map((player, index) => (
        <p key={index}>
          {player.name} - {player.score}
        </p>
      ))}
    </div>
  );
}

export default ListofPlayers;