import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
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
            {t('contact')}
          </h1>
          <div className="bg-morocco-brown mx-auto mb-4" style={{ width: '100px', height: '4px' }}></div>
        </motion.div>

        <Row className="g-5">
          {/* Contact Information */}
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-5"
            >
              <Card className="shadow-lg bg-cream border-coffee-brown">
                <Card.Body className="p-4">
                  <Card.Title className="h4 fw-semibold text-coffee-dark mb-4">
                    Visit Our Store
                  </Card.Title>

                  <div className="mb-4">
                    <div className="d-flex align-items-start mb-4">
                      <MapPinIcon className="text-morocco-red me-3 mt-1" style={{ width: '24px', height: '24px' }} />
                      <div>
                        <h5 className="fw-medium text-dark mb-2">Address</h5>
                        <p className="text-muted mb-0">
                          Elmassira District<br />
                          Agadir, Morocco
                        </p>
                      </div>
                    </div>

                    <div className="d-flex align-items-start mb-4">
                      <PhoneIcon className="text-morocco-green me-3 mt-1" style={{ width: '24px', height: '24px' }} />
                      <div>
                        <h5 className="fw-medium text-dark mb-2">WhatsApp</h5>
                        <p className="text-muted mb-1">
                          +212 XXX XXX XXX
                        </p>
                        <p className="text-muted small mb-0">
                          Order and delivery coordination
                        </p>
                      </div>
                    </div>

                    <div className="d-flex align-items-start">
                      <ClockIcon className="text-morocco-brown me-3 mt-1" style={{ width: '24px', height: '24px' }} />
                      <div>
                        <h5 className="fw-medium text-dark mb-2">Opening Hours</h5>
                        <div className="text-muted small">
                          <p className="mb-1">Monday - Friday: 7:00 AM - 10:00 PM</p>
                          <p className="mb-1">Saturday: 8:00 AM - 11:00 PM</p>
                          <p className="mb-0">Sunday: 9:00 AM - 9:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              <Card className="shadow-lg border-0" style={{ background: 'linear-gradient(135deg, var(--morocco-green), var(--morocco-red))' }}>
                <Card.Body className="p-4 text-white">
                  <Card.Title className="h5 fw-semibold mb-3">
                    Order via WhatsApp
                  </Card.Title>
                  <Card.Text className="mb-4">
                    Place your order through WhatsApp for the fastest service. Include your location for accurate delivery.
                  </Card.Text>
                  <Button variant="light" className="text-morocco-brown fw-semibold px-4 py-2">
                    📱 Send WhatsApp Message
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Map */}
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="shadow-lg border-coffee-brown h-100 bg-cream">
                <Card.Body className="d-flex align-items-center justify-content-center" style={{ minHeight: '400px' }}>
                  {/* Placeholder for Google Maps or similar */}
                  <div className="text-center">
                    <MapPinIcon className="text-morocco-red mb-3" style={{ width: '64px', height: '64px' }} />
                    <h4 className="fw-semibold text-dark mb-3">
                      Elmassira District, Agadir
                    </h4>
                    <p className="text-muted">
                      Interactive map will be integrated here
                    </p>
                    <div className="mt-3 text-muted small">
                      Coordinates: 30.4202° N, 9.5981° W
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-5"
        >
          <Card className="shadow-lg bg-cream border-coffee-brown">
            <Card.Body className="p-4 p-md-5">
              <Card.Title className="h4 fw-semibold text-coffee-dark text-center mb-5">
                Why Choose Café Elmassira?
              </Card.Title>

              <Row className="g-4">
                <Col md={4} className="text-center">
                  <div className="bg-morocco-green rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 shadow-sm" style={{ width: '60px', height: '60px' }}>
                    <span className="text-white fw-bold fs-4">✓</span>
                  </div>
                  <h5 className="fw-semibold text-coffee-dark mb-2">Authentic Moroccan</h5>
                  <p className="text-muted small">Traditional recipes and local ingredients</p>
                </Col>

                <Col md={4} className="text-center">
                  <div className="bg-morocco-red rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 shadow-sm" style={{ width: '60px', height: '60px' }}>
                    <span className="text-white fw-bold fs-4">🚀</span>
                  </div>
                  <h5 className="fw-semibold text-coffee-dark mb-2">Fast Delivery</h5>
                  <p className="text-muted small">Quick WhatsApp-based delivery service</p>
                </Col>

                <Col md={4} className="text-center">
                  <div className="bg-morocco-brown rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 shadow-sm" style={{ width: '60px', height: '60px' }}>
                    <span className="text-white fw-bold fs-4">⭐</span>
                  </div>
                  <h5 className="fw-semibold text-coffee-dark mb-2">Premium Quality</h5>
                  <p className="text-muted small">Highest quality coffee and fresh fruits</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>
    </div>
  );
}
