-- Default Data for ToolShare Database

INSERT INTO `regusers` (`idRegisteredUsers`, `username`, `password`, `email`, `rating`, `zipcode`, `numRatings`) VALUES
(2, 'dmath', 'Danielle', 'dmath@bu.edu', 3.6667, '01773', 3),
(3, 'Tim', 'toolman', 'tim@toolman.com', 3.0000, '90210', 1),
(4, 'Bob', 'villa', 'bob@thisoldhouse.com', 3.0000, '10791', 1);


INSERT INTO `toolcondition` (`idCondition`, `ToolCondition`) VALUES
(3, 'Decent'),
(4, 'Fair'),
(2, 'Good'),
(1, 'Outstanding'),
(5, 'Terrible');


INSERT INTO `tooltype` (`idToolType`, `ToolType`) VALUES
(4, 'Automotive Tool'),
(5, 'Cooking Tool'),
(1, 'Hand Tool'),
(3, 'Lawn Tool'),
(2, 'Power Tool');

