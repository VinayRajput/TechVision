let userSession = {
   id: {
      required: true,
      type: 'int',
      unsigned: true,
      notNull: true,
      primaryKey: true,
      autoIncrement: true
   },
   sessID: {
      required: true,
      type: 'varchar',
      notNull: true,
      length: 500
   },
   timestamp: {
      required: true,
      type: 'int',
      notNull: true,
      length: 20
   }
}

module.exports = userSession;