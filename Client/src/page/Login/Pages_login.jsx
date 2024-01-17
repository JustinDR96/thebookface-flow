import React, { useState } from "react";
import "./Pages_login.scss"; // Assurez-vous d'importer le fichier Sass

export default function Pages_login() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const ageOptions = Array.from({ length: 100 }, (_, index) =>
    String(index + 1)
  ); // Créer un tableau d'âges de 1 à 100

  const isPasswordValid = () => {
    return password.length >= 9;
  };

  const handleLogin = () => {
    // Ajoutez ici la logique pour la connexion
    console.log("Se connecter avec les données:", { email, password });
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length > 0 && e.target.value.length < 9) {
      setPasswordError("Le mot de passe doit avoir au moins 9 caractères.");
    } else {
      setPasswordError("");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCreateAccount = () => {
    if (!isPasswordValid()) {
      console.log("Le mot de passe doit avoir au moins 9 caractères.");
      return;
    }

    console.log("Création du compte avec les données:", {
      email,
      firstName,
      lastName,
      password,
      selectedAge,
    });
    handleCloseModal();
  };

  return (
    <div className="login-container">
      <img src="/image/logo_flow_3.png" alt="" className="logo-flow-login" />
      <div className="login-box">
        <h1 className="login_flow" >Se connecter à Flow</h1>
        <div className="login-form">
          <label>
            Adresse e-mail:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Mot de passe:
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              minLength="9"
            />
            <span className="password-toggle" onClick={toggleShowPassword}>
              {showPassword ? "Cacher" : "Afficher"}
            </span>
          </label>
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
          <button onClick={handleLogin}>Se connecter</button>
          <button onClick={handleOpenModal}>Créer un nouveau compte</button>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="login_flow" >Créer un nouveau compte</h2>
            <form>
              <span className="close-icon" onClick={handleCloseModal}>
                &times;
              </span>
              <label>
                Adresse e-mail:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                Prénom:
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
              <label>
                Nom de famille:
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
              <label>
                Mot de passe (minimum 9 caractères):
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  minLength="9"
                />
                <span className="password-toggle" onClick={toggleShowPassword}>
                  {showPassword ? "Cacher" : "Afficher"}
                </span>
              </label>
              {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
              <label>
                Âge:
                <select
                  value={selectedAge}
                  onChange={(e) => setSelectedAge(e.target.value)}
                >
                  <option value="">Sélectionnez votre âge</option>
                  {ageOptions.map((age) => (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  ))}
                </select>
              </label>
              <button type="button" onClick={handleCreateAccount}>
                Créer un compte
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
