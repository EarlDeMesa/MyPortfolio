import React, { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Buttons";

function InputField(props) {
  const hasError = Boolean(props.error);
  const baseStyle =
    "w-full mt-2 p-3 rounded-md border bg-background text-primaryText focus:outline-none focus:border-accentTerracotta";
  const borderStyle = hasError ? "border-red-500" : "border-primaryText/20";
  const inputId = `input-${props.name}`;

  return (
    <label
      htmlFor={inputId}
      className='text-primaryText font-semibold flex flex-col'
    >
      {props.label}
      {props.type === "textarea" ? (
        <textarea
          id={inputId}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          rows={props.rows || 4}
          className={`${baseStyle} ${borderStyle}`}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${inputId}-error` : undefined}
        />
      ) : (
        <input
          id={inputId}
          type={props.type || "text"}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          className={`${baseStyle} ${borderStyle}`}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${inputId}-error` : undefined}
        />
      )}
      {hasError && (
        <p
          id={`${inputId}-error`}
          className='text-red-500 text-sm mt-1'
          role='alert'
        >
          {props.error}
        </p>
      )}
    </label>
  );
}

function SuccessModal(props) {
  return (
    <div
      className='fixed inset-0 flex items-center justify-center z-60 bg-black bg-opacity-50'
      role='dialog'
      aria-modal='true'
      aria-labelledby='success-title'
      aria-describedby='success-desc'
      tabIndex={-1}
    >
      <div className='bg-background rounded-md p-8 max-w-sm w-full mx-4 text-center shadow-lg'>
        <p
          id='success-title'
          className='text-primaryText text-lg font-semibold'
        >
          Thanks for reaching out!
        </p>
        <p id='success-desc' className='text-primaryText mt-2 mb-4 text-sm'>
          Your message has been sent successfully.
        </p>
        <Button type='modal' onClick={props.onClose}>
          Close
        </Button>
      </div>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const emailRegex = /^.+@.+\..+$/;

  function validateForm() {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please write a message";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }

    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSent(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setErrors({});
    }, 1500);
  }

  function closeModal() {
    setSent(false);
  }

  return (
    <main className='max-w-4xl md:max-w-5xl mx-auto px-6 md:px-12 py-20 flex flex-col items-center justify-start relative'>
      <SectionHeader title='Contact Me' />

      <form
        onSubmit={handleSubmit}
        className='w-full max-w-lg bg-background shadow-lg p-6 rounded-md border border-primaryText/20 mt-6'
        noValidate
      >
        <div className='flex flex-col gap-5'>
          <InputField
            label='Name:'
            name='name'
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            placeholder='Your Name'
          />
          <InputField
            label='Email:'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder='Your Email'
          />
          <InputField
            label='Message:'
            type='textarea'
            name='message'
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            placeholder='Write your message here...'
            rows={4}
          />

          <Button type='submit' disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>

      {sent && <SuccessModal onClose={closeModal} />}
    </main>
  );
}
