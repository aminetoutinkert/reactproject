import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-vh-100 bg-coffee-light">
      <Container className="py-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h1 className="display-4 fw-bold text-coffee-dark mb-4">
            {t('about')}
          </h1>
          <div className="bg-morocco-brown mx-auto mb-4" style={{ width: '100px', height: '4px' }}></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card className="shadow-lg bg-cream border-coffee-brown">
            <Card.Body className="p-4 p-md-5">
              <Row className="align-items-center mb-5">
                <Col lg={6} className="mb-4 mb-lg-0">
                  <h2 className="h3 fw-semibold text-coffee-dark mb-4">
                    Café Elmassira - Agadir
                  </h2>
                  <p className="text-coffee-dark mb-4 lh-base">
                    Welcome to Café Elmassira, your premier destination for authentic Moroccan coffee and refreshing fruit drinks in the heart of Agadir, Elmassira district. We pride ourselves on serving the finest quality beverages made with traditional methods and fresh, local ingredients.
                  </p>
                  <p className="text-coffee-dark lh-base">
                    Our commitment to excellence extends beyond our drinks - we focus on providing exceptional service and creating a welcoming atmosphere for our valued customers. Whether you're looking for a quick pick-me-up or a relaxing moment with friends, Café Elmassira is here to serve you.
                  </p>
                </Col>

                <Col lg={6} className="position-relative">
                  <Card.Img
                    src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Café Elmassira"
                    className="rounded shadow-lg w-100 border border-coffee-brown"
                    style={{ height: '300px', objectFit: 'cover' }}
                  />
                  <div className="position-absolute bottom-0 end-0 bg-morocco-brown text-white p-3 rounded shadow">
                    <div className="fs-4 fw-bold">🇲🇦</div>
                    <div className="small">Agadir, Morocco</div>
                  </div>
                </Col>
              </Row>

              <Row className="g-4">
                <Col md={4} className="text-center">
                  <div className="bg-coffee-brown rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 shadow-sm" style={{ width: '80px', height: '80px' }}>
                    <span className="text-white fs-2">☕</span>
                  </div>
                  <h5 className="fw-semibold text-coffee-dark mb-2">Premium Coffee</h5>
                  <p className="text-muted small">Authentic Moroccan coffee blends</p>
                </Col>

                <Col md={4} className="text-center">
                  <div className="bg-morocco-green rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 shadow-sm" style={{ width: '80px', height: '80px' }}>
                    <span className="text-white fs-2">🥤</span>
                  </div>
                  <h5 className="fw-semibold text-coffee-dark mb-2">Fresh Fruit Drinks</h5>
                  <p className="text-muted small">Made with seasonal local fruits</p>
                </Col>

                <Col md={4} className="text-center">
                  <div className="bg-morocco-red rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 shadow-sm" style={{ width: '80px', height: '80px' }}>
                    <span className="text-white fs-2">🚚</span>
                  </div>
                  <h5 className="fw-semibold text-coffee-dark mb-2">Fast Delivery</h5>
                  <p className="text-muted small">WhatsApp-based delivery service</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>
    </div>
  );
}
