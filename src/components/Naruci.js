import React, { Component } from "react";
import slika from "../pictures/cokoladnebombice.jpg";
export class Naruci extends Component {
    constructor(){
        super();
        this.state = {ime: "", kolac: "kolače"};
    }
    promijeniIme = (e) => {
        let ime = e.target.value.split(" ");
        if (e.target.value != ""){
            this.setState({ime: " " + ime[0]});
        }else{
            this.setState({ime: ""});
        }

      }
    promijeniKolac = (e) => {
        this.setState({kolac: e.target.value});
      }
    render() {
        return (
            <div id="Naruci">
                <div class="form">
                    <img src={slika} alt="Slika Forme" />
                    <form>
                        <h2>Naruči</h2>
                        <hr />
                        <label for="ime-prezime">Ime i Prezime</label>
                        <input type="text" id="ime-prezime" name="ime-prezime" onChange={this.promijeniIme}/>
                        <label for="phonenum">Broj Mobitela</label>
                        <input type="tel" id="phonenum" name="phonenum" />
                        <label for="adresa">Adresa Stanovanja</label>
                        <input type="text" id="adresa" name="adresa" />
                        <div>
                            <label for="slastica-input">Slastica</label>
                            <select name="slastica-input" id="slastica-input" onChange={this.promijeniKolac}>
                                <option value="Čokoladni Kolačić">Čokoladni Kolačić</option>
                                <option value="Kolačić od Tamne Čokolade">Kolačić od Tamne Čokolade</option>
                                <option value="Flamingo Kolačić">Flamingo Kolačić</option>
                                <option value="Kolačić od Jagode">Kolačić od Jagode</option>
                                <option value="Kolačić od Vanilije">Kolačič od Vanilije</option>
                                <option value="Brownie">Brownie</option>
                                <option value="Rolicu od Cimeta">Rolica od Cimeta</option>
                                <option value="Šuškavac">Šuškavac</option>
                                <option value="Cheesecake">Cheesecake</option>
                                <option value="Voćnu Tortu">Voćna Torta</option>
                            </select>

                            <label for="kolicina-slastica">Količina Slastica</label>
                            <input type="text" name="kolicina-slastica" id="kolicina-slastica" />
                        </div>
                        <input type="submit" id="submit" value="Naruči!" />
                        <p>Bok{this.state.ime}! Vidim da voliš {this.state.kolac}. :)</p>
                    </form>
                </div>
            </div>
        );
    }

}
export default Naruci;