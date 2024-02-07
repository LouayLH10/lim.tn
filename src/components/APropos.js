import React, { useState, useRef, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
function Propos() {
  const [isVisible, setIsVisible] = useState(false);
  const aproposRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // 0.5 signifie que l'élément devient visible dès qu'au moins 50% de celui-ci est visible à l'écran
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Une fois que l'élément est visible, on n'a plus besoin de l'observer
        }
      });
    }, options);

    if (aproposRef.current) {
      observer.observe(aproposRef.current);
    }

    // Nettoyage de l'observer lorsque le composant est démonté
    return () => {
      if (aproposRef.current) {
        observer.unobserve(aproposRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && window.innerWidth > 950) {
      const lstes = document.querySelectorAll(".lste li");
      lstes.forEach(li => {
        li.setAttribute("style", "animation: deplacer 2s;");
      });
    }
  }, [isVisible]);

  return (
    <div className="Apropos" ref={aproposRef}>
<h1 className='Titre'>A Propos</h1>
<p className='prp'>La société de Maintenance Industriels et Construction Métallique « Louay Industrie et Maintenance », est une S.A.R.L, créé en 2005, représentée par son Gérant Monsieur Samir Hcine.
L.I.M vous propose des services de Maintenance Industrielle dans toute la Tunisie et à l'étranger.
Nous avons l'honneur de vous présenter notre entreprise pour vous permettre d'avoir une appréciation des moyens humaines ,matériels ,techniques et financiers de manière à vous rendre compte de notre capacité à faire face à toute sorte de commandes se rapportant à notre secteur d'activité:
</p>
<ul className='lste' >
  <li>Fabrication et montage charpente</li>
  <li>Travaux mécanique industrielle</li>
  <li>Fabrication et montage réservoir</li>
  <li>Travaux tuyauterie</li>
</ul>



    </div>
  );
}

export default Propos;
