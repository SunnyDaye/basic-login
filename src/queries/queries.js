

const selectAllUsers = () => {
    return {text: 'SELECT * FROM users'}
};

const insertUser = (values) => {

    return {
        text: 'INSERT INTO users(firstname,lastname,email,password) VALUES($1,$2,$3,$4)',
        values
    }
}

module.exports = {
    selectAllUsers,
    insertUser
}