let driver = {
   id: { required: true, type: 'int', primary: true },
   license: { type: 'string', required: true },
   dob: { type: 'date', required: true },
   photo: { type: 'text', required: false },
   documents: { type: 'text', required: false },
   name: { type: 'string', required: true }
}

module.exports = driver;