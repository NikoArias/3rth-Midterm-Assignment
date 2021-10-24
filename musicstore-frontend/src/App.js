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

    this.onGetInstrumentDetailSucces = this.onGetInstrumentDetailSucces.bind(this);
    this.onGetInstrumentDetailError = this.onGetInstrumentDetailError.bind(this);
    this.onGetInstrumentDetailDone = this.onGetInstrumentDetailDone.bind(this);

    this.onPutInstrumentDetailSucces = this.onPutInstrumentDetailSucces.bind(this);
    this.onPutInstrumentDetailError = this.onPutInstrumentDetailError.bind(this);
    this.onPutInstrumentDetailDone = this.onPutInstrumentDetailDone.bind(this);

    this.onDelInstrumentDetailSucces = this.onDelInstrumentDetailSucces.bind(this);
    this.onDelInstrumentDetailError = this.onDelInstrumentDetailError.bind(this);
    this.onDelInstrumentDetailDone = this.onDelInstrumentDetailDone.bind(this);
  }

  componentDidMount(){
    getInstrumentDetail(this.onGetInstrumentDetailSucces, this.onGetInstrumentDetailError, this.onGetInstrumentDetailDone);
  }
  onGetInstrumentDetailSucces(response){
    const {price, email, model, brand, name} = response.data
    this.setState({
      name:name,
      price : price,
      email :email,
      model: model,
      brand: brand,
    })
  }

  onGetInstrumentDetailError(err){
    alert("Something went wrong -onError-")

  }

  onGetInstrumentDetailDone(){
  }

  onPutInstrumentDetailSucces(response){

  }

  onPutInstrumentDetailError(err){
    alert("Something went wrong -onError-")
  }

  onPutInstrumentDetailDone(){
    putInstrumentDetail()
  }

  onDelInstrumentDetailSucces(response){
  alert("record Succesfully Removed")
  }

  onDelInstrumentDetailError(err){
    alert("Something went wrong -onError-")
  }

  onDelInstrumentDetailDone(){
    delInstrumentDetail()
  }


  render(){
    return(
    <>
    <h1>Hello World</h1>
    </>
  );
  }
}

export default App
