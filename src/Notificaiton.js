import React from 'react';
import Col from './Col';
import Panel from './Panel';
import PanelHeading from './PanelHeading';



class Notificaiton extends React.Component {










    
    _renderdata() {
        const { notificationData } = this.props;
        return notificationData.map((notification, index) => {
            return (
                <Col part='3' key={index}>
                    <Panel>
                        <PanelHeading>
                            <span className="glyphicon glyphicon-remove pull-right"></span>
                            {notification.name}
                        </PanelHeading>
                        <div className="col-md-12">
                            <div className="pull-left">
                                <img src={notification.img} style={{ width: '200px', height: '176px' }}
                                    alt={notification.name}/>
                            </div>
                            <div className="pull-left" style={{ width: '70px', fontSize: '10px', paddingLeft: '10px  ' }}>
                                <div>
                                    description:<b style={{ fontSize: '14px' }}> {notification.description}</b>
                                </div>
                                <br />
                                <div>
                                    link: {notification.link}
                                </div>
                            </div>
                        </div>
                    </Panel>
                </Col>
            )
        });
    }

    render() {

        const { data } = this.props;
        return (
            <div>
                {this._renderdata(data)}

            </div>
        )
    }
}

export default Notificaiton;