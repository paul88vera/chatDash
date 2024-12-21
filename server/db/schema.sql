DROP TABLE IF EXISTS clients;

CREATE TABLE clients (
  clientID INT AUTO_INCREMENT PRIMARY KEY,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE company (
  companyID INT AUTO_INCREMENT PRIMARY KEY,
  company_name varchar(255) NOT NULL,
  company_owner varchar(255) NOT NULL,
  company_email varchar(255) NOT NULL,
  client_id INT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_client
    FOREIGN KEY (client_id)
    REFERENCES clients(clientID)
    ON DELETE SET NULL
);

