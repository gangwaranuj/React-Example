import React from 'react';


class Example extends React.Component {
   render() {
      return (
         <div>
            <h3>Array: {[this.props.propArray]}</h3>
            <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
            <h3>Func: {this.props.propFunc()}</h3>
            
         </div>
      );
   }
}

Example.propTypes = {
   propArray: React.PropTypes.array.isRequired,
   propBool: React.PropTypes.bool.isRequired,
   propFunc: React.PropTypes.func.isRequired,
   
}

Example.defaultProps = {
   propArray: [1,2,3,4,5],
   propBool: true,
   propFunc: function(e){return e},
   
}

export default Example;

