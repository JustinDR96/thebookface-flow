import React, { useState } from "react";
import "./Pages_login.scss"; // Assurez-vous d'importer le fichier Sass
import { useNavigate } from "react-router-dom";

export default function Pages_login() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordValid = () => {
    return password.length >= 9;
  };

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    console.log("handleLogin called");
    event.preventDefault();

    fetch("http://localhost:5025/api/Account/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserName: userName,
        Password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // Vérifiez si un token est présent dans la réponse
        navigate("/home");
        if (data.token) {
          // Si la connexion réussit, redirigez vers /home
        } else {
          // Gérez l'échec de la connexion ici, par exemple en affichant un message d'erreur
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
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

    handleCloseModal();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch("http://localhost:5025/api/Account/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: email,
        UserName: userName,
        FirstName: firstName,
        LastName: lastName,
        Password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Gérer la réponse du serveur ici
      })
      .catch((error) => {
        console.error("Erreur:", error);
      });
  };
  return (
    <div className="login-container">
      <img src="/image/logo_flow_3.png" alt="" className="logo-flow-login" />
      <div className="login-box">
        <h1>Login</h1>
        <div className="login-form">
          <label>
            Username:
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
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
            <h2>Créer un nouveau compte</h2>
            <form onSubmit={handleSubmit}>
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
                UserName:
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
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
              <button type="button" onClick={handleSubmit}>
                Créer un compte
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
