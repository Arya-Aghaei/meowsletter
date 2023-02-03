import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsletterContainer from "../containers/NewsletterContainer";
import { NewsletterBackgroundImage } from "../containers/NewsletterContainer/NewsletterContainer.style";
import { HomeScreenContent, HomeScreenSidebar, HomeScreenWrapper } from "./HomeScreen.style";

function HomeScreen() {
  return (
    <>
      <Navbar />
      <HomeScreenWrapper>
        <HomeScreenContent>
          <NewsletterBackgroundImage
            src="/images/newsletter.png"
            alt="meowsletter"
          />
          <h1>Stay Up-to-Date with Our Latest News!</h1>
          <p>
            Join our newsletter community and receive the latest news, tips, and
            exclusive offers.
          </p>
        </HomeScreenContent>
        <HomeScreenSidebar>
          <NewsletterContainer />
        </HomeScreenSidebar>
      </HomeScreenWrapper>
      <Footer />
    </>
  );
}

export default HomeScreen;
