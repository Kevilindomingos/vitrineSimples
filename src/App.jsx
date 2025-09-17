import React, { useEffect, useState } from "react";
import { Phone, Mail, Instagram, Linkedin, Moon, Sun } from "lucide-react";
import "./index.css";

import telaNutri from './assets/telaNutri.png'
import telaDent from './assets/telaDentista.png'

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

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
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: 999,
        }}
      >
        {darkMode ? <Sun size={28} color="#EAB308" /> : <Moon size={28} color="#555" />}
      </button>

      {/* Hero */}
      <section className="hero">
        <div className="top-bg" />
        <div
          className="bottom-bg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1505682634904-d7c075c1ad6c?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="content">
          <h1>Landing Pages & Automação</h1>
          <p>Converta mais clientes com sites e sistemas feitos sob medida</p>
        </div>
      </section>

      {/* Seção 2 - Sobre */}
      <section>
        <h2 className="titulos2">Quem sou eu</h2>
        <p className="texts2">
          Sou especialista em criação de landing pages modernas e automação de
          serviços, ajudando empresas e profissionais a vender mais com
          tecnologia prática e acessível.
        </p>

        <div className="carousel">
          {["Landing Pages", "Automação de serviços", "Manutenção de site", "Muito mais"].map(
            (tool) => (
              <div key={tool} className="tool-card">
                {tool}
              </div>
            )
          )}
        </div>
      </section>

      {/* Portfólio */}
      <section>
  <h2>Projetos Recentes</h2>
  <div className="portfolio-grid">
    {[
      {
        id: 1,
        title: "SITE DE NUTRIÇÃO",
        description: "Landing page para profissional de nutrição moderna com design responsivo.",
        image: telaNutri,
        link: "https://nutricionista-lp-kappa.vercel.app/"
      },
      {
        id: 2,
        title: "SITE PARA DENTISTA",
        description: "Website para profissional de odontologia responsivo.",
        image: telaDent,
        link: "https://dentista-lp-wine.vercel.app/"
      },
      {
        id: 3,
        title: "SITE PARA LOJA COMERCIAL",
        description: "Loja online simples e rápida para pequenos e médios negócios.",
        image: "https://picsum.photos/600/403",
        link: "https://outro-link-aqui.com/"
      }
    ].map((project) => (
      <div key={project.id} className="project-card">
        <img src={project.image} alt={project.title} />
        <div className="card-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Ver projeto →
          </a>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Depoimentos */}
      <section>
        <h2>O que dizem meus clientes</h2>
        <div className="portfolio-grid">
          {[
            { name: "Maria Souza", text: "O site que ela criou aumentou minhas vendas em 40%! Super recomendo." },
            { name: "João Lima", text: "Profissional atenciosa e entrega rápida, o resultado foi incrível." },
            { name: "Ana Clara", text: "Minha landing page ficou linda e fácil de usar, recebi muitos elogios." },
          ].map((dep) => (
            <div key={dep.name} className="testimonial-card">
              <p>“{dep.text}”</p>
              <span>— {dep.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section>
        <h2>Entre em contato</h2>
        <p>Quer discutir um projeto ou saber mais sobre meus serviços? Vamos conversar!</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Seu nome" />
          <input type="email" placeholder="Seu e-mail" />
          <textarea placeholder="Sua mensagem" rows="4" />
          <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer" className="btn">
            Enviar pelo WhatsApp
          </a>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <div>
          <a href="#"><Instagram size={24} /></a>
          <a href="#"><Linkedin size={24} /></a>
          <a href="#"><Mail size={24} /></a>
          <a href="#"><Phone size={24} /></a>
        </div>
        <p>© {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
