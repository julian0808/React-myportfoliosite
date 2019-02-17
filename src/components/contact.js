import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
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
                  <h2>Contact Me</h2>
                  <hr/>

                 <div className="contact-list">
                 <List>
                   <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-phone-square" aria-hidden="true"/>
                       (57) 456-7890
                       </ListItemContent>
                    </ListItem>

                   <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-fax" aria-hidden="true"/>
                       (57) 456-7890
                       </ListItemContent>
                    </ListItem>

                   <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-envelope" aria-hidden="true"/>
                       someone@example.com
                       </ListItemContent>
                    </ListItem>

                   <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fab fa-skype" aria-hidden="true"/>
                       MySkypeID
                       </ListItemContent>
                    </ListItem>


                 </List>
                 </div>
                </Cell>
              </Grid>
           </div>
        )
    }
}  
export default Contact;