const bcrypt = require('bcrypt');

const beforeCreate = async (newUserData) => {
    newUserData.password = await bcrypt.hash(newUserData.password, 10);
    return newUserData;
}

const beforeUpdate = async (updatedUserData) => {
    updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
    return updatedUserData;
}

module.exports = {
    beforeCreate,
    beforeUpdate
}