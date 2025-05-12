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
    }
  };

  return (
    <section className="parliamo-section">
      <h2 className={`title-sectionTitle-${Size}`}>PARLIAMO</h2>
      <div className="parliamo-container">
        {/* Immagine del profilo */}
        <img
          src="assets/Me/Me.png"
          alt="Francesco Sommella"
          className="profile-img"
        />

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
                  className={`form-input text-paragraphSmall-${Size}`}
                />
              ) : (
                <textarea
                  id={field.id}
                  placeholder={field.name}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={handleChange}
                  className={`form-textarea text-paragraphSmall-${Size}`}
                  rows={4}
                />
              )}
            </div>
          ))}
          <Button
            text={`${submitted ? "Inviato!" : "INVIA MESSAGGIO"}`}
            size="S"
            iconName="Send"
            type="submit"
          />
        </form>
      </div>
    </section>
  );
};

export default Parliamo;
