import "./Product.css";


function Product({title, price, features}) {
    let isDiscount = price > 300;
    let styles = {backgroundColor : isDiscount ? "pink" : "" };
        return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>Price : $ {price}</h5>
            <h5>
                {features.map((feature) => (
                    <li>{feature}</li>
                ))}
            </h5>
            {isDiscount ? <p>Discount of 5%</p> : null}
            {/* {price >= 300 && <p>Discount of 5%</p> } */}
        </div>
      );
   
}

export default Product;