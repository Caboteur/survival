import React, {Component} from "react";
import Typist from 'react-typist';
import styles from './intro.module.css'

class Intro extends Component {
  constructor() {
    super();
    this.state={
      num:0,
      display:"inherit"
    }
  }

  iterateAfter(){
this.setState({display:"none"})
    if (this.state.num < 4){

      this.setState({display:"inherit"})
    this.setState((prevState, { num }) => ({
    num: prevState.num + 1
  }));

}
  }

  iterateBack(){
    if (this.state.num !=0){
      this.setState({display:"none"})
      this.setState({display:"inherit"})
    this.setState((prevState, { num }) => ({
    num: prevState.num - 1
  }));
}
  }

  render() {
    const getText= ()=>{  if(this.state.num===0){
      return (
      <p  style={{display:this.state.display}} className={styles.textIntro}>
      Berceau d’une diversité biologique, ethnique et culturelle époustouflante,
      la Colombie dispose de très nombreux atouts pour écrire les prochaines
      pages de son histoire.

    Depuis l’accord de paix conclu avec les FARC
    (Forces Armées Révolutionnaires de Colombie) en novembre 2016, aux termes d’un
    conflit ayant généré le plus grand nombre de déplacements internes au monde
    (plus de 7 millions de personnes), le pays tente d’imaginer d’autres manières
    de vivre ensemble, en réintégrant les anciens guérilleros à la société.</p>
  )}else if (this.state.num===1) {
    return(
    <p style={{display:this.state.display}} className={styles.textIntro}>
    Malheureusement, les termes de cet accord inédit n’étant
    guère respectés par le gouvernement actuel, les zones de conflits
    impliquant différentes factions armées se sont multipliées. Des réseaux
    étroitement imbriqués mêlent à ces menaces narcotrafic, extension de la
    frontière agro-industrielle, déforestation et orpaillage, donnant lieu à un
    phénomène massif d’appropriation des terres.
    </p>
      )}
    else if (this.state.num===2) {
      return(
      <p style={{display:this.state.display}} className={styles.textIntro}>
    Chaque jour, les droits et les
    territoires des communautés autochtones, paysannes ou afrodescendantes, démunies sur
    le plan socio-économique et juridique, sont attaqués, fragilisés. Les écosystèmes de
    Colombie, pays arrivant à la deuxième place du classement mondial de la biodiversité,
    revêtent une importance capitale sur le plan climatique. Pourtant, ils perdent chaque
    jour du terrain face à l’appétit des multinationales et des grands propriétaires terriens,
    qui bénéficient au mieux du silence complice, au pire de l’appui du gouvernement.</p>
  )}
    else if(this.state.num===3){
      return(
      <p style={{display:this.state.display}} className={styles.textIntro}>
        Chaque jour, les droits et les
        territoires des communautés autochtones, paysannes ou afrodescendantes, démunies sur
        le plan socio-économique et juridique, sont attaqués, fragilisés. Les écosystèmes de
        Colombie, pays arrivant à la deuxième place du classement mondial de la biodiversité,
        revêtent une importance capitale sur le plan climatique. Pourtant, ils perdent chaque
        jour du terrain face à l’appétit des multinationales et des grands propriétaires terriens,
        qui bénéficient au mieux du silence complice, au pire de l’appui du gouvernement.</p>
      )

  }else if (this.state.num===4) {
    return(


    <p  style={{display:this.state.display}} className={styles.textIntro}>
    Le pays compte 102 peuples autochtones, dont 70 classés en danger « d’extinction physique et culturelle ». Ces peuples, les plus affectés par la violence et les inégalités, subissent déplacements forcés, menaces, recrutements sous la contrainte par des groupes armés, agressions et spoliations. Leurs leaders sont assassinés à un rythme effroyable, ce qui contribue encore à fragiliser les cultures amérindiennes du pays et, de ce fait, les richesses naturelles qu’elles défendent depuis des siècles. En 2019, en Colombie, un·e défenseur·euse des droits humains était assassiné·e tous les 2 jours, et les leaders autochtones constituent une grande partie de ces victimes.
  </p>
  )
}

    else if (this.state.num===5) {
      return(
        <p  style={{display:this.state.display}} className={styles.textIntro}>
    En Colombie comme en de nombreux points du globe, les peuples autochtones luttent pour le respect de leurs droits et la sauvegarde de leurs milieux. Fortement mobilisés et conscients de la menace planétaire que constitue notre système actuel, ils sont porteurs de messages qui parlent d’un autre rapport au monde. D’un monde où la frontière entre humains, animaux et végétaux est infiniment plus perméable que la nôtre. D’un système de pensées et de comportements interconnectés, où chaque représentant du vivant joue un rôle primordial, que toutes les autres composantes se doivent de garder à l’esprit.
    </p>

  )
  }

    else if (this.state.num===6) {
      return(
        <p  style={{display:this.state.display}} className={styles.textIntro}>
    Aux côtés de représentants autochtones, trois organisations, qui souhaitent contribuer à diffuser les messages de ces peuples et à défendre leurs droits, ont décidé de s’unir pour leur donner de la visibilité de l’autre côté de l’Atlantique. Cette exposition virtuelle permet de partir à la rencontre de différents peuples colombiens, confrontés à diverses problématiques socio-environnementales. Elle donne à voir, à travers eux, des manières uniques d’habiter ce monde, comme autant de fronts de résistance.


      </p>

    )
    }
  }
    return(
    <div>

    <h1 className={styles.titleIntro}>Introduction</h1>

      {getText()}

    <div>
    <button className={styles.buttonIntro} onClick={this.iterateBack.bind(this)}>Précédent</button>
    <button className={styles.buttonIntro} onClick={this.iterateAfter.bind(this)}>Suivant</button>
    </div>
    </div>
  )
}
}
export default Intro
