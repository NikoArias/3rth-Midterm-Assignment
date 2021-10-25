import { React, Component } from "react"
import { Link } from "react-router-dom";


class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state ={
    }
  }

  render(){
    return(
    <>
    <h1>Dashboard</h1>
    <p>To Post a new record <Link to="/create-instrument">click here</Link></p>
    <p>To Get the current records <Link to="/list-instrument">click here</Link></p>
    <p>To update a record <Link to="/update-instrument">click here</Link></p>
    <p>To Delete a record <Link to="/delete-instrument">click here</Link></p>
    </>
  );
 }

}


export default Dashboard;
