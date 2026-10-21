import { SCHEDULE } from '../../data/content.js';

export default function ScheduleList({ compact = false }) {
  return (
    <div className={`schedule-list${compact ? ' schedule-list-compact' : ''}`}>
      <div className="schedule-day">
        <strong>Sábados</strong>
        <ul>
          {SCHEDULE.saturday.map(({ label, hours }) => (
            <li key={label}><span>{label}</span><span>{hours}</span></li>
          ))}
        </ul>
      </div>
      <div className="schedule-day">
        <strong>Domingos</strong>
        <ul>
          <li><span>{SCHEDULE.sunday}</span></li>
        </ul>
      </div>
    </div>
  );
}
