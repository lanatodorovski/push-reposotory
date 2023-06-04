import slika from "../pictures/originpicture.jpg";
function ONama(){
    return(
        <div id="O-nama">
        <img src={slika} alt="Hugo Slatković" />
        <div class="O-nama-prvi">
          <h2>O nama</h2>
          <hr />
          <p><span>D</span>avno, u dalekom svijetu, postojao je tajanstveni sanjar po imenu Hugo Slatković. S njegovim
            nevjerojatnim umom i maštovitom dušom, Hugo je lutao kroz zemlje slatkog blaga, pronalazeći tajne recepte i
            zbirajući inspiraciju iz svih krajeva svijeta.</p>
          <p>Dok je putovao, Hugo je sanjao o mjestu gdje bi slastice mogle oživjeti, mjestu gdje bi ljudi mogli doživjeti
            čarobne okuse i boje. Sve te snove i maštarije, sve ideje koje su se rađale u njegovoj glavi, skupljao je u
            jednu knjigu, koju je nazvao "Slatki Snovi".</p>
        </div>
        <div class="O-nama-drugi">
          <p>Tako se rodila Slatki Snovi, čarobna slastičarnica koja je postala prepoznatljiva po svojim jedinstvenim
            slasticama i nevjerojatnim okusima. Hugo je okupio talentiranu ekipu slastičara, koji su zajedno stvarali
            remek-djela slatkiša i pretvarali maštarije u stvarnost.</p>
          <p>Danas, Slatki Snovi ostaje čuvar Hugoove naslijeđene strasti i snova. Kroz inovativnost i ljubav prema
            slasticama, nastavljaju stvarati slatke snove koji će se prenositi s koljena na koljeno, ostavljajući
            neizbrisiv trag u svijetu slatkog zadovoljstva.</p>
        </div>
      </div>
    );
}
export default ONama;