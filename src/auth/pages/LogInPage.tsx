import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '~auth/core/authContext';
import authService from '~auth/core/authService';

const LogInPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { saveAccessToken } = useAuth();

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await authService.logInUser(formData);
      await saveAccessToken(response.accessToken);

      return navigate('/');
    } catch (error) {
      console.error(error.message);
      alert(error.message)
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      <p>
        Need an account?{" "}
        <button onClick={() => navigate('/register')}>Create one here</button>
      </p>
    </div>
  );

}

export default LogInPage