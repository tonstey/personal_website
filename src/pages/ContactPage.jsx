import React from "react";
import validator from "validator"
import emailjs from '@emailjs/browser'
import Footer from "../components/Footer";

export default function ContactPage() {
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [subject, setSubject] = React.useState("")
    const [message, setMessage] = React.useState("")

    const [emailStatus, setEmailStatus] = React.useState("notsent")

    const onSubmit = () => {
        if (!name || !email || !subject || !message) {
            setEmailStatus("incomplete")
            return
        }

        if (!validator.isEmail(email)) {
            setEmailStatus("invalid")
            return 
        }

        const formData = {
            name: name,
            email: email,
            subject: subject,
            message: message,
        }

        emailjs.send('service_fbo6zdb', 'template_0biak6l', formData, {publicKey: import.meta.env.VITE_EMAIL_KEY,})
               .then(() => setEmailStatus("valid"), (error) => setEmailStatus("error"),)
        
    }


    return (
        <>
            <section className="flex flex-col bg-lightGreen justify-center items-center min-h-screen py-14 z-20 relative" id="contactpage">
                <h1 className="text-4xl font-bold mt-20">Contact Me</h1>

                <div className="flex flex-col w-[608px] justify-center items-center" id="emailinquiry">
                    <div className="flex w-[100%] justify-between mt-8">
                        <div className="flex flex-col w-[49%]">
                            <h1 className="self-start font-bold text-lg mt-2">Name</h1>
                            <input className="text-lg h-12 px-3 border bg-lightenLightGreen border-black rounded-xl" type="text" value={name} onChange={e => setName(e.target.value)}></input>
                        </div>

                        <div className="flex flex-col w-[49%]">
                            <h1 className="self-start font-bold text-lg mt-2">Email</h1>
                            <input className="text-lg h-12 px-3 border border-black rounded-xl bg-lightenLightGreen" type="text" value={email} onChange={e => setEmail(e.target.value)}></input>
                        </div>
                    </div>

                    <h1 className="self-start font-bold text-lg mt-4">Subject</h1>
                    <input className="text-lg w-[100%] h-12 px-3 border border-black rounded-xl bg-lightenLightGreen" type="text" value={subject} onChange={e => setSubject(e.target.value)}></input>
                    
                    <h1 className="self-start font-bold text-lg mt-4">Message</h1>
                    <textarea className="text-lg w-[100%] p-3 border border-black rounded-xl bg-lightenLightGreen" rows="10" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    
                    <button className="bg-darkenLightGreen rounded-xl px-12 py-4 mt-6 text-xl font-bold" onClick={onSubmit}>Send Message</button>

                    {
                        emailStatus === "notsent" ? 
                            <p></p> : 
                            (emailStatus === "valid" ?
                                <p className="text-green-500 mt-2">Email was sent successfully!</p> :
                                (emailStatus === "invalid" ? 
                                    <p className="text-red-400 mt-2">Invalid Email.</p>:
                                    (emailStatus === "incomplete" ? 
                                        <p className="text-red-400 mt-2">Please fill out all fields.</p>: 
                                        <p className="text-red-400 mt-2">There has been an error. Please try again later</p>)))
                    }

                </div>
            </section>

            <Footer />
        </>
    )
}