import { React, Component } from "react"
import { getInstruments } from "../api/instruments";
import { Link } from "react-router-dom";



class GetInstrumentDetail extends Component{
  constructor(props){
    super(props);
    this.state ={
      instruments:[],
    }

    this.onGetInstrumentDetailSucces = this.onGetInstrumentDetailSucces.bind(this);
    this.onGetInstrumentDetailError = this.onGetInstrumentDetailError.bind(this);
    this.onGetInstrumentDetailDone = this.onGetInstrumentDetailDone.bind(this);
  }

  componentDidMount(){
    getInstruments(this.onGetInstrumentDetailSucces, this.onGetInstrumentDetailError, this.onGetInstrumentDetailDone);
  }
  onGetInstrumentDetailSucces(response){
   this.setState({
     instruments:response.data["results"]
   });
  }

  onGetInstrumentDetailError(err){
    alert("Something went wrong -onError-")

  }

  onGetInstrumentDetailDone(){
  }


  render(){
    const { instruments } = this.state;
    console.log(instruments)
    let elements = []
    for (let result of instruments){
      let elementJSX = (
      <tr>
        <td>{result.id}</td>
        <td>{result.name}</td>
        <td>{result.price}</td>
        <td>{result.model}</td>
        <td>{result.brand}</td>
      </tr>
      )
      elements.push(elementJSX)
    }
    return (
      <>

      <table>
        <tr>
        <th>id</th>
        <th>name</th>
        <th>price</th>
        <th>model</th>
        <th>brand</th>
        </tr>
        {elements}
      </table>


        <p>Go to Dashboard <Link to="/">click here</Link></p>

      </>
  );
  }
}


export default GetInstrumentDetail;
