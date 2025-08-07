DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS contacts;

CREATE TABLE users (
  id serial PRIMARY KEY,
  username text NOT NULL,
  password varchar NOT NULL
);

CREATE TABLE events (
  id serial PRIMARY KEY,
  date date NOT NULL,
  location text NOT NULL,
  description text
);

CREATE TABLE contacts(
  id serial PRIMARY KEY,
  name text NOT NULL,
  email varchar(225) NOT NULL, 
  phone varchar(15) NOT NULL,
  message text NOT NULL,
  created_date TIMESTAMP NOT NULL DEFAULT NOW()
);
