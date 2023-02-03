import axios from "axios";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import SelectBox from "../../components/SelectBox";
import {
  NewsletterFormCard,
  NewsletterSubscribedMessage,
} from "./NewsletterFormContainer.style";

const API_URL = process.env.REACT_APP_API_URL;
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
  const [subscribed, setSubscribed] = useState(false);
  const animationRef: any = React.useRef(null);

  useEffect(() => {
    if (subscribed) {
      animationRef?.current?.play();
    }
  }, [subscribed]);

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
        axios
          .post(`${API_URL}/newsletter`, values)
          .then(function (response) {
            console.log(response);
            setLoading(false);
            setSubscribed(true);
          })
          .catch(function (error) {
            //set server errors if any
            setLoading(false);
            setErrors(error?.response?.data?.errors || error);
          });
      })
      .catch((error: any) => {
        //set local errors if any
        setLoading(false);
        setErrors(error);
      });
  };

  const onFormItemsChange = (e: any) => {
    setErrors(errors.filter((error: any) => error.field !== e.target.name));
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <>
      <NewsletterFormCard name="newsletter-form" onSubmit={submitForm}>
        <Lottie
          animationData={require("../../assets/animations/subscribed.json")}
          loop={false}
          autoplay={false}
          style={{
            width: 200,
            height: 200,
            margin: -50,
            position: "absolute",
            top: -65,
          }}
          lottieRef={animationRef}
        />
        {subscribed ? (
          <>
            <NewsletterSubscribedMessage>
              Thank you for signing up for our newsletter! You will now receive
              regular updates and exclusive content from us. Keep an eye on your
              inbox for our next edition. If at any time you wish to
              unsubscribe, simply click the link at the bottom of one of our
              emails. Thank you for being a part of our community!
            </NewsletterSubscribedMessage>
            <Button
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Home Page
            </Button>
          </>
        ) : (
          <>
            <Input
              type="text"
              label="Name"
              name="name"
              id="name"
              aria-label="Name"
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
              onChange={onFormItemsChange}
            />
            <SelectBox
              type="text"
              placeholder="Language"
              label="Preferred Language"
              id="language"
              name="language"
              aria-label="Preferred Language"
              error={getError("language")}
              options={[
                { value: "en-gb", label: "English UK" },
                { value: "en-us", label: "English US" },
                { value: "de", label: "German" },
                { value: "fa", label: "Persian" },
                { value: "af", label: "African (To test error handling)" },

              ]}
              value={formValues.language}
              onChange={onFormItemsChange}
            />
            <SelectBox
              type="text"
              placeholder="Time"
              label="Preferred Time"
              id="time"
              name="time"
              aria-label="Preferred Time"
              error={getError("time")}
              required
              options={[
                { value: "MM", label: "Monday Morning" },
                { value: "WM", label: "Wednesday Morning" },
                { value: "SE", label: "Sunday Evening" },
                { value: "TE", label: "Tuesday Evening (To test error handling)" },
              ]}
              value={formValues.time}
              onChange={onFormItemsChange}
            />
            <Button onClick={submitForm} isLoading={loading}>
              Subscribe
            </Button>
          </>
        )}
      </NewsletterFormCard>
    </>
  );
}

export default NewsletterFormContainer;
