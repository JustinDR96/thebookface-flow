import React from 'react';
import Message from '../../components/message/Message';
import Footer from '../../components/footer/Footer';
import Profil from '../../components/profil/Profil';

export default function Pages_about() {
  return (
    <div className="home_container">
      <div className="desktop-layout">
        <Profil />
        <div className="main_container">
          <div className="main_publication">
            <div>
              <h1>Bienvenue sur Flow !</h1>
              <section>
                <h2>🌐 Accessibilité pour Tous</h2>
                <p>
                  Chez Flow, nous croyons en une communauté inclusive où chacun a la possibilité de se connecter, partager et s'exprimer. Notre engagement envers l'accessibilité guide notre démarche pour rendre notre plateforme accessible à tous, indépendamment des différences.
                </p>
              </section>

              <section>
                <h2>👥 Diversité et Inclusion</h2>
                <p>
                  Rejoignez une communauté dynamique qui célèbre la diversité sous toutes ses formes. Nous valorisons chaque voix et croyons en la puissance de la variété des perspectives. Que vous soyez ici pour partager votre passion, établir des connexions ou simplement explorer, Flow est un espace accueillant pour tous.
                </p>
              </section>

              <section>
                <h2>🌈 Fonctionnalités Accessibles</h2>
                <p>
                  Notre équipe s'efforce constamment d'intégrer des fonctionnalités accessibles pour garantir une expérience fluide. De la navigation simplifiée à l'optimisation de l'interface pour les technologies d'assistance, nous nous engageons à rendre Flow accessible à tous les utilisateurs.
                </p>
              </section>

              <section>
                <h2>🤝 Engagement Continu</h2>
                <p>
                  Nous travaillons sans relâche pour améliorer notre plateforme en fonction des retours de notre communauté. Vos commentaires sont cruciaux pour nous aider à identifier les domaines d'amélioration et à renforcer notre engagement envers l'accessibilité.
                </p>
              </section>
            </div>
          </div>
          <div className="message_footer">
            <Message />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
