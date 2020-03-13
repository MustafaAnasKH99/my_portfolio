import React, { Component } from 'react';

class Maillist extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
          
             
        return ( 
            <div>
                
                    <div id="mc_embed_signup">
                        <form action="https://mustafaanas.us19.list-manage.com/subscribe/post?u=293a6a75f2796f9b36fe6317b&amp;id=30d4e94f17" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                            <div id="mc_embed_signup_scroll">
                                <label for="mce-EMAIL">Subscribe to hear from me!</label>
                                
                                <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required />
                                <div aria-hidden="true">
                                    <input type="text" name="b_293a6a75f2796f9b36fe6317b_30d4e94f17" tabindex="-1" value="" />
                                </div>
                                <div class="clear">
                                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" />
                                </div>
                            </div>
                        </form>
                    </div>
            </div>
         );
    }
}
 
export default Maillist;