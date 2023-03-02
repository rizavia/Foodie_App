const Login = () => {
  return (
    <div className="form-body">
      <div className="login">
        <form className="login-form">
          <h1>Login here...</h1>
          <br />
          <div className="input">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <button className="button"> Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
