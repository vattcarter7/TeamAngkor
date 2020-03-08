-- ** DATABASE SCHEMAS AND TABLES

-- CREATE TABLE users
CREATE TABLE users(
  id                        SERIAL PRIMARY KEY,
  email                     TEXT UNIQUE NOT NULL check (email ~* '^.+@.+\..+$'),
  password                  VARCHAR(128) NOT NULL,
  firstname                 VARCHAR(100) NOT NULL,
  lastname                  VARCHAR(100) NOT NULL,
  gender                    VARCHAR(10) NOT NULL,
  user_role                 VARCHAR(50) DEFAULT 'user',
  tokens                    tsvector,
  created_at                TIMESTAMPTZ DEFAULT now(),
  modified_date             TIMESTAMPTZ,
  active                    BOOLEAN DEFAULT true,
  password_reset_token      VARCHAR(200),
  password_reset_expires    TIMESTAMPTZ
);

-- CREATE TABLE tours
CREATE TABLE tours(
  id                            SERIAL PRIMARY KEY,
  name                          VARCHAR(200),
  description                   TEXT,
  images                        TEXT[] NOT NULL,
  videos                        TEXT[],
  includes                      VARCHAR(255)[],
  not_includes                  VARCHAR(255)[],
  tokens                        tsvector,
  created_at                    TIMESTAMPTZ DEFAULT now(),
  published                     BOOLEAN DEFAULT false,
  active                        BOOLEAN DEFAULT true,
  private_1pax_price            REAL NOT NULL,
  private_2pax_price            REAL NOT NULL,
  private_3pax_price            REAL NOT NULL,
  private_4pax_price            REAL NOT NULL,
  private_5pax_price            REAL NOT NULL,
  private_6pax_price            REAL NOT NULL,
  private_7pax_price            REAL NOT NULL,
  private_8pax_price            REAL NOT NULL,
  private_9pax_price            REAL NOT NULL,
  private_10pax_price           REAL NOT NULL,
  private_11pax_price           REAL NOT NULL,
  private_12pax_price           REAL NOT NULL,
  private_13pax_price           REAL NOT NULL,
  private_14pax_price           REAL NOT NULL,
  private_15pax_price           REAL NOT NULL,
  private_16pax_price           REAL NOT NULL,
  private_17pax_price           REAL NOT NULL,
  private_18pax_price           REAL NOT NULL,
  private_19pax_price           REAL NOT NULL,
  private_20pax_price           REAL NOT NULL,
  private_21pax_price           REAL NOT NULL,
  private_22pax_price           REAL NOT NULL,
  private_23pax_price           REAL NOT NULL,
  private_24pax_price           REAL NOT NULL,
  private_25pax_price           REAL NOT NULL,
  private_26pax_price           REAL NOT NULL,
  private_27pax_price           REAL NOT NULL,
  private_28pax_price           REAL NOT NULL,
  private_29pax_price           REAL NOT NULL,
  join_tour_price               REAL NOT NULL
);

-- CREATE TABLE languages
CREATE TABLE languages(
  id                SERIAL PRIMARY KEY,
  name              VARCHAR(100) UNIQUE NOT NULL
);

-- CREATE TABLE guides
CREATE TABLE guides(
  id                INT UNIQUE PRIMARY KEY NOT NULL, -- id DERIVED FROM users id
  nickname          VARCHAR(100),
  language_id       INT[] REFERENCES languages(id) NOT NULL,
  profile_picture   TEXT NOT NULL,
  date_of_birth      TIMESTAMPTZ,
  about_me          TEXT NOT NULL,
  phone             VARCHAR(100)[],
  email             VARCHAR(100)[],
  photos            TEXT[],
  videos            TEXT[],
  rating_total      INT default 0,
  rating_count      INT default 0,
  rating            DECIMAL default 0,
  created_at        TIMESTAMPTZ DEFAULT now(),
  active            BOOLEAN DEFAULT true
);

-- CREATE TABLE reviews
CREATE TABLE reviews(
  id                SERIAL PRIMARY KEY,
  customer_id       INT REFERENCES customers(id) NOT NULL,
  tour_id           INT REFERENCES tours(id) NOT NULL,
  guide_id          INT REFERENCES guides(id) NOT NULL,
  rating            INT check(rating >= 1 and rating <= 5) NOT NULL,
  title             TEXT,
  comment           TEXT,
  published         BOOLEAN DEFAULT false,
  tokens            tsvector,
  created_at        TIMESTAMPTZ DEFAULT now()
);

-- CREATE TABLE customers
CREATE TABLE customers(
  id                INT UNIQUE PRIMARY KEY NOT NULL,  -- id DERIVED FROM users id
  country           VARCHAR(100) NOT NULL,
  phone             VARCHAR(100)[] NOT NULL,
  email             VARCHAR(100)[] NOT NULL, 
  language_id       INT REFERENCES languages(id) NOT NULL,
  profile_picture   TEXT,
  created_at        TIMESTAMPTZ DEFAULT now(),
  active            BOOLEAN DEFAULT true
);

-- CREATE TABLE purchases
CREATE TABLE purchases(
  id                SERIAL PRIMARY KEY,
  customer_id       INT NOT NULL REFERENCES customers(id),
  tour_id           INT NOT NULL REFERENCES tours(id),
  guide_id          INT NOT NULL REFERENCES guides(id),
  tour_type         VARCHAR(10), -- join_tour, private_1pax_price, private_2pax_price, private_3pax_price ...
  unit_price        REAL NOT NULL,
  pax               INT NOT NULL,
  discount          INT DEFAULT 0,
  refund            BOOLEAN DEFAULT false,
  tour_date         TIMESTAMPTZ NOT NULL,
  purchase_date     TIMESTAMPTZ DEFAULT now()
);

-- CREATE TABLE guide_request
CREATE TABLE guide_requests(
  id                    SERIAL PRIMARY KEY,
  tour_id               INT REFERENCES tours(id) NOT NULL,
  customer_id           INT REFERENCES customers(id) NOT NULL,
  guide_id              INT REFERENCES guides(id) NOT NULL,
  language_id           INT REFERENCES languages(id) NOT NULL,
  active                BOOLEAN DEFAULT true,
  available             BOOLEAN DEFAULT true,
  tour_request_date     TIMESTAMPTZ NOT NULL,
  created_at            TIMESTAMPTZ DEFAULT now()
);

-- CREATE TABLE guide_request_details
CREATE TABLE guide_request_details(
  id                    SERIAL PRIMARY KEY,
  guide_request_id      INT REFERENCES guide_requests(id) NOT NULL,
  guide_id              INT REFERENCES guides(id) NOT NULL,
  message               TEXT,
  available             BOOLEAN NOT NULL,
  created_at            TIMESTAMPTZ DEFAULT now()
);