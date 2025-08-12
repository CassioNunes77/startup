# TechFlow Solutions - Página da Startup

Uma página web moderna e interativa para uma startup de desenvolvimento de software, criada com HTML5, CSS3 e JavaScript puro.

## 🚀 Características

### Design e UX
- **Design Moderno**: Interface limpa e profissional com gradientes e sombras
- **Responsivo**: Totalmente adaptável para desktop, tablet e mobile
- **Animações Suaves**: Transições e animações CSS para melhor experiência
- **Scroll Interativo**: Efeitos de parallax e animações baseadas no scroll

### Funcionalidades Interativas
- **Loading Screen**: Tela de carregamento animada
- **Navegação Fixa**: Menu de navegação com efeito de blur
- **Scroll Progress**: Indicador de progresso da rolagem
- **Contadores Animados**: Estatísticas com animação de contagem
- **Formulário Interativo**: Validação e feedback visual
- **Floating Action Button**: Botão para voltar ao topo
- **Cursor Personalizado**: Efeito de cursor interativo
- **Partículas Animadas**: Efeito de partículas no hero section

### Seções da Página
1. **Hero Section**: Apresentação principal com efeito de digitação
2. **Serviços**: Grid de serviços com hover effects
3. **Sobre**: Informações da empresa com estatísticas animadas
4. **Portfólio**: Galeria de projetos com efeitos hover
5. **Contato**: Formulário de contato interativo
6. **Footer**: Informações de contato e redes sociais

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: 
  - Flexbox e Grid para layout
  - Variáveis CSS (Custom Properties)
  - Animações e transições
  - Media queries para responsividade
- **JavaScript ES6+**:
  - Intersection Observer API
  - Event listeners
  - DOM manipulation
  - Animations API

## 📁 Estrutura do Projeto

```
StartUp/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
└── README.md           # Documentação
```

## 🎨 Paleta de Cores

- **Primária**: #2563eb (Azul)
- **Secundária**: #7c3aed (Roxo)
- **Acento**: #06b6d4 (Ciano)
- **Fundo Escuro**: #0f172a
- **Fundo Claro**: #f8fafc
- **Texto Primário**: #1e293b
- **Texto Secundário**: #64748b

## 🚀 Como Executar

1. **Clone ou baixe** os arquivos do projeto
2. **Abra** o arquivo `index.html` em um navegador moderno
3. **Ou use um servidor local**:
   ```bash
   # Com Python
   python -m http.server 8000
   
   # Com Node.js (se tiver http-server instalado)
   npx http-server
   
   # Com PHP
   php -S localhost:8000
   ```

## 📱 Responsividade

A página é totalmente responsiva e se adapta aos seguintes breakpoints:
- **Desktop**: > 768px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## ⚡ Performance

- **Otimizado**: CSS e JavaScript minificados
- **Lazy Loading**: Animações carregadas conforme necessário
- **Smooth Scrolling**: Rolagem suave nativa
- **Intersection Observer**: Animações eficientes baseadas em visibilidade

## 🎯 Funcionalidades Principais

### Animações de Scroll
- Elementos aparecem conforme o usuário rola a página
- Efeito parallax nos elementos flutuantes
- Contadores animados quando visíveis

### Interatividade
- Hover effects em cards e botões
- Validação de formulário em tempo real
- Feedback visual para ações do usuário

### Efeitos Visuais
- Partículas animadas no hero section
- Gradientes dinâmicos
- Sombras e transparências
- Transições suaves

## 🔧 Personalização

### Cores
Edite as variáveis CSS no arquivo `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    --accent-color: #06b6d4;
    /* ... outras variáveis */
}
```

### Conteúdo
- Modifique o texto no arquivo `index.html`
- Substitua as imagens placeholder por imagens reais
- Atualize as informações de contato no footer

### Animações
- Ajuste a velocidade das animações no CSS
- Modifique os efeitos no JavaScript
- Personalize os tempos de transição

## 🌟 Recursos Avançados

### Intersection Observer
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);
```

### Animações CSS
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

### Efeitos de Hover
```css
.service-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-xl);
}
```

## 📞 Suporte

Para dúvidas ou sugestões sobre o projeto, entre em contato através do formulário na página ou abra uma issue no repositório.

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir conforme necessário.

---

**TechFlow Solutions** - Transformando ideias em realidade digital! 🚀
