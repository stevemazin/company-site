import React from "react";
import { useForm } from "react-hook-form";
import * as styles from "../../styles/Form.module.css";

export default function Form() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.contactWrapper}>
        <div className={styles.contactHeader}>
          <h1 className={styles.contactHeaderMain}>Send Us a Message</h1>
          <p className={styles.contactHeaderTag}>
            We'll get back to you as soon as we can!
          </p>
        </div>
        <div className={styles.formWrapper}>
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Full Name</label>
              <input
                className={styles.input}
                name="fullname"
                type="text"
                placeholder="John Doe"
                ref={register({ required: true, maxLength: 20 })}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Contact</label>
              <input
                className={styles.input}
                name="contact"
                type="text"
                placeholder="+254700555888"
                ref={register({ required: true, maxLength: 20 })}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Message</label>
              <textarea
                className={styles.textarea}
                name="message"
                type="text"
                rows="5"
                placeholder="Short message here..."
                ref={register({ required: true, maxLength: 20 })}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Services</label>

              <select className={styles.select} name="services" ref={register}>
                <option className={styles.option} value="property-management">
                  Property Management
                </option>
                <option className={styles.option} value="debt-collection">
                  Debt Collection
                </option>
              </select>
            </div>
            <input className={styles.submitBtn} type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
