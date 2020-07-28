import React, { Component } from "react";
import arraydata from "./Data.json";


export default class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            pay:false
        }
      }

      handleClick = (props) => {
        
        this.props.history.push('/card')
     }


  render() {
    console.log(this.props.history);
    return (
      <div>
        <div className="bg-primary">
          <h2 className="text-center text-white">
            Buy iPhone in discount with Debit Card Payment
          </h2>
          <img
            src="https://cdn.mos.cms.futurecdn.net/7nZ3bBChFb5KRDvhJ2qjZ-650-80.jpg.webp"
            style={{ width: "1296px", height: "400px" }}
            alt="nav"
          ></img>
        </div>



{/* =================================CARDS FOR BUYYY=========================== */}
        <div className="row mt-5">
          {arraydata.map(e => {
            return (
              <div className="col-3 mb-4 d-flex justify-content-around ">
                <div class="card" style={{width: "18rem"}}>
                  <img class="card-img-top ml-5" src={e.img} alt="Card" style={{width:"200px",height:"200px"}}></img>
                  <div class="card-body">
                    <h5 class="card-title text-center">{e.name}</h5>
                    <button className=" col-12 btn-lg btn-success"  onClick={() => this.handleClick(this.props)}>PAY NOW</button>
                   
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
