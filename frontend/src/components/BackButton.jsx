// src/components/BackButton.jsx
import { useNavigate } from 'react-router-dom';
import './BackButton.css';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button className="back-button" onClick={() => navigate(-1)}>
      ⬅️ Back
    </button>
  );
};

export default BackButton;
