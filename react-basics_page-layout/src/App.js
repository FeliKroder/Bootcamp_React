import "./Header.css"; // Import CSS file for Header component
import "./MainContent.css"; // Import CSS file for MainContent component
import "./Footer.css"; // Import CSS file for Footer component

function Header() {
  return <h1 className="header">Kids dont need Sleep</h1>;
}

function MainContent() {
  return (
    <div className="main-content">
      <p>
        If you ask a kid if it is tired it will tell you:{" "}
        <span className="main-content-answer"> No! I am not tired!</span>
      </p>
      <p>
        If you then ask the kid if it needs some sleep, it will tell you:{" "}
        <span className="main-content-answer">
          No! I do not need sleep!!! I told you, I am not tired!!!
        </span>
      </p>
    </div>
  );
}

function Footer() {
  return (
    <a
      className="footer"
      href="https://theconversation.com/why-do-kids-hate-going-to-sleep-while-adults-usually-love-it-160703"
    >
      Why do kids hate going to sleep, while adults usually love it?
    </a>
  );
}

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
