const checkCredentials = (credentials) => {
  return new Promise((resolve, reject) => {
    repositories
      .accounts
      .findOne({ nif: credentials.nif })
      .then(seller => {
        if (seller.password === credentials.password) {
          resolve(seller);
        }else{
          reject("wrong data");
        }
      })
      .catch(err => reject(err));
  });
};

module.exports = checkCredentials;