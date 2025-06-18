import React from "react";
import { CheckCircle, Clock, XCircle, MapPin, Phone, MessageSquare } from "lucide-react";

const collecteRequests = [
  // Mimboman (12)
  { id: 1, city: "Mimboman", user: "Alice", date: "2025-06-18", type: "Plastique", status: "En attente", adresse: "Rue 12, Mimboman", phone: "690123456", commentaire: "Collecte urgente avant 10h" },
  { id: 2, city: "Mimboman", user: "Bob", date: "2025-06-17", type: "Papier", status: "Traité", adresse: "Avenue Centrale", phone: "695234567", commentaire: "Papier trié en sacs" },
  { id: 3, city: "Mimboman", user: "Nathalie", date: "2025-06-14", type: "Métal", status: "Refusé", adresse: "Quartier Nord", phone: "690000001", commentaire: "Erreur de tri" },

  // Biyem-Assi (25)
  { id: 4, city: "Biyem-Assi", user: "Jean", date: "2025-06-17", type: "Papier", status: "Traité", adresse: "Carrefour Maetur", phone: "679888999", commentaire: "" },
  { id: 5, city: "Biyem-Assi", user: "Clara", date: "2025-06-16", type: "Plastique", status: "En attente", adresse: "Biyem-Assi Lac", phone: "676554433", commentaire: "Tri fait" },
  { id: 6, city: "Biyem-Assi", user: "Victor", date: "2025-06-15", type: "Verre", status: "Traité", adresse: "Vers le marché", phone: "699332211", commentaire: "" },

  // Nkolbisson (8)
  { id: 7, city: "Nkolbisson", user: "Sandra", date: "2025-06-18", type: "Plastique", status: "En attente", adresse: "Rue Carrefour", phone: "690876543", commentaire: "Collecte rapide svp" },
  { id: 8, city: "Nkolbisson", user: "Franck", date: "2025-06-17", type: "Papier", status: "Traité", adresse: "Entrée UY1", phone: "691112233", commentaire: "" },

  // Ngoa-Ekelle (15)
  { id: 9, city: "Ngoa-Ekelle", user: "Laure", date: "2025-06-16", type: "Métal", status: "Refusé", adresse: "Derrière ENS", phone: "690222111", commentaire: "Non conforme" },
  { id: 10, city: "Ngoa-Ekelle", user: "Mickael", date: "2025-06-15", type: "Verre", status: "Traité", adresse: "Rue Lycée", phone: "698765432", commentaire: "" },

  // Emana (7)
  { id: 11, city: "Emana", user: "Sylvie", date: "2025-06-17", type: "Papier", status: "En attente", adresse: "Carrefour Emana", phone: "691000000", commentaire: "Ramassage tôt le matin" },

  // Etoudi (6)
  { id: 12, city: "Etoudi", user: "Pascal", date: "2025-06-16", type: "Métal", status: "Traité", adresse: "Face Présidence", phone: "690654321", commentaire: "Zone sécurisée" },

  // Nsam (21)
  { id: 13, city: "Nsam", user: "Carole", date: "2025-06-15", type: "Verre", status: "Traité", adresse: "Vers marché Nsam", phone: "690998877", commentaire: "Collecte hebdo" },

  // Bastos (18)
  { id: 14, city: "Bastos", user: "Olivier", date: "2025-06-15", type: "Plastique", status: "En attente", adresse: "Ambassade USA", phone: "690456789", commentaire: "Urgent, accès sécurisé" },

  // Odza (14)
  { id: 15, city: "Odza", user: "Sophie", date: "2025-06-14", type: "Papier", status: "Refusé", adresse: "Montée Odza", phone: "692222333", commentaire: "Papier humide" },

  // Essos (30)
  { id: 16, city: "Essos", user: "Armand", date: "2025-06-18", type: "Plastique", status: "Traité", adresse: "Essos marché", phone: "690121212", commentaire: "Collecte OK" },

  // Tsinga (10)
  { id: 17, city: "Tsinga", user: "Marc", date: "2025-06-17", type: "Papier", status: "En attente", adresse: "Rond-point Tsinga", phone: "697000111", commentaire: "Beaucoup de papier" },

  // Mokolo (16)
  { id: 18, city: "Mokolo", user: "Aline", date: "2025-06-16", type: "Métal", status: "Traité", adresse: "Face marché Mokolo", phone: "699444555", commentaire: "" },

  // Mvog-Ada (9)
  { id: 19, city: "Mvog-Ada", user: "Bruno", date: "2025-06-17", type: "Verre", status: "Refusé", adresse: "Rue principale", phone: "690999000", commentaire: "Cassé en route" },

  // Ekounou (11)
  { id: 20, city: "Ekounou", user: "Chantal", date: "2025-06-15", type: "Plastique", status: "Traité", adresse: "Entrée Ekounou", phone: "693334455", commentaire: "" },

  // Nkolndongo (5)
  { id: 21, city: "Nkolndongo", user: "Gael", date: "2025-06-14", type: "Papier", status: "En attente", adresse: "Route principale", phone: "690765432", commentaire: "Accès difficile" },
];


const statusBadge = (status) => {
  const base = "px-2 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1";
  switch (status) {
    case "En attente":
      return <span className={`${base} bg-orange-100 text-orange-700`}><Clock size={14}/> En attente</span>;
    case "Traité":
      return <span className={`${base} bg-green-100 text-green-700`}><CheckCircle size={14}/> Traité</span>;
    case "Refusé":
      return <span className={`${base} bg-red-100 text-red-700`}><XCircle size={14}/> Refusé</span>;
    default:
      return <span className={`${base} bg-gray-100 text-gray-700`}>{status}</span>;
  }
};

const CollecteDetails = ({ city, onClose }) => {
  const filteredRequests = collecteRequests.filter((req) => req.city === city);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-xl w-[900px] max-h-[90vh] overflow-y-auto shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">📋 Détails de collecte - {city}</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-gray-100 sticky top-0 z-10 text-gray-700">
              <tr>
                <th className="p-3 border-b w-28">Utilisateur</th>
                <th className="p-3 border-b w-24">Date</th>
                <th className="p-3 border-b w-24">Type</th>
                <th className="p-3 border-b w-32">Adresse</th>
                <th className="p-3 border-b w-24">Téléphone</th>
                <th className="p-3 border-b w-64">Commentaires</th>
                <th className="p-3 border-b w-28">Statut</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.length > 0 ? (
                filteredRequests.map((req) => (
                  <tr key={req.id} className="hover:bg-gray-50 transition-all align-top">
                    <td className="p-3 border-b font-medium text-gray-800">{req.user}</td>
                    <td className="p-3 border-b">{req.date}</td>
                    <td className="p-3 border-b">{req.type}</td>
                    <td className="p-3 border-b "><MapPin size={14}/>{req.adresse}</td>
                    <td className="p-3 border-b"><Phone size={14}/>{req.phone}</td>
                    <td className="p-3 border-b text-gray-600"><MessageSquare size={14} className="inline-block mr-1"/>{req.commentaire || <span className="italic text-gray-400">N/A</span>}</td>
                    <td className="p-3 border-b">{statusBadge(req.status)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center text-gray-500 p-6">
                    Aucune donnée pour cette ville.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mt-6">
          <button
            className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition"
            onClick={onClose}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollecteDetails;
