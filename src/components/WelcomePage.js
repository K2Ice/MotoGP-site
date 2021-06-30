import React from "react"

import "../styles/WelcomePage.css"

import icon from "../pic/motorcycle_icon.png"

const WelcomePage = ({ animatedElements, changeAnimateState }) => {
  setTimeout(() => {
    changeAnimateState()
  }, 5000)
  return (
    <>
      <img
        style={animatedElements ? { display: "none" } : {}}
        className="icon"
        src={icon}
        alt="moto_icon"
      />
      <div className="helloText">
        <h1 style={animatedElements ? { animation: "none" } : {}}>
          <span>Moto GP - Klasa królewska</span>
        </h1>
        <p style={animatedElements ? { animation: "none" } : {}}>
          Motocyklowe mistrzostwa świata (ang. Grand Prix motorcycle racing) –
          najbardziej prestiżowe na świecie zawodowe wyścigi motocyklowe,
          odpowiednik samochodowej Formuły 1, nazywane też „klasą królewską”,
          organizowane przez Międzynarodową Federację Motocyklową (FIM).
          Rozgrywane są od 1949 roku. Pierwszym wyścigiem zaliczanym do tego
          cyklu był wyścig o Tourist Trophy Wyspy Man. W zawodach tych
          uczestniczyli zawodnicy, którzy startowali na motocyklach o pojemności
          250 cm³, 350 cm³ oraz 500 cm³. Ta ostatnia była najważniejszą
          kategorią do 2001 roku, kiedy to zastąpiona została klasą MotoGP.
          Pierwszym mistrzem świata w najwyższej klasie był Leslie Graham
          pochodzący z Wielkiej Brytanii. Mistrzostwa obecnie składają się z 19
          wyścigów tzw. Grand Prix, odbywających się na kontynentach:
          europejskim, amerykańskim, azjatyckim oraz w Australii[3]. Zawodnik,
          który zdobędzie najwięcej punktów podczas wszystkich wyścigów, zdobywa
          mistrzostwo świata. Podobnie jak Formuła 1, „Królewska klasa” jest
          poligonem do testowania najnowszych technologii z dziedziny
          konstrukcji motocykli i ich opon. Motocykle te mają masę od 135 do 165
          kg (w zależności od liczby cylindrów), silniki benzynowe o pojemności
          1000 cm³, osiągające moc do ok. 250 KM i prędkości do 350 km/h. W 2016
          roku Andrea Iannone na torze w Mugello osiągnął prędkość 354,9
          km/h[4], co jest rekordem prędkości w historii MotoGP. Hałas o
          natężeniu 130 decybeli, jaki wytwarzają, zmusza kierowców do używania
          stopperów. W sezonach 2007–2011 wszystkie motocykle w najwyższej
          klasie były wyposażone w silniki o pojemności zmniejszonej z 990 cm³
          do 800 cm³. Powodem były zbyt wysokie prędkości osiągane na torze
          przez zawodników. Kolejnym była śmierć w 2003 roku japońskiego
          motocyklisty Daijiro Kato po wypadku na japońskim torze Suzuka.
          Obecnie w MotoGP wyróżnić można 6 producentów: Yamaha, Honda, Ducati,
          Suzuki, Aprilia oraz KTM. Od sezonu 2012 pojemność motocykli w klasie
          MotoGP wynosi 1000 cm³.
        </p>
      </div>
    </>
  )
}

export default WelcomePage
