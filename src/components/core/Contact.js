import React from 'react';

const Contact = () => {
  return(
    <section>
      <div id="contact" className="contact-flex">
        <div id="contact-header">
          <div>QUESTIONS OR CONCERNS?</div>
          <div>WANT TO CONTRIBUTE?</div>
        </div>
        <div id="contact-body">
          <div className="contact-sub-header">CONTACT</div>
          <div id="contact-email">
            <p>If you have any questions, comments or concerns you would like to address with us &#8212; especially any technical issues you experience while using our website, we would like to hear from you.</p>
            <p>You can email us directly at: <a href="mailto:admin@leaguecensus.com">admin@leaguecensus.com</a></p>
          </div>
          <div className="contact-sub-header">GITHUB</div>
          <div id="contact-git">
            <p>If you would like to contribute to the project or assist in fixing bugs or technical issues &#8212; we are always open to and welcome the assistance. Please feel free to clone our repository or send feedback.</p>
            <p>You can find our GitHub at: <a href="https://github.com/MThos/lol" target="_blank" rel="noopener noreferrer">https://github.com/MThos/lol</a></p>
          </div>
        </div>
      </div>
    </section>    
  );
}

export default Contact;