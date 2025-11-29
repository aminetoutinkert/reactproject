import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-soft-brown text-coffee-dark mt-auto" style={{backgroundColor: 'var(--soft-brown) !important'}}>
      <Container className="py-5">
        <Row className="align-items-center">
          {/* Brand */}
          <Col lg={4} className="mb-4">
            <div className="d-flex align-items-center mb-4">
              <div className="bg-morocco-brown rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm" style={{width: '50px', height: '50px'}}>
                <span className="text-white fw-bold fs-5">☕</span>
              </div>
              <div>
                <span className="fw-bold fs-3 text-coffee-dark">Café Elmassira</span>
                <div className="text-morocco-brown small fw-medium">قهوة المسيرة</div>
              </div>
            </div>
            <p className="text-coffee-dark mb-4 lh-base fs-6">
              Authentic Moroccan coffee and fresh fruit drinks in the heart of Agadir, Elmassira.
              Experience the rich flavors of Morocco with every sip.
            </p>
            <div className="d-flex align-items-center mb-3">
              <span className="fs-3 me-2">🇲🇦</span>
              <span className="text-coffee-dark fw-medium">
                Agadir • Morocco • Elmassira
              </span>
            </div>
            <div className="d-flex gap-3">
              <span className="badge bg-morocco-green text-white px-3 py-2">☕ Coffee</span>
              <span className="badge bg-morocco-red text-white px-3 py-2">🥤 Drinks</span>
              <span className="badge bg-morocco-brown text-white px-3 py-2">🇲🇦 Morocco</span>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={4} className="mb-4">
            <h5 className="fw-bold mb-4 text-coffee-dark border-bottom border-coffee-brown pb-2 d-inline-block">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link to="/" className="text-coffee-dark text-decoration-none d-flex align-items-center fw-medium">
                  <span className="me-2">🏠</span> {t('home')}
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/store" className="text-coffee-dark text-decoration-none d-flex align-items-center fw-medium">
                  <span className="me-2">🛒</span> {t('store')}
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/about" className="text-coffee-dark text-decoration-none d-flex align-items-center fw-medium">
                  <span className="me-2">ℹ️</span> {t('about')}
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/contact" className="text-coffee-dark text-decoration-none d-flex align-items-center fw-medium">
                  <span className="me-2">📞</span> {t('contact')}
                </Link>
              </li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col lg={4} className="mb-4">
            <h5 className="fw-bold mb-4 text-coffee-dark border-bottom border-coffee-brown pb-2 d-inline-block">Contact & Hours</h5>

            <div className="mb-3 d-flex align-items-start">
              <div className="bg-morocco-green rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '35px', height: '35px'}}>
                <span className="text-white small">📱</span>
              </div>
              <div>
                <div className="text-coffee-dark fw-medium">WhatsApp Orders</div>
                <div className="text-morocco-brown fw-bold">+212 XXX XXX XXX</div>
                <div className="text-muted small">Fast delivery service</div>
              </div>
            </div>

            <div className="mb-3 d-flex align-items-start">
              <div className="bg-morocco-red rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '35px', height: '35px'}}>
                <span className="text-white small">📍</span>
              </div>
              <div>
                <div className="text-coffee-dark fw-medium">Location</div>
                <div className="text-morocco-brown fw-bold">Elmassira, Agadir</div>
                <div className="text-muted small">Morocco 🇲🇦</div>
              </div>
            </div>

            <div className="d-flex align-items-start">
              <div className="bg-morocco-brown rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '35px', height: '35px'}}>
                <span className="text-white small">🕐</span>
              </div>
              <div>
                <div className="text-coffee-dark fw-medium">Opening Hours</div>
                <div className="text-morocco-brown fw-bold">7 AM - 10 PM</div>
                <div className="text-muted small">Daily service</div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Coffee Beans Pattern */}
        <div className="text-center my-4">
          <div className="d-inline-flex gap-2 align-items-center">
            <span className="fs-4">☕</span>
            <span className="fs-5 text-coffee-dark">●</span>
            <span className="fs-4">🫘</span>
            <span className="fs-5 text-coffee-dark">●</span>
            <span className="fs-4">☕</span>
            <span className="fs-5 text-coffee-dark">●</span>
            <span className="fs-4">🫘</span>
            <span className="fs-5 text-coffee-dark">●</span>
            <span className="fs-4">☕</span>
          </div>
        </div>

        <hr className="border-coffee-brown my-4" />
        <div className="text-center">
          <p className="text-coffee-dark mb-2 fw-medium">
            © 2025 Café Elmassira. Made with ❤️ in Morocco 🇲🇦
          </p>
          <p className="text-muted small mb-0">
            Authentic Moroccan coffee • Fresh fruit drinks • Traditional flavors
          </p>
        </div>
      </Container>
    </footer>
  );
}
