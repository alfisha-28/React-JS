import Product from "./Product.jsx";


function ProductTab() {
    let styles = {display : "flex"};
    let options = ["hitech", "durable", "fast"];
    return (
    <div style = {styles}>
    <Product title = "Laptop" price = {978} features={options}/>
    <Product title = "Phone" price = {235} features={options}/>
    <Product title = "Tab" price = {457} features={options}/>
    </div>
    );
}

export default ProductTab;