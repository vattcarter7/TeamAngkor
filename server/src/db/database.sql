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

CREATE INDEX users_tokens_idx ON users USING gin(tokens);

-- CREATE TABLE tours
CREATE TABLE tours(
  id                            SERIAL PRIMARY KEY,
  name                          VARCHAR(200) UNIQUE NOT NULL,
  description                   TEXT,
  images                        TEXT[] NOT NULL,
  videos                        TEXT[],
  includes                      VARCHAR(255)[],
  not_includes                  VARCHAR(255)[],
  tokens                        tsvector,
  modified_date                 TIMESTAMPTZ,
  created_at                    TIMESTAMPTZ DEFAULT now(),
  published                     BOOLEAN DEFAULT false,
  active                        BOOLEAN DEFAULT true,
  private_1pax_unit_price           REAL NOT NULL,
  private_2pax_unit_price           REAL NOT NULL,
  private_3pax_unit_price           REAL NOT NULL,
  private_4pax_unit_price           REAL NOT NULL,
  private_5pax_unit_price           REAL NOT NULL,
  private_6pax_unit_price           REAL NOT NULL,
  private_7pax_unit_price           REAL NOT NULL,
  private_8pax_unit_price           REAL NOT NULL,
  private_9pax_unit_price           REAL NOT NULL,
  private_10pax_unit_price          REAL NOT NULL,
  private_11pax_unit_price          REAL NOT NULL,
  private_12pax_unit_price          REAL NOT NULL,
  private_13pax_unit_price          REAL NOT NULL,
  private_14pax_unit_price          REAL NOT NULL,
  private_15pax_unit_price          REAL NOT NULL,
  private_16pax_unit_price          REAL NOT NULL,
  private_17pax_unit_price          REAL NOT NULL,
  private_18pax_unit_price          REAL NOT NULL,
  private_19pax_unit_price          REAL NOT NULL,
  join_tour_unit_price              REAL NOT NULL
);

CREATE INDEX tours_tokens_idx ON tours USING gin(tokens);

-- CREATE TABLE languages
CREATE TABLE languages(
  id                SERIAL PRIMARY KEY,
  name              VARCHAR(100) UNIQUE NOT NULL
);

-- CREATE TABLE photos
CREATE TABLE photos(
  id                SERIAL PRIMARY KEY,
  photo_url         TEXT NOT NULL
);

-- CREATE TABLE guides
CREATE TABLE guides(
  id                INT UNIQUE PRIMARY KEY NOT NULL, -- id DERIVED FROM users id
  nickname          VARCHAR(100),
  language_id       INT REFERENCES languages(id) NOT NULL,
  profile_picture   TEXT NOT NULL,
  date_of_birth     TIMESTAMPTZ NOT NULL,
  about_me          TEXT NOT NULL,
  phone             VARCHAR(100),
  email             VARCHAR(100),
  rating_total      INT default 0,
  rating_count      INT default 0,
  rating            DECIMAL default 0,
  tokens            tsvector,
  created_at        TIMESTAMPTZ DEFAULT now(),
  modified_date     TIMESTAMPTZ,
  active            BOOLEAN DEFAULT true
);

CREATE INDEX guides_tokens_idx ON guides USING gin(tokens);

-- CREATE TABLE guide_photos
CREATE TABLE guide_photos(
  id                SERIAL PRIMARY KEY,
  guide_id          INT REFERENCES guides(id),
  photo_id          INT REFERENCES photos(id)            
);

CREATE INDEX guide_photos_guide_id_idx ON guide_photos(guide_id);
CREATE INDEX guide_photos_photo_id_idx ON guide_photos(photo_id);

-- CREATE TABLE customers
CREATE TABLE customers(
  id                INT UNIQUE PRIMARY KEY NOT NULL,  -- id DERIVED FROM users id
  country           VARCHAR(100) NOT NULL,
  phone             VARCHAR(100) NOT NULL,
  email             VARCHAR(100) NOT NULL, 
  language_id       INT REFERENCES languages(id) NOT NULL,
  profile_picture   TEXT,
  tokens            tsvector,
  created_at        TIMESTAMPTZ DEFAULT now(),
  active            BOOLEAN DEFAULT true
);

CREATE INDEX customer_tokens_idx ON customers USING gin(tokens);

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

CREATE INDEX reviews_customer_id_idx ON reviews(customer_id);
CREATE INDEX reviews_tour_id_idx ON reviews(tour_id);
CREATE INDEX reviews_guide_id_idx ON reviews(guide_id);
CREATE INDEX reviews_tokens_idx ON reviews USING gin(tokens);


-- CREATE TABLE purchases
CREATE TABLE purchases(
  id                SERIAL PRIMARY KEY,
  customer_id       INT NOT NULL REFERENCES customers(id),
  tour_id           INT NOT NULL REFERENCES tours(id),
  guide_id          INT NOT NULL REFERENCES guides(id),
  tour_type         VARCHAR(100), -- join_tour, private_1pax_price, private_2pax_price, private_3pax_price ...
  unit_price        REAL NOT NULL,
  pax               INT NOT NULL,
  discount          INT DEFAULT 0,
  refund            BOOLEAN DEFAULT false,
  tour_date         TIMESTAMPTZ NOT NULL,
  purchase_date     TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX purchases_customer_id_idx ON purchases(customer_id);
CREATE INDEX purchases_tour_id_idx ON purchases(tour_id);
CREATE INDEX purchases_guide_id_idx ON purchases(guide_id);

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

CREATE INDEX guide_requests_tour_id_idx ON guide_requests(tour_id);
CREATE INDEX guide_requests_customer_id_idx ON guide_requests(customer_id);
CREATE INDEX guide_requests_guide_id_idx ON guide_requests(guide_id);

-- CREATE TABLE guide_request_details
CREATE TABLE guide_request_details(
  id                    SERIAL PRIMARY KEY,
  guide_request_id      INT REFERENCES guide_requests(id) NOT NULL,
  guide_id              INT REFERENCES guides(id) NOT NULL,
  message               TEXT,
  available             BOOLEAN NOT NULL,
  created_at            TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX guide_request_details_guide_request_id_idx ON guide_request_details(guide_request_id);
CREATE INDEX guide_request_details_guide_id_idx ON guide_request_details(guide_id);