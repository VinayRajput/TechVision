let user = {
   id: {
      required: true,
      type: 'int',
      unsigned: true,
      notNull: true,
      primaryKey: true,
      autoIncrement: true
   },
   email: {
      required: true,
      type: 'varchar',
      notNull: true,
      length: 100
   },
   password: {
      required: true,
      type: 'varchar',
      notNull: true,
      length: 100
   },
   firstname: {
      required: true,
      type: "varchar",
      notNull: true,
      length: 100
   },
   lastname: {
      required: true,
      type: "varchar",
      notNull: true,
      length: 100
   }
}

module.exports = user;