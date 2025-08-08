interface ProgressBarProps {
  percentage: number;
}

const ProgressBar = ({ percentage }: ProgressBarProps) => {
  const safe = Number.isFinite(percentage) ? percentage : 0;
  const clamped = Math.max(0, Math.min(100, safe));

  return (
    <div className="p-4">
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(Math.max(0, Math.min(100, percentage)))}
        aria-label="Progress"
      >
        <div className="bg-gray-200 p-1 rounded-full w-48 h-4">
          <div className="rounded-full w-full h-full overflow-hidden">
            <div
              className="bg-green-500 rounded-full h-full transition-transform duration-300"
              style={{ transform: `translateX(-${100 - clamped}%)` }}
            />
          </div>
        </div>
      </div>
      <div className="sr-only">{Math.round(clamped)}%</div>
    </div>
  );
};

export default ProgressBar;
