import React from "react";
import {
  NewsletterBackgroundImage,
  NewsletterWrapper,
} from "./NewsletterContainer.style";
import NewsletterFormContainer from "../NewsletterFormContainer";

function NewsletterContainer() {
  return (
    <NewsletterWrapper>
      <NewsletterBackgroundImage
        src="/images/newsletter.png"
        alt="meowsletter"
      />
      <NewsletterFormContainer />
    </NewsletterWrapper>
  );
}

export default NewsletterContainer;
