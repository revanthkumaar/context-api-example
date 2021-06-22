const Cars = props => (
    <Fragment>
        <h4>Cars:</h4>
        {/* Finally we can use data */}
        {Object.keys(props.cars).map(carID => (
            <Car
                key={carID}
                name={props.cars[carID].name}
                price={props.cars[carID].price}
                incrementPrice={() => props.incrementCarPrice(carID)}
                decrementPrice={() => props.decrementCarPrice(carID)}
            />
        ))}
    </Fragment>
);