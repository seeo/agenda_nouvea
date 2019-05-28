DROP TABLE IF EXISTS users;
CREATE TABLE users;
CREATE TABLE logs;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT,
		email TEXT,
    user_photo_uri TEXT
);

CREATE TABLE IF NOT EXISTS logs (
    id SERIAL PRIMARY KEY,
    log_title TEXT,
    log_content TEXT,
		log_photo_uri TEXT,
    created_date TEXT,
		user_id INTEGER
);