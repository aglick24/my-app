import React from 'react';
import './Welcome.css';

class Welcome extends React.Component<{}, { site_name: string }> {

  constructor(props: any) {
    super(props);
    this.state = {site_name: "Alex Glick"}
  }

  render() {
    return (
      <div className="Welcome">
        <div className='InvitationWrapper'>
          <div className='Invitation'>
            <h1>Welcome to {this.state.site_name}'s website! The purpose of the site is to take you on a tour through my experiences and interests, while demonstrating some of my technical abilities today. Let's get movin', shall we?</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;