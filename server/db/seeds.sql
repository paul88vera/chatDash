-- sample data into Company table
INSERT INTO Company (CompanyID, CompanyName, CompanyOwner, CompanyEmail)
VALUES 
(1, 'TechCorp', 'Alice Johnson', 'alice@techcorp.com'),
(2, 'HealthPlus', 'Bob Smith', 'bob@healthplus.com'),
(3, 'EduWorld', 'Charlie Brown', 'charlie@eduworld.com');

-- sample data into Clients table
INSERT INTO Clients (ClientID, FirstName, LastName, ClientEmail, CompanyID, CompanyName)
VALUES 
(1, 'David', 'Williams', 'david.williams@email.com', 1, 'Alice Johnson'),
(2, 'Emma', 'Thompson', 'emma.thompson@email.com', 2, 'HealthPlus'),
(3, 'Frank', 'Miller', 'frank.miller@email.com', 1, 'Alice Johnson'),
(4, 'Grace', 'Anderson', 'grace.anderson@email.com', 3, 'EduWorld'),
(5, 'Henry', 'Wilson', 'henry.wilson@email.com', 2, 'HealthPlus');
