module.exports = withBasicRepository = (wrapper, table) => {
  wrapper.save = (obj) => (
    new Promise((resolve, reject) => {
      table.insert(obj, (err, newDoc) => {
        if (err) {
            reject(new Error(`error: ${err}`));
        } else {
            resolve( newDoc );
        }
      });
    })
  );

  wrapper.update = (obj) => (
    new Promise((resolve, reject) => {
      table.update({ _id: obj._id }, obj, {}, (err, numberFilesModified) => {
        if (err) {
          reject(new Error(`error: ${err}`));
        } else {
          resolve({ "filesModified": numberFilesModified });
        }
      })
    })
  );

  wrapper.find = (obj) => (
    new Promise((resolve, reject) => {
      table.find(obj, (err, docs) => {
        if (err) {
          reject(new Error(`error: ${err}`));
        } else {
          resolve(docs);
        }
      })
    })
  );

  wrapper.findOne = (obj) => (
    new Promise((resolve, reject) => {
      table.findOne(obj, (err, doc) => {
        if (err) {
          reject(new Error(`error: ${err}`));
        } else {
          resolve(doc);
        }
      })
    })
  );

  wrapper.list = () => (
    new Promise((resolve, reject) => {
      table.find({}, (err, docs) => {
        if (err) {
          reject(new Error(`error: ${err}`));
        } else {
          resolve(docs);
        }
      })
    })
  );

  wrapper.remove = (obj) => (
    new Promise((resolve, reject) => {
      table.remove(obj, {}, (err, numberFilesRemoved) => {
        if (err) {
          reject(new Error(`error: ${err}`));
        } else {
          resolve({ "filesRemoved": numberFilesRemoved });
        }
      })
    })
  );

  wrapper.count = () => (
    new Promise((resolve, reject) => {
      table.count({}, (err, numberFiles) => {
        if (err) {
          reject(new Error(`error: ${err}`));
        } else {
          resolve({ "numberFiles": numberFiles });
        }
      })
    })
  );

  return wrapper;
}
