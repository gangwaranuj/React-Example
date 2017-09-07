import React from 'react';

class Header extends React.Component {

    render() {
        const { onLinkClick } = this.props;
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div></div>
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Notification</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><a onClick={e => onLinkClick('Create')} href="#">Create Campaign </a></li>
                            <li><a onClick={e => onLinkClick('Campaign')} href="#">Campaign</a></li>
                            <li><a onClick={e => onLinkClick('Manage')} href="#">Manage Campaign </a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};
export default Header;