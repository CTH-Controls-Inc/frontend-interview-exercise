CREATE TABLE requests (
    _id INTEGER PRIMARY KEY AUTOINCREMENT,
    partNumber TEXT,
    partName TEXT,
    createdOn DATETIME DEFAULT CURRENT_TIMESTAMP,
    createdBy TEXT,
    status TEXT,
    lastUpdate DATETIME
);

INSERT INTO requests (_id, partNumber, partName, createdOn, createdBy, status, lastUpdate)
VALUES ('1', 'ABC', 'Material ABC', '2023-07-05 00:01:00', 'user1', 'Request started', '2023-07-05 00:10:12');

INSERT INTO requests (_id, partNumber, partName, createdOn, createdBy, status, lastUpdate)
VALUES ('2', 'XYZ', 'Material XYZ', '2023-07-05 09:10:00', 'user1', 'Material en route to station', '2023-07-05 10:10:12');

INSERT INTO requests (_id, partNumber, partName, createdOn, createdBy, status, lastUpdate)
VALUES ('3', 'JKL', 'Material JKL', '2023-07-05 06:01:00', 'user1', NULL, NULL);
