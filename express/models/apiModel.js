
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', createdAt: '2023-01-01T00:00:00.000Z' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', createdAt: '2023-01-02T00:00:00.000Z' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', createdAt: '2023-01-03T00:00:00.000Z' }
];

class ApiModel {
    static getAllUsers() {
        return users;
    }

    static getUserByEmail(email) {
        return users.find(user => user.email === email);
    }

    static getUserById(id) {
        return users.find(user => user.id === id);
    }


    static createUser(name, email) {
        const newUser = {
            id: Date.now(),
            name: name,
            email: email,
            createdAt: new Date().toISOString()
        };

        users.push(newUser);
        return newUser;
    }

    static getUserCount() {
        return users.length;
    }
}

module.exports = ApiModel; 