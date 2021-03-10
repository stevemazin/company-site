import React from "react";
import { useForm } from "react-hook-form";
import * as styles from "../../styles/Form.module.css";

export default function Form() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.contactCard}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <input className={styles.input} name="firstName" ref={register} />
          <select name="gender" ref={register}>
            <option value="property-managament">Property Management</option>
            <option value="debt-collection-services">Debt Collection</option>
            <option value="other">Other</option>
          </select>
          <input
            className={styles.submitBtn}
            value="Send Message"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}
