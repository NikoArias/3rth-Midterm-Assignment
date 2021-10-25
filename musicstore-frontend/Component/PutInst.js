import { React, Component } from "react"
import { getInstrumentDetail, putInstrumentDetail, delInstrumentDetail} from "./api/instruments";


class App extends Component{
  constructor(props){
    super(props)
    this.state ={
      "name" : "",
      "price" : "",
      "model" : "",
      "brand" : "",
    }

    this.onPutInstrumentDetailSucces = this.onPutInstrumentDetailSucces.bind(this);
    this.onPutInstrumentDetailError = this.onPutInstrumentDetailError.bind(this);
    this.onPutInstrumentDetailDone = this.onPutInstrumentDetailDone.bind(this);

  }

  onPutInstrumentDetailSucces(response){

  }

  onPutInstrumentDetailError(err){
    alert("Something went wrong -onError-")
  }

  onPutInstrumentDetailDone(){
  }

  onTextChange(e) {
      const value = e.target.value;
      const name = e.target.name;
      this.setState({
          [name]:value,
      }
        console.log(this.state);
      );
  }



  onButtonClick(e) {
      const { id, name, price, model, brand } = this.state;



      const data = {
          id: id,
          name: name,
          price: price,
          model: model,
          brand: brand,
      };



      this.setState({
          isLoading: true,
      }
          putInstrumentDetail(data, this.onPutInstrumentDetailSucces, this.onPutInstrumentDetailError, this.onPutInstrumentDetailDone);
  );
  }

  render(){
    const { name, price, model, brand } = this.state;



    return (
        <>
            <h1>Update Instrument Record</h1>
                    <p>
                        Instrument Name: <input name="name" value={name} onChange={this.onTextChange} />
                    </p>
                    <p>
                        Price of instrument: <input name="price" value={price} onChange={this.onTextChange} />
                    </p>
                    <p>
                        Model: <input name="model" value={model} onChange={this.onTextChange} />
                    </p>
                    <p>
                        Brand: <input name="brand" value={brand} onChange={this.onTextChange} />
                    </p>
                    <p>
                        <button onClick={this.onButtonClick}>Update</button>
                    </p>
        </>
  );
  }
}

export default App
