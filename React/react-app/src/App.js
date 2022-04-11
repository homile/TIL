import React, {Component} from 'react';
import './App.css';
import TOC from './components/TOC'
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Subject from './components/Subject';
import Control from './components/Control';

class App extends Component{
   constructor(props){
      super(props);
      this.max_content_id = 3;
      this.state = {
         mode: 'read',
         selected_content_id:1,
         subject:{title:'WEB', sub:'World Wide Web!'},
         welcome:{title:'welcome', desc:'Hello, React!!'},
         contents:[
            {id:1, title:'HTML', desc:'HTML is HyperText Markup Language'},
            {id:2, title:'CSS', desc:'CSS is for design'},
            {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
         ]
      }
   }
   render(){
      console.log('App render');
      let _title, _desc, _article = null;
      if(this.state.mode === 'welcome'){
         _title = this.state.welcome.title;
         _desc = this.state.welcome.desc;
         _article = <ReadContent title={_title} desc={_desc}></ReadContent>
      }else if(this.state.mode === 'read'){
         let i = 0;
         while(i < this.state.contents.length){
            let data = this.state.contents[i];
            if (data.id === this.state.selected_content_id){
               _title = data.title;
               _desc = data.desc;
               break;
            }
            i = i + 1;
         }
         _article = <ReadContent title={_title} desc={_desc}></ReadContent>
      }else if (this.state.mode === 'create'){
         _article = <CreateContent onSubmit={function(_title, _desc){
            // content 추가
            this.max_content_id = this.max_content_id + 1;
            // let _contents = this.state.contents.concat(
            //    {id: this.max_content_id, title:_title, desc:_desc}
            // );
            // this.setState(
            //    {contents:_contents}
            // );
            // console.log(_title, _desc);
            let newContents = Array.from(this.state.contents);
            newContents.push({id:this.max_content_id, title:_title, desc:_desc});
            this.setState({
               contents: newContents
            });
         }.bind(this)}></CreateContent>
      }

      return (
         <div className="App">
            <Subject 
               title={this.state.subject.title} 
               sub={this.state.subject.sub}
               onChangePage={function(){
                  this.setState({mode:'welcome'});
               }.bind(this)}
            ></Subject>

            <TOC onChangePage = {function(id){
               this.setState({
                  mode:'read',
                  selected_content_id:Number(id)
               });
            }.bind(this)}
            data={this.state.contents}></TOC>

            <Control onChangeMode={function(_mode){
               this.setState({
                  mode:_mode
               })
            }.bind(this)}></Control>

            {_article}
         </div>
      );
   }
}

export default App;
