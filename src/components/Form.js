import React, {useState} from "react";

const Form = (newLocation) => {
    const [location, setLocation] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        console.log({location});
    if (location === "" || !location) return;

    newLocation(location);
    }

    return (

        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3 mx-auto">
                    <input type="text" className="form-control" placeholder="Location" onChange={(e) =>setLocation(e.target.value)}/>
                    <button className="btn btn-primary input-group-text" type="submit">Buscar</button>
                </div>

            </form>
        </div>
    );
}

export default Form;