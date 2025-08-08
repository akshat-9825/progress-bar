interface ProgressBarProps {
  percentage: number;
}

const ProgressBar = ({ percentage }: ProgressBarProps) => {
  return (
    <div className="p-4">
      <div className="bg-gray-200 p-1 rounded-full w-48 h-4">
        <div className="rounded-full w-full h-full overflow-hidden">
          <div
            className="bg-green-500 rounded-full h-full transition-transform duration-300"
            style={{ transform: `translateX(-${100 - percentage}%)` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
