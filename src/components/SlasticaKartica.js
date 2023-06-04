import { Link } from "react-router-dom";

function SlasticaKartica({slika, cijena, naziv, tezina}){
    return(
        <div className="kartica-slastice">
          <img src={slika} alt={naziv}/>
          <div className="kartica-slastice-info">
            <div className="kartica-slastice-info-left">
              <h3>{cijena}€</h3>
              <h2>{naziv}</h2>
            </div>
            <div className="kartica-slastice-info-right">
              <p>{tezina}g</p>
              <Link to="/naruci"><button>Naruči!</button></Link>
            </div>
          </div>
        </div>
    );
}
export default SlasticaKartica;