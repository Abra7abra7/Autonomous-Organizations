export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const slideIn = (direction = "left", type = "spring", delay = 0, duration = 0.5) => ({
  initial: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    opacity: 0
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut"
    }
  }
});

export const textVariant = (delay) => ({
  initial: {
    y: 50,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay
    }
  }
});

export const glowingText = {
  animate: {
    textShadow: [
      "0 0 4px rgba(255,255,255,0.1)",
      "0 0 8px rgba(255,255,255,0.3)",
      "0 0 4px rgba(255,255,255,0.1)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
};

export const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const gradientAnimation = {
  animate: {
    background: [
      "linear-gradient(45deg, #4F46E5, #7C3AED)",
      "linear-gradient(45deg, #7C3AED, #4F46E5)",
      "linear-gradient(45deg, #4F46E5, #7C3AED)"
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};

export const pageTransition = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
  transition: { duration: 0.3 }
};
