import { React, Component } from "react"
import { delInstrumentDetail} from "../api/instruments";
import { Link } from "react-router-dom";



class DelInstrumentDetail extends Component{
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
    return(
    <>
    <h1>Delete App.js</h1>
    <p><button onClick={this.onDeleteClick}>Delete</button></p>

      <p>Go to Dashboard <Link to="/">click here</Link></p>
    </>
  );
  }
}

export default DelInstrumentDetail;
