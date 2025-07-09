import { useState } from 'react';

const ContactUs = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [error, setError] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [successMessage, setSuccessMessage] = useState("");

    const handleName = (e: any) => { setForm({ ...form, name: e.target.value }) };
    const handleEmail = (e: any) => { setForm({ ...form, email: e.target.value }) };
    const handleMessage = (e: any) => { setForm({ ...form, message: e.target.value }) };
    const validate = (): boolean => {
        let isValid = true;
        const newErrors = { name: "", email: "", message: "" };
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!form.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }
        if (!form.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!emailRegex.test(form.email)) {
            newErrors.email = "Please enter the correct emails";
            isValid = false;
        }
        if (!form.message.trim()) {
            newErrors.message = "Message is required";
            isValid = false;
        }
        setError(newErrors);
        return isValid;
    }
    const handleSubmit = () => {
        if (validate()) {
            setError({
                name: "",
                email: "",
                message: ""
            });
            setForm({
                name: "",
                email: "",
                message: ""
            });
            setSuccessMessage("Your message has been successfully sent!");

            setTimeout(() => {
                setSuccessMessage("");
            }, 3000);
        }

    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-7 col-sm-12 d-flex align-items-stretch'>
                    <img className='img-fluid rounded' src="https://testgoto.s3.ap-south-1.amazonaws.com/images/project-2-banner.png" alt="contect Us Page" />
                </div>
                <div className='col-lg-5 col-sm-12 d-flex align-items-stretch'>
                    <div className='bg-white rounded p-4 shadow-lg w-100'>
                        <h1 className='fw-bold'>Contect Us</h1>
                        <p>We list your menu online, help you process orders.</p>
                        <input className=' mb-2 form-control' placeholder='Enter Name' type="text" value={form.name} onChange={handleName} />
                        {error.name && <small className='text-danger mb-2 d-block'>{error.name}</small>}
                        <input className=' mb-2 form-control' placeholder="Enter Email" type="email" value={form.email} onChange={handleEmail} />
                        {error.email && <small className='text-danger mb-2 d-block'>{error.email}</small>}
                        <textarea className=' mb-2 form-control' placeholder='Enter the Message' rows={4} value={form.message} onChange={handleMessage} />
                        {error.message && <small className='text-danger mb-2 d-block'>{error.message}</small>}
                        <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
                        {successMessage && (
                            <div className="alert alert-success mt-3" role="alert">
                                {successMessage}
                            </div>
                        )}
                    </div>
                </div>

            </div>

        </div>
    )

}

export default ContactUs;