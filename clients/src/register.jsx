import { Link } from "react-router-dom";
const Register = () => {
        return (
            <div className="App">
      <div className="background">
      <form className="form">
        <div className="admin_card">
        <div className="admin">Admine login </div>
        <div className="input-box"><input type="username" placeholder="Username"/></div>
        <div className="input-box"><input type="email" placeholder="Email"/></div>
        <div className="input-box"><input type="password" placeholder="Password"/></div>
        <div className="input-box"><input type="password" placeholder="Confarm-Password"/></div>
        <div className="submit-btn">
        <div><input type="submit"/></div>
        </div>
         <p>i have an account <Link to ='/login'> Sigup</Link></p>

        </div>
      </form>
    </div>
    </div>
    
        );
}
export default Register;