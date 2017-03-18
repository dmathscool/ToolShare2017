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

INSERT INTO `tools` (`idTool`, `RegUsers_OriginalUser`, `RegUsers_CurrentUser`, `ToolState`, `ToolName`, `ToolType`, `ToolBrand`, `ToolCondition`, `ImgFileLoc`) VALUES
(2, 2, NULL, 1, '1/2\" Crescent wrench', 'Hand Tool', 'Craftsman', 'Good', ''),
(3, 2, NULL, 1, 'potato ricer', 'Cooking Tool', 'Oxo', 'Outstanding', ''),
(4, 2, NULL, 1, 'sawzall', 'Power Tool', 'Milwalkee', 'Decent', ''),
(5, 2, NULL, 1, 'leaf blower', 'Lawn Tool', 'Stihl', 'Good', ''),
(6, 2, NULL, 1, 'leaf rake', 'Lawn Tool', 'Unknown', 'Terrible', ''),
(7, 2, NULL, 1, 'spark plug gapper', 'Automotive Tool', 'Craftsman', 'Outstanding', ''),
(8, 3, NULL, 1, 'biscuit joiner', 'Power Tool', 'DeWalt', 'Outstanding', ''),
(9, 3, NULL, 1, 'power drill', 'Power Tool', 'DeWalt', 'Good', ''),
(10, 3, NULL, 1, 'leaf blower', 'Lawn Tool', 'Husky', 'Fair', ''),
(11, 3, NULL, 1, 'ATV ramps', 'Automotive Tool', 'Unknown', 'Decent', ''),
(12, 3, NULL, 1, 'Diagonal Cutters', 'Automotive Tool', 'Husky', 'Good', ''),
(13, 3, NULL, 1, 'Tin snips', 'Hand Tool', 'Craftsman', 'Outstanding', ''),
(14, 4, NULL, 1, 'Screen spliner', 'Hand Tool', 'Unknown', 'Outstanding', ''),
(15, 4, NULL, 1, 'Circular saw', 'Power Tool', 'Bosch', 'Good', ''),
(16, 4, NULL, 1, 'Needle nose vice grips', 'Hand Tool', 'ViseGrip', 'Fair', ''),
(17, 4, NULL, 1, 'cookie spritzer', 'Cooking Tool', 'I dont know', 'Terrible', ''),
(18, 4, NULL, 1, 'Phillips screwdriver', 'Hand Tool', 'Craftsman', 'Outstanding', '');
