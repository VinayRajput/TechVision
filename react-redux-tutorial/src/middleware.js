const cartMiddleware = store => next => action =>{
      switch(action.type){
         case 'ADD':
            console.log('Middleware Add action trigerred');
            next(action)
         break;
         case 'Delete':
            console.log('Middleware Delete action trigerred');
            next(action)
         break;
         case 'Change':
            console.log('Middleware Change action trigerred');
            next(action)
         break;
         default :
            console.log('Middleware Default action trigerred');
         break;
      }
      
}
export default cartMiddleware;

