import "../styles/loginAdmin.css";
import { useState } from "react";
import logoLogin from "../asset/images/logo_login_admin.png";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const onChangeUsername = (e) => {
      const username = e.target.value;
      setUsername(username);
    };
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };

    const handleLogin = (e) => {
      e.preventDefault();
      setMessage("");
      setLoading(true);

      if (username == "regen" && password == "123456") {
        setTimeout(() => {
            setLoading(false);
            setMessage("");
            navigate("/dashboard");
        }, "1000")  
      }
      else{
        setTimeout(() => {
            setLoading(false);  
            setMessage("Password atau Username Salah")
        }, "1000")
      }
    };

    return (
      <div className="text-center container-login">
          <main className="form-signin w-100 m-auto">
            <form onSubmit={handleLogin}>
                <img className="mb-4" src={logoLogin} alt="" width="72" height="57"/>
                <h1 className="h3 mb-3 fw-normal">Login Admin</h1>

                <div className="form-floating mb-3">
                    <input 
                      type="text" 
                      className="form-control"  
                      placeholder="name@example.com"
                      name="username"
                      value={username}
                      onChange={onChangeUsername}
                    />
                    <label htmlFor="username">Username</label>
                </div>
                <div className="form-floating">
                    <input 
                      type="password" 
                      className="form-control" 
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={onChangePassword}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                {message && (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                        {message}
                        </div>
                    </div>
                )}

                <p className="text-start">Lupa Password?</p>
                <button className="w-100 btn btn-lg btn-success" type="submit" disabled={loading}>
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Sign in</span>
                </button>
                <p className="mt-5 mb-3 text-muted">&copy; BRT-ITERA</p>
            </form>
        </main>
      </div>
    );
  }
  
  export default Login;
  