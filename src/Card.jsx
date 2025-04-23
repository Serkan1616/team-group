function Card({ name, image, job, color }) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="relative font-sora overflow-hidden "
    >
      <img className="w-full h-full sm:h-full" src={image} alt="" />
      <div className="absolute bottom-4 left-4 text-white text-sm sm:text-base">
        <h1 className="font-bold">{name}</h1>
        <span className="text-xs sm:text-sm">{job}</span>
      </div>
    </div>
  );
}
export default Card;
