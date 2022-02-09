CREATE DATABASE beerpong;

CREATE TABLE player(
  player_id SERIAL PRIMARY KEY,
  player_name VARCHAR(255),
  wins INT NOT NULL
);

INSERT INTO player (player_name, wins) VALUES('Posti', 0);
INSERT INTO player (player_name, wins) VALUES('Jimi', 0);

CREATE TABLE result(
  result_id SERIAL PRIMARY KEY,
  winner_id INT NOT NULL,
  cups_left INT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  FOREIGN KEY (winner_id) REFERENCES player(player_id)
);

DROP TABLE result;
DROP TABLE player;
