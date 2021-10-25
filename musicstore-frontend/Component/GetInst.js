import { React, Component } from "react"
import { getInstrumentDetail } from "./api/instruments";


class App extends Component{
  constructor(props){
    super(props)
    this.state ={
      "limit": 25,
      "page": 1,
      "count" : 0,
      "results" : [],
    }

    this.onGetInstrumentDetailSucces = this.onGetInstrumentDetailSucces.bind(this);
    this.onGetInstrumentDetailError = this.onGetInstrumentDetailError.bind(this);
    this.onGetInstrumentDetailDone = this.onGetInstrumentDetailDone.bind(this);


  componentDidMount(){
    getInstrumentDetail(this.onGetInstrumentDetailSucces, this.onGetInstrumentDetailError, this.onGetInstrumentDetailDone);
  }
  onGetInstrumentDetailSucces(response){
   let count = response.data["count"];
   let results = response.data["results"];
   this.setState({
     "count" : count,
     "results" : results,
   })
  }

  onGetInstrumentDetailError(err){
    alert("Something went wrong -onError-")

  }

  onGetInstrumentDetailDone(){
  }


  render(){
    const {price, email, model, brand, name} = response.data
    return(
    let elements = []
    for (let item of results){
      let element = (
        <tr>
        <td>1</td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{model}</td>
        <td>{brand}</td>
        </tr>
      )
    elements.push(element); :D
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
      </>
  );
  }


export default App
