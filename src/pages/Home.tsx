import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="position-relative min-vh-100 d-flex align-items-center justify-content-center overflow-hidden">
      {/* Background Image */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80)',
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="position-relative z-index-10 text-center text-white px-4"
        style={{ maxWidth: '1200px', zIndex: 10 }}
      >
        <Container>
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="display-1 fw-bold mb-4 text-shadow"
            style={{ fontFamily: 'Amiri, serif' }}
          >
            {t('welcome')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="lead mb-5 fs-4"
            style={{ maxWidth: '600px', margin: '0 auto' }}
          >
            {t('coffeeDrinks')} • {t('fruitDrinks')} • Agadir, Elmassira
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center"
          >
            <Button
              onClick={() => navigate('/contact')}
              className="btn-morocco-green px-5 py-3 rounded-pill fs-5 fw-semibold shadow-lg"
              style={{ minWidth: '200px' }}
            >
              {t('contactUs')}
            </Button>

            <Button
              onClick={() => navigate('/store')}
              className="btn-morocco-red px-5 py-3 rounded-pill fs-5 fw-semibold shadow-lg"
              style={{ minWidth: '200px' }}
            >
              {t('viewStore')}
            </Button>
          </motion.div>
        </Container>
      </motion.div>

      {/* Decorative elements */}
      <div className="position-absolute bottom-0 start-0 p-4 text-white opacity-75">
        <div className="d-flex align-items-center gap-2">
          <span className="fs-1">🇲🇦</span>
          <span className="small">Agadir • Elmassira</span>
        </div>
      </div>
    </div>
  );
}
