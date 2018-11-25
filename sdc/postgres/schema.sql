DROP DATABASE udata;
CREATE DATABASE udata;
\c udata

CREATE TABLE IF NOT EXISTS Course (
  id SERIAL PRIMARY KEY,
  title VARCHAR(70),
  description VARCHAR(255),
  tag VARCHAR(13),
  avg_rating DECIMAL(2, 1),
  total_ratings INT,
  enrollment INT,
  created_by VARCHAR(40),
  last_updated VARCHAR(30),
  language VARCHAR(25),
  img_url VARCHAR(100),
  list_price VARCHAR(7),
  discount_price VARCHAR(7),
  video_hrs DECIMAL(3, 1),
  total_articles INT,
  total_downloads INT,
  active_coupon VARCHAR(11),
  ccOptions TEXT []
);

\COPY Course (title, description, tag, avg_rating, total_ratings, enrollment, created_by, last_updated, language, img_url, list_price, discount_price, video_hrs, total_articles, total_downloads, active_coupon, ccOptions) FROM '/Users/angelazhou/Desktop/sdc/header-sidebar-service/sdc/postgres/sampleData.tsv' DELIMITER E'\t';
