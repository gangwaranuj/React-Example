import React from 'react';

class CreateCampiagnForm extends React.Component {


    constructor() {
        super(...arguments);
        this.state = {
            name: '',
            desciption: '',
            link: '',
            imgurl: ''
        }
    }

    
    changeHandler(event) {
       
        if (event.target.name === 'name') {
            var name = event.target.value;
            this.setState({
                name
             })
        }
        if (event.target.name === 'desciption') {
            var desciption = event.target.value;
            this.setState({
                desciption
             })
        }
        if (event.target.name === 'link') {

            var  link = event.target.value;
            this.setState({
                link
             })

        }
        if (event.target.name === 'imgurl') {
           var imgurl = event.target.value;
            this.setState({
                imgurl
             })
        }
    }
    onsumithandler(){

        console.log('onsumithandler')
    }


    render() {
        return (
            <div>
                <form onsumbit={this.onsumithandler.bind(this)}>
                    <input onChange={this.changeHandler.bind(this)} className="form-control" type="text" placeholder ="enter name" name='name' value={this.state.name} required/><br/>
                    <input onChange={this.changeHandler.bind(this)} className="form-control"  type="text" placeholder ="enter desciption" name='desciption' value={this.state.desciption} required /><br/>
                    <input onChange={this.changeHandler.bind(this)} className="form-control" type="text" placeholder ="enter link" name='link' value={this.state.link} required/><br/>
                    <input onChange={this.changeHandler.bind(this)} className="form-control" type="text" placeholder ="enter imgurl" name='imgurl' value={this.state.imgurl} required /><br/>
                </form>
            </div>
        )
    }
}

export default CreateCampiagnForm;