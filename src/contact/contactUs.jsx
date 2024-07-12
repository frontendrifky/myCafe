
function Contact(){

    return (
      <div className="contact-page">
        {/* Header Section */}
        <div className="contact-header">
          <h1>Get in Touch with Us</h1>
        </div>
  
        {/* Contact Information Section */}
        <section className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Address:</strong> 123 Coffee Street, San Francisco, CA 94102</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Email:</strong> contact@ocafe.com</p>
        </section>
  
        {/* Contact Form Section */}
        <section className="contact-form">
          <h2>Contact Form</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </div>
    );
  }
  
  export default Contact;