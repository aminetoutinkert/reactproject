import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

export default function NavigationBar() {
  const { t, currentLanguage, languages, setLanguage } = useLanguage();
  const { state } = useCart();
  const location = useLocation();

  const navItems = [
    { path: '/', label: t('home') },
    { path: '/store', label: t('store') },
    { path: '/about', label: t('about') },
    { path: '/contact', label: t('contact') },
    { path: '/admin', label: 'Admin' }, // Admin doesn't need translation
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <Navbar fixed="top" className="bg-cream shadow-sm border-bottom border-coffee-brown" expand="md" style={{backgroundColor: 'var(--cream) !important'}}>
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <div className="bg-morocco-brown rounded-circle d-flex align-items-center justify-content-center me-2" style={{width: '32px', height: '32px'}}>
            <span className="text-white fw-bold fs-6">☕</span>
          </div>
          <span className="fw-bold fs-5 text-coffee-dark">Café Elmassira</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          {/* Desktop Navigation */}
          <Nav className="me-auto">
            {navItems.map((item) => (
              <Nav.Link
                key={item.path}
                as={Link}
                to={item.path}
                className={`px-3 py-2 mx-2 rounded ${
                  isActive(item.path)
                    ? 'text-morocco-brown bg-coffee-light fw-medium'
                    : 'text-coffee-dark'
                }`}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>

          {/* Right side items */}
          <Nav className="align-items-center">
            {/* Language Switcher */}
            <NavDropdown
              title={`${currentLanguage.flag} ${currentLanguage.name}`}
              id="language-dropdown"
              className="me-3"
            >
              {languages.map((lang) => (
                <NavDropdown.Item
                  key={lang.code}
                  onClick={() => setLanguage(lang)}
                  active={currentLanguage.code === lang.code}
                  className="text-coffee-dark"
                >
                  {lang.flag} {lang.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            {/* Cart Button (only show on store page) */}
            {location.pathname === '/store' && (
              <Button variant="link" className="position-relative p-2 me-2">
                <ShoppingCartIcon className="w-6 h-6" />
                {state.totalItems > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {state.totalItems}
                  </span>
                )}
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
