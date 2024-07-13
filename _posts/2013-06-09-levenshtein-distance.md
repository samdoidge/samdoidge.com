---
layout: post
title: Levenshtein Distance
---

The Levenshtein distance between two words is the minimum number of single-character edits (insertion, deletion, substitution) required to change one word into the other. – [Wikipedia](http://en.wikipedia.org/wiki/Levenshtein_distance)

To implement in MySQL, use the following function – if using phpmyadmin you will need to set a different delimiter such as ‘$’ instead of ‘;’ to create this function.

``` sql
CREATE FUNCTION levenshtein( s1 VARCHAR(255), s2 VARCHAR(255) )
  RETURNS INT
  DETERMINISTIC
  BEGIN
    DECLARE s1len, s2len, i, j, c, ctemp, cost INT;
    DECLARE s1char CHAR;
    -- max strlen=255
    DECLARE cv0, cv1 VARBINARY(256);
    SET s1len = CHARLENGTH(s1), s2len = CHARLENGTH(s2), cv1 = 0x00, j = 1, i = 1, c = 0;
    IF s1 = s2 THEN
      RETURN 0;
    ELSEIF s1len = 0 THEN
      RETURN s2len;
    ELSEIF s2len = 0 THEN
      RETURN s1len;
    ELSE
      WHILE j <= s2len DO
        SET cv1 = CONCAT(cv1, UNHEX(HEX(j))), j = j + 1;
      END WHILE;
      WHILE i <= s1len DO
        SET s1char = SUBSTRING(s1, i, 1), c = i, cv0 = UNHEX(HEX(i)), j = 1;
        WHILE j <= s2len DO
          SET c = c + 1;
          IF s1char = SUBSTRING(s2, j, 1) THEN

            SET cost = 0; ELSE SET cost = 1;
          END IF;
          SET ctemp = CONV(HEX(SUBSTRING(cv1, j, 1)), 16, 10) + cost;
          IF c > ctemp THEN SET c = ctemp; END IF;
            SET ctemp = CONV(HEX(SUBSTRING(cv1, j+1, 1)), 16, 10) + 1;
            IF c > ctemp THEN

              SET c = c_temp;

            END IF;
            SET cv0 = CONCAT(cv0, UNHEX(HEX(c))), j = j + 1;
        END WHILE;
        SET cv1 = cv0, i = i + 1;
      END WHILE;
    END IF;
    RETURN c;
  END;
```

 -[Artful Software](http://www.artfulsoftware.com/infotree/qrytip.php?id=552)

 The following is example usage – it returns the name column ordered by the Levenshtein distance – the lowest number is the closest match.

``` sql
SELECT name, LEVENSHTEIN(name, 'string') AS distance
        FROM table ORDER BY distance ASC
```
