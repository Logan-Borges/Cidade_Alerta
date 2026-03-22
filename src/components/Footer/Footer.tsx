import "./Footer.css";
import { LogoCidadeAlerta } from "../../assets/logo";
import { IconFacebook } from "../../assets/facebook";
import { IconInstagram } from "../../assets/instagram";
import { IconTwitter } from "../../assets/twitter";
import { IconLinkedin } from "../../assets/linkedin";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo + redes */}
        <div className="footer-section">
  <div className="logo">
    <LogoCidadeAlerta size={40}
     color="#e7eb0b" />
    <span className="logo-text">Cidade Alerta</span>
  </div>

  <div className="socials">
  <IconFacebook />
  <IconInstagram />
  <IconTwitter />
  <IconLinkedin />
</div>
</div>

        
        <div className="footer-section">
          <h3>LINKS ÚTEIS</h3>
          <ul>
            <li>Home</li>
            <li>Serviços</li>
            <li>Contact</li>
            <li>Alerta</li>
            <li>Blog</li>
          </ul>
        </div>

       
        <div className="footer-section">
          <h3>SUPORTE</h3>
          <ul>
            <li>Perguntas Frequentes</li>
            <li>Política de Privacidade</li>
            <li>Termos de Uso</li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h3>CONTATO</h3>
          <p>Email: info@cidadealerta.br</p>
          <p>Telefone: (00) 1234-5678</p>
          <p>Endereço: Av. Kennedy, 2511</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Cidade Alerta - Todos os direitos reservados.
      </div>
    </footer>
  );
}