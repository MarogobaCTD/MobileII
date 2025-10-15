import React from 'react';

import api from '../../services/api';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import linkedinIcon from '../../assets/images/icons/logo-linkedin.svg';
import instagramIcon from '../../assets/images/icons/logo-instagram.svg';
import tiktokIcon from '../../assets/images/icons/logo-tiktok.svg';
import youtubeIcon from '../../assets/images/icons/logo-youtube.svg';
import linkxIcon from '../../assets/images/icons/logo-linkx.svg';

import './styles.css';

export interface Coach {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
  linkedIn: string;
  instagram: string;
  tiktok: string;
  youtube: string;
  linkX: string;
}

interface CoachItemProps {
  coach: Coach;
}

const CoachItem: React.FC<CoachItemProps> = ({ coach }) => {
  function createNewConnection() {
    api.post('connections', {
      coach_id: coach.id,
    });
  }

  return (
    <article className="coach-item">
      <header>
        <img src={coach.avatar} alt={coach.name} />
        <div>
          <strong>{coach.name}
             {coach.linkedIn && 
               ( <a
                    target="_blank"
                    rel="noreferrer"
                    onClick={createNewConnection}
                    href={coach.linkedIn}
                  >
                    <img src={linkedinIcon} alt="linkedin" />
                  </a>
                )}
              {coach.instagram && 
               ( <a
                    target="_blank"
                    rel="noreferrer"
                    onClick={createNewConnection}
                    href={coach.instagram}
                  >
                    <img src={instagramIcon} alt="linkedin" />
                  </a>
                )}
               {coach.tiktok && 
               ( <a
                    target="_blank"
                    rel="noreferrer"
                    onClick={createNewConnection}
                    href={coach.tiktok}
                  >
                    <img src={tiktokIcon} alt="linkedin" />
                  </a>
                )}
                {coach.youtube && 
                ( <a
                    target="_blank"
                    rel="noreferrer"
                    onClick={createNewConnection}
                    href={coach.youtube}
                  >
                    <img src={youtubeIcon} alt="linkedin" />
                  </a>
                )}
                {coach.linkX && 
                ( <a
                    target="_blank"
                    rel="noreferrer"
                    onClick={createNewConnection}
                    href={coach.linkX}
                  >
                    <img src={linkxIcon} alt="linkedin" />
                  </a>
                )}
          </strong>
          <span>{coach.subject}</span>
        </div>
      </header>

      <p>{coach.bio}</p>

      <footer>
        <p>Preço/Hora
          <strong>R$ {coach.cost}</strong>
        </p>

        <a
          target="_blank" 
          rel="noreferrer"
          onClick={createNewConnection} 
          href={`https://wa.me/${coach.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default CoachItem;