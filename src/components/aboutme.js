import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class About extends Component {
    render() {
        return(
           <div className="contact-body">
              <Grid className="contact-grid">
                <Cell col={6}>
                  <h2>Julian Mesa</h2>
                  <img
                     src={require('./img/Fred_man-512.png')} 
                     alt="avatar"
                     style={{height: '250px'}}
                     />
                     <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Vivamus ac purus ligula. Phasellus posuere fringilla ipsum et rhoncus. Proin enim urna, venenatis sit amet urna non, consequat maximus tellus. Nam neque ligula, luctus eu lectus eget, posuere interdum risus. Fusce dapibus libero eget felis rhoncus, quis efficitur nisl dictum. In aliquet erat et dui elementum, quis tincidunt nisl volutpat. Donec pretium ligula non euismod eleifend. Suspendisse feugiat luctus ex tincidunt interdum. Nam non mi at nisl tempor lacinia et aliquet lectus. Nullam sollicitudin pharetra volutpat. In ultricies a tellus quis suscipit. Duis ac sollicitudin libero, ut consequat augue.</p>
                </Cell>
                <Cell col={6}>
                 
                 

                 <div className="contact-list">
                 </div>
                </Cell>
              </Grid>
           </div>
        )
    }
}  
export default About;