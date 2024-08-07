import { Metadata } from "next";
import ContactForm from "../_components/contact-form/ContactForm";
import "./styles.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with us!",
};

export default function Page() {
  return (
    <>
      <header className="contact-page-header">
        <div className="flex h-full items-center">
          <div className="width-container">
            <h1>Contact Us</h1>
          </div>
        </div>
      </header>
      <section className="pink-section contact-page">
        <div className="width-container">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
