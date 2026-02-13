import React, { useEffect, useState } from "react";
import { Phone, Mail, Instagram, Linkedin, Moon, Sun, Star, ChevronRight, MessageCircle } from "lucide-react";
import "./index.css";

import telaNutri from './assets/telaNutri.png'
import telaDent from './assets/telaDentista.png'
import telaStore from './assets/telaLoja.jpg' // Você precisará adicionar esta imagem

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState([]);

  // Slides para o hero
  const slides = [
    { id: 1, image: telaNutri, alt: "Nutritionist Landing Page" },
    { id: 2, image: telaDent, alt: "Dentist Landing Page" },
    { id: 3, image: telaStore, alt: "Fashion Store Landing Page" },
  ];

  // Reviews com estrelas
  const reviews = [
    { 
      id: 1, 
      name: "Maria Souza", 
      role: "Nutritionist",
      text: "The site she created increased my sales by 40%! The design is modern and converts really well.", 
      rating: 5,
      date: "March 2024"
    },
    { 
      id: 2, 
      name: "João Lima", 
      role: "Dentist",
      text: "Professional, attentive, and fast delivery. The result was incredible, my patients love the new site.", 
      rating: 5,
      date: "February 2024"
    },
    { 
      id: 3, 
      name: "Ana Clara", 
      role: "Clinic Owner",
      text: "My landing page turned out beautiful and easy to use. Received many compliments from colleagues.", 
      rating: 5,
      date: "January 2024"
    },
    { 
      id: 4, 
      name: "Carlos Santos", 
      role: "Fashion Store Owner",
      text: "Exceptional work! The automation system saved me hours of work every week. Highly recommended!", 
      rating: 5,
      date: "December 2023"
    },
    { 
      id: 5, 
      name: "Patricia Oliveira", 
      role: "Real Estate Agent",
      text: "Very satisfied with the result. The page is fast, beautiful, and has already generated new leads.", 
      rating: 5,
      date: "November 2023"
    }
  ];

  // Projetos
  const projects = [
    {
      id: 1,
      title: "NUTRITIONIST SITE",
      description: "Modern landing page for a nutrition professional with responsive design and lead capture.",
      image: telaNutri,
      link: "https://nutricionista-lp-kappa.vercel.app/",
      tags: ["Health", "Lead Capture", "Responsive"]
    },
    {
      id: 2,
      title: "DENTIST WEBSITE",
      description: "Professional website for a dental clinic with appointment scheduling system.",
      image: telaDent,
      link: "https://dentista-lp-wine.vercel.app/",
      tags: ["Healthcare", "Scheduling", "Professional"]
    },
    {
      id: 3,
      title: "FASHION STORE",
      description: "E-commerce landing page for a clothing store with product showcase and shopping integration.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      link: "https://example.com/fashion-store",
      tags: ["E-commerce", "Fashion", "Shopping"]
    },
    {
      id: 4,
      title: "REAL ESTATE PLATFORM",
      description: "Property listing platform with advanced filters and virtual tour integration.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      link: "https://example.com/real-estate",
      tags: ["Real Estate", "Filters", "Virtual Tours"]
    }
  ];

  // Verifica preferência do sistema + localStorage
  useEffect(() => {
    const saved = localStorage.getItem("dark-mode");
    if (saved) {
      setDarkMode(saved === "true");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Auto-slide para o carrossel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Animação de scroll para reviews
  useEffect(() => {
    const handleScroll = () => {
      const reviewElements = document.querySelectorAll('.review-card');
      reviewElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible && !visibleReviews.includes(index)) {
          setVisibleReviews(prev => [...prev, index]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleReviews]);

  // Atualiza body e salva escolha
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div>
      {/* Botão de Dark Mode */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="dark-toggle"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun size={28} color="#EAB308" /> : <Moon size={28} color="#5C4033" />}
      </button>

      {/* Hero Section with Slideshow */}
      <section className="hero">
        <div className="slideshow-container">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          ))}
          <div className="slideshow-overlay" />
        </div>
        
        <div className="hero-content">
          <h1 className="animate-title">Landing Pages & Automation</h1>
          <p className="animate-subtitle">Convert more clients with custom-built websites and systems</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Start Your Project</a>
            <a href="#portfolio" className="btn-secondary">View Portfolio</a>
          </div>
        </div>

        <div className="slideshow-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-image">
            <div className="image-frame">
              <img 
                src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&w=400&q=80" 
                alt="Profile"
                className="profile-photo"
              />
            </div>
          </div>
          
          <div className="about-content">
            <h2>About Me</h2>
            <div className="about-text">
              <p className="highlight">I discovered my passion for technology at 16 and have been dedicated to it ever since.</p>
              
              <p>As a <strong>Systems Analysis and Development Technician</strong>, I combine technical expertise with creative solutions to develop high-converting landing pages and automation systems.</p>
              
              <p>Currently working on internal development projects at <strong>LAFORT</strong>, I'm constantly refining both my technical and interpersonal skills. I believe that constructive feedback is the foundation of professional growth.</p>
              
              <p>Naturally curious and committed to lifelong learning, I maintain an active GitHub repository documenting my progress and exploring new technologies.</p>
              
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
                <div className="stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio-section">
        <h2>Recent Projects</h2>
        <p className="section-subtitle">Check out some of my latest work</p>
        
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project <ChevronRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="reviews-section">
        <h2>Client Reviews</h2>
        <p className="section-subtitle">What my clients say about working with me</p>
        
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div 
              key={review.id} 
              className={`review-card ${visibleReviews.includes(index) ? 'visible' : ''}`}
            >
              <div className="review-header">
                <div className="reviewer-info">
                  <h4>{review.name}</h4>
                  <span className="reviewer-role">{review.role}</span>
                </div>
                <div className="review-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#EAB308" color="#EAB308" />
                  ))}
                </div>
              </div>
              
              <p className="review-text">"{review.text}"</p>
              
              <div className="review-footer">
                <span className="review-date">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2>Let's Work Together</h2>
          <p className="contact-subtitle">Have a project in mind? I'd love to hear about it.</p>
          
          <a 
            href="https://wa.me/5599999999999" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="whatsapp-button"
          >
            <div className="whatsapp-icon">
              <MessageCircle size={32} />
            </div>
            <div className="whatsapp-text">
              <span className="whatsapp-title">Start a Conversation</span>
              <span className="whatsapp-description">Click here to chat on WhatsApp</span>
            </div>
            <ChevronRight size={24} className="whatsapp-arrow" />
          </a>

          <div className="contact-info">
            <p>Or reach me through social media:</p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Landing Page Specialist. All rights reserved.</p>
          <p className="footer-made">Made with ❤️ for great conversions</p>
        </div>
      </footer>
    </div>
  );
}