import React from 'react';

class SimpleButton extends React.Component {



    render() {
        return (
          <div>
            <button disabled={true}>Click me</button>
          </div>
        );
    }
}

export default SimpleButton;