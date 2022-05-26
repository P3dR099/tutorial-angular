INSERT INTO CATEGORY(id, name) VALUES (1, 'Eurogames');
INSERT INTO CATEGORY(id, name) VALUES (2, 'Ameritrash');
INSERT INTO CATEGORY(id, name) VALUES (3, 'Familiar');
INSERT INTO CLIENT(id, name) VALUES (1, 'client1');
INSERT INTO CLIENT(id, name) VALUES (2, 'client2');
INSERT INTO CLIENT(id, name) VALUES (3, 'client3');
INSERT INTO LOANS(id, name_game, name_client, loan_date, return_date) VALUES (2, 'loans1', 'client', CURRENT_TIME(), CURRENT_TIME());
INSERT INTO LOANS(id, name_game, name_client, loan_date, return_date) VALUES (3, 'loans2', 'client', CURRENT_TIME(), CURRENT_TIME());
INSERT INTO LOANS(id, name_game, name_client, loan_date, return_date) VALUES (4, 'loans4', 'client', CURRENT_TIME(), CURRENT_TIME());
