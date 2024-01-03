const environments = {
    local: {
        baseUrl: 'https://convertionapi.com/',
        token: 'asd123'
    }
};

const selectedEnvironment = process.env.NODE_ENV || 'local';
module.exports = { ...environments[selectedEnvironment]};