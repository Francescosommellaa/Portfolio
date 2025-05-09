import React, { useState } from "react";

// SCSS
import "./Parliamo.scss";

// Atoms
import Button from "../../Atoms/Button/Button";

// DB
import FormInfo from "../../DB/FormInfo";

// Hooks
import { useSize } from "../../../Hooks/useSize";

const Parliamo: React.FC = () => {
  const Size = useSize();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  // Gestione degli input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Validazione del form
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Il nome è obbligatorio.";
    if (!/^\d+$/.test(formData.phone))
      newErrors.phone = "Inserisci un numero valido.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Inserisci un'email valida.";
    if (!formData.message.trim())
      newErrors.message = "Il messaggio è obbligatorio.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Invio del form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form inviato:", formData);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: "", phone: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <section className="parliamo-section">
      <h2 className={`title-h2-${Size}`}>PARLIAMO</h2>
      <div className="parliamo-container">
        {/* Immagine del profilo */}
        <div className="profile-picture">
          <img
            src="/Me/Me.png"
            alt="Francesco Sommella"
            className="profile-img"
          />
        </div>

        {/* Form */}
        <form className="parliamo-form" onSubmit={handleSubmit}>
          {FormInfo.map((field) => (
            <div key={field.id} className="form-group">
              {field.type !== "textarea" ? (
                <input
                  type={field.type}
                  id={field.id}
                  placeholder={field.name}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={handleChange}
                  className={`form-input text-paragraphSmall-${Size} ${
                    errors[field.id] ? "error" : ""
                  }`}
                />
              ) : (
                <textarea
                  id={field.id}
                  placeholder={field.name}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={handleChange}
                  className={`form-textarea text-paragraphSmall-${Size} ${
                    errors[field.id] ? "error" : ""
                  }`}
                  rows={4}
                />
              )}
              {errors[field.id] && (
                <p className="error-message">{errors[field.id]}</p>
              )}
            </div>
          ))}
          <Button
            text={`${submitted ? "Inviato!" : "Invia Messaggio"}`}
            size="M"
            iconName="Send"
            type="submit"
          />
        </form>
      </div>
    </section>
  );
};

export default Parliamo;
