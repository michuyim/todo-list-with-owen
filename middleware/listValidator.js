const { check, validationResult } = require('express-validator');

// Define the validation rules
const validateToDoList = [
    check('title')
        .exists({ checkFalsy: true }).withMessage('Title is required')
        .isLength({ min: 3, max: 20 }).withMessage('Title must be between 3 and 20 characters'),
    check('description')
        .exists({ checkFalsy: true }).withMessage('Description is required')
        .isLength({ min: 6 }).withMessage('Description must be at least 6 characters long')
];

// Error handler for validation results
const ToDoListValidator = (req, res, next) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
};

module.exports = { validateToDoList, ToDoListValidator };