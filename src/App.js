import React, { Component } from 'react';
import './App.css'

class App extends Component {
    onChange=(e)=>{
    	this.setState({input:e.target.value,
    	    isClicked:false});



    			
      
      
      var total = 0;
      for (var i=0;i<this.state.data.articles.length;i++){
         if(this.state.data.articles[i].content)
      		{
      			if(this.state.data.articles[i].content.toLowerCase().search(this.state.input.toLowerCase())!==-1)
      			{
      				var article=this.state.data.articles[i];
       			    this.setState({output:article,
       			    	isClicked:true
       			    })
       			}

       			else
       			{
       				total++;
       			}
       		
      	
      }

      


      
      }



    }


	constructor(props){
		super(props)

		this.state={
			data:[],
			input:"",
			output:[],
			isClicked:false,
			isLoaded:false

		}
	}

componentDidMount(){
	fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=eadb6da4bb5847a8b5f5b8a633e53ab9').then(res=>res.json()).then(json=>{this.setState({data:json})})
}	
  render() {console.log(this.state)
  	if(this.state.isClicked)
  	{
    return (
      <div className="App">
       <form id="searchForm">
         <input type ="text" id="search" placeholder = "Enter search Queries Here"  onChange={this.onChange} />
         
         <br /> <br />

         		 <span id="output">
       {console.log(this.state.output)}
       
       <div id="block"><div><span id="author">
       {this.state.output.author}
       </span>
       <span id="publishdate"> {this.state.output.publishedAt}
       </span></div>
       <br/>
       <a id="url" href={this.state.output.url}>$</a>
       <br/><div id="title">{this.state.output.title}</div>

       <br/><div id="des">{this.state.output.content}</div></div><br/><br/>
 


       </span>

         
       </form>
      
      </div>
    );
}
else
   {
   	    return (
      <div className="App">
       <form id="searchForm" >
         <input type ="text" id="search" placeholder = "Enter search Queries Here" onChange={this.onChange} />
         
       </form>
      </div>
    );
   }
  }
}

export default App;
