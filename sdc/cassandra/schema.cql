DROP KEYSPACE udata;

CREATE KEYSPACe udata WITH REPLICATION = {
  'class': 'SimpleStrategy', 
  'replication_factor': 1
};

USE udata;

CREATE TABLE IF NOT EXISTS Course (
  id INT PRIMARY KEY,
  title VARCHAR,
  description VARCHAR,
  tag VARCHAR,
  avg_rating FLOAT,
  total_ratings INT,
  enrollment INT,
  created_by VARCHAR,
  last_updated VARCHAR,
  language VARCHAR,
  img_url VARCHAR,
  list_price VARCHAR,
  discount_price VARCHAR,
  video_hrs FLOAT,
  total_articles INT,
  total_downloads INT,
  active_coupon VARCHAR,
  ccOptions TEXT
);

COPY Course (id, title, description, tag, avg_rating, total_ratings, enrollment, created_by, last_updated, language, img_url, list_price, discount_price, video_hrs, total_articles, total_downloads, active_coupon, ccOptions) FROM '/Users/angelazhou/Desktop/sdc/header-sidebar-service/sdc/postgres/sampleData.tsv' WITH DELIMITER='\t';