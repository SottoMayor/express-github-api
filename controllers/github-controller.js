const dotenv = require('dotenv');
const axios = require('axios')

dotenv.config();
const baseURL = process.env.BASE_URL;

exports.healthCheck = (req, res, next) => {
    return res.json({ message: 'The app is up and running!' });
}

exports.getUsers = async (req, res, next) => {
    const since  = req.query.since || 0
    const itemsPerPage = 5

    const { data } = await axios.get(`${baseURL}/users?since=${since}&per_page=${itemsPerPage}`)
    const lastRecordId = data[itemsPerPage - 1].id

    return res.json({ users: JSON.stringify(data), next_page: `/api/users?since=${ lastRecordId }` });
};
