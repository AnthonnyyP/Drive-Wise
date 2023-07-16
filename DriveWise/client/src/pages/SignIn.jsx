import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const SignIn = ({ setUser }) => {
  let navigate = useNavigate()
  
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ email: '', password: '' })
    setUser(payload)
    navigate('/home')
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <h1 className='signin-header'>Sign-In</h1>
            <input
              className='signin-field'
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Name"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              className='signin-field'
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              required
            />
          </div>
          <br/>
          <button disabled={!formValues.email || !formValues.password}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
