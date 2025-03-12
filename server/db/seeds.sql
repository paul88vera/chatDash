-- Seeds for CLIENTS TABLE
INSERT INTO clients
  (first_name, last_name, email)
VALUES
  ('James', 'Peach', 'jpeach@gmail.com'),
  ('James', 'R. Peach', 'jrpeach@gmail.com');


-- Seeds for COMPANY TABLE
INSERT INTO company
  (company_name, company_owner, company_email, client_id)
VALUES
  ('Peaches and Cream', 'James Peach', 'jpeach@gmail.com', 1),
  ('Peaches NCream', 'James R. Peach', 'jrpeach@gmail.com', 2);