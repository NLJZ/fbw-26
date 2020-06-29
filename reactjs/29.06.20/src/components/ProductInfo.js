import React from "react";

const ProductInfo = (props) => {
  console.log(props);
  // const selectedItem = props.data.filter((item) => item.id == mathc.params.props.id);
  const selectedItem = props.data.filter((item) => item.id == props.id);
  const moreInfo = selectedItem.map((item) => {
    return (
      <div key={item.id}>
        <h3>{item.productName}</h3>
        <i>{item.icon}</i>
      </div>
    );
  });
  return (
    <React.Fragment>
      <h3>Product farther infos</h3>
      {moreInfo}
    </React.Fragment>
  );
};

export default ProductInfo;
