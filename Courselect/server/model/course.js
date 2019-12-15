let courses = {
   id: {
      required: true,
      type: 'int',
      unsigned: true,
      notNull: true,
      primaryKey: true,
      autoIncrement: true
   },
   name: {
      required: true,
      type: 'varchar',
      notNull: true,
      length: 100
   },
   subjects: {
      required: true,
      type: "varchar",
      notNull: true,
      length: 100
   },
   price: {
      required: true,
      type: 'int',
      notNull: true,
      unsigned: true,
   },
   length: {
      require: true,
      type: 'varchar',
      notNull: true,
      length: 10
   },
   topics: {
      type: 'varchar',
      length: 100
   },
   weightage: {
      type: 'int',
      length: 10
   }
}

module.exports = courses;