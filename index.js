const { GoogleToken } = require('gtoken');
const gtoken = new GoogleToken({
  keyFile: 'key.json', // or path to .p12 key file
  email: 'my_service_account_email@developer.gserviceaccount.com',
  scope: ['YOUR-SERVICE_NAME.a.run.app'] // or space-delimited string of scopes
});

getTokenFromAccountService = async () => {
  const tokens = await gtoken.getToken();
  console.log(tokens);
};

getTokenFromAccountService();
