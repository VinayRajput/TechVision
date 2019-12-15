let session = {
   id: {
      required: true,
      type: 'int',
      unsigned: true,
      notNull: true,
      primaryKey: true,
      autoIncrement:true
   },
   name: {
      required: true,
      type: 'varchar',
      notNull: true,
      length: 100
   },
   price:{
      required:true,
      type:'int',
      notNull:true,
      unsigned:true,
      length:10
   },
   length:{
      require:true,
      type:'varchar',
      notNull:true,
      length:10
   },
   weightage:{
      type:'int',
      length:10
   }
}
module.exports = session;