import MiApi from './components/MiApi';
import Footer from './components/Footer';



function App() {
  return (
    <div className="full-container">
     <div className="header">
       <h1> Me lo contó un pajarito</h1>
       <p>Es una forma de decir que uno se enteró de algo, generalmente un rumor o un dato confidencial, sin revelar la fuente exacta de esa información. <span className="fw-bold">Ahora cuando te pidan la fuente, puedes citar un ave chilena</span></p>
       <p>Por ejemplo: <span className="ejemplo-italic">Chincol, Gaviota, Pequén, etc</span></p>
     </div>
     <div className="mi-api">
       <MiApi />
     </div>
     <Footer />
    </div>
  );
}

export default App;
