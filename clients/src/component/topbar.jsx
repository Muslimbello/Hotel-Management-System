import './dashboard.css';
const Topbar = () => {
    return (
        <div className="Topbar"> 
         <h2> Hotel Management System</h2>
         <div className="Topbar_box">
            <div className="box1"> Total Number of room is 10</div>
            <div className="box1"> 6 rooms have been taken</div>
            <div className="box1"> 4 rooms is still availble</div>
         </div>
        </div>

    );
}
export default Topbar;