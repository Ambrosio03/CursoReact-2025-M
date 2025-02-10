

const ReviewItem = ({ texto, calificacion, movieTitle }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-white">
      <h3 className="text-lg font-semibold">{movieTitle}</h3>
      <p className="text-gray-300 mt-2">{texto}</p>
      <p className="mt-2 font-bold">Calificación: {calificacion} ⭐</p>
    </div>
  );
};

export default ReviewItem;
