DROP TABLE IF EXISTS CLIENT, CATEGORY, LOANS;

CREATE TABLE CLIENT (
  id BIGINT IDENTITY NOT NULL PRIMARY KEY,
  name VARCHAR(250) NOT NULL
);

CREATE TABLE CATEGORY (
  id BIGINT IDENTITY NOT NULL PRIMARY KEY,
  name VARCHAR(250) NOT NULL
);

CREATE TABLE LOANS (
  id BIGINT IDENTITY NOT NULL PRIMARY KEY,
  name_game VARCHAR(250) NOT NULL,
  name_client VARCHAR(250) NOT NULL,
  loan_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  return_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);