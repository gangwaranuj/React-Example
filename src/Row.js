import React from 'react';

class Row extends React.Component {
    render() {
        const {children, part} = this.props;
        return (
            <div className={`col-md-${part}`}>
                {children}
            </div>
        );
    }
}

export default Row;