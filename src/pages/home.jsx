import React, { useState } from 'react';
import Collecte from '../components/collecte';
import MoreInfoPanel from '../components/moreinfopanel';

// Reusable style
const boxStyle = "bg-white rounded-xl p-3 shadow-sm border text-sm flex items-center justify-between cursor-pointer";

// Dummy data
const dataSignalement = [
  { name: "EMIA", value: 2 },
  { name: "Odza", value: 2 },
  { name: "Damas", value: 99, highlight: true },
  { name: "Melen", value: 2, active: true },
  { name: "Bonapriso", value: 2 },
  { name: "Ngoa-Ekelle", value: 15 },
  { name: "Emana", value: 7 },
  { name: "Etoudi", value: 6 },
  { name: "Nsam", value: 21 },
];

const dataCollecte = [
  { name: "Mimboman", value: 12 },
  { name: "Biyem-Assi", value: 25 },
  { name: "Nkolbisson", value: 8 },
  { name: "Ngoa-Ekelle", value: 15 },
  { name: "Emana", value: 7 },
  { name: "Etoudi", value: 6 },
  { name: "Nsam", value: 21 },
  { name: "Bastos", value: 18 },
  { name: "Odza", value: 14 },
  { name: "Essos", value: 30, highlight: true },
  { name: "Tsinga", value: 10 },
  { name: "Mokolo", value: 16 },
  { name: "Mvog-Ada", value: 9 },
  { name: "Ekounou", value: 11 },
  { name: "Nkolndongo", value: 5 },
];

const dataRevenuVille = [
  
  { ville: 'Mimboman', montant: 5593.27 },
  { ville: 'Efoulan', montant: 2115.00 },
  { ville: 'Nlongkak', montant: 3798.12 },
  { ville: 'Mvog-Betsi', montant: 4281.75 },
  { ville: 'Emana', montant: 2970.65 },
  { ville: 'Mokolo', montant: 3502.90 },
  { ville: 'Biyem-Assi', montant: 4890.00 },
  { ville: 'Essos', montant: 4156.33 },
  { ville: 'Ngoa-Ekellé', montant: 2684.41 },
  { ville: 'Obili', montant: 3433.20 },
  { ville: 'Nsam', montant: 2894.76 },
  { ville: 'Tsinga', montant: 3921.17 },
  { ville: 'Etoa-Meki', montant: 2307.88 },
];


const dataRevenuPersonne = [
  { nom: 'Guy Hawkins', montant: 943.65 },
  { nom: 'Savannah Nguyen', montant: 473.85 },
  { nom: 'Darlene Roberts', montant: 782.01 },
  { nom: 'Emilie Durand', montant: 1112.12 },
  { nom: 'Jean Nguema', montant: 621.76 },
  { nom: 'Thomas Mbarga', montant: 895.00 },
  { nom: 'Rita Manga', montant: 734.33 },
  { nom: 'Paul Kouam', montant: 1298.20 },
  { nom: 'Fatou N\'Diaye', montant: 657.80 },
  { nom: 'Brice Tchana', montant: 1012.45 },
  { nom: 'Inès Djouma', montant: 589.40 },
  { nom: 'Fabrice Ekani', montant: 810.99 },
  { nom: 'Sarah Abena', montant: 990.00 },
  { nom: 'Christian Owono', montant: 740.30 },
  { nom: 'Linda Nkodo', montant: 1342.65 },
  { nom: 'Albert Ndongo', montant: 789.99 },
  { nom: 'Marie Pouani', montant: 880.12 },
  { nom: 'Céline Bidjanga', montant: 1210.78 },
  { nom: 'Yvan Nguélé', montant: 699.00 },
  { nom: 'Chantal Evina', montant: 932.10 },
  { nom: 'Patrick Ngoa', montant: 1123.45 },
  { nom: 'Désirée Fotso', montant: 854.90 },
  { nom: 'Kevin Njiki', montant: 925.60 },
  { nom: 'Nathan Atangana', montant: 1102.70 },
  { nom: 'Audrey Mendo', montant: 978.35 },
  { nom: 'Julien Kalla', montant: 1033.22 },
  { nom: 'Hortense Zambo', montant: 748.75 },
  { nom: 'Michel Ebanga', montant: 880.00 },
  { nom: 'Diane Eyenga', montant: 1134.50 },
  { nom: 'Aline Ndoum', montant: 612.45 },
  { nom: 'Donatien Eboutou', montant: 1078.99 },
  { nom: 'Prisca Noubissie', montant: 720.80 },
  { nom: 'Steve Mekoulou', montant: 1155.70 },
  { nom: 'Lucienne Nkou', montant: 695.65 },
  { nom: 'Tony Bilon', montant: 985.90 },
  { nom: 'Noëlle Abega', montant: 1234.60 },
  { nom: 'Arsène Tabi', montant: 859.30 },
  { nom: 'Flore Mballa', montant: 990.45 },
  { nom: 'Franky Tsala', montant: 1055.00 },
  { nom: 'Josiane Etoa', montant: 1170.33 },
  { nom: 'Bruno Minko', montant: 902.40 },
  { nom: 'Élodie Atoumba', montant: 812.10 },
  { nom: 'Hugo Samba', montant: 993.70 },
  { nom: 'Sandra Metogo', montant: 1062.20 },
  { nom: 'Laurent Obam', montant: 1183.80 },
  { nom: 'Marina Nkoum', montant: 914.55 },
  { nom: 'Gregory Simo', montant: 871.30 },
  { nom: 'Daphné Nkeng', montant: 964.20 },
  { nom: 'Kevin Malanda', montant: 999.90 },
  { nom: 'Tatiana Ebanga', montant: 1075.15 },
];



// Components
const SubMap = ({ city, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
      <h2 className="font-bold text-lg mb-2">Submap: {city}</h2>
      <p>Displaying map of {city} here...</p>
      <button className="mt-4 text-sm text-white bg-blue-500 px-4 py-2 rounded" onClick={onClose}>Close</button>
    </div>
  </div>
);

// const CollecteDetails = ({ city, onClose }) => (
//   <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
//     <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
//       <h2 className="font-bold text-lg mb-2">Details for {city}</h2>
//       <p>Users and items to collect in {city}...</p>
//       <button className="mt-4 text-sm text-white bg-blue-500 px-4 py-2 rounded" onClick={onClose}>Close</button>
//     </div>
//   </div>
// );

// const MoreInfoPanel = ({ onClose }) => (
//   <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
//     <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
//       <h2 className="font-bold text-lg mb-2">More Information</h2>
//       <ul className="text-sm space-y-1">
//         <li>Recyclables collected: 120kg</li>
//         <li>Active users: 53</li>
//         <li>CO2 saved: 42.7kg</li>
//         <li>Plastic saved: 15kg</li>
//       </ul>
//       <button className="mt-4 text-sm text-white bg-blue-500 px-4 py-2 rounded" onClick={onClose}>Close</button>
//     </div>
//   </div>
// );

const Home = () => {
  const [selectedCitySignalement, setSelectedCitySignalement] = useState(null);
  const [selectedCityCollecte, setSelectedCityCollecte] = useState(null);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  return (
    <div className="px-4 sm:px-6 py-4 space-y-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/* Signalement */}
        <div className="bg-white p-4 rounded-xl shadow-sm border space-y-2">
          <h2 className="font-semibold text-gray-800">Signalement</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-2">
            {dataSignalement.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedCitySignalement(item.name)}
                className={`${boxStyle} ${
                  item.highlight ? 'bg-orange-100 text-orange-800' :
                  item.active ? 'border-blue-500' : ''
                }`}
              >
                <span>{item.name}</span>
                <span className="bg-gray-200 rounded-full px-2">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Demande à Domicile */}
        <div className="bg-white p-4 rounded-xl shadow-sm border space-y-2">
          <h2 className="font-semibold text-gray-800">Demande à Domicile</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-2">
            {dataCollecte.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedCityCollecte(item.name)}
                className={`${boxStyle} ${item.highlight ? 'bg-orange-100 text-orange-800' : ''}`}
              >
                <span>{item.name}</span>
                <span className="bg-gray-200 rounded-full px-2">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="space-y-4">
          {/* Welcome Panel */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md p-5 border border-blue-100">
            <h2 className="text-xl font-bold mb-4 text-blue-800">👋 Bienvenue ! Aujourd'hui Nous avons:</h2>
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
              <div className="flex flex-col">
                <span className="text-gray-500">Signalements traités</span>
                <span className="text-blue-700 font-semibold text-base">25</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500">Bénéfice ce mois</span>
                <span className="text-green-700 font-semibold text-base">$601.13</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500">Requêtes à domicile</span>
                <span className="text-orange-600 font-semibold text-base">2</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500">Taux de réponse</span>
                <span className="text-purple-600 font-semibold text-base">62.5%</span>
              </div>
              <div className="flex flex-col col-span-2">
                <span className="text-gray-500">Bénéfice recyclage</span>
                <span className="text-green-800 font-semibold text-base">$601.13</span>
              </div>
            </div>
            <button
              className="mt-5 text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition w-full sm:w-auto"
              onClick={() => setShowMoreInfo(true)}
            >
              Voir plus de détails
            </button>
          </div>

          {/* Weather Panel */}
          <div className="bg-white rounded-xl shadow-sm p-4 border relative h-48 overflow-hidden">
            <iframe
              src="https://embed.windy.com/embed2.html?lat=3.848&lon=11.502&detailLat=3.848&detailLon=11.502&width=100%25&height=100%25&zoom=11&level=surface&overlay=wind&menu=false&message=false&marker=false&calendar=now&pressure=true&type=map&location=coordinates&detail=true&metricWind=default&metricTemp=default&radarRange=-1"
              width="100%"
              height="100%"
              className="absolute inset-0 rounded-xl border-none"
              title="Météo Yaoundé"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Help Panel */}
          <div className="bg-white rounded-xl shadow-sm p-4 border text-sm">
            <h3 className="font-semibold mb-2 text-blue-800">❓ Besoin d'aide ?</h3>
            <p className="text-gray-700">Recycle App Ltd.</p>
            <p className="text-gray-500">Contactez-nous pour toute assistance concernant la plateforme ou le processus de collecte.</p>
            <a href="mailto:support@recycleapp.com" className="text-blue-500 mt-2 block">📧 support@recycleapp.com</a>
          </div>
        </div>
      </div>

      {/* Bottom Section - Revenu */}
      <div className="bg-white rounded-xl shadow-sm p-4 border">
        <h2 className="text-lg font-semibold mb-4 text-blue-800">📊 Souscription - Revenus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          {/* Par Ville */}
          <div className="max-h-60 overflow-y-auto pr-2">
            <h3 className="font-semibold text-gray-700 mb-2">🏘️ Par Quartier</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-t min-w-[300px]">
                <thead className="text-gray-600 sticky top-0 bg-white">
                  <tr><th className="py-1">Quartier</th><th>Somme</th></tr>
                </thead>
                <tbody className="text-gray-700">
                  {dataRevenuVille.map((item, index) => (
                    <tr key={index}>
                      <td>{item.ville}</td>
                      <td>${item.montant.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Par Utilisateur */}
          <div className="max-h-60 overflow-y-auto pr-2">
            <h3 className="font-semibold text-gray-700 mb-2">👤 Par Utilisateur</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-t min-w-[300px]">
                <thead className="text-gray-600 sticky top-0 bg-white">
                  <tr><th className="py-1">Utilisateur</th><th>Somme</th></tr>
                </thead>
                <tbody className="text-gray-700">
                  {dataRevenuPersonne.map((item, index) => (
                    <tr key={index}>
                      <td>{item.nom}</td>
                      <td>${item.montant.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {selectedCitySignalement && <SubMap city={selectedCitySignalement} onClose={() => setSelectedCitySignalement(null)} />}
      {selectedCityCollecte && <Collecte city={selectedCityCollecte} onClose={() => setSelectedCityCollecte(null)} />}
      {showMoreInfo && <MoreInfoPanel onClose={() => setShowMoreInfo(false)} />}
    </div>
  );
};

export default Home;
