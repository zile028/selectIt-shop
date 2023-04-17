import ContactForm from "../../component/ContactForm/ContactForm"
import ContactInfo from "../../component/ContactInfo/ContactInfo"
import ContactMap from "../../component/ContactMap/ContactMap"


const ContactPage = () => {
  return (
    <>
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