let mapping = {
   id:
   {
      type: 'int',
      unsigned: true,
      notNull: true,
      primaryKey: true,
   },
   topic_id:
   {
      type: 'int',
      unsigned: true,
      length: 10,
      notNull: true,
      foreignKey: {
         name: 'topic_fk',
         table: 'topic',
         rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
         },
         mapping: {
            topic_id: 'id'
         }
      }
   },
   subject_id: {
      type: 'int',
      unsigned: true,
      length: 10,
      notNull: true,
      foreignKey: {
         name: 'subject_fk',
         table: 'subject',
         rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
         },
         mapping: {
            subject_id: 'id'
         }
      }
   },
   session_id: {
      type: 'int',
      unsigned: true,
      length: 10,
      notNull: true,
      foreignKey: {
         name: 'session_fk',
         table: 'session',
         rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
         },
         mapping: {
            session_id: 'id'
         }
      }
   },
   course_id: {
      type: 'int',
      unsigned: true,
      length: 10,
      notNull: true,
      foreignKey: {
         name: 'course_fk',
         table: 'course',
         rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
         },
         mapping: {
            course_id: 'id'
         }
      }
   }
}
module.exports = mapping;