import React from 'react';

export default class EditDriver extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         prop : props
      }
   }
   render () {
      return (
         <div>
         
            <hr />
            <h2>Add / Edit Driver Form id: </h2>
            <form ref="addEditDriver">
               <div className="">
                  <input type="text" ref="name" placeholder="Enter Driver Name" className="form-control" required />
               </div>
               <input type="text" ref="license" placeholder="license" className="form-control" required />
               <input type="text" ref="dob" placeholder="Date of birth" className="form-control" required />
               <input type="file" ref="photo" placeholder="Attach your photo" className="form-control" />
               <input type="file" ref="documents" className="form-control" multiple />
               <button type="button" className="btn btn-info btn-sm" onClick={this.addDriver}>Add Driver</button>
               &nbsp;
               <button type="button" className="btn btn-info btn-sm" onClick={this.updateDriver}>Update Driver Details</button>
            </form>
         </div>
      )
   }
}