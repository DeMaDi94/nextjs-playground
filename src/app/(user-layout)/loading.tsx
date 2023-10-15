import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

const loading = () => {
  return (
    <div className="flex justify-center h-96">
      <div className="grid content-center h-full">
        <LoadingSpinner />
      </div>
    </div>
  );
};

export default loading;
