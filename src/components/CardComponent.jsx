export function CardComponent({
  img,
  headingText,
  bodyText,
  cost,
  discount,
  rating,
}) {
  return (
    <div className="card">
      <div className="image">
        <img src={img} alt={headingText} />
        {discount ? <div className="discount">{discount}</div> : null}
        {rating ? <div className="rating">⭐ {rating}</div> : null}
      </div>
      <div className="card-heading">
        <h4>{headingText}</h4>
      </div>
      <div className="card-text">{bodyText}</div>
      <div className="cost">{cost}</div>
    </div>
  );
}
