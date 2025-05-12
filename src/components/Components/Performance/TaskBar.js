const TaskBar = ({ top, left, width, color, label, area, percent }) => (
    <div
        style={{
            position: 'absolute',
            top: top,
            left: `${left}%`,
            width: `${width}%`,
            backgroundColor: color,
            borderRadius: 20,
            color: 'white',
            padding: '4px 10px',
            fontSize: 12,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}
    >
        <span>{label}</span>
        <span>{`${area} — ${percent}%`}</span>
    </div>
);
export default TaskBar;