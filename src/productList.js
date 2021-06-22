const ProductList = props => (
    <div className="product-list">
        <h2>Product list:</h2>
  
        <Cars
            cars={props.cars}
            incrementCarPrice={props.incrementCarPrice}
            decrementCarPrice={props.decrementCarPrice}
        />
        
    </div>
);

export default ProductList;