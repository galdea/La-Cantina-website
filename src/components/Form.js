import React, {useState} from "react";

const Form = () => {
    const [location, setLocation] = useState("");

const onSubmit = (e) => {
    e.preventDefault();
    console.log({location});
    if(location === "" || !location) return;
}

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3 mx-auto">
                    <input type="text" className="form-control" placeholder="location"></input>
                </div>
            </form>
        </div>
    );
}

export default Form;