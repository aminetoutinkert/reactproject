import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Button, Form, Badge } from 'react-bootstrap';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import { Product, Customization } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { t, currentLanguage } = useLanguage();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedCustomizations, setSelectedCustomizations] = useState<Customization[]>([]);

  const getLocalizedText = (field: keyof Pick<Product, 'name' | 'description'>): string => {
    switch (currentLanguage.code) {
      case 'ar':
        return (product[`${field}Ar` as keyof Product] as string) || (product[field] as string);
      case 'fr':
        return (product[`${field}Fr` as keyof Product] as string) || (product[field] as string);
      default:
        return product[field] as string;
    }
  };

  const handleCustomizationChange = (customization: Customization, checked: boolean) => {
    if (checked) {
      setSelectedCustomizations(prev => [...prev, customization]);
    } else {
      setSelectedCustomizations(prev => prev.filter(c => c.id !== customization.id));
    }
  };

  const customizationPrice = selectedCustomizations.reduce((sum, cust) => sum + cust.price, 0);
  const totalPrice = (product.price + customizationPrice) * quantity;

  const handleAddToCart = () => {
    addItem(product, selectedCustomizations);
    setQuantity(1);
    setSelectedCustomizations([]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-100 shadow-sm border-0" style={{ minHeight: '450px' }}>
        {/* Product Image */}
        <div className="position-relative bg-light" style={{ height: '200px', overflow: 'hidden' }}>
          <Card.Img
            variant="top"
            src={product.image}
            alt={getLocalizedText('name')}
            className="w-100 h-100 object-fit-cover"
            style={{ transition: 'transform 0.3s ease' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
          <Badge
            bg="warning"
            text="dark"
            className="position-absolute top-0 end-0 m-2 fw-semibold"
          >
            {product.price} MAD
          </Badge>
        </div>

        <Card.Body className="d-flex flex-column flex-grow-1">
          <Card.Title className="h5 text-dark mb-2 fw-semibold" style={{ minHeight: '3rem' }}>
            {getLocalizedText('name')}
          </Card.Title>
          <Card.Text className="text-muted small mb-3" style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            minHeight: '2.5rem'
          }}>
            {getLocalizedText('description')}
          </Card.Text>

          {/* Customizations */}
          <div className="mb-3" style={{ minHeight: '80px' }}>
            {product.customizations.length > 0 ? (
              <>
                <h6 className="fw-medium text-dark mb-2">Customizations:</h6>
                <div className="d-flex flex-column gap-1">
                  {product.customizations.map((customization) => (
                    <Form.Check
                      key={customization.id}
                      type="checkbox"
                      id={`customization-${customization.id}`}
                      label={
                        <span className="small">
                          {currentLanguage.code === 'ar' ? customization.nameAr :
                           currentLanguage.code === 'fr' ? customization.nameFr :
                           customization.name}
                          {customization.price > 0 && (
                            <span className="text-morocco-brown fw-medium ms-1">
                              (+{customization.price} MAD)
                            </span>
                          )}
                        </span>
                      }
                      checked={selectedCustomizations.some(c => c.id === customization.id)}
                      onChange={(e) => handleCustomizationChange(customization, e.target.checked)}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-muted small fst-italic">
                No customizations available
              </div>
            )}
          </div>

          {/* Quantity Selector */}
          <div className="d-flex align-items-center justify-content-between mb-3" style={{ minHeight: '60px' }}>
            <div className="d-flex align-items-center gap-2">
              <Button
                variant="outline-secondary"
                size="sm"
                className="rounded-circle p-1 d-flex align-items-center justify-content-center"
                style={{ width: '32px', height: '32px' }}
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <MinusIcon style={{ width: '16px', height: '16px' }} />
              </Button>
              <span className="fw-medium mx-2" style={{ minWidth: '24px', textAlign: 'center' }}>
                {quantity}
              </span>
              <Button
                variant="outline-secondary"
                size="sm"
                className="rounded-circle p-1 d-flex align-items-center justify-content-center"
                style={{ width: '32px', height: '32px' }}
                onClick={() => setQuantity(quantity + 1)}
              >
                <PlusIcon style={{ width: '16px', height: '16px' }} />
              </Button>
            </div>
            <div className="text-end">
              <div className="fw-bold text-morocco-brown fs-5">
                {totalPrice} MAD
              </div>
              {customizationPrice > 0 && (
                <div className="text-muted small">
                  Base: {product.price} MAD + Custom: {customizationPrice} MAD
                </div>
              )}
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button
            className="w-100 mt-auto btn-coffee-brown"
            onClick={handleAddToCart}
          >
            {t('addToCart')}
          </Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
}
