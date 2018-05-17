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
    <Card.Group>
      <Card
        image={src}
        header='Elliot Baker'
        meta='Friend'
        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
      />
    </Card.Group>

  ));
}


    render() {
        return (
          <Grid.Row>
            {this.renderItems()}
          </Grid.Row>
        );
    }
}
