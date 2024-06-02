import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  number: Yup.string()
  .matches(/^[0-9]+$/, 'Enter numbers only').min(3, "Too Short!")
  .required('Required'),
});

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    username: "",
    number: "",
  };
  const handleSubmit = (values, actions) => {
    console.log(values);
    onAdd({
      contName: values.username,
      contNumber: values.number,
      
    });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.container}>
        <div className={css.divLabel}>
          <label htmlFor={nameFieldId} className={css.label}>Name</label>
          <Field type="text" name="username" id={nameFieldId} className={css.name} />
          <ErrorMessage name="username" component="span"className={css.span} />
        </div>
        <div className={css.divLabel}>
          <label htmlFor={numberFieldId} className={css.label}>Number</label>
          <Field type="text" name="number" id={numberFieldId} className={css.name}/>
          <ErrorMessage name="number" component="span" className={css.span}/>
        </div>

        <button type="submit" className={css.btn}>Submit</button>
      </Form>
    </Formik>
  );
}
