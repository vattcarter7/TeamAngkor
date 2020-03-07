-- ** DATABASE SCHEMA AND TABLE 

-- CREATE TABLE users
CREATE TABLE users (
  id                        SERIAL PRIMARY KEY,
  email                     TEXT UNIQUE NOT NULL check (email ~* '^.+@.+\..+$'),
  password                  VARCHAR(128),
  firstname                 VARCHAR(100) NOT NULL,
  lastname                  VARCHAR(100) NOT NULL,
  gender                    VARCHAR(10) NOT NULL,
  user_role                 VARCHAR(50) DEFAULT 'user',
  tokens                    tsvector,
  created_at                timestamptz DEFAULT now(),
  modified_date             timestamptz DEFAULT now(),
  active                    BOOLEAN DEFAULT true,
  password_reset_token      VARCHAR(200),
  password_reset_expires    timestamptz
);

-- CREATE TABLE tours
CREATE TABLE tours(
  id                SERIAL PRIMARY KEY,
  name              VARCHAR(200),
  description       TEXT,
  price             INT NOT NULL,
  tokens            tsvector,
  created_at        timestamptz DEFAULT now(),
  active            BOOLEAN DEFAULT true
);

-- CREATE TABLE guides
CREATE TABLE guides (
  id                INT UNIQUE NOT NULL,
  name              VARCHAR(100) NOT NULL,
  language          VARCHAR(100) NOT NULL,
  gender            VARCHAR(10) NOT NULL,
  rating_total      INT default 0,
  rating_count      INT default 0,
  rating            DECIMAL default 0,
  created_at        timestamptz DEFAULT now(),
  active            BOOLEAN DEFAULT true
);

-- CREATE TABLE reviews
CREATE TABLE reviews(
  id                SERIAL PRIMARY KEY,
  reviewer_id       INT NOT NULL REFERENCES users(id),
  tour_id           INT NOT NULL REFERENCES tours(id),
  guide_id          INT NOT NULL REFERENCES guides(id),
  rating            INT NOT NULL check(rating >= 1 and rating <= 5),
  title             TEXT,
  comment           TEXT,
  tokens            tsvector,
  created_at        timestamptz DEFAULT now()
);

-- CREATE TABLE purchases
CREATE TABLE purchases (
  id                SERIAL PRIMARY KEY,
  customer_id       INT NOT NULL REFERENCES users(id),
  tour_id           INT NOT NULL REFERENCES tours(id),
  guide_id          INT NOT NULL REFERENCES guides(id),
  price             INT NOT NULL,
  discount          INT DEFAULT 0,
  refund            BOOLEAN DEFAULT false
);

