import React from 'react';

class PanelHeading extends React.Component {
    render() {
       
        const { children } = this.props;
        return (
            <div className="panel-heading" >
                {children}
              
            </div>

        );
    }
}

export default PanelHeading;