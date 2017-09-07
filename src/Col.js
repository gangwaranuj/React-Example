import React from 'react';

class Col extends React.Component {
    render() {
        const {children, part} = this.props;
        return (
            <div className={`col-md-${part}`}>
                {children}
            </div>
        );
    }
}

export default Col;