import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useLanguage } from '../contexts/LanguageContext';
import ProductCard from '../components/ProductCard';
import CartSidebar from '../components/CartSidebar';
import { Product } from '../types';

export default function Store() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'coffee' | 'fruit'>('coffee');
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Mock data - in a real app, this would come from an API
  const products: Product[] = [
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
      customizations: [
        {
          id: 'cream',
          name: 'Extra Cream',
          nameAr: 'كريمة إضافية',
          nameFr: 'Crème supplémentaire',
          price: 5,
          type: 'additive',
        },
        {
          id: 'sugar',
          name: 'Extra Sugar',
          nameAr: 'سكر إضافي',
          nameFr: 'Sucre supplémentaire',
          price: 3,
          type: 'additive',
        },
      ],
    },
    {
      id: '2',
      name: 'Cappuccino',
      nameAr: 'كابتشينو',
      nameFr: 'Cappuccino',
      description: 'Creamy coffee with milk foam',
      descriptionAr: 'قهوة كريمية مع رغوة الحليب',
      descriptionFr: 'Café crémeux avec mousse de lait',
      price: 35,
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'coffee',
      customizations: [
        {
          id: 'chocolate',
          name: 'Extra Chocolate',
          nameAr: 'شوكولاتة إضافية',
          nameFr: 'Chocolat supplémentaire',
          price: 7,
          type: 'additive',
        },
      ],
    },
    {
      id: '3',
      name: 'Orange Juice',
      nameAr: 'عصير برتقال',
      nameFr: 'Jus d\'orange',
      description: 'Fresh squeezed orange juice',
      descriptionAr: 'عصير برتقال طازج',
      descriptionFr: 'Jus d\'orange fraîchement pressé',
      price: 20,
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'fruit',
      customizations: [],
    },
    {
      id: '4',
      name: 'Mango Smoothie',
      nameAr: 'سموذي مانجو',
      nameFr: 'Smoothie mangue',
      description: 'Creamy mango blended with yogurt',
      descriptionAr: 'مانجو كريمي مخلوط مع الزبادي',
      descriptionFr: 'Mangue crémeuse mélangée avec du yaourt',
      price: 30,
      image: 'https://images.unsplash.com/photo-1553909489-cd47e9adb3cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'fruit',
      customizations: [
        {
          id: 'honey',
          name: 'Extra Honey',
          nameAr: 'عسل إضافي',
          nameFr: 'Miel supplémentaire',
          price: 5,
          type: 'additive',
        },
      ],
    },
    // New Coffee Drinks
    {
      id: '5',
      name: 'Latte',
      nameAr: 'لاتيه',
      nameFr: 'Latte',
      description: 'Smooth espresso with steamed milk',
      descriptionAr: 'إسبريسو ناعم مع حليب مبخر',
      descriptionFr: 'Espresso lisse avec lait vapeur',
      price: 38,
      image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'coffee',
      customizations: [
        {
          id: 'vanilla',
          name: 'Vanilla Syrup',
          nameAr: 'شراب الفانيليا',
          nameFr: 'Sirop de vanille',
          price: 6,
          type: 'additive',
        },
        {
          id: 'caramel',
          name: 'Caramel Syrup',
          nameAr: 'شراب الكراميل',
          nameFr: 'Sirop caramel',
          price: 6,
          type: 'additive',
        },
      ],
    },
    {
      id: '6',
      name: 'Mocha',
      nameAr: 'موكا',
      nameFr: 'Moka',
      description: 'Rich chocolate and espresso blend',
      descriptionAr: 'خليط غني من الشوكولاتة والإسبريسو',
      descriptionFr: 'Mélange riche de chocolat et d\'espresso',
      price: 42,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'coffee',
      customizations: [
        {
          id: 'whipped',
          name: 'Extra Whipped Cream',
          nameAr: 'كريمة مخفوقة إضافية',
          nameFr: 'Crème fouettée supplémentaire',
          price: 8,
          type: 'additive',
        },
      ],
    },
    {
      id: '7',
      name: 'Americano',
      nameAr: 'أمريكانو',
      nameFr: 'Americano',
      description: 'Espresso diluted with hot water',
      descriptionAr: 'إسبريسو مخفف بالماء الساخن',
      descriptionFr: 'Espresso dilué avec de l\'eau chaude',
      price: 28,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'coffee',
      customizations: [
        {
          id: 'lemon',
          name: 'Lemon Slice',
          nameAr: 'شريحة ليمون',
          nameFr: 'Tranche de citron',
          price: 2,
          type: 'additive',
        },
      ],
    },
    {
      id: '8',
      name: 'Macchiato',
      nameAr: 'مكياتو',
      nameFr: 'Macchiato',
      description: 'Espresso with a touch of milk foam',
      descriptionAr: 'إسبريسو مع لمسة من رغوة الحليب',
      descriptionFr: 'Espresso avec une touche de mousse de lait',
      price: 32,
      image: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'coffee',
      customizations: [
        {
          id: 'cinnamon',
          name: 'Cinnamon Powder',
          nameAr: 'مسحوق القرفة',
          nameFr: 'Poudre de cannelle',
          price: 4,
          type: 'additive',
        },
      ],
    },
    // New Fruit Drinks
    {
      id: '9',
      name: 'Pineapple Juice',
      nameAr: 'عصير الأناناس',
      nameFr: 'Jus d\'ananas',
      description: 'Fresh pineapple juice with tropical flavor',
      descriptionAr: 'عصير الأناناس الطازج بنكهة استوائية',
      descriptionFr: 'Jus d\'ananas frais au goût tropical',
      price: 22,
      image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'fruit',
      customizations: [
        {
          id: 'mint',
          name: 'Fresh Mint',
          nameAr: 'نعناع طازج',
          nameFr: 'Menthe fraîche',
          price: 3,
          type: 'additive',
        },
      ],
    },
    {
      id: '10',
      name: 'Strawberry Smoothie',
      nameAr: 'سموذي فراولة',
      nameFr: 'Smoothie fraise',
      description: 'Sweet strawberry blended with yogurt',
      descriptionAr: 'فراولة حلوة مخلوطة مع الزبادي',
      descriptionFr: 'Fraise sucrée mélangée avec du yaourt',
      price: 28,
      image: 'https://images.unsplash.com/photo-1553909489-cd47e9adb3cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'fruit',
      customizations: [
        {
          id: 'chia',
          name: 'Chia Seeds',
          nameAr: 'بذور الشيا',
          nameFr: 'Graines de chia',
          price: 4,
          type: 'additive',
        },
      ],
    },
    {
      id: '11',
      name: 'Mixed Berry Smoothie',
      nameAr: 'سموذي توت مختلط',
      nameFr: 'Smoothie fruits rouges',
      description: 'Blend of blueberries, raspberries, and strawberries',
      descriptionAr: 'خليط من التوت الأزرق والفراولة والتوت الأحمر',
      descriptionFr: 'Mélange de myrtilles, framboises et fraises',
      price: 35,
      image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'fruit',
      customizations: [
        {
          id: 'granola',
          name: 'Granola Topping',
          nameAr: 'طبقة جرنولا',
          nameFr: 'Garniture granola',
          price: 7,
          type: 'additive',
        },
      ],
    },
    {
      id: '12',
      name: 'Lemon Mint Cooler',
      nameAr: 'مشروب ليمون نعناع بارد',
      nameFr: 'Rafraîchissant citron menthe',
      description: 'Refreshing lemon and mint drink',
      descriptionAr: 'مشروب منعش من الليمون والنعناع',
      descriptionFr: 'Boisson rafraîchissante au citron et à la menthe',
      price: 18,
      image: 'https://images.unsplash.com/photo-1553909489-cd47e9adb3cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'fruit',
      customizations: [
        {
          id: 'ginger',
          name: 'Ginger Slice',
          nameAr: 'شريحة زنجبيل',
          nameFr: 'Tranche de gingembre',
          price: 3,
          type: 'additive',
        },
      ],
    },
  ];

  const filteredProducts = products.filter(product => product.category === activeCategory);

  return (
    <div className="min-vh-100 bg-coffee-light">
      {/* Header */}
      <div className="bg-cream shadow-sm border-bottom border-coffee-brown">
        <Container className="py-5">
          <h1 className="display-4 fw-bold text-center text-dark mb-5">
            {t('store')}
          </h1>

          {/* Category Tabs */}
          <div className="d-flex justify-content-center gap-3">
            <Button
              onClick={() => setActiveCategory('coffee')}
              variant={activeCategory === 'coffee' ? 'primary' : 'outline-secondary'}
              className={`px-4 py-3 rounded-pill fw-medium ${
                activeCategory === 'coffee'
                  ? 'bg-morocco-brown border-morocco-brown'
                  : ''
              }`}
            >
              {t('coffeeDrinks')}
            </Button>
            <Button
              onClick={() => setActiveCategory('fruit')}
              variant={activeCategory === 'fruit' ? 'success' : 'outline-secondary'}
              className={`px-4 py-3 rounded-pill fw-medium ${
                activeCategory === 'fruit'
                  ? 'bg-morocco-green border-morocco-green'
                  : ''
              }`}
            >
              {t('fruitDrinks')}
            </Button>
          </div>
        </Container>
      </div>

      {/* Products Grid */}
      <Container className="py-5">
        <motion.div layout>
          <Row className="g-4">
            {filteredProducts.map((product) => (
              <Col key={product.id} lg={4} md={6} className="d-flex">
                <div className="w-100">
                  <ProductCard product={product} />
                </div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
