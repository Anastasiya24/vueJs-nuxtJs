const contentful = require('contentful');

const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
};

const previewConfig = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_PREVIEW_ACCESS_TOKEN,
  host: process.env.CTF_CDA_PREVIEW_HOST
}

module.exports = {
  createClient() {
    const params = process.env.CURRENT_ENVIRONMENT === "production" ? config : previewConfig;
    return contentful.createClient(params);
  }
};
