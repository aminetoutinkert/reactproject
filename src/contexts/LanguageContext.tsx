import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';

const languages: Language[] = [
  { code: 'ar', name: 'العربية', flag: '🇲🇦' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];

interface LanguageContextType {
  currentLanguage: Language;
  languages: Language[];
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation keys
const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    store: 'المتجر',
    about: 'من نحن',
    contact: 'اتصل بنا',
    // Home page
    welcome: 'مرحباً بكم في مقهى المسيرة',
    contactUs: 'اتصل بنا',
    viewStore: 'تصفح المتجر',
    // Store
    coffeeDrinks: 'مشروبات قهوة',
    fruitDrinks: 'مشروبات فواكه',
    addToCart: 'أضف للسلة',
    quantity: 'الكمية',
    price: 'السعر',
    total: 'المجموع',
    checkout: 'الدفع',
    // Cart
    yourOrder: 'طلبك',
    emptyCart: 'السلة فارغة',
    // Common
    loading: 'جاري التحميل...',
    error: 'حدث خطأ',
    success: 'تم بنجاح',
    // Customizations
    extraCream: 'كريمة إضافية',
    extraSugar: 'سكر إضافي',
    extraChocolate: 'شوكولاتة إضافية',
  },
  fr: {
    // Navigation
    home: 'Accueil',
    store: 'Boutique',
    about: 'À propos',
    contact: 'Contact',
    // Home page
    welcome: 'Bienvenue au Café Elmassira',
    contactUs: 'Contactez-nous',
    viewStore: 'Voir la boutique',
    // Store
    coffeeDrinks: 'Boissons café',
    fruitDrinks: 'Boissons aux fruits',
    addToCart: 'Ajouter au panier',
    quantity: 'Quantité',
    price: 'Prix',
    total: 'Total',
    checkout: 'Commander',
    // Cart
    yourOrder: 'Votre commande',
    emptyCart: 'Panier vide',
    // Common
    loading: 'Chargement...',
    error: 'Une erreur s\'est produite',
    success: 'Succès',
    // Customizations
    extraCream: 'Crème supplémentaire',
    extraSugar: 'Sucre supplémentaire',
    extraChocolate: 'Chocolat supplémentaire',
  },
  en: {
    // Navigation
    home: 'Home',
    store: 'Store',
    about: 'About Us',
    contact: 'Contact',
    // Home page
    welcome: 'Welcome to Café Elmassira',
    contactUs: 'Contact Us',
    viewStore: 'View Store',
    // Store
    coffeeDrinks: 'Coffee Drinks',
    fruitDrinks: 'Fruit Drinks',
    addToCart: 'Add to Cart',
    quantity: 'Quantity',
    price: 'Price',
    total: 'Total',
    checkout: 'Checkout',
    // Cart
    yourOrder: 'Your Order',
    emptyCart: 'Cart is empty',
    // Common
    loading: 'Loading...',
    error: 'An error occurred',
    success: 'Success',
    // Customizations
    extraCream: 'Extra Cream',
    extraSugar: 'Extra Sugar',
    extraChocolate: 'Extra Chocolate',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]); // Default to Arabic

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    // You could also save to localStorage here
    localStorage.setItem('language', language.code);
  };

  const t = (key: string): string => {
    const langTranslations = translations[currentLanguage.code];
    return langTranslations[key as keyof typeof langTranslations] || key;
  };

  // Load language from localStorage on mount
  React.useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      const language = languages.find(lang => lang.code === savedLanguage);
      if (language) {
        setCurrentLanguage(language);
      }
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ currentLanguage, languages, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
