import MyContext from "./MyContext";

const Cars = props => (

    <MyContext.Consumer>

        {
            context => {
              <Fragment>
              <h4>Cars:</h4>
                {
                    Object.keys(context.cars).map(carID => (
                        <Car
                            key={carID}
                            name={context.cars[carID].name}
                            price={context.cars[carID].price}
                            incrementPrice={() => context.incrementPrice(carID)}
                            decrementPrice={() => context.decrementPrice(carID)}
                        />
                    ))
                }

              </Fragment>
            }

        }


    </MyContext.Consumer>
  
);