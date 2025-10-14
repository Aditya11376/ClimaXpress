import { FcFeedback } from "react-icons/fc";

export const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="container-30">
          <div className="cont-30-logo">
            <FcFeedback size={100} />
          </div>
          <div className="cont-30-descp">
            <p className="cont-30-para">
              If you have questions or just <br />
              want to get in touch, use the <br />
              form. We look forward to <br />
              hearing from you.
            </p>
          </div>
        </div>

        <div className="container-70">
          <h2>Contact Us</h2>
          <form action="#" method="post">
            <input
              type="text"
              name="name"
              id="myName"
              placeholder="Your Name"
              autoComplete="false"
              required
            />
            <input
              type="email"
              name="email"
              id="myEmail"
              placeholder="Your Email"
              autoComplete="false"
              required
            />
            <textarea
              name="Message"
              id="myMessage"
              rows="5"
              autoComplete="false"
              placeholder="Your Message"
              required
            ></textarea>
            <input type="submit" value="Send Message" />
          </form>
        </div>
      </div>
    </section>
  );
};
