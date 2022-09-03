export const vStart = {
  container: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
  },

  containerOrange: {
    initial: {
      width: "50vw",
    },
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
    exit: {
      width: "100vw",
      transition: { ease: "easeInOut" },
    },
  },

  containerBlack: {
    initial: {
      width: "50vw",
    },
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
    exit: {
      width: "0vw",
      transition: { ease: "easeInOut" },
    },
  },

  logo_Span: {
    initial: {
      x: "-50%",
      y: "-50%",
    },
    exit: {
      scale: 0,
      transition: { ease: "easeInOut" },
    },
  },
};

export const vHome = {
  containerOrange: {
    initial: {
      height: "100vh",
    },
    animate: {
      height: "50vh",
    },
    exit: {
      height: "0",
    },
  },
  containerBlack: {
    initial: {
      height: 0,
    },
    animate: {
      height: "50vh",
    },
    exit: {
      height: "100vh",
    },
  },
  navTop: {
    initial: {
      top: "-100vh",
      opacity: 0,
    },
    animate: {
      top: 0,
      opacity: 1,
    },
    exit: {
      top: "-100vh",
      opacity: 0,
      transition: { ease: "easeInOut" },
    },
  },
  navLeft: {
    initial: {
      left: "-100vw",
      opacity: 0,
    },
    animate: {
      left: 0,
      opacity: 1,
    },
    exit: {
      left: "-100vw",
      opacity: 0,
      transition: { ease: "easeInOut" },
    },
  },
  navRight: {
    initial: {
      right: "-100vw",
      opacity: 0,
    },
    animate: {
      right: 0,
      opacity: 1,
    },
    exit: {
      right: "-100vw",
      opacity: 0,
      transition: { ease: "easeInOut" },
    },
  },
  navBottom: {
    initial: {
      bottom: "-100vh",
      opacity: 0,
    },
    animate: {
      bottom: 0,
      opacity: 1,
    },
    exit: {
      bottom: "-100vh",
      opacity: 0,
      transition: { ease: "easeInOut" },
    },
  },

  navTransition: {
    delay: 0.2,
    type: "spring",
    stiffness: 50,
    bounce: 1,
  },
};

export const vAbout = {
  logo: {
    initial: {
      scale: 0,
      x: "-50%",
      y: "-50%",
    },
    visible: {
      scale: 1,
      x: "-50%",
      y: "-50%",
    },
    hover: {
      scale: 0.9,
    },
    tap: {
      scale: 1.2,
    },
    exit: {
      scale: 0,
      transition: { ease: "easeInOut" },
    },
  },

  containerOrange: {
    initial: {
      height: "0",
    },
    animate: {
      height: "25vh",
    },
    exit: {
      height: "100vh",
      transition: {
        delay: 0.3,
      },
    },
  },
  containerBlack: {
    initial: {
      height: "100vh",
    },
    animate: {
      height: "0",
    },
    exit: {
      height: "100vh",
    },
  },
  containerWhite: {
    initial: {
      height: "0vh",
    },
    animate: {
      height: "75vh",
    },
    exit: {
      height: "0",
    },
  },
  title: {
    initial: {
      y: 400,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
    exit: {
      y: 50,
      opacity: 0,
      mixBlendMode: "multiply",
    },
  },

  article: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
  },
};

export const vTutorial = {
  logo: {
    initial: {
      scale: 0,
      x: "-50%",
      y: "-50%",
    },
    visible: {
      scale: 1,
      x: "-50%",
      y: "-50%",
    },
    hover: {
      scale: 0.9,
    },
    tap: {
      scale: 1.2,
    },
    exit: {
      scale: 0,
      transition: { ease: "easeInOut" },
    },
  },

  containerOrange: {
    initial: {
      height: "0",
    },
    animate: {
      height: "0",
    },
    exit: {
      height: "100vh",
      transition: {
        delay: 0.3,
      },
    },
  },
  containerBlack: {
    initial: {
      height: "100vh",
    },
    animate: {
      height: "35vh",
    },
    exit: {
      height: "100vh",
    },
  },
  containerWhite: {
    initial: {
      height: "0vh",
    },
    animate: {
      height: "65vh",
    },
    exit: {
      height: "0",
    },
  },
  title: {
    initial: {
      y: 400,
    },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
    exit: {
      y: 50,
      opacity: 0,
      mixBlendMode: "multiply",
    },
  },
  article: {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: (index) => ({
      scale: 1,
      opacity: 1.3,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
        delay: index * 0.1,
        type: "spring",
      },
    }),
    exit: {
      scale: 0,
      opacity: 0,
    },
  },
  contentArticle: {
    hover: {
      scale: 1.1,
      zIndex: 100,
      transition: {
        type: "spring",
        stiffness: 500,
      },
    },
  },
  contentArticleInside: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      background: "rgba(0, 0, 0, 0.226)",
    },
    whileHover: {
      opacity: 0,
      background: "none",
    },
  },
};

