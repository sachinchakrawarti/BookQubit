import { useState, useEffect, useRef } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import books from "../../../../data/BooksData";

const AUTO_SCROLL_TIME = 5000;

const HeroSection = () => {
  const [currentBookIndex, setCurrentBookIndex] = useState(0);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const currentBook = books[currentBookIndex];

  const startAutoScroll = () => {
    stopAutoScroll();
    intervalRef.current = setInterval(() => {
      setCurrentBookIndex((prev) => (prev + 1) % books.length);
    }, AUTO_SCROLL_TIME);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", stopAutoScroll);
      container.addEventListener("mouseleave", startAutoScroll);
    }

    return () => {
      stopAutoScroll();
      if (container) {
        container.removeEventListener("mouseenter", stopAutoScroll);
        container.removeEventListener("mouseleave", startAutoScroll);
      }
    };
  }, []);

  const goToBook = (index) => {
    if (index >= 0 && index < books.length) {
      setCurrentBookIndex(index);
      startAutoScroll();
    }
  };

  const navigateBook = (dir) => {
    const newIndex =
      dir === "prev"
        ? (currentBookIndex - 1 + books.length) % books.length
        : (currentBookIndex + 1) % books.length;
    goToBook(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") navigateBook("prev");
      if (e.key === "ArrowRight") navigateBook("next");
      if (e.key === "Escape") stopAutoScroll();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentBookIndex]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      navigateBook("next");
    }
    if (touchStart - touchEnd < -50) {
      navigateBook("prev");
    }
  };

  // Inline styles as fallback
  const styles = {
    section: {
      background: "linear-gradient(to bottom, #f0f9ff, #ffffff)",
      padding: "3rem 1.5rem",
      position: "relative",
    },
    container: {
      maxWidth: "80rem",
      margin: "0 auto",
      position: "relative",
      background: "#ffffff",
      borderRadius: "1rem",
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      overflow: "hidden",
    },
    arrowButton: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      background: "rgba(255, 255, 255, 0.9)",
      padding: "0.75rem",
      borderRadius: "9999px",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      color: "#0284c7",
      border: "none",
      cursor: "pointer",
      transition: "all 0.2s",
      zIndex: 10,
    },
    leftArrow: {
      left: "1rem",
    },
    rightArrow: {
      right: "1rem",
    },
    contentWrapper: {
      display: "flex",
      flexDirection: "column",
    },
    imageContainer: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
      padding: "1.5rem",
    },
    image: {
      height: "300px",
      borderRadius: "0.5rem",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      objectFit: "contain",
      transition: "all 0.3s",
    },
    detailsContainer: {
      width: "100%",
      padding: "1.5rem",
    },
    category: {
      display: "inline-block",
      background: "linear-gradient(to right, #e0f2fe, #bae6fd)",
      color: "#0369a1",
      padding: "0.5rem 1rem",
      borderRadius: "9999px",
      fontSize: "0.875rem",
      fontWeight: 500,
      marginBottom: "1rem",
    },
    title: {
      fontSize: "1.875rem",
      fontFamily: "serif",
      fontWeight: "bold",
      marginBottom: "0.5rem",
      color: "#111827",
    },
    author: {
      color: "#0284c7",
      marginBottom: "1.5rem",
      fontWeight: 500,
    },
    ratingContainer: {
      display: "flex",
      alignItems: "center",
      marginBottom: "1.5rem",
    },
    star: {
      marginRight: "0.25rem",
    },
    ratingText: {
      marginLeft: "0.5rem",
      color: "#4b5563",
      fontWeight: 500,
    },
    keyPoints: {
      marginBottom: "2rem",
    },
    keyPoint: {
      color: "#374151",
      display: "flex",
      alignItems: "flex-start",
      marginBottom: "0.75rem",
    },
    bullet: {
      color: "#0ea5e9",
      marginRight: "0.5rem",
      marginTop: "0.25rem",
    },
    actionsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "1rem",
    },
    knowMoreBtn: {
      background: "linear-gradient(to right, #0284c7, #0ea5e9)",
      color: "#ffffff",
      padding: "0.75rem 2rem",
      borderRadius: "0.5rem",
      fontWeight: 500,
      border: "none",
      cursor: "pointer",
      transition: "all 0.2s",
      textDecoration: "none",
      display: "inline-block",
    },
    getBookBtn: {
      border: "2px solid #0284c7",
      color: "#0284c7",
      padding: "0.75rem 2rem",
      borderRadius: "0.5rem",
      fontWeight: 500,
      background: "transparent",
      cursor: "pointer",
      transition: "all 0.2s",
      textDecoration: "none",
      display: "inline-block",
    },
    dotsContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: "1.5rem",
    },
    dot: {
      width: "0.5rem",
      height: "0.5rem",
      borderRadius: "9999px",
      margin: "0 0.375rem",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s",
    },
    activeDot: {
      background: "linear-gradient(to right, #0284c7, #0ea5e9)",
      width: "2rem",
    },
    inactiveDot: {
      backgroundColor: "#bae6fd",
    },
    counter: {
      textAlign: "center",
      marginTop: "1rem",
      fontSize: "0.875rem",
      color: "#6b7280",
    },
  };

  return (
    <section
      style={styles.section}
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div style={styles.container}>
        {/* Arrows */}
        <button
          onClick={() => navigateBook("prev")}
          style={{ ...styles.arrowButton, ...styles.leftArrow }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-50%) scale(1.1)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(-50%)")
          }
          aria-label="Previous book"
        >
          <FaChevronLeft size={20} />
        </button>

        <button
          onClick={() => navigateBook("next")}
          style={{ ...styles.arrowButton, ...styles.rightArrow }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-50%) scale(1.1)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(-50%)")
          }
          aria-label="Next book"
        >
          <FaChevronRight size={20} />
        </button>

        <div style={styles.contentWrapper}>
          {/* Book Image */}
          <div style={styles.imageContainer}>
            <div style={{ position: "relative" }}>
              <img
                src={currentBook?.imageUrl}
                alt={`Cover of ${currentBook?.title}`}
                style={styles.image}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x420?text=Book+Cover";
                }}
              />
            </div>
          </div>

          {/* Details */}
          <div style={styles.detailsContainer}>
            <span style={styles.category}>{currentBook?.category}</span>

            <h1 style={styles.title}>{currentBook?.title}</h1>
            <p style={styles.author}>
              by <span style={{ color: "#075985" }}>{currentBook?.author}</span>
            </p>

            {/* Rating */}
            <div style={styles.ratingContainer}>
              <div style={{ display: "flex" }}>
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    style={styles.star}
                    color={
                      i < Math.floor(currentBook?.rating || 0)
                        ? "#fbbf24"
                        : "#d1d5db"
                    }
                    size={20}
                  />
                ))}
              </div>
              <span style={styles.ratingText}>
                {(currentBook?.rating || 0).toFixed(1)}/5.0
              </span>
            </div>

            {/* Key points */}
            <div style={styles.keyPoints}>
              {currentBook?.keyPoints?.map((p, i) => (
                <div key={i} style={styles.keyPoint}>
                  <span style={styles.bullet}>•</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div style={styles.actionsContainer}>
              <a
                href={currentBook?.buttons?.knowMore}
                style={styles.knowMoreBtn}
                onMouseEnter={(e) => {
                  e.target.style.background =
                    "linear-gradient(to right, #0369a1, #0284c7)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background =
                    "linear-gradient(to right, #0284c7, #0ea5e9)";
                  e.target.style.transform = "translateY(0)";
                }}
                onClick={(e) => {
                  e.preventDefault();
                  // Handle Electron IPC call here
                }}
              >
                Know More
              </a>
              <a
                href={currentBook?.buttons?.getBook}
                style={styles.getBookBtn}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#f0f9ff";
                  e.target.style.borderColor = "#0369a1";
                  e.target.style.color = "#075985";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.borderColor = "#0284c7";
                  e.target.style.color = "#0284c7";
                }}
                onClick={(e) => {
                  e.preventDefault();
                  // Handle Electron IPC call here
                }}
              >
                Get Book
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div style={styles.dotsContainer}>
        {books?.slice(0, 10).map((_, i) => (
          <button
            key={i}
            onClick={() => goToBook(i)}
            style={{
              ...styles.dot,
              ...(i === currentBookIndex
                ? styles.activeDot
                : styles.inactiveDot),
            }}
            aria-label={`Go to book ${i + 1}`}
            aria-current={i === currentBookIndex ? "true" : "false"}
          />
        ))}
        {books?.length > 10 && (
          <span
            style={{
              marginLeft: "0.5rem",
              fontSize: "0.875rem",
              color: "#6b7280",
              alignSelf: "center",
            }}
          >
            +{books.length - 10} more
          </span>
        )}
      </div>

      {/* Book Counter */}
      <div style={styles.counter}>
        {currentBookIndex + 1} of {books?.length || 0}
      </div>
    </section>
  );
};

export default HeroSection;
