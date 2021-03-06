import React from "react";

// Function Component - Stateless
// const Text = (props) => {
//   return (
//     <React.Fragment>
//       {console.log(props)}
//       <h5>
//         {props.name} ({props.amount})
//       </h5>
//     </React.Fragment>
//   );
// };

// export default Text;

// Class Component
class Text extends React.Component {
  render() {
    return (
      <h5>
        {this.props.name} ({this.props.amount})
      </h5>
    );
  }
}

class Hello extends React.Component {
  render() {
    return (
      <p>
        <h5>Hey I like using React.</h5>
      </p>
    );
  }
}

export { Text, Hello };
