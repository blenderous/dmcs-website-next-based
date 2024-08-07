import { FormData } from "@/app/_components/contact-form/ContactForm";
import { useState } from "react";

export function useSendEmail(): [
  boolean,
  boolean,
  boolean,
  boolean,
  (data: FormData) => void
] {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [expandButton, setExpandButton] = useState(false);
  const [error, setError] = useState(false);
  const apiEndpoint = "/api/email";

  const handleSendEmail = async (data: FormData) => {
    // expand the button first and then show the loading spinner
    setExpandButton(true);
    setTimeout(() => {
      setLoading(true);
    }, 300);
    try {
      const res = await fetch(apiEndpoint, {
        method: "POST",
        body: JSON.stringify(data),
      });
      const response = await res.json();
      if (response.message === "Email sent") {
        setSuccess(true);
      }
    } catch (err) {
      setSuccess(false);
      setError(true);
    } finally {
      setLoading(false);
      setExpandButton(false);
    }
  };
  return [success, loading, expandButton, error, handleSendEmail];
}
