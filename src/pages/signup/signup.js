import React, { useState } from 'react'
import SignUpModal from '../../components/signUpModal';
import './signup.css';

const ControlledInput = ({ value, onChange,placeholder }) => (
    <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
  );

function Signup() {

    //Example of controlled component
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


  return (
    <div className='Signup'>
      <form>
        <div className='form-inner' id='modal-root'>
            <h2>Sign Up</h2>
            <div className='form-group'>
                <label htmlFor='FirstName'>FirstName:</label>
                <ControlledInput value={firstName} onChange={setfirstName} placeholder="FirstName" />
            </div>
            <div className='form-group'>
                <label htmlFor='LastName'>LastName:</label>
                <ControlledInput value={lastName} onChange={setlastName} placeholder="LastName" />
            </div>
            <div className='form-group'>
                <label htmlFor='Mobile'>Mobile:</label>
                <ControlledInput value={mobile} onChange={setMobile} placeholder="Mobile" />
            </div>
            <div className='form-group'>
                <label htmlFor='Email'>Email:</label>
                <ControlledInput value={email} onChange={setEmail} placeholder="Email" />
            </div>
            <div className='form-group'>
                <label htmlFor='Username'>Username:</label>
                <ControlledInput value={username} onChange={setUsername} placeholder="Username" />
            </div>
            <div className='form-group'>
                <label htmlFor='Password'>Password:</label>
                <ControlledInput value={password} onChange={setPassword} placeholder="Password" />
            </div>
            <SignUpModal data = {{
        firstName: firstName,
        lastName: lastName,
        mobile: mobile,
        email: email,
        username: username,
        password: password
    }}/>
        </div>
      </form>
    </div>
  )
}

export default Signup
