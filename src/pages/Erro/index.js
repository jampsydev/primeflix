import { Link } from 'react-router-dom';
import './erro.css';

function Erro(){
    return(
       
        <div className="not-found">
              <img src='https://seusitefeito.com/wp-content/uploads/2018/08/1511705-Copy-1038x576.jpg'></img>
            <h1>404</h1>
            <h2>Pagina não encontrada!</h2>
            <Link  to="/">Veja todos filmes!</Link>
        </div>

    )
}

export default Erro;
