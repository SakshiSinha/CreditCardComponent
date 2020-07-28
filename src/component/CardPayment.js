import React from 'react';
import './Card.css';

export default class CardPayment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            year: '',
            cvv: '',
            arr: '',
            box1: '',
            box2: '',
            box3: '',
            box4: '',
            month: '',
            year: '',
            ownername: ''
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSelect = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
        let maxLength=4
        let feildboxcount = Number(e.target.id);
        let Digitlen = Number(e.target.value.length);
        if (feildboxcount < maxLength) {
            if (Digitlen === maxLength) {
                feildboxcount++;
                let focusfeild= document.getElementById(feildboxcount)
                focusfeild.focus();
            }
        }

      
    }

    handleDelete = (e) => {
        let length = e.target.value.length;
        let feildboxcount = Number(e.target.id);
                if (e.keyCode === 8 && length === 0) {
                    feildboxcount--;
                    document.getElementById(feildboxcount).focus()
                }
            }
    
    // ================Submit==================
    handleSubmit=(props)=>{
           
            this.props.history.push('/success')
        }

    

    handlePasteDigit = (e) => {
        e.preventDefault();
        let focusLast=document.getElementById(4);
        var cardDigit = e.clipboardData.getData("text/plain");
        let count=cardDigit.length;
        console.log(count)
        if(count===16){
            let digitbox1 = cardDigit.slice(0, 4)
            document.getElementById(1).value = digitbox1;
            let digitbox2 = cardDigit.slice(4, 8)
            document.getElementById(2).value = digitbox2;
            let digitbox3 = cardDigit.slice(8, 12)
            document.getElementById(3).value = digitbox3;
            let digitbox4 = cardDigit.slice(12, 16)
            document.getElementById(4).value = digitbox4;
            // ====================Focus on last input field============
            focusLast.focus()
        }
        else{
            alert("Please Enter 16 digit card number")
        }
    
        
    }



    render() {   
        console.log(this.props.history)    
            return (
                <div>

                    
                <h1 className="text-danger text-center">Please Fill all the CARD details</h1>
                <div className="box-card-layout">
                    <form  >
                        <div className="flex">
                            {/* ======1============ */}
                            <div>
                             <label>Owner Name</label>
                             <div id="nameboxxx">
                             <input type="text"  name="ownername" value={this.state.ownername}  placeholder="Enter your name" onChange={this.handleChange}  />
                           
                        </div>
                            </div>
                           <div>
                           <label>CVV No</label>
                           <div>
                                    <input type="text" name="cvv" value={this.state.cvv} onChange={this.handleSelect} placeholder="Enter CVV"  maxLength={3} id="boxsize" />
                                </div>
                           </div>
                          
                        
                        </div>
                   
                        <label htmlFor="nard-number " >Card Number</label>
                        <div className="flex">
                            <input type="text" name="box1" value={this.state.box1}  onChange={this.handleSelect} onKeyUp={this.handleDelete}  id="1" onPaste={this.handlePasteDigit} />
                            <input type="text"  name="box2" value={this.state.box2}  onChange={this.handleSelect} onKeyUp={this.handleDelete}  id="2" />
                            <input type="text"  name="box3" value={this.state.box3}   onChange={this.handleSelect} onKeyUp={this.handleDelete}  id="3"/>
                            <input type="text"  name="box4" value={this.state.box4} maxLength={4} onChange={this.handleSelect} onKeyUp={this.handleDelete}  id="4"/>
                        </div>

                        <label className="marginup">Expiration Date</label>
                        <div className=" flex margin">
                       
                            <div>
                            <input type="text" id="boxsize1" name="month" value={this.state.month}  placeholder="mm" onChange={this.handleSelect}  />
                            <input type="text" id="boxsize1" name="year" value={this.state.year}  placeholder="yyyy" onChange={this.handleSelect}  />
                            <img id="imgsize" src="https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/d7/9f/13/d79f1391-5905-7242-ecc5-c3abb4f916b7/source/512x512bb.jpg" style={{marginLeft:"100px"}} alt="img"></img>
                            <img id="imgsize" src="https://4.bp.blogspot.com/-1Bkg9N3IbAg/V4fMj-n0foI/AAAAAAAAnhw/ZXvrn7lqNWMQFBVc8fu8BqNnF6vUbgpsgCLcB/s330/MasterCard-logo-1990.png" style={{marginLeft:"10px"}}  alt="img"></img>
                            <img id="imgsize" src=" https://usa.visa.com/dam/VCOM/regional/lac/ENG/Default/Partner%20With%20Us/Payment%20Technology/visapos/full-color-800x450.jpg" style={{marginLeft:"10px"}}  alt="img"></img>
                     
                      </div>
                      
                            
                        </div>
                        <button   onClick={() => this.handleSubmit(this.props)}>PAY NOW</button>
                     
                    </form>
  
                      
                </div>

                </div>
            )
        

    }
}
