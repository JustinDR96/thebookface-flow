import React from 'react';
import Message from '../../components/message/Message';
import Footer from '../../components/footer/Footer';
import Profil from '../../components/profil/Profil';
import Navbar from '../../components/navbar/Navbar';

export default function Pages_about() {
  return (
    <div className="home_container">
      <div className="desktop-layout">
        <Profil />
        <div className="main_container">
          <div className="main_publication">
            <div>
              <h1>Publicité sur Flow - Connectons les Marques à Votre Créativité !</h1>

              <section>
                <h2>🌈 Créativité et Innovation</h2>
                <p>
                  Bienvenue dans l'univers publicitaire de Flow, où la créativité rencontre l'audace. Notre plateforme offre des opportunités uniques pour les marques de se connecter de manière authentique avec notre communauté dynamique. Découvrez comment Flow peut mettre en valeur votre marque et stimuler l'engagement de votre audience.
                </p>
              </section>

              <section>
                <h2>👥 Audience Engagée</h2>
                <p>
                  Connectez-vous avec une audience passionnée et engagée. Nos utilisateurs sont actifs, créatifs et ouverts aux expériences publicitaires qui s'intègrent harmonieusement dans leur flux de contenu. Découvrez comment votre marque peut devenir une partie intégrante de la conversation sur Flow.
                </p>
              </section>

              <section>
                <h2>💡 Solutions Publicitaires</h2>
                <p>
                  Explorez nos solutions publicitaires flexibles conçues pour répondre à vos objectifs marketing. Des publicités visuelles immersives aux collaborations avec des créateurs influents, nous offrons une gamme variée d'options publicitaires pour vous permettre d'atteindre votre public de manière pertinente et mémorable.
                </p>
              </section>

              <section>
                <h2>📊 Analyses et Résultats</h2>
                <p>
                  Mesurez l'impact de votre campagne publicitaire grâce à nos outils analytiques avancés. Obtenez des informations détaillées sur les performances de votre campagne, le comportement des utilisateurs et l'engagement, vous permettant d'optimiser vos stratégies publicitaires pour un succès continu.
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
      <div className="tablet-layout">
        <Navbar />
        <div className="main_publication">
          <div>
            <h1>Publicité sur Flow - Connectons les Marques à Votre Créativité !</h1>

            <section>
              <h2>🌈 Créativité et Innovation</h2>
              <p>
                Bienvenue dans l'univers publicitaire de Flow, où la créativité rencontre l'audace. Notre plateforme offre des opportunités uniques pour les marques de se connecter de manière authentique avec notre communauté dynamique. Découvrez comment Flow peut mettre en valeur votre marque et stimuler l'engagement de votre audience.
              </p>
            </section>

            <section>
              <h2>👥 Audience Engagée</h2>
              <p>
                Connectez-vous avec une audience passionnée et engagée. Nos utilisateurs sont actifs, créatifs et ouverts aux expériences publicitaires qui s'intègrent harmonieusement dans leur flux de contenu. Découvrez comment votre marque peut devenir une partie intégrante de la conversation sur Flow.
              </p>
            </section>

            <section>
              <h2>💡 Solutions Publicitaires</h2>
              <p>
                Explorez nos solutions publicitaires flexibles conçues pour répondre à vos objectifs marketing. Des publicités visuelles immersives aux collaborations avec des créateurs influents, nous offrons une gamme variée d'options publicitaires pour vous permettre d'atteindre votre public de manière pertinente et mémorable.
              </p>
            </section>

            <section>
              <h2>📊 Analyses et Résultats</h2>
              <p>
                Mesurez l'impact de votre campagne publicitaire grâce à nos outils analytiques avancés. Obtenez des informations détaillées sur les performances de votre campagne, le comportement des utilisateurs et l'engagement, vous permettant d'optimiser vos stratégies publicitaires pour un succès continu.
              </p>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
