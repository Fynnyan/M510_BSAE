import { Status } from '../types/types';

interface StatusBadgeProps {
  status: Status;
}

// PROBLEM: Status wird ausschliesslich ueber Farbe kommuniziert.
// Screenreader und farbenblinde Nutzer erhalten keine Information.
const statusFarben: Record<Status, string> = {
  offen: '#f59e0b',
  aktiv: '#3b82f6',
  kritisch: '#ef4444',
  erledigt: '#22c55e',
};

function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      style={{
        display: 'inline-block',
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: statusFarben[status],
        flexShrink: 0,
      }}
    />
  );
}

export default StatusBadge;
