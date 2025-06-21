const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const validateHeaders = (req, res, next) => {
    const userId = req.headers['user-id'];
    const scope = req.headers['scope'];
    
    if (userId !== 'ifabula' || scope !== 'user') {
        return res.status(401).json({
            responseCode: 401,
            responseMessage: "UNAUTHORIZED"
        });
    }
    
    next();
};

let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// Apply header validation to API routes
app.use('/api', validateHeaders);

// GET API endpoint
app.get('/api/users', (req, res) => {
    try {
        res.json({
            responseCode: 200,
            responseMessage: "SUCCESS",
            data: users
        });
    } catch (error) {
        res.status(500).json({
            responseCode: 500,
            responseMessage: "INTERNAL SERVER ERROR"
        });
    }
});

// POST API endpoint
app.post('/api/users', (req, res) => {
    try {
        const { name, email } = req.body;
        
        if (!name || !email) {
            return res.status(400).json({
                responseCode: 400,
                responseMessage: "BAD REQUEST - Name and email are required"
            });
        }
        
        const newUser = {
            id: Date.now(),
            name: name,
            email: email,
            createdAt: new Date().toISOString()
        };
        
        users.push(newUser);
        
        res.status(201).json({
            responseCode: 201,
            responseMessage: "USER CREATED SUCCESSFULLY",
            data: newUser
        });
    } catch (error) {
        res.status(500).json({
            responseCode: 500,
            responseMessage: "INTERNAL SERVER ERROR"
        });
    }
});

app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
    console.log(`Test the API:`)
    console.log(`GET: curl -X GET http://localhost:${port}/api/users -H "User-id: ifabula" -H "Scope: user"`)
    console.log(`POST: curl -X POST http://localhost:${port}/api/users -H "Content-Type: application/json" -H "User-id: ifabula" -H "Scope: user" -d '{"name":"Test User","email":"test@example.com"}'`)
})