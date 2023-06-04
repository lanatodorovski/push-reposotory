import FacebookLogo from "../pictures/kindpng_808522.png";
import InstagramLogo from "../pictures/NicePng_instagram-circle-logo-png_475136.png";
function Footer() {
  return (
    <div id="footer">
      <div class="footer-prvi">
        <h2>Slatki Snovi</h2>
        <div class="footer-socialne-mreze">
          <a href="https://www.facebook.com/graf.skolamabasadorEP/" target="_blank"><img
            src={FacebookLogo} alt="Facebook"/></a>
          <a href="https://www.instagram.com/gogss.ep_ambassador_school/" target="_blank"><img
            src={InstagramLogo} alt="Instagram" /></a>
        </div>
      </div>
      <div class="footer-drugi">
        <h2>KONTAKTIRAJTE NAS</h2>
        <p>Ul. Matice hrvatske 11, 21000, Split</p>
        <p>+385 021 434 580</p>
      </div>
      <div class="footer-treci">
        <h2>PRETPLATITE SE</h2>
        <p>Pretplatite se za obavijesti o svim novostima vezanim za ovu slastičarnu</p>
        <input id="email" type="text" name="email" placeholder="Email" />
      </div>
      <hr />
      <span>@2023 Slatki Snovi Inc. sva prava zaslužena</span>

    </div>
  );
}

export default Footer;