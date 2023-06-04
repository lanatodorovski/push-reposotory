import SlasticaKartica from "./SlasticaKartica.js";
import slikaCokoladniMuffin from "../pictures/cokoladnimuffin.jpg";
import slikaTamniMuffin from "../pictures/darkckockolatecupcake.jpg";
import slikaFlamingoMuffin from "../pictures/flamingocupcake.jpg";
import slikaJagodaMuffin from "../pictures/strawberrycupcake.jpg";
import slikaVanilijaMuffin from "../pictures/vanilacupcake.jpg";
import slikaBrowie from "../pictures/brownie.jpeg";
import slikaRolica from "../pictures/cinnamonroll.jpg";
import slikaSuskavac from "../pictures/suskavac.jpg";
import slikaCheesecake from "../pictures/cheesecake.jpg";
import slikaVocnaTorta from "../pictures/vocnatorta.jpg";
function Menu() {
    const nizSlastica = [
        {
            naziv: "Čokoladni Kolačić",
            cijena: 1.90,
            tezina: 110,
            slika: slikaCokoladniMuffin
        },
        {
            naziv: "Kolačić od Tamne Čokolade",
            cijena: 2.00,
            tezina: 110,
            slika: slikaTamniMuffin
        },
        {
            naziv: "Flamingo Kolačić",
            cijena: 2.30,
            tezina: 120,
            slika: slikaFlamingoMuffin
        },
        {
            naziv: "Kolačić od Jagode",
            cijena: 2.10,
            tezina: 110,
            slika: slikaJagodaMuffin
        },
        {
            naziv: "Kolačić od Vanilije",
            cijena: 1.90,
            tezina: 110,
            slika: slikaVanilijaMuffin
        },
        {
            naziv: "Brownie",
            cijena: 0.70,
            tezina: 70,
            slika: slikaBrowie
        },
        {
            naziv: "Rolica od Cimeta",
            cijena: 1.60,
            tezina: 200,
            slika: slikaRolica
        }, 
        {
            naziv: "Šuškavac",
            cijena: 1.60,
            tezina: 150,
            slika: slikaSuskavac
        }, 
        {
            naziv: "Cheesecake",
            cijena: 1.90,
            tezina: 200,
            slika: slikaCheesecake
        }, 
        {
            naziv: "Voća Torta",
            cijena: 1.80,
            tezina: 170,
            slika: slikaVocnaTorta
        }, 
    ];
    return (
        <div id="Menu">
            <h1>Menu</h1>
            <hr />
            <div id="Menu-slastice">
            {nizSlastica.map(slastica => {
                return <SlasticaKartica slika={slastica.slika} naziv={slastica.naziv} cijena={slastica.cijena.toFixed(2)} tezina={slastica.tezina}/>
            })}
            </div>
        </div>

    );
}
export default Menu;