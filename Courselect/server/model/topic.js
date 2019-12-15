let topic = {
   id: {
      type: 'int',
      unsigned: true,
      notNull: true,
      primaryKey: true,
      autoIncrement: true,
      length: 10
   },
   name: {
      required: true,
      type: 'varchar',
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
   weightage: {
      type: 'int',
      length: 10
   }
}
module.exports = topic;