interface TooltipPayload {
  value: number | string;
  name: string;
  unit?: string;
  type?: string;
  payload?: {
    kilogram?: number;
    calories?: number;
  };
}

interface ActivityBarsTooltipProps {
  payload: TooltipPayload[];
}

export default function ActivityBarsTooltip({
  payload,
}: ActivityBarsTooltipProps) {
  // Vérifie que le payload existe et a au moins deux éléments
  if (payload && payload.length > 1) {
    return (
      <div className="bg-[#E60000] flex flex-col items-center text-white font-medium p-2 rounded">
        <p>{payload[0].value} kg</p>
        <p>{payload[1].value} kcal</p>
      </div>
    );
  }
  return null; // Retourne null si le payload est vide ou non défini
}
