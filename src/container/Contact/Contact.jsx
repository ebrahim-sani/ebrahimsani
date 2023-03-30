import React, { useState } from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Contact.scss";

const Contact = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
   });
   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
   const [loading, setLoading] = useState(false);

   const { name, email, message } = formData;

   const handleChangeInput = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = (e) => {
      setLoading(true);

      const contact = {
         _type: "contact",
         name: name,
         email: email,
         message: message,
      };

      client.create(contact).then(() => {
         setLoading(false);
         setIsFormSubmitted(true);
      });
   };

   return (
      <>
         <h2 className="head-text">
            Wanna discuss? Let's <span>Chat😎</span>
         </h2>

         <div className="app__contact-cards">
            <div className="app__contact-card">
               <MdEmail style={{ color: "#EA4335" }} size={40} />
               <a className="p-text" href="mailto:ibraheemsani035@gmail.com">
                  Click Me or Use The Form
               </a>
            </div>
            <div className="app__contact-card">
               <RiWhatsappFill style={{ color: "green" }} size={40} />
               <a className="p-text" href="https://wa.me/+2348106057557">
                  Click Me to Send DM
               </a>
            </div>
         </div>
         {!isFormSubmitted ? (
            <div className="app__contact-form app__flex">
               <div className="app__flex">
                  <input
                     type="text"
                     placeholder="Your Name"
                     name="name"
                     value={name}
                     onChange={handleChangeInput}
                     className="p-text"
                  />
               </div>
               <div>
                  <input
                     type="text"
                     placeholder="Your Email"
                     name="email"
                     value={email}
                     onChange={handleChangeInput}
                     className="p-text"
                  />
               </div>
               <div className="p-text">
                  <textarea
                     className="p-text"
                     name="message"
                     placeholder="Your Message"
                     value={message}
                     onChange={handleChangeInput}
                  ></textarea>
               </div>
               <button type="button" className="p-text" onClick={handleSubmit}>
                  {loading ? "Sending..." : "Send Message"}
               </button>
            </div>
         ) : (
            <div>
               <h3 className="head-text">
                  Thank you for getting in touch with me!
               </h3>
            </div>
         )}
      </>
   );
};

export default AppWrap(
   MotionWrap(Contact, "app__contact"),
   "contact",
   "app__whitebg",
);
