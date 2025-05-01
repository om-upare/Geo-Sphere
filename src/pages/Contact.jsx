import { IoMdSend } from "react-icons/io";

export const Contact = () => {
  const handleFormData = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormData}>
          <input
            type="text"
            required
            autoComplete="off"
            placeholder="Enter your Name"
            name="username"
            className="form-control"
          />
          <input
            type="email"
            required
            autoComplete="off"
            placeholder="Enter your Email"
            name="email"
            className="form-control"
          />

          <textarea
            name="message"
            className="form-control"
            placeholder="Enter your message"
            rows="10"
            required
            autoComplete="off"
          ></textarea>

          <button type="submit" value="send" className="send-btn">
            Send
            <IoMdSend />
          </button>
        </form>
      </div>
    </section>
  );
};
