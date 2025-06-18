const MoreInfoPanel = ({ onClose }) => {
  // Données actuelles
  const current = {
    recyclables: 120,
    users: 53,
    co2: 42.7,
    plastic: 15,
    metal: 9.5,
    glass: 7.3,
    paper: 14.2,
    treatedReports: 25,
    homeRequests: 2,
    responseRate: 62.5,
    revenue: 601.13,
  };

  // Dernière connexion
  const previous = {
    recyclables: 100,
    users: 47,
    co2: 36.2,
    plastic: 12.5,
    metal: 6.2,
    glass: 5.0,
    paper: 12.0,
    treatedReports: 20,
    homeRequests: 1,
    responseRate: 58.0,
    revenue: 500.00,
  };

  const calcVariation = (now, before) => {
    const diff = now - before;
    const percent = ((diff) / (before || 1) * 100).toFixed(1);
    const trend = diff > 0 ? "🔼" : diff < 0 ? "🔽" : "➖";
    const color = diff > 0 ? "text-green-600" : diff < 0 ? "text-red-600" : "text-gray-500";
    return { percent, trend, color };
  };

  const metrics = [
    { label: "♻️ Recyclables collectés", key: "recyclables", unit: "kg" },
    { label: "👥 Utilisateurs actifs", key: "users" },
    { label: "🌱 CO2 économisé", key: "co2", unit: "kg" },
    { label: "🧴 Plastique économisé", key: "plastic", unit: "kg" },
    { label: "🧲 Métal recyclé", key: "metal", unit: "kg" },
    { label: "🍾 Verre recyclé", key: "glass", unit: "kg" },
    { label: "📄 Papier recyclé", key: "paper", unit: "kg" },
    { label: "✅ Signalements traités", key: "treatedReports" },
    { label: "🏠 Requêtes à domicile", key: "homeRequests" },
    { label: "📊 Taux de réponse", key: "responseRate", unit: "%" },
    { label: "💰 Bénéfice", key: "revenue", unit: "$" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-[600px] shadow-xl max-h-[90vh] overflow-y-auto">
        <h2 className="font-bold text-lg mb-4 text-blue-800">📈 Changement depuis votre dernière connexion</h2>

        <ul className="text-sm space-y-4 text-gray-700">
          {metrics.map(({ label, key, unit }) => {
            const value = current[key];
            const { percent, trend, color } = calcVariation(value, previous[key]);
            return (
              <li key={key} className="flex justify-between items-center border-b pb-1">
                <span>{label}</span>
                <span>
                  <span className="font-semibold">
                    {unit === "$" ? `$${value.toFixed(2)}` : `${value}${unit ? ` ${unit}` : ""}`}
                  </span>
                  <span className={`ml-2 text-xs font-medium ${color}`}>{trend} {percent}%</span>
                </span>
              </li>
            );
          })}
        </ul>

        <button
          className="mt-6 text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
          onClick={onClose}
        >
          Fermer
        </button>
      </div>
    </div>
  );
};


export default MoreInfoPanel;