import styled from "styled-components";

export const NewsletterSubscribedMessage = styled.p`
  color: white;
  margin-top: 50px;
  margin-bottom: 0px;
  line-height: 1.5rem;
`;

export const NewsletterFormCard = styled.form`
  margin: 0 50px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  text-align: center;

  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    background: rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out;
  }
`;
