import { Button, Card, Offcanvas } from 'react-bootstrap';
import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { t, currentLanguage } = useLanguage();
  const { state, removeItem, updateQuantity, clearCart } = useCart();

  const handleWhatsAppOrder = () => {
    if (state.items.length === 0) return;

    const orderText = encodeURIComponent(
      `New Order from Café Elmassira:\n\n${state.items
        .map(item => {
          const customizations = item.selectedCustomizations.length > 0
            ? `\n  Customizations: ${item.selectedCustomizations.map(c =>
                currentLanguage.code === 'ar' ? c.nameAr :
                currentLanguage.code === 'fr' ? c.nameFr : c.name
              ).join(', ')}`
            : '';
          return `${item.quantity}x ${
            currentLanguage.code === 'ar' ? item.product.nameAr :
            currentLanguage.code === 'fr' ? item.product.nameFr :
            item.product.name
          }${customizations} - ${item.totalPrice} MAD`;
        })
        .join('\n')}\n\nTotal: ${state.totalAmount} MAD\n\nPlease include your delivery location.`
    );

    const whatsappUrl = `https://wa.me/212612345678?text=${orderText}`;
    window.open(whatsappUrl, '_blank');
    clearCart();
    onClose();
  };

  return (
    <Offcanvas show={isOpen} onHide={onClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{t('yourOrder')}</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body className="d-flex flex-column">
        {/* Cart Items */}
        <div className="flex-grow-1">
          {state.items.length === 0 ? (
            <div className="text-center py-5">
              <div className="fs-1 mb-3">🛒</div>
              <p className="text-muted">{t('emptyCart')}</p>
            </div>
          ) : (
            <div className="d-flex flex-column gap-3">
              {state.items.map((item) => (
                <Card key={`${item.product.id}-${JSON.stringify(item.selectedCustomizations)}`} className="border">
                  <Card.Body className="p-3">
                    <div className="d-flex gap-3">
                      <img
                        src={item.product.image}
                        alt={currentLanguage.code === 'ar' ? item.product.nameAr :
                             currentLanguage.code === 'fr' ? item.product.nameFr :
                             item.product.name}
                        className="rounded"
                        style={{ width: '64px', height: '64px', objectFit: 'cover' }}
                      />

                      <div className="flex-grow-1">
                        <h6 className="fw-semibold text-dark mb-1 text-truncate">
                          {currentLanguage.code === 'ar' ? item.product.nameAr :
                           currentLanguage.code === 'fr' ? item.product.nameFr :
                           item.product.name}
                        </h6>
                        <p className="text-muted small mb-2">
                          {item.product.price} MAD each
                        </p>

                        {item.selectedCustomizations.length > 0 && (
                          <div className="text-muted small mb-2">
                            + {item.selectedCustomizations.map(c =>
                              currentLanguage.code === 'ar' ? c.nameAr :
                              currentLanguage.code === 'fr' ? c.nameFr : c.name
                            ).join(', ')}
                          </div>
                        )}

                        <div className="d-flex align-items-center gap-2">
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          >
                            <MinusIcon style={{ width: '12px', height: '12px' }} />
                          </Button>
                          <span className="fw-medium" style={{ minWidth: '24px', textAlign: 'center' }}>
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          >
                            <PlusIcon style={{ width: '12px', height: '12px' }} />
                          </Button>
                        </div>
                      </div>

                      <div className="text-end">
                        <div className="fw-bold text-morocco-brown fs-5">
                          {item.totalPrice} MAD
                        </div>
                        <Button
                          variant="link"
                          size="sm"
                          className="text-danger p-0"
                          onClick={() => removeItem(item.product.id)}
                        >
                          <TrashIcon style={{ width: '16px', height: '16px' }} />
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-top pt-3 mt-3">
            <div className="d-flex justify-content-between align-items-center fs-5 fw-semibold mb-3">
              <span>{t('total')}:</span>
              <span className="text-morocco-brown">{state.totalAmount} MAD</span>
            </div>

            <Button
              className="w-100 mb-2 btn-coffee-brown"
              onClick={handleWhatsAppOrder}
            >
              📱 {t('checkout')} via WhatsApp
            </Button>

            <p className="text-muted small text-center mb-0">
              Your order will be sent to WhatsApp with location request
            </p>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}
