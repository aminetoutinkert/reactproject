import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from 'react-bootstrap';

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [currentScene, setCurrentScene] = useState(0);
  const [showEnterButton, setShowEnterButton] = useState(false);

  const scenes = [
    {
      title: '🇲🇦 MOROCCO',
      subtitle: 'The Kingdom of Wonders',
      bgGradient: 'linear-gradient(135deg, #009639 0%, #C1272D 100%)',
      footballElements: [],
    },
    {
      title: '⚽ ATLAS LIONS',
      subtitle: 'Football Passion',
      bgGradient: 'linear-gradient(135deg, #009639 0%, #FFD700 50%, #C1272D 100%)',
      footballElements: ['🏆', '⚽', '🇲🇦'],
    },
    {
      title: '☕ CAFÉ ELMASSIRA',
      subtitle: 'Authentic Moroccan Coffee',
      bgGradient: 'linear-gradient(135deg, #8B4513 0%, #009639 50%, #C1272D 100%)',
      footballElements: [],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentScene < scenes.length - 1) {
        setCurrentScene(currentScene + 1);
      } else {
        setShowEnterButton(true);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [currentScene, scenes.length]);

  const handleEnter = () => {
    onComplete();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center overflow-hidden"
        style={{
          zIndex: 9999,
          background: scenes[currentScene].bgGradient,
        }}
      >
        {/* Background Video/GIF */}
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-100 h-100 object-fit-cover"
            style={{ opacity: 0.1 }}
          >
            <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Football Elements Animation */}
        {scenes[currentScene].footballElements.length > 0 && (
          <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
            {scenes[currentScene].footballElements.map((emoji, index) => (
              <motion.div
                key={`${currentScene}-${index}`}
                className="position-absolute"
                style={{
                  fontSize: '3rem',
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                }}
                initial={{ scale: 0, rotate: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  rotate: [0, 360],
                  y: [0, -50, 0],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                {emoji}
              </motion.div>
            ))}
          </div>
        )}

        {/* Animated Moroccan Flag Elements */}
        <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="position-absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: '4px',
                height: '4px',
                backgroundColor: i % 2 === 0 ? '#009639' : '#C1272D',
                borderRadius: '50%',
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="position-relative text-center text-white" style={{ zIndex: 10 }}>
          <motion.div
            key={currentScene}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -50 }}
            transition={{ duration: 0.8 }}
            className="mb-5"
          >
            {/* Morocco Flag Background */}
            <motion.div
              className="d-inline-block p-4 rounded-circle mb-4"
              style={{
                background: 'linear-gradient(45deg, #C1272D 33%, #009639 33%, #009639 66%, #C1272D 66%)',
                boxShadow: '0 0 30px rgba(0,0,0,0.3)',
              }}
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="fs-1">🇲🇦</div>
            </motion.div>

            {/* Scene Title */}
            <motion.h1
              className="display-1 fw-bold mb-3 text-shadow"
              style={{
                fontFamily: 'Amiri, serif',
                textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {scenes[currentScene].title}
            </motion.h1>

            {/* Scene Subtitle */}
            <motion.p
              className="h4 mb-4 text-white-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {scenes[currentScene].subtitle}
            </motion.p>

            {/* Football Team Names for Football Scene */}
            {currentScene === 1 && (
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="d-flex justify-content-center gap-4 fs-6 text-white-75">
                  <span className="fw-bold">Hakimi</span>
                  <span className="fw-bold">Ziyech</span>
                  <span className="fw-bold">Bounou</span>
                  <span className="fw-bold">En-Nesyri</span>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Progress Indicator */}
          <div className="d-flex justify-content-center gap-2 mb-4">
            {scenes.map((_, index) => (
              <motion.div
                key={index}
                className={`rounded-circle ${index === currentScene ? 'bg-white' : 'bg-white opacity-50'}`}
                style={{ width: '12px', height: '12px' }}
                animate={index === currentScene ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 0.5 }}
              />
            ))}
          </div>

          {/* Enter Button */}
          <AnimatePresence>
            {showEnterButton && (
              <motion.div
                initial={{ opacity: 0, scale: 0, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0, y: -50 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
              >
                <Button
                  onClick={handleEnter}
                  className="btn-morocco-green px-5 py-3 fs-4 fw-bold rounded-pill shadow-lg border-0"
                  style={{
                    background: 'linear-gradient(45deg, #009639, #C1272D)',
                    border: '3px solid white',
                    minWidth: '250px',
                  }}
                >
                  ⚽ Enter Café Elmassira ☕
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Moroccan Geometric Pattern Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="moroccan-stars" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <polygon points="30,10 35,25 50,25 38,35 42,50 30,42 18,50 22,35 10,25 25,25" fill="#FFD700" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#moroccan-stars)"/>
          </svg>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
