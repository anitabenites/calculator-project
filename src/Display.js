// import React, { Component } from 'react';
// import Button from './Button';
//
// class Display extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//       if((this.props.inputs.operand1 && !this.props.inputs.operand2) || (this.props.inputs.operand1 && this.props.operator && !this.props.inputs.operand2)) {
//         return(
//           <div className="display-screen">
//             <div className="display-result">{this.props.inputs.operand1}</div>
//           </div>
//         )
//       }
//       else if(this.props.inputs.operand1 && this.props.inputs.operator && this.props.inputs.operand2){
//         return(
//           <div className="display-screen">
//             <div className="display-result">{this.props.inputs.operand2}</div>
//           </div>
//         )
//       }
//       else{
//         return(
//           <div className="display-screen">
//             <div className="display-result">0</div>
//           </div>
//         )
//       }
//   }
// }
//
// export default Display;
