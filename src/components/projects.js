import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center/ cover'}} >React Project #1</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor egestas cursus. Pellentesque accumsan elit luctus erat sollicitudin
          , quis fermentum sem suscipit. 
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:  '#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>

         {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center/ cover'}} >React Project #2</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor egestas cursus. Pellentesque accumsan elit luctus erat sollicitudin
          , quis fermentum sem suscipit. 
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:  '#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>

         {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center/ cover'}} >React Project #3</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor egestas cursus. Pellentesque accumsan elit luctus erat sollicitudin
          , quis fermentum sem suscipit. 
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:  '#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
             {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.competa.com/wp-content/themes/competait/resources/assets/img/banner/angularjs.jpg) center/ cover'}} >Angular #1</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor egestas cursus. Pellentesque accumsan elit luctus erat sollicitudin
          , quis fermentum sem suscipit. 
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:  '#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>

         {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.competa.com/wp-content/themes/competait/resources/assets/img/banner/angularjs.jpg) center/ cover'}} >Angular #2</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor egestas cursus. Pellentesque accumsan elit luctus erat sollicitudin
          , quis fermentum sem suscipit. 
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:  '#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>

         {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.competa.com/wp-content/themes/competait/resources/assets/img/banner/angularjs.jpg) center/ cover'}} >Angular #3</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor egestas cursus. Pellentesque accumsan elit luctus erat sollicitudin
          , quis fermentum sem suscipit. 
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:  '#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>
        </div>
        
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
   <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
     <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*miB-YGBcasaouoRP4rovng.jpeg) center/ cover'}} >VueJS #1</CardTitle>
     <CardText>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor egestas cursus. Pellentesque accumsan elit luctus erat sollicitudin
     , quis fermentum sem suscipit. 
     </CardText>
     <CardActions border>
       <Button colored>GitHub</Button>
       <Button colored>CodePen</Button>
       <Button colored>Live Demo</Button>
     </CardActions>
     <CardMenu style={{color:  '#fff'}}>
       <IconButton name="share"/>
     </CardMenu>
   </Card>

    {/* Project 2 */}
   <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
     <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*miB-YGBcasaouoRP4rovng.jpeg) center/ cover'}} >VueJS #2</CardTitle>
     <CardText>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor egestas cursus. Pellentesque accumsan elit luctus erat sollicitudin
     , quis fermentum sem suscipit. 
     </CardText>
     <CardActions border>
       <Button colored>GitHub</Button>
       <Button colored>CodePen</Button>
       <Button colored>Live Demo</Button>
     </CardActions>
     <CardMenu style={{color:  '#fff'}}>
       <IconButton name="share"/>
     </CardMenu>
   </Card>

    {/* Project 3 */}
   <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
     <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*miB-YGBcasaouoRP4rovng.jpeg) center/ cover'}} >VueJS #3</CardTitle>
     <CardText>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor egestas cursus. Pellentesque accumsan elit luctus erat sollicitudin
     , quis fermentum sem suscipit. 
     </CardText>
     <CardActions border>
       <Button colored>GitHub</Button>
       <Button colored>CodePen</Button>
       <Button colored>Live Demo</Button>
     </CardActions>
     <CardMenu style={{color:  '#fff'}}>
       <IconButton name="share"/>
     </CardMenu>
   </Card>
   </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
             {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://cdn.rancher.com/wp-content/uploads/2016/01/26001728/mongodb-logo-300x208.png) center/ cover'}} >MongoDB #1</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor egestas cursus. Pellentesque accumsan elit luctus erat sollicitudin
          , quis fermentum sem suscipit. 
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:  '#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>

         {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://cdn.rancher.com/wp-content/uploads/2016/01/26001728/mongodb-logo-300x208.png) center/ cover'}} >MongoDB #2</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor egestas cursus. Pellentesque accumsan elit luctus erat sollicitudin
          , quis fermentum sem suscipit. 
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:  '#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>

         {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://cdn.rancher.com/wp-content/uploads/2016/01/26001728/mongodb-logo-300x208.png) center/ cover'}} >MongoDB #3</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor egestas cursus. Pellentesque accumsan elit luctus erat sollicitudin
          , quis fermentum sem suscipit. 
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:  '#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>
        </div>
      )
    }
  }
  render() {
    return(
      <div> 
        <div className="projects-grid"></div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

           <Grid>
                <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                </Cell>
           </Grid>
      </div>
    )
  }
}
export default Projects;