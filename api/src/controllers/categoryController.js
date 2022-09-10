const Category = require("../models/Category")

// Create
const category = async (req, res, next) => {
    try{
        const newCategory = await Category.create(req.body)
        res.status(200).json({
            success: true,
            message: 'Category created successfully',
            data: newCategory
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: 'Unable to create category'
        })
    }
}

// Get Categories
const getCategories = async (req, res, next) => {
    try{
        const getCategory = await Category.find()
        res.status(200).json({
            success: true,
            message: 'Category retrieved successfully',
            data: getCategory
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: 'Unable to retrieve category'
        })
    }
}

module.exports = {
    category,
    getCategories
}
