import "../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section-image">
          <img src="Assets/tj-logo.png" alt="Team Jacob" />
          <div>
            <h3>main menu</h3>
            <ul>
              <ol>About Us </ol>
              <ol>login </ol>
              <ol>vinyls </ol>
            </ul>
          </div>
        </div>
        <div className="footer-section">
          <div>
            <h3>help & support</h3>
            <ul>
              <ol>faqs </ol>
              <ol>shipping information </ol>
              <ol>refunds </ol>
              <ol>orders </ol>
            </ul>
          </div>
        </div>
        <div className="footer-section">
          <div>
            <h3>contact us</h3>
            <p>email us @:</p>
            <p>help@harmonivinyls.com.au</p>
          </div>
        </div>
        <img
          src="Assets/tj-logo.png"
          alt="harmoni vinyls"
          className="mobile-img"
        />
      </div>
      <div></div>
    </footer>
  );
}
