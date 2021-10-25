import { React, Component } from "react"
import { delInstrumentDetail} from "./api/instruments";


class App extends Component{
  constructor(props){
    super(props)
    this.state ={
      "name" : "",
      "price" : "",
      "model" : "",
      "brand" : "",
    }

    this.onDelInstrumentDetailSucces = this.onDelInstrumentDetailSucces.bind(this);
    this.onDelInstrumentDetailError = this.onDelInstrumentDetailError.bind(this);
    this.onDelInstrumentDetailDone = this.onDelInstrumentDetailDone.bind(this);
  }


  onDelInstrumentDetailSucces(response){
  alert("record Succesfully Removed")
  }

  onDelInstrumentDetailError(err){
  }

  onDelInstrumentDetailDone(){
  }

  onDeleteClick(e){
    delInstrumentDetail(this.state.id, this.onDelInstrumentDetailSucces, this.onDelInstrumentDetailError, this.onDelInstrumentDetailDone)
  }



  render(){
      const {id , city, country, name, province} = this.state
    return(
    <>
    <h1>Delete App.js</h1>
    <p><button onClick={this.onDeleteClick}>Delete</button></p>
    </>
  );
  }
}

export default App
