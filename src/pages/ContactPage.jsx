import { useState } from "react";

import { validate } from "email-validator";
import emailjs from "@emailjs/browser";

import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { GoMail, GoLocation } from "react-icons/go";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [emailStatus, setEmailStatus] = useState("notsent");

  const onSubmit = () => {
    if (!name || !email || !subject || !message) {
      setEmailStatus("incomplete");
      return;
    }

    if (!validate(email)) {
      setEmailStatus("invalid");
      return;
    }

    const formData = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send("service_fbo6zdb", "template_0biak6l", formData, {
        publicKey: import.meta.env.VITE_EMAIL_KEY,
      })
      .then(
        () => setEmailStatus("valid"),
        (error) => setEmailStatus("error"),
      );
  };

  return (
    <>
      <section className="flex flex-1 flex-col items-center overflow-x-hidden">
        <h1 className="mb-2 text-center font-seurat text-4xl font-bold text-[#74664B]">
          Contact Me
        </h1>

        <div className="flex w-full flex-1 flex-wrap items-center justify-evenly gap-10 overflow-y-auto">
          {/* BEGIN EMAIL INQUIRY */}
          <div
            className="flex max-h-[95%] w-[44rem] flex-col gap-3 overflow-y-auto rounded-xl border border-[#e9deb0] bg-[#f2ede0] p-5 shadow-2xl"
            id="emailinquiry"
          >
            <h1 className="text-center font-bokuteh text-2xl text-[#74664B]">
              Send a Message
            </h1>
            <div className="flex w-full justify-between">
              <div className="flex w-[49%] flex-col">
                <h1 className="mt-2 self-start font-bokuteh font-extralight text-[#74664B]">
                  Name
                </h1>
                <input
                  className="h-12 rounded-xl border border-[#74664B] bg-white px-3 text-lg text-[#91805e]"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                ></input>
              </div>

              <div className="flex w-[49%] flex-col">
                <h1 className="mt-2 self-start font-bokuteh font-extralight text-[#74664B]">
                  Email
                </h1>
                <input
                  className="h-12 rounded-xl border border-[#74664B] bg-white px-3 text-lg text-[#91805e]"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  pattern=".+@example\.com"
                  required
                  placeholder="default@example.com"
                ></input>
              </div>
            </div>

            <div className="flex w-full flex-col">
              <h1 className="mt-4 self-start font-bokuteh font-extralight text-[#74664B]">
                Subject
              </h1>
              <input
                className="h-12 w-full rounded-xl border border-[#74664B] bg-white px-3 text-lg text-[#91805e]"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
              ></input>
            </div>

            <div className="flex w-full flex-col">
              <h1 className="mt-4 self-start font-bokuteh font-extralight text-[#74664B]">
                Message
              </h1>
              <textarea
                className="h-12 w-full rounded-xl border border-[#74664B] bg-white p-3 text-lg text-[#91805e]"
                rows="10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message Here ..."
              ></textarea>
            </div>

            <button
              className="mt-6 w-full rounded-xl bg-[#74664B] px-12 py-4 text-xl font-bold text-[#d6c488] hover:bg-[#91805e]"
              onClick={onSubmit}
            >
              Send Message
            </button>

            {(() => {
              switch (emailStatus) {
                case "valid":
                  return (
                    <p className="mt-2 font-sans font-semibold text-green-600">
                      Email was sent successfully!
                    </p>
                  );

                case "invalid":
                  return <p className="mt-2 text-red-600">Invalid Email.</p>;

                case "incomplete":
                  return (
                    <p className="mt-2 font-sans font-semibold text-red-600">
                      Please fill out all fields.
                    </p>
                  );

                case "error":
                  return (
                    <p className="mt-2 font-sans font-semibold text-red-600">
                      There has been an error. Please try again later
                    </p>
                  );

                default:
                  break;
              }
            })()}
          </div>
          {/* END EMAIL INQUIRY */}
          {/* BEGIN CONTACT INFO */}
          <div className="flex max-h-[95%] w-[24rem] flex-col items-center gap-6 overflow-y-auto rounded-xl border border-[#e9deb0] bg-[#f2ede0] p-4 shadow-2xl">
            <div className="flex flex-col gap-2">
              <h1 className="text-center font-seurat text-xl font-semibold text-[#74664B]">
                Contact Information
              </h1>
              <div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-[#dcd3aa] p-2 text-[#74664B]">
                    <GoMail className="text-2xl" />
                  </div>
                  <div>
                    <h1 className="text-lg font-semibold text-[#74664B]">
                      Email:
                    </h1>
                    <h1 className="font-semibold text-[#9b8864]">
                      tonyvuong245@gmail.com
                    </h1>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-[#dcd3aa] p-2 text-[#74664B]">
                    <GoLocation className="text-2xl" />
                  </div>

                  <div>
                    <h1 className="text-lg font-semibold text-[#74664B]">
                      Location:
                    </h1>
                    <h1 className="font-semibold text-[#9b8864]">
                      Garden Grove, CA
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-center font-seurat text-xl font-semibold text-[#74664B]">
                Social Media
              </h1>
              <div className="flex justify-center gap-6">
                <a
                  className="rounded-lg bg-[#dcd3aa] p-3 text-[#74664B] hover:cursor-pointer hover:bg-[#cbbe81]"
                  href="https://github.com/tonstey"
                  target="_blank"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  className="rounded-lg bg-[#dcd3aa] p-3 text-[#74664B] hover:cursor-pointer hover:bg-[#cbbe81]"
                  href="https://www.linkedin.com/in/tony-vuong-9a17a71b6/"
                  target="_blank"
                >
                  <FaLinkedinIn className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
          {/* END CONTACT INFO */}
        </div>
      </section>
    </>
  );
}
