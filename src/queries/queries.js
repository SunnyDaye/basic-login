

const selectAllUsers = () => {
    return {text: 'SELECT * FROM users'}
};

const insertUser = (values) => {

    return {
        text: 'INSERT INTO users(first_name,last_name,email,password) VALUES($1,$2,$3,$4)',
        values
    }
}

const getUser = (email) => {
    return {
        text: `SELECT user_id, email, password FROM users WHERE email = '${email}';`
    };
}

const getUserById = (id) => {
    return {
        text: `SELECT user_id, first_name, last_name FROM users WHERE user_id = '${id}';`
    };
}

module.exports = {
    selectAllUsers,
    insertUser,
    getUser,
    getUserById
}