-- Insert data into Company table
INSERT INTO Company (CompanyName, CompanyOwner, CompanyEmail, AMName) VALUES
('Alpha Tech', 'John Carter', 'john@alphatech.com', 'Lisa Brown'),
('Beta Solutions', 'Mary Johnson', 'mary@betasolutions.com', 'Tom Smith'),
('Gamma Innovations', 'Robert Wilson', 'robert@gammainnovations.com', 'Emma Davis');

-- Insert data into Clients table
INSERT INTO Clients (AMName, FirstName, LastName, ClientEmail, CompanyID, CompanyName) VALUES
('Lisa Brown', 'Emily', 'Clark', 'emily@client.com', 1, 'Alpha Tech'),
('Tom Smith', 'Daniel', 'Martinez', 'daniel@client.com', 2, 'Beta Solutions'),
('Emma Davis', 'Sophia', 'Lee', 'sophia@client.com', 3, 'Gamma Innovations'),
('Lisa Brown', 'James', 'Wilson', 'james@client.com', 1, 'Alpha Tech');

-- Insert data into Requests table
INSERT INTO Requests (ClientID, AMName, FirstName, LastName, CompanyID, CompanyName, Details) VALUES
(1, 'Lisa Brown', 'Emily', 'Clark', 1, 'Alpha Tech', 'Website redesign inquiry.'),
(2, 'Tom Smith', 'Daniel', 'Martinez', 2, 'Beta Solutions', 'Server maintenance request.'),
(3, 'Emma Davis', 'Sophia', 'Lee', 3, 'Gamma Innovations', 'Custom software development inquiry.'),
(4, 'Lisa Brown', 'James', 'Wilson', 1, 'Alpha Tech', 'Need help with cloud migration.');
