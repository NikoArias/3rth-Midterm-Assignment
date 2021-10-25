import { React, Component } from "react"
import { postInstrumentDetail } from "../api/instruments";
import { Link } from "react-router-dom";



class PostInstrumentDetail extends Component{
  constructor(props){
    super(props);
    this.state = {
      "name" : "",
      "price" : "",
      "model" : "",
      "brand" : "",
    }
    this.onPostInstrumentSucces = this.onPostInstrumentSucces.bind(this);
    this.onPostInstrumentError = this.onPostInstrumentError.bind(this);
    this.onPostInstrumentDone = this.onPostInstrumentDone.bind(this);

    this.onTextChange = this.onTextChange.bind(this);
    this.onClickChange = this.onClickChange.bind(this)
  }

  onPostInstrumentSucces(response){
    alert("acount succesfully created")
  }


  onPostInstrumentError(err){

  }


  onPostInstrumentDone(){

  }

  onTextChange(e){
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]:value,
    });
  }

  onClickChange(e){
    const {name, price, model, brand} = this.state
    const data = {
      "name":name,
      "price":price,
      "model":model,
      "brand":brand,
    }
    postInstrumentDetail(data, this.onPostInstrumentSucces, this.onPostInstrumentError, this.onPostInstrumentDone)
  }


  render(){
    const {name, price, model, brand} = this.state
    return(
      <>
          <h1>Create Instrument</h1>
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
                      <button onClick={this.onClickChange}>Post</button>
                  </p>

                    <p>Go to Dashboard <Link to="/">click here</Link></p>
      </>
    );
  }
}

export default PostInstrumentDetail;
