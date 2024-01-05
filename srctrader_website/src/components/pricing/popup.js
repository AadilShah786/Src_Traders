import React, { useState } from 'react';
import data from '../data';

function App() {
  console.log("popup called 3")

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({

  });

  const handleCheckboxChange1 = (e) => {
    setIsChecked1(e.target.checked);

  };

  const handleCheckboxChange2 = (e) => {
    setIsChecked2(e.target.checked);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isInputsFilled = Object.values(formData).every(val => val.trim() !== '');

    if (isChecked1 && isChecked2 && isInputsFilled) {
      // Perform form submission or other actions
      setFormSubmitted(true);
      console.log('Form data:', formData);
    } else {
      console.log('Form data:', formData);
      alert('Please agree to both checkboxes and fill all input fields.');
    }
  };
  const inputtext = ["First Name", "Last Name", "City", "State", "Country", "Postal Code", "Phone", "Email"]
  return (
    <div className="pop_app" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className='pop_head'>
        <h1>Billing information</h1>
      </div>
      
      <div className="reasonline2"></div>
      {/* <div className="reasonline3"></div> */}
      <form className='moda' onSubmit={handleSubmit}>

        <div className='form_list' style={{marginTop:"4vh" }}>
          {inputtext.map(item => (
            <div key={item} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'centre' ,width:"100%"}}>
                <h4 style={{margin:0,padding:0}}>{item}:</h4>
                <input
                  type="text"
                  name={item}
                  value={formData[item]}
                  onChange={handleInputChange}
                  placeholder={item}
                  className='inputbox'
                  style={{border:"2pt solid blueviolet",borderRadius:"4px",maxWidth:"300px", height:"30px"}}
                />
              </label>
            </div>
          ))}
        </div>


        <div style={{marginTop:"10vh"}}>
          <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>Terms And Conditions</h3>
            <div className='tac' style={{border:"2pt solid blueviolet",borderRadius:"4px"}}>
              {data.tac}
            </div>
            <div>
              <input
                type="checkbox"
                checked={isChecked1}
                onChange={handleCheckboxChange1}
              />
              Agree to terms and conditions </div>
          </label>
        </div>
        <div style={{marginTop:"5vh"}}>
          <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>Cancellation Policy</h3>
            <div className='cap' style={{border:"2pt solid blueviolet",borderRadius:"4px"}}>
              {data.canpolicy}
            </div>
            <div>
              <input
                type="checkbox"
                checked={isChecked2}
                onChange={handleCheckboxChange2}
              />
              Agree to cancellation policy</div>
          </label>
        </div>
        <button style={{marginTop:"4vh"}} type="submit" disabled={!isChecked1 || !isChecked2}>
          PROCEED TO PAYMENT
        </button>
      </form>
      {formSubmitted && <p>Form submitted successfully!</p>}
    </div>
  );
}

export default App;
