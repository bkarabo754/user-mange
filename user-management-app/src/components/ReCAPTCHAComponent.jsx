import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCAPTCHAComponent = ({ onChange }) => {
  // Retrieve the reCAPTCHA site key from environment variables
  const sitekey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  // Check if the site key is available
  if (!sitekey) {
    // Log an error message if the site key is missing
    console.error("ReCAPTCHA site key is missing.");
    // Return null to avoid rendering the ReCAPTCHA component without a valid key
    return null;
  }

  return <ReCAPTCHA sitekey={sitekey} onChange={onChange} />;
};

export default ReCAPTCHAComponent;
