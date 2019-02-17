import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
           <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img
                     src={require('./img/masculino-drau.png')} 
                     alt="avatar"
                     className="avatar-img"
                     />
                     <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>

                        <hr/>

                        <p>HTML/CSS | Boostrap | JavaScript | React |  React Native | NodeJs | Express | MongoDB</p>

                       <div className="social-links">

                        {/* LinkedIn */}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                          <i className="fab fa-linkedin-square"  aria-hidden="true" />
                        </a>

                        {/* Github */}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                          <i className="fab fa-github-square"  aria-hidden="true" />
                        </a>

                        {/* Freecodecamp */}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                          <i className="fab fa-free-code-camp"  aria-hidden="true" />
                        </a>

                        {/* Youtube */}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                          <i className="fab fa-youtube-square"  aria-hidden="true" />
                        </a>

                        ;

                       </div>
                     </div>
                    </Cell>
                </Grid>
           </div>
        )
    }
}  
export default Landing;