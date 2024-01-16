import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Profil() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  
}
