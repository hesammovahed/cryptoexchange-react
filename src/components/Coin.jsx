import { Link } from "react-router-dom";

const Coin = ({ name, img, price, rank, volume, change, cap , id }) => {

  return (
    <Link to={id}>
      <div to="/" className="coin ">
        <ul>
          <li>{rank}</li>
          <li>
            <img src={img} alt="name_coin" />
            {name}
          </li>
          <li>${price}</li>
          <li style={change > 0 ? { color: "green" } : { color: "red" }}>
            {change.toFixed(2)}%
          </li>
          <li>${volume.toLocaleString()}</li>
          <li>${cap.toLocaleString()}</li>
        </ul>
      </div>
    </Link>
  );
};

export default Coin;
