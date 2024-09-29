import { useNavigate } from "react-router";

export default function RouterBack() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/start")}>
      <span style={{ fontSize: "25px" }}>&#129136;</span>
    </button>
  );
}
