import { useState } from "react";

const FormNested = () => {
    const [person, setPerson] = useState({
        name: "Gatik Rajput",
        address: {
            city: "Mumbai",
            landMark: "shell Colony, Chembur Mumbai",
            image: "https://i.imgur.com/Sd1AgUOm.jpg"
        }
    });

    const handleName = (e: any) => setPerson({ ...person, name: e.target.value });

    const handleCity = (e: any) => setPerson({
        ...person, address: {
            ...person.address,
            city: e.target.value
        }
    });

    const handleLandMark = (e: any) => setPerson({
        ...person, address: {
            ...person.address,
            landMark: e.target.value
        }
    });

    const handleImage = (e: any) => setPerson({
        ...person, address: {
            ...person.address,
            image: e.target.value
        }
    });
    return (
        <div className="row">
            <div className="col-12">
                <h1>Form Nested</h1>
            </div>
            <div className="col-6 mb-2">
                <label >Name:</label>
                <input className="w-100" type="text" value={person.name} onChange={handleName}></input>
            </div>
            <div className="col-6 mb-2">
                <label >City:</label>
                <input className="w-100" type="text" value={person.address.city} onChange={handleCity}></input>
            </div>
            <div className="col-6 mb-2">
                <label >LandMark:</label>
                <input className="w-100" type="text" value={person.address.landMark} onChange={handleLandMark}></input>
            </div>
            <div className="col-6 mb-2">
                <label >Image:</label>
                <input className="w-100" value={person.address.image} onChange={handleImage}></input>
            </div>
            <div className="col-6">
                <p>Hello, {person.name} <br /> This is the information about our Address : {person.address.landMark} ,{person.address.city}
                </p>
                <img className="img-thumbnail" src={person.address.image} />
            </div>

        </div>
    )

}

export default FormNested;