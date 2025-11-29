import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Button, Nav, Tab, Form, Alert } from 'react-bootstrap';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Product } from '../types';

export default function Admin() {

  // Mock products data - in a real app, this would come from an API
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Espresso',
      nameAr: 'إسبريسو',
      nameFr: 'Espresso',
      description: 'Rich and bold traditional espresso',
      descriptionAr: 'إسبريسو تقليدي غني وقوي',
      descriptionFr: 'Espresso traditionnel riche et corsé',
      price: 25,
      image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'coffee',
      customizations: [],
    },
  ]);

  const [settings, setSettings] = useState({
    whatsappNumber: '+212612345678',
    location: {
      latitude: 30.4202,
      longitude: -9.5981,
      address: 'Elmassira District, Agadir, Morocco',
      addressAr: 'حي المسيرة، أكادير، المغرب',
      addressFr: 'Quartier Elmassira, Agadir, Maroc',
    },
  });

  const handleDeleteProduct = (productId: string) => {
    setProducts(products.filter(p => p.id !== productId));
  };

  const handleUpdateSettings = (field: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-vh-100 bg-light">
      <Container className="py-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-5"
        >
          <h1 className="display-5 fw-bold text-dark mb-3">Admin Dashboard</h1>
          <p className="text-muted lead">Manage your store products and settings</p>
        </motion.div>

        <Tab.Container defaultActiveKey="products">
          <Card className="shadow-sm border-coffee-brown">
            <Card.Header className="bg-cream border-bottom-0 border-coffee-brown">
              <Nav variant="tabs" className="border-0">
                <Nav.Item>
                  <Nav.Link eventKey="products" className="text-morocco-brown fw-medium">
                    Products
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="settings" className="text-morocco-brown fw-medium">
                    Settings
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>

            <Card.Body className="p-0">
              <Tab.Content>

            <Tab.Pane eventKey="products" className="p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="h4 fw-semibold text-dark mb-0">Store Products</h3>
                  <Button className="d-flex align-items-center gap-2 btn-coffee-brown">
                    <PlusIcon style={{ width: '16px', height: '16px' }} />
                    Add Product
                  </Button>
                </div>

                <div className="d-flex flex-column gap-3">
                  {products.map((product) => (
                    <Card key={product.id} className="border">
                      <Card.Body className="p-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-3">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="rounded"
                              style={{ width: '64px', height: '64px', objectFit: 'cover' }}
                            />
                            <div>
                              <h5 className="fw-medium text-dark mb-1">{product.name}</h5>
                              <p className="text-muted small mb-1">{product.description}</p>
                              <p className="text-morocco-brown fw-semibold mb-0">{product.price} MAD</p>
                            </div>
                          </div>

                          <div className="d-flex gap-2">
                            <Button variant="outline-secondary" size="sm">
                              <PencilIcon style={{ width: '16px', height: '16px' }} />
                            </Button>
                            <Button
                              variant="outline-danger"
                              size="sm"
                              onClick={() => handleDeleteProduct(product.id)}
                            >
                              <TrashIcon style={{ width: '16px', height: '16px' }} />
                            </Button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </Tab.Pane>

            <Tab.Pane eventKey="settings" className="p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="d-flex flex-column gap-4"
              >
                {/* WhatsApp Settings */}
                <Card className="shadow-sm bg-cream border-coffee-brown">
                  <Card.Body>
                    <Card.Title className="d-flex align-items-center gap-2 mb-4 text-coffee-dark">
                      <div className="bg-morocco-green rounded-circle d-flex align-items-center justify-content-center" style={{width: '30px', height: '30px'}}>
                        <span className="text-white small">📱</span>
                      </div>
                      WhatsApp Settings
                    </Card.Title>

                    <Form.Group className="mb-3">
                      <Form.Label>WhatsApp Number</Form.Label>
                      <Form.Control
                        type="text"
                        value={settings.whatsappNumber}
                        onChange={(e) => handleUpdateSettings('whatsappNumber', e.target.value)}
                        placeholder="+212 XXX XXX XXX"
                      />
                    </Form.Group>
                  </Card.Body>
                </Card>

                {/* Location Settings */}
                <Card className="shadow-sm bg-cream border-coffee-brown">
                  <Card.Body>
                    <Card.Title className="d-flex align-items-center gap-2 mb-4 text-coffee-dark">
                      <div className="bg-morocco-red rounded-circle d-flex align-items-center justify-content-center" style={{width: '30px', height: '30px'}}>
                        <span className="text-white small">📍</span>
                      </div>
                      Location Settings
                    </Card.Title>

                    <Row className="mb-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Latitude</Form.Label>
                          <Form.Control
                            type="number"
                            value={settings.location.latitude}
                            onChange={(e) => setSettings(prev => ({
                              ...prev,
                              location: { ...prev.location, latitude: parseFloat(e.target.value) }
                            }))}
                            step="any"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Longitude</Form.Label>
                          <Form.Control
                            type="number"
                            value={settings.location.longitude}
                            onChange={(e) => setSettings(prev => ({
                              ...prev,
                              location: { ...prev.location, longitude: parseFloat(e.target.value) }
                            }))}
                            step="any"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label>Address (English)</Form.Label>
                      <Form.Control
                        type="text"
                        value={settings.location.address}
                        onChange={(e) => setSettings(prev => ({
                          ...prev,
                          location: { ...prev.location, address: e.target.value }
                        }))}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Address (العربية)</Form.Label>
                      <Form.Control
                        type="text"
                        value={settings.location.addressAr}
                        onChange={(e) => setSettings(prev => ({
                          ...prev,
                          location: { ...prev.location, addressAr: e.target.value }
                        }))}
                        dir="rtl"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Address (Français)</Form.Label>
                      <Form.Control
                        type="text"
                        value={settings.location.addressFr}
                        onChange={(e) => setSettings(prev => ({
                          ...prev,
                          location: { ...prev.location, addressFr: e.target.value }
                        }))}
                      />
                    </Form.Group>
                  </Card.Body>
                </Card>

                <Alert variant="warning">
                  <strong>Note:</strong> Changes to settings will be saved automatically. Make sure all information is accurate for proper order processing.
                </Alert>
              </motion.div>
            </Tab.Pane>
              </Tab.Content>
            </Card.Body>
          </Card>
        </Tab.Container>
      </Container>
    </div>
  );
}
