import React, { useState } from 'react';
import { CheckCircle, MoreVertical } from 'lucide-react';

const statusBadge = (status) => {
  const base = "px-3 py-0.5 rounded-full text-xs font-medium";
  if (status === "Traité") return <span className={`${base} bg-green-100 text-green-800`}>● Traité</span>;
  if (status === "En attente") return <span className={`${base} bg-yellow-100 text-yellow-800`}>● En attente</span>;
  if (status === "Refusé") return <span className={`${base} bg-red-100 text-red-800`}>● Refusé</span>;
  return <span className={`${base} bg-gray-200 text-gray-600`}>Inconnu</span>;
};

const initialRows = [
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

const Orders = () => {
  const [rows, setRows] = useState(initialRows);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('Tous');

  const filteredRows = rows.filter(row => {
  const inSearch = Object.values(row).some(val =>
    String(val).toLowerCase().includes(search.toLowerCase())
  );
  const inStatus = (filterStatus === 'Tous') || (row.status === filterStatus);
  return inSearch && inStatus;
});


  const toggleCheck = (id) => {
    setRows(prev =>
      prev.map(r => r.id === id ? { ...r, checked: !r.checked } : r)
    );
  };

  const deleteSelected = () => {
    setRows(prev => prev.filter(row => !row.checked));
  };

  const markAsDone = () => {
    setRows(prev => prev.map(row => row.checked ? { ...row, status: 'Traité' } : row));
  };

  const exportCSV = () => {
    const headers = ['Type', 'Ville', 'Date', 'Utilisateur', 'Adresse', 'Téléphone', 'Commentaire', 'Statut'];
    const lines = filteredRows.map(row =>
      [row.type, row.city, row.date, row.user, row.adresse, row.phone, row.commentaire, row.status].join(',')
    );
    const csv = [headers.join(','), ...lines].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'collecte_export.csv';
    a.click();
  };

  const toggleFilter = () => {
    setFilterStatus(prev =>
      prev === 'Tous' ? 'En attente' : prev === 'En attente' ? 'Traité' : prev === 'Traité' ? 'Refusé' : 'Tous'
    );
  };

  const [menuOpenId, setMenuOpenId] = useState(null);

  const changeStatus = (id, newStatus) => {
  setRows(prev =>
    prev.map(row =>
      row.id === id ? { ...row, status: newStatus } : row
    )
  );
  setMenuOpenId(null); // refermer le menu après le choix
};


  return (
    <div className="p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <h2 className="text-xl font-semibold">Demandes de Collecte <span className="text-sm text-blue-600">({filteredRows.length}) résultats</span></h2>
          <p className="text-gray-500 text-sm">Suivi des collectes à domicile</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <input
            type="text"
            placeholder="Rechercher (type, ville, utilisateur)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-3 py-1 text-sm rounded-md"
          />
          <button onClick={deleteSelected} className="px-4 py-2 border rounded text-sm hover:bg-gray-50">Supprimer</button>
          <button onClick={toggleFilter} className="px-4 py-2 border rounded text-sm hover:bg-gray-50">
            Filtrer : {filterStatus}
          </button>
          <button onClick={exportCSV} className="px-4 py-2 border rounded text-sm hover:bg-gray-50">Exporter</button>
          <button onClick={markAsDone} className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
            Marquer comme traité
          </button>
        </div>
      </div>

      {/* Tableau */}
      <div className="bg-white border rounded-xl shadow-sm overflow-x-auto">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3"><input type="checkbox" disabled /></th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Ville</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Utilisateur</th>
              <th className="p-3 text-left">Adresse</th>
              <th className="p-3 text-left">Téléphone</th>
              <th className="p-3 text-left">Commentaire</th>
              <th className="p-3 text-left">Statut</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map(row => (
              <tr key={row.id} className="border-t hover:bg-gray-50">
                <td className="p-3">
                  <input type="checkbox" checked={row.checked} onChange={() => toggleCheck(row.id)} />
                </td>
                <td className="p-3 font-semibold">{row.type}</td>
                <td className="p-3">{row.city}</td>
                <td className="p-3">{row.date}</td>
                <td className="p-3">{row.user}</td>
                <td className="p-3">{row.adresse}</td>
                <td className="p-3">{row.phone}</td>
                <td className="p-3">{row.commentaire}</td>
                <td className="p-3">{statusBadge(row.status)}</td>
                <td className="p-3 relative">
  <MoreVertical
    className="h-4 w-4 text-gray-500 cursor-pointer"
    onClick={() => setMenuOpenId(menuOpenId === row.id ? null : row.id)}
  />
  {menuOpenId === row.id && (
    <div className="absolute right-0 mt-1 w-40 bg-white border rounded shadow-md z-10">
      {['En attente', 'Traité', 'Refusé'].map(option => (
        <button
          key={option}
          onClick={() => changeStatus(row.id, option)}
          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
        >
          {option}
        </button>
      ))}
    </div>
  )}
</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
