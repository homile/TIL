import React, {Component} from 'react';

class UpdateContent extends Component{
   constructor(props){
      super(props);
      this.state = {
         title: this.props.data.title,
         desc: this.props.data.desc
      };
      this.inputFromHandler = this.inputFromHandler.bind(this);
   }

   inputFromHandler(e){
      this.setState({[e.target.name]:e.target.value});
   }

   render(){
      console.log('UpdateContent render');
      return (
         <article>
            <h2>UpdateContent</h2>
            <form action='/create_process' method='post'
               onSubmit={function(e){
                  e.preventDefault();
                  this.props.onSubmit(
                     e.target.title.value,
                     e.target.desc.value
                  );
                  alert('Submit!!!');
               }.bind(this)}>
               <p>
                  <input 
                     type="text" 
                     name="title" 
                     placeholder="title"
                     value={this.state.title}
                     onChange={this.inputFromHandler}
                     ></input>
               </p>
               <p>
                  <textarea 
                     name='desc' 
                     placeholder='description'
                     value={this.state.desc}
                     onChange={this.inputFromHandler}
                  ></textarea>
               </p>
               <p>
                  <input type='submit'></input>
               </p>
            </form>
         </article>
      );
   }
}
export default UpdateContent;