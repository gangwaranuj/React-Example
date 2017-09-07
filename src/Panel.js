import React from 'react';

class Panel extends React.Component {
    render() {
        const {children} = this.props;
        return (
            <div className="panel panel-primary">
                {children}
            </div>
        );
    }
}

export default Panel;