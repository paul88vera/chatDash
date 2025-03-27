INSERT INTO Company (CompanyName, CompanyOwner, CompanyEmail) VALUES
('Tech Solutions', 'Alice Johnson', 'alice@techsolutions.com'),
('Global Innovations', 'Bob Smith', 'bob@globalinnovations.com'),
('NextGen Software', 'Charlie Brown', 'charlie@nextgensoftware.com');

INSERT INTO Clients (FirstName, LastName, ClientEmail, CompanyID, CompanyName) VALUES
('John', 'Doe', 'john.doe@example.com', 1, 'Tech Solutions'),
('Jane', 'Smith', 'jane.smith@example.com', 2, 'Global Innovations'),
('Emily', 'Davis', 'emily.davis@example.com', 3, 'NextGen Software');

INSERT INTO Requests (Details, ClientID, FirstName, LastName, CompanyID, CompanyName) VALUES
('Need assistance with software update.', 1, 'John', 'Doe', 1, 'Tech Solutions'),
('Looking for a new web development team.', 2, 'Jane', 'Smith', 2, 'Global Innovations'),
('Requesting a cybersecurity audit.', 3, 'Emily', 'Davis', 3, 'NextGen Software');
