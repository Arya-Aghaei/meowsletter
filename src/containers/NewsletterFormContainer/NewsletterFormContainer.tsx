import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import SelectBox from "../../components/SelectBox";
import {
  NewsletterFormCard,
  NewsletterFormWrapper,
} from "./NewsletterFormContainer.style";

interface FormValues {
  name?: string;
  email?: string;
  language?: string;
  time?: string;
}

const validateForm = (formValues: FormValues) => {
  return new Promise((resolve, reject) => {
    // Check if all required fields are filled and push them to emptyFields array
    let emptyFields = [];

    if (!formValues.email) emptyFields.push("email");
    if (!formValues.time) emptyFields.push("time");
    if (emptyFields.length) {
      emptyFields = emptyFields.map((field) => {
        return {
          field,
          message:
            field === "email"
              ? `Please enter your ${field}`
              : `Please select a ${field}`,
        };
      });
      reject(emptyFields);
    }
    resolve(formValues);
  });
};

function NewsletterFormContainer() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors]: any[] = useState([]);
  console.log(errors);

  const [formValues, setFormValues] = useState({
    name: undefined,
    email: undefined,
    language: "en-gb",
    time: undefined,
  });

  const getError = (field: string) => {
    const error = errors?.find((error: any) => error.field === field);
    return error?.message || false;
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    setLoading(true);

    validateForm(formValues)
      .then((values) => {
        //submit form if no errors
        setLoading(false);

        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((error: any) => {
        //set errors if any
        setLoading(false);

        setErrors(error);
      });
  };

  const onFormItemsChange = (e: any) => {
    setErrors(errors.filter((error: any) => error.field !== e.target.name));
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <NewsletterFormWrapper>
      <section
        style={{
          color: "white",
          padding: "0 3rem",
        }}
      >
        <h1>Stay Up-to-Date with Our Latest News and Updates!</h1>
        <p>
          Join our newsletter community and receive the latest news, tips, and
          exclusive offers from us.
        </p>
      </section>
      <NewsletterFormCard name="newsletter-form" onSubmit={submitForm}>
        <Input
          type="text"
          label="Name"
          name="name"
          id="name"
          aria-label="Name"
          value={formValues.name}
          onChange={onFormItemsChange}
        />
        <Input
          type="text"
          label="Email"
          required
          aria-label="Email"
          id="email"
          name="email"
          error={getError("email")}
          value={formValues.email}
          onChange={onFormItemsChange}
        />
        <SelectBox
          type="text"
          placeholder="Language"
          label="Language"
          id="language"
          name="language"
          aria-label="Language"
          error={getError("language")}
          options={[
            { value: "en-gb", label: "English UK" },
            { value: "en-us", label: "English US" },
            { value: "de", label: "German" },
            { value: "fa", label: "Persian" },
          ]}
          defaultValue={"en-gb"}
          value={formValues.language}
          onChange={onFormItemsChange}
        />
        <SelectBox
          type="text"
          placeholder="Time"
          label="Time"
          id="time"
          name="time"
          aria-label="Time"
          error={getError("time")}
          required
          options={[
            { value: "MM", label: "Monday Morning" },
            { value: "WM", label: "Wednesday Morning" },
            { value: "SE", label: "Sunday Evening" },
          ]}
          value={formValues.time}
          onChange={onFormItemsChange}
        />
        <Button onClick={submitForm} loading={loading}>
          Subscribe
        </Button>
      </NewsletterFormCard>
    </NewsletterFormWrapper>
  );
}

export default NewsletterFormContainer;