export const vWork = {
  logo: {
    initial: {
      scale: 0,
      x: "-50%",
      y: "-50%",
    },
    visible: {
      scale: 1,
      x: "-50%",
      y: "-50%",
    },
    hover: {
      scale: 0.9,
    },
    tap: {
      scale: 1.2,
    },
    exit: {
      scale: 0,
      transition: { ease: "easeInOut" },
    },
  },

  containerOrange: {
    initial: {
      height: "0",
    },
    animate: {
      height: "0",
    },
    exit: {
      height: "100vh",
      transition: {
        delay: 0.3,
      },
    },
  },
  containerBlack: {
    initial: {
      height: "100vh",
    },
    animate: {
      height: "35vh",
    },
    exit: {
      height: "100vh",
    },
  },
  containerWhite: {
    initial: {
      height: "0vh",
    },
    animate: {
      height: "65vh",
    },
    exit: {
      height: "0",
    },
  },
  title: {
    initial: {
      y: 400,
    },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
    exit: {
      y: 50,
      opacity: 0,
      mixBlendMode: "multiply",
    },
  },
  article: {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: (index) => ({
      scale: 1,
      opacity: 1.3,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
        delay: index * 0.1,
        type: "spring",
      },
    }),
    exit: {
      scale: 0,
      opacity: 0,
    },
  },
  contentArticle: {
    hover: {
      scale: 1.1,
      zIndex: 100,
      transition: {
        type: "spring",
        stiffness: 500,
      },
    },
  },
  contentArticleInside: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      background: "rgba(0, 0, 0, 0.226)",
    },
    hover: {
      opacity: 0,
      background: "none",
    },
  },
};

export const vSkill = {
  containerOrange: {
    initial: {
      height: "0",
      width: "100vw",
    },
    animate: {
      height: "0",
      width: "100vw",
      display: "none",
    },
    exit: (smallDevice) => {
      return smallDevice
        ? {
            height: "0",
            width: "0",
          }
        : {
            height: "100vh",
            width: "100vw",
            position: "absolute",
            transition: {
              delay: 0.5,
            },
          };
    },
  },

  logo: {
    initial: {
      scale: 0,
      x: "-50%",
      y: "-50%",
    },
    animate: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: {
        // delay: 0.3
      },
    },
    hover: {
      scale: 0.9,
    },
    tap: {
      scale: 1.2,
    },
    exit: (isFront) =>
      isFront === null
        ? {
            scale: 0,
            transition: {
              ease: "easeInOut",
            },
          }
        : {},
  },
  containerBlack: {
    initial: {
      height: "100vh",
      width: "100vw",
    },
    animate: {
      height: "100vh",
      width: "100vw",
    },
    exit: (isFront) =>
      isFront === null
        ? {
            height: "100vh",
            width: "100vw",
          }
        : {},
  },
  containerWhite: {
    initial: ({ smallDevice }) =>
      smallDevice
        ? {
            height: "1vh",
            with: "0",
            position: "absolute",
            top: "50%",
            left: 0,
          }
        : {
            width: "1vw",
            height: "0",
            position: "absolute",
            left: "50%",
            top: 0,
          },
    animate: ({ smallDevice }) =>
      smallDevice
        ? {
            top: "50%",
            left: "0",
            width: "100vw",
            height: ["1vh", "100vh"],
            transition: {
              times: [0.5, 1],
            },
          }
        : {
            width: ["1vw", "50vw"],
            height: "100vh",
            left: "50%",
            top: 0,
            transition: {
              times: [0.5, 1],
            },
          },
    exit: ({ smallDevice, isFront }) =>
      smallDevice && isFront === null
        ? {
            width: "0",
          }
        : !smallDevice
        ? {
            left: "200vw",
          }
        : (isFront || !isFront) && {
            width: "100vw",
          },
  },

  containerBlackAndWhite: {
    initial: ({ smallDevice }) =>
      smallDevice
        ? {
            height: "0",
            width: "91.666667%",
            opacity: 0,
          }
        : {
            height: "83.333333%",
            width: "0",
            opacity: 0,
          },
    animate: {
      height: "83.333333%",
      width: "91.666667%",
      opacity: 1,
      transition: {
        delay: 1,
        duration: 2,
      },
    },
    exit: ({ smallDevice, isFront }) =>
      smallDevice && isFront === null
        ? {
            position: "absolute",
            left: "-100vw",
            opacity: 0,
          }
        : !smallDevice
        ? {
            position: "absolute",
            top: "200vh",
            opacity: 0,
          }
        : (isFront || !isFront) && {},
  },
  frontContainer: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 2.5,
        duration: 1,
      },
    },
  },

  frontContainerContent: {
    initial: {
      width: 0,
    },
    animate: ({ item, index }) => ({
      width: item.knowledge - 10 + "%",
      transition: {
        delay: 3 + index / 5,
        duration: "0.5",
      },
    }),
  },

  backContainer: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 2.5,
        duration: 1,
      },
    },
  },

  backContainerContent: {
    initial: { width: 0 },
    animate: ({ item, index }) => ({
      width: item.knowledge - 10 + "%",
      transition: {
        delay: 3 + index / 5,
        duration: 0.5,
      },
    }),
  },
};

export const vSkillSmallScreen = {
  containerOrange: {
    initial: {
      position: "absolute",
      height: "0",
      width: "100vw",
    },
    animate: {
      height: "0",
      width: "100vw",
      display: "none",
    },
    exit: {
      height: "100vh",
      width: "100vw",
      position: "absolute",
      transition: {
        delay: 0.5,
      },
    },
  },
  logo: {
    initial: {
      scale: 0,
      x: "-50%",
      y: "-50%",
    },
    animate: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: {
        delay: 0.5,
      },
    },
    hover: {
      scale: 0.9,
    },
    tap: {
      scale: 1.2,
    },
    exit: {
      scale: 0,
      transition: { ease: "easeInOut" },
    },
  },

  containerBlack: {
    initial: {
      height: "50vh",
      width: "100vw",
    },
    animate: {
      height: "9vh",
      width: "100vw",
    },
    exit: {
      height: "100vh",
      width: "100vw",
    },
  },

  containerWhite: {
    initial: {
      height: "50vh",
      with: "100vw",
    },
    animate: {
      height: "100vh",
      with: "100vw",
    },
    exit: {
      height: "0",
    },
  },
};
