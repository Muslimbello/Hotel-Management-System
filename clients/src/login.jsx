import { Link } from "react-router-dom";
import  './login.css';
const Loginpage = () => {
        return (
            <div className="App">
      <div className="background">
      <form className="form">
        <div className="admin_card">
        <div className="admin">Admine login </div>
        <div className="input-box"><input type="email" placeholder="Email"/></div>
        <div className="input-box"><input type="password" placeholder="Password"/></div>
        <div className="check-box"><input type="checkbox"/>Remember me
        </div>
        <div className="submit-btn">
        <div><input type="submit"/></div>
        <a href="#">Forget password</a>
        </div>
         <p>dont have an account <Link to='/Register'> sigin</Link></p>

        </div>
      </form>
    </div>
    </div>
    
        );
}
export default Loginpage;
