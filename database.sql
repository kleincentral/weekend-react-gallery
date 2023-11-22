CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
  ("url", "title", "description")
  VALUES
  ('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.');
  
INSERT INTO "gallery"
  ("url", "title", "description")
  VALUES
  ('images/rocks.jpg', 'Mountain Path', 'Photo of some rocks I ran across while hiking in North Carolina.'),
  ('images/reflection.jpg', 'Mountain skiing with my folks!', 'From left to right: Grandfather Larry Cramer, my Cousin Nathan Kelly, my Uncle Jeremy Cramer, my Uncle Tim Kelly, my Aunt Tracey Kelly.'),
  ('images/landscape.jpg', 'Gorgeous Landscape', 'Picture of a jeep adventures in Colorado, went with my Grandpa Larry.'),
  ('images/skifast.jpg', 'Great Slogan', 'Top of a pole in Vail skiing resort Colorado, I hope that sticker is still there although it''s probably covered up by now.'),
  ('images/bigskyMT.jpg', 'Background image forever', 'Picture of the gorgeous north side of the mountain in Big Sky Montana. Favorite place to ski.'),
  ('images/gremlin.jpg', 'Snowmaking', 'Image of me while I was working at Afton Alps as a snowmaker. Just turned on the machines and let them rip!');