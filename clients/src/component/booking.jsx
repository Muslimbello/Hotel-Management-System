const Booking = () => {
    return (
        <div className="Booking">
            <h4>Booking for Client reservation</h4>
            <form className="Booking_form">
                <div className="Booking_input1">
                    <p>Name of Customer</p>
                    <input type="username" placeholder="Full Name"/>
                </div>
                <div className="Booking_input1">
                    <p>Customers Address</p>
                    <input type="Address" placeholder="Address"/>
                </div>
                <div className="Booking_input1">
                    <p>Customers phone number</p>
                    <input type="tel" id="phone" placeholder="phone Number"/>
                </div>
                <div className="Booking_input2">
                    <label for="male">Male</label><input type="radio" id="male" value="Male" />
                    <label for="female">Femal</label><input type="radio" id="female" value="Female" />
                </div>
                <div className="Booking_input3">
                    <p>Select Room Type</p>
                    <select>
                        <option>Select Room</option>
                        <option>Family room</option>
                        <option>Single room</option>
                    </select>
                </div>
                <div className="Booking_input4">
                    <p>Check in</p>
                    <input type="date" />
                    <input type="time" />
                    </div>
                <div className="Booking_input4">
                    <p>Check out</p>
                    <input type="date" />
                    <input type="time" />
                </div>
                <div className="btn"><input type="submit"/></div>
             </form>
        </div>

    );
}
export default Booking;