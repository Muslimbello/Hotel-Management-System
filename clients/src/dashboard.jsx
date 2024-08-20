import { Link } from "react-router-dom";
const Dashbord = () => {
        return (
            <div className="dashbord">
                
                <Link to ='/login'> <input type="submit"/>delet </Link>
                <Link to ='/login'> <input type="submit"/>update</Link>
                <Link to ='/login'> <input type="submit"/>add</Link>
            </div>
    
        );
}
export default Dashbord;