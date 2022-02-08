CREATE DATABASE beerpong;

CREATE TABLE players(
  player_id SERIAL PRIMARY KEY,
  player_name VARCHAR(255),
  wins INT NOT NULL
);

INSERT INTO players (player_name, wins) VALUES('Posti', 0);
INSERT INTO players (player_name, wins) VALUES('Jimi', 0);

CREATE TABLE results(
  result_id SERIAL PRIMARY KEY,
  winner_id INT NOT NULL,
  cups_left INT NOT NULL,
  played_on DATE NOT NULL,
  FOREIGN KEY (winner_id) REFERENCES players(player_id)
);

