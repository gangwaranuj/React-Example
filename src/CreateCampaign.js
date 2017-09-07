import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Notificaiton from './Notificaiton';
import Panel from './Panel';
import PanelHeading from './PanelHeading';
import CreateCampiagnForm from './CreateCampiagnForm';




class CreateCampaign extends React.Component {






    render() {
        const { onLinkClick } = this.props;
        return (
            <div>
                <Panel>
                    <PanelHeading>
                        <b className="row vertical-center-row" style={{ display: 'flex' }}>Campaign Form</b>
                    </PanelHeading>
                  

                </Panel>
                <CreateCampiagnForm/>
                </div>
           
        )
    }
}
export default CreateCampaign;