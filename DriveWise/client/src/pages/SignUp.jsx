// Imports
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'

// SignUp Function
const SignUp = () => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      name: formValues.name,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    navigate('/signin')
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="sign-up" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <h1 className="signup-header">Sign-Up</h1>
            <input
              className="signup-field"
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Name"
              value={formValues.name}
              required
              size="50"
            />
          </div>
          <div className="input-wrapper">
            <input
              className="signup-field"
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email"
              value={formValues.email}
              required
              size="50"
            />
          </div>

          <div className="input-wrapper">
            <input
              className="signup-field"
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              required
              size="50"
            />
          </div>
          <div className="input-wrapper">
            <input
              className="signup-field"
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formValues.confirmPassword}
              required
              size="50"
            />
          </div>
          <br />
          <button
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

//Exports
export default SignUp
