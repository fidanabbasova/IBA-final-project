import React, {Component} from 'react';
import './contact.scss';
class Contact extends Component{
    render() {
        return(
            <section id="contact" className="contact-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 map-container">
                            <div className="mapouter col-md-12">
                                <div className="gmap_canvas col-md-12">
                                <iframe className="col-md-12" height="600" id="gmap_canvas"
                                src="https://maps.google.com/maps?q=bayil%20plaza&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0" scrolling="yes" marginHeight="0" marginWidth="0"></iframe>
                                <a href="https://www.embedgooglemap.net">embedgooglemap.net</a></div>
                            </div>
                        </div>
                        <div className="col-sm-6 message-section">
                            <h3 className="contact-section-title text-center text-uppercase">Send Us A <strong className="contact-section-title-strong">Message</strong></h3>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-6">
                                        <input type="text" className="form-control" placeholder="First name" required/>
                                    </div>
                                    <div className="form-group col-6">
                                        <input type="text" className="form-control" placeholder="Last name" required/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control"  placeholder="example@email.com" required="Valid email is required: ex@abc.xyz"/>

                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="+994-55-555-55-55"/>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" rows="5" placeholder="Write us a message" required></textarea>
                                </div>
                                <button className="submit-button col-sm-auto" type="submit">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Contact;
