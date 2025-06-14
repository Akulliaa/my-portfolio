import React from 'react';
import '../styles/CVDownload.scss';
import { useTranslation } from 'react-i18next';
import cvEN from '../assets/lou_fugier_en.pdf';
import cvFR from '../assets/lou_fugier_fr.pdf';

const CVDownload = () => {
  const { i18n } = useTranslation();
  const isFrench = i18n.language === 'fr';
  const cvFile = isFrench ? cvFR : cvEN;

  return (
    <div className="cv-download">
      <a href={cvFile} download className="cv-download__button">
        {isFrench ? 'Télécharger mon CV' : 'Download My resume'}
      </a>
    </div>
  );
};

export default CVDownload;