import React from 'react';
import AnimateStyled from 'animate-styled';

const Footer = () => {
  return (
    <footer>
      <AnimateStyled name="fadeIn" iterationCount="1" duration="2s">
        <ul>
          <li>Copyright &#169; {new Date().getFullYear()}</li>
          <li><a href="/privacy" id="privacy" className="nav-link">Privacy Policy</a></li>
          <li><a href="/terms" id="terms" className="nav-link">Terms and Conditions</a></li>
          <li><a href="/cookies" id="cookies" className="nav-link">Cookies</a></li>
          <li><a href="/contact" id="contact" className="nav-link">Contact</a></li>
        </ul>
        <div id="riot-disclaimer">
          League Census isn't endorsed by Riot Games and doesn't reflect the views
          or opinions of Riot Games or anyone officially involved in producing
          or managing League of Legends. League of Legends and Riot Games
          are trademarks of Riot Games, Inc.
        </div>
      </AnimateStyled>
    </footer>
  )
}

export default Footer;