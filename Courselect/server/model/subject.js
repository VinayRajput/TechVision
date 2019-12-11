let subject = {
   id: {
      required: true,
      type: 'int',
      unsigned: true,
      notNull: true,
      primaryKey: true,
      autoIncrement: true,
      foreignKey: {
         name: 'session_subject_fk',
         table: 'session',
         rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
         },
         mapping: {
            id: 'session_subject_fk'
         }
      }
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
   topics: {
      type: 'varchar',
      length: 100
   },
   weightage: {
      type: 'int',
      length: 10
   }
}

module.exports = subject;