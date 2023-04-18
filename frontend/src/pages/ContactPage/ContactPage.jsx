import ContactForm from "../../component/ContactForm/ContactForm"
import ContactInfo from "../../component/ContactInfo/ContactInfo"
import ContactMap from "../../component/ContactMap/ContactMap"
import Heading from '../../component/Heading/Heading';
import bgImage from "../../assets/images/contactbanner.jpg"


const ContactPage = () => {
  return (
    <>
        <Heading title="Contact us" bgImage={bgImage} />
        <ContactMap />
        <div className="wrap">
            <div className="contact__container">
                <ContactForm />
                <ContactInfo />
            </div>
        </div>
    </>
  )
}

export default ContactPage;