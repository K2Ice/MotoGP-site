import React from "react"
import ReactDOM from "react-dom"
import "./styles/index.css"
import App from "./components/App"

const data = {
  riders: [
    {
      id: 0,
      name: "Valentino Rossi",
      number: 46,
      team: "Petronas Yamaha SRT",
    },
    {
      id: 1,
      name: "Franco Morbidelli",
      number: 21,
      team: "Petronas Yamaha SRT",
    },
    {
      id: 2,
      name: "Lorenzo Savadori",
      number: 32,
      team: "Aprilia Racing Team Gresini",
    },
    {
      id: 3,
      name: "Aleix Espargaro",
      number: 41,
      team: "Aprilia Racing Team Gresini",
    },
    {
      id: 4,
      name: "Jack Miller",
      number: 43,
      team: "Ducati Lenovo Team",
    },
    {
      id: 5,
      name: "Francesco Bagnaia",
      number: 63,
      team: "Ducati Lenovo Team",
    },
    {
      id: 6,
      name: "Takaaki Nakagami",
      number: 30,
      team: "LCR Honda",
    },
    {
      id: 7,
      name: "Alex Marquez",
      number: 73,
      team: "LCR Honda",
    },
    {
      id: 8,
      name: "Maverick Viñales",
      number: 12,
      team: "Monster Energy Yamaha MotoGP",
    },
    {
      id: 9,
      name: "Fabio Quartararo",
      number: 20,
      team: "Monster Energy Yamaha MotoGP",
    },
    {
      id: 10,
      name: "Johann Zarco",
      number: 5,
      team: "Pramac Racing",
    },
    {
      id: 11,
      name: "Michele Pirro",
      number: 51,
      team: "Pramac Racing",
    },
    {
      id: 12,
      name: "Jorge Martin",
      number: 89,
      team: "Pramac Racing",
    },
    {
      id: 13,
      name: "Brad Binder",
      number: 33,
      team: "Red Bull KTM Factory Racing",
    },
    {
      id: 14,
      name: "Miguel Oliveira",
      number: 88,
      team: "Red Bull KTM Factory Racing",
    },
    {
      id: 15,
      name: "Pol Espargaro",
      number: 44,
      team: "Repsol Honda Team",
    },
    {
      id: 16,
      name: "Marc Marquez",
      number: 93,
      team: "Repsol Honda Team",
    },
    {
      id: 17,
      name: "Luca Marini",
      number: 10,
      team: "Sky VR46 Avintia",
    },
    {
      id: 18,
      name: "Enea Bastianini",
      number: 23,
      team: "Sky VR46 Avintia",
    },
    {
      id: 19,
      name: "Joan Mir",
      number: 36,
      team: "Team SUZUKI ECSTAR",
    },
    {
      id: 20,
      name: "Alex Rins",
      number: 42,
      team: "Team SUZUKI ECSTAR",
    },
    {
      id: 21,
      name: "Danilo Petrucci",
      number: 9,
      team: "Tech 3 KTM Factory Racing",
    },
    {
      id: 22,
      name: "Iker Lecuona",
      number: 27,
      team: "Tech 3 KTM Factory Racing",
    },
  ],
  races: [
    { race: "GP Kataru", track: "Losail" },
    { race: "GP Dauhy (Katar)", track: "Losail" },
    { race: "GP Portugalii", track: "Portimao" },
    { race: "GP Hiszpanii", track: "Jerez de la Frontera" },
    { race: "GP Francji", track: "Le Mans" },
    { race: "GP Włoch", track: "Mugello" },
    {
      race: "GP Katalonii (Hiszpania)",
      track: "Circuit de Barcelona-Catalunya",
    },
    { race: "GP Niemiec", track: "Sachsenring" },
    { race: "Assen TT (Holandia)", track: "Assen" },
    { race: "GP Finlandii", track: "Kymi Ring" },
    { race: "GP Austrii", track: "Red Bull Ring" },
    { race: "GP Wielkiej Brytanii", track: "Silverstone" },
    { race: "GP Aragonii (Hiszpania)", track: "Motorland Aragon" },
    { race: "GP San Marino", track: "Misano" },
    { race: "GP Japonii", track: "Motegi" },
    { race: "GP Tajlandii", track: "Buriram" },
    { race: "Assen TT (Holandia)", track: "Assen" },
    { race: "GP Australii", track: "Philip Island" },
    { race: "GP Walencji (Hiszpania)", track: "Walencia" },
    { race: "Assen TT (Holandia)", track: "Assen" },
  ],
}

ReactDOM.render(<App data={data} />, document.getElementById("root"))
