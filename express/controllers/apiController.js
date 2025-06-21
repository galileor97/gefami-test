const ApiModel = require('../models/apiModel');

class ApiController {
    static async getUsers(req, res) {
        try {
            const users = ApiModel.getAllUsers();
            res.json({
                responseCode: 200,
                responseMessage: "SUCCESS",
                data: users
            });
        } catch (error) {
            res.status(500).json({
                responseCode: 500,
                responseMessage: "INTERNAL SERVER ERROR",
                error: error.message
            });
        }
    }

    static async createUser(req, res) {
        try {
            const { name, email } = req.body;
            
            if (!name || !email) {
                return res.status(400).json({
                    responseCode: 400,
                    responseMessage: "BAD REQUEST - Name and email are required"
                });
            }
            
            const existingUser = ApiModel.getUserByEmail(email);
            if (existingUser) {
                return res.status(409).json({
                    responseCode: 409,
                    responseMessage: "CONFLICT - Email already exists"
                });
            }
            
            const newUser = ApiModel.createUser(name, email);
            
            res.status(201).json({
                responseCode: 201,
                responseMessage: "USER CREATED SUCCESSFULLY",
                data: newUser
            });
        } catch (error) {
            res.status(500).json({
                responseCode: 500,
                responseMessage: "INTERNAL SERVER ERROR",
                error: error.message
            });
        }
    }
}

module.exports = ApiController; 