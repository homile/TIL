import React, {Component} from 'react';

class TOC extends Component{
   shouldComponentUpdate(newProps, newState){
      console.log("=>TOC render shouldComponentUpdate",
      newProps.data,
      this.props.data);
      if (this.props.data === newProps.data){
         return false;
      }
      return true;
   }
   render(){
      console.log('=>TOC render');
      let lists = [];
      let data = this.props.data;
      let i = 0;
      while (i < data.length){
         // 여러개의 목록을 자동으로 생성할 때에는 key와 식별자를 적어준다.
         lists.push(
            <li key={data[i].id}>
               <a 
                  href={"/content/" + data[i].id}
                  data-id = {data[i].id}
                  onClick = {function(e){
                     e.preventDefault();
                     this.props.onChangePage(e.target.dataset.id);
                  }.bind(this)}
               >{data[i].title}</a>
            </li>)
         i = i + 1;
      }
      return(
         <nav>
            <ul>
               {lists}
            </ul>
         </nav>
      );
   }
}

// TOC라는 클래스를 다른 클래스에서 사용할 수 있게 해준다.
export default TOC;