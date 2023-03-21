const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(15)
        .fill(" ")
        .map((e, index) => (
          <div key={index} className="shimmer-card">
            <span className="shine"></span>
            <div className="lines">
              <div className="shine line"></div>
              <div className="shine line"></div>
              <div className="shine line"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
