import { useState, useEffect } from "react";
import produtos from "./produtos.json"; // dados no JSON
import "./index.css"; // importa o CSS

function App() {
  const [filtro, setFiltro] = useState("Todas");
  const [roupas, setRoupas] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    setRoupas(produtos);
  }, []);

  const categorias = ["Todas", ...new Set(roupas.map(r => r.categoria))];

  const roupasFiltradas = roupas.filter(r => {
    const porCategoria = filtro === "Todas" || r.categoria === filtro;
    const porBusca = r.nome.toLowerCase().includes(busca.toLowerCase());
    return porCategoria && porBusca;
  });

  const numeroWhats = "5599999999999"; // seu número aqui

  return (
    <div>
      {/* Header com categorias e busca */}
      <header>
        <nav>
          {categorias.map(c => (
            <button 
              key={c} 
              onClick={() => setFiltro(c)}
              className={filtro === c ? "active" : ""}
            >
              {c}
            </button>
          ))}
        </nav>
        <input 
          type="text" 
          placeholder="Buscar produtos..." 
          value={busca}
          onChange={e => setBusca(e.target.value)} 
        />
      </header>

      {/* Cards dos produtos */}
      <main>
        {roupasFiltradas.map(r => (
          <div key={r.id} className="card">
            <div className="img-container">
              <img src={r.img} alt={r.nome} />
              {r.promocao && <span className="badge">Promoção</span>}
            </div>
            <h3>{r.nome}</h3>
            <p>{r.preco}</p>
            <a 
              className="whatsapp-btn"
              href={`https://wa.me/${numeroWhats}?text=Olá, tenho interesse em ${encodeURIComponent(r.nome)}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
