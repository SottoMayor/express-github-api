const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();
const baseURL = process.env.BASE_URL;

exports.healthCheck = (req, res, next) => {
    return res.json({ message: 'The app is up and running!' });
};

exports.getUsers = async (req, res, next) => {
    const since = req.query.since || 0;
    const itemsPerPage = 5;

    const { data } = await axios.get(
        `${baseURL}/users?since=${since}&per_page=${itemsPerPage}`
    );
    const firstRecordId = data[0].id
    const lastRecordId = data[itemsPerPage - 1].id;

    return res.status(200).json({
        users: JSON.stringify(data),
        previous_page: `/api/users?since=${firstRecordId - 1}`,
        next_page: `/api/users?since=${lastRecordId}`,
    });
};

exports.getUser = async (req, res) => {
    const username = req.params.username;

    const { data } = await axios.get(`${baseURL}/users/${username}`);

    return res.status(200).json({ user: JSON.stringify(data) });
};

exports.getRepository = async (req, res) => {
    const username = req.params.username;

    const { data } = await axios.get(`${baseURL}/users/${username}/repos`);

    return res.status(200).json({ repositories: JSON.stringify(data) });
}