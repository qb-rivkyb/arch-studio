import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import colors from "../../colors";
import { H2 } from "../ui/textTypes";
import * as s from "./contactform.styl";
import Arrow from "../../public/icons/icon-arrow-white.jsx";

export default function ContactForm() {
  return (
    <div
      css={{
        marginTop: "72px",
        "@media (min-width: 768px)": {
          marginTop: "200px",
          display: "flex",
          justifyContent: "space-between",
        },
      }}
    >
      <H2
        css={{
          marginBottom: "48px",
          "@media (min-width: 768px)": { maxWidth: "25%" },
          "@media (max-width: 426px)": { maxWidth: "75%" },
        }}
      >
        Connect with us
      </H2>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Can't be empty"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Can't be empty"),
          message: Yup.string()
            .max(100, "Must be less than 100 characters")
            .required("Can't be empty"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form css={s.form}>
          <div css={{ position: "relative" }}>
            <Field
              name="name"
              type="text"
              placeholder="name"
              css={s.textInput}
            />
            <span css={s.errorMessage}>
              <ErrorMessage name="name" />
            </span>
          </div>
          <div css={{ position: "relative" }}>
            <Field
              name="email"
              type="email"
              placeholder="email"
              css={s.textInput}
            />
            <span css={s.errorMessage}>
              <ErrorMessage name="email" />
            </span>
          </div>
          <div css={{ position: "relative" }}>
            <Field
              name="message"
              type="textarea"
              placeholder="message"
              css={[s.textInput, { height: "134px" }]}
            />
            <span css={s.errorMessage}>
              <ErrorMessage name="message" />
            </span>
          </div>
          <button type="submit" css={s.submitButton}>
            <Arrow />
          </button>
        </Form>
      </Formik>
    </div>
  );
}
