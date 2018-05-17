import React,{Component} from 'react';
import { Grid, Card, Icon, Image , Button} from 'semantic-ui-react'


export default class Class extends Component {

  constructor(props){
  	super(props);
  	this.state = {
      news:[],
    };
  }

componentDidMount() {

 const  url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d5cf45043cd34b59b432df10e3cef274';


  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({
        news: data.articles
      })
      console.log(data);
    })
    .catch((error)=>{
      console.log('error while trying to retrieve data')
    })
}

renderItems(){
  const src = 'https://placeimg.com/640/480/arch'
  return this.state.news.map((item) =>(

    <div className="col s4">
      <div className="card">
        <div className="card-image">
          <img src={item.urlToImage} alt={item.title} />
          <span className="card-title">{item.source.name}</span>
        </div>
        <div className="card-content">
          <p>{item.title}</p>
        </div>
        <div className="card-action">
          <a href={item.url} target="_blank">Full article</a>
        </div>
      </div>
    </div>

  ));
}


    render() {
        return (
          <div className="row">
            {this.renderItems()}
          </div>
        );
    }
}
