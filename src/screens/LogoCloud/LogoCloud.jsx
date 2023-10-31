import React, { useEffect, useState } from "react";
import "./style.css";

export const LogoCloud = () => {
  const [scrollY, setScrollY] = useState(0); // Initialize scrollY at 0 pixels
  const [docxScrollY, setDocxScrollY] = useState(0); // Initialize docxScrollY at 0 pixels
  const maxScroll = 610; // Maximum scroll position for the text-wrapper
  const docxMaxScroll = 90; // Maximum scroll position for the docx icon
  const maxTranslateY = 1000; // Maximum vertical translation for the text-wrapper
  const docxMaxTranslateY = 410; // Maximum vertical translation for the docx icon
  const maxScale = 1;
  const minScale = 1;




  // Define a new state variable to track the scroll position for the image container
const [imageContainerScrollY, setImageContainerScrollY] = useState(0);

// Define a maximum scroll position for the image container (adjust as needed)
const imageContainerMaxScroll = 200;






  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY - 4800; // Adjust the starting point as needed
      const clampedScrollY = Math.max(0, Math.min(newScrollY, maxScroll));
      setScrollY(clampedScrollY);
    };

    const handleDocxScroll = () => {
      const newDocxScrollY = window.scrollY - 4600; // Adjust the starting point as needed
      const clampedDocxScrollY = Math.max(0, Math.min(newDocxScrollY, docxMaxScroll));
      setDocxScrollY(clampedDocxScrollY);
    };


    const handleImageContainerScroll = () => {
      const newImageContainerScrollY = window.scrollY - 5550; // Adjust the starting point as needed
      const clampedImageContainerScrollY = Math.max(0, Math.min(newImageContainerScrollY, imageContainerMaxScroll));
      setImageContainerScrollY(clampedImageContainerScrollY);
    };



    window.addEventListener("scroll", handleImageContainerScroll);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleDocxScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleDocxScroll);
      window.removeEventListener("scroll", handleImageContainerScroll);
    };
  }, []);

  const scale = Math.max(
    minScale,
    maxScale - (scrollY / maxTranslateY) * (maxScale - minScale)
  );

  const translateY = Math.min(maxTranslateY, scrollY);

  const docxScale = Math.max(
    minScale,
    maxScale - (docxScrollY / docxMaxTranslateY) * (maxScale - minScale)
  );

  const docxTranslateY = Math.min(docxMaxTranslateY, docxScrollY);


  const docxContainerTranslateY = Math.min(docxMaxTranslateY, docxScrollY);



  const imageContainerTranslateY = Math.min(imageContainerMaxScroll, imageContainerScrollY);

  return (
    <div className="logo-cloud">
      <div className="div">

      <div
        className="text-wrapper"
        style={{
          transform: `scale(${scale}) translateY(${translateY}px)`,
        }}  
      >
   <div className="quadrado">
        <p > Nunca Tantos arquivos foram Traduzidos</p>
        </div>
      </div>



          <div className="imagens"

          style={{
            transform: `scale(${docxScale}) translateY(${docxTranslateY}px)`,
          }}
        >




        <img className="traducao-de-txt" alt="Traducao de txt" src="/img/traducao-de-txt.png" />
        <img className="image-3" alt="Image" src="/img/image-33.png" />
        <img className="image-6" alt="Image" src="/img/image-32.png" />
        <img className="download" alt="Download" src="/img/download.png" />
        <img className="traducao-de-cvs" alt="Traducao de cvs" src="/img/traducao-de-cvs.png" />
        <img className="traducao-de" alt="Traducao de" src="/img/traducao-de-powerpoint.png" />
        <img className="traducao-de-sql" alt="Traducao de sql" src="/img/traducao-de-sql.png" />
        <img className="traducao-de-excel" alt="Traducao de excel" src="/img/traducao-de-excel.png" />
        <img className="traducao" alt="Traducao" src="/img/traducao-ad0be0indesign.png" />
        <img className="traducao-adobe" alt="Traducao adobe" src="/img/traducao-adobe-ilustrator.png" />
        <img className="traducao-de-c" alt="Traducao de c" src="/img/traducao-de-c.png" />
        <img className="tipos-de-arquivos" alt="Tipos de arquivos" src="/img/tipos-de-arquivos-12.png" />
        <img className="img" alt="Element" src="/img/29495.png" />
        <img className="element-2" alt="Element" src="/img/115692-200.png" />
        <img className="image-2" alt="Image" src="/img/image-31.png" />
        <img className="element-java" alt="Element java" src="/img/1200px-java-programming-language-logo.png" />
        <img className="traducao-de-python" alt="Traducao de python" src="/img/traducao-de-python.png" />
        <img className="image-7" alt="Image" src="/img/image-24.png" />
      


        </div>

        <img className="docx-icon" alt="Docx icon"  src="/img/docx-icon.png"/>
        <img className="PDF-file-icon" alt="Pdf file icon" src="/img/pdf-file-icon.png" />

        <div className="imagenssegundas"
        
        
        style={{
          transform: `translateY(${imageContainerTranslateY}px)`,
        }}
        >


<img className="png-clipart-computer" alt="Png clipart computer" src="/img/png-clipart-computer-icons-music-mp3-mp3-text-logo.png"/>

        <img className="element" alt="Element" src="/img/21304097.png" />
        <img className="element-design-de" alt="Element design de"src="/img/21304096-design-de-icone-de-de-arquivo-html-gratis-vetor.png"/>
        <img className="images" alt="Images" src="/img/images.png" />





        <img className="image-4" alt="Image" src="/img/image-19.png" />
        <img className="traducao-de-psd" alt="Traducao de psd" src="/img/traducao-de-psd.png" />


        <img className="adobe-swf-icon" alt="Adobe swf icon" src="/img/adobe-swf-icon.png" />

        <img className="i" alt="I" src="/img/i-441547.png" />

        <img className="apps-top" alt="Apps top" src="/img/apps-top-1-ex9jvxybnhm6-large.png" />


        <div className="overlap-group">
          <img className="wordpress-logotype" alt="Wordpress logotype" src="/img/wordpress-logotype-alternative.png" />
          <img className="image" alt="Image" src="/img/image-20.png" />
        </div>
        <img
          className="tiff-file-document"
          alt="Tiff file document"
          src="/img/tiff-file-document-icon-vector-24675841.png"
        />
        <img className="download-2" alt="Download" src="/img/download-1-1.png" />
        <img className="images-2" alt="Images" src="/img/images-3-1.png" />

        <img className="image-5" alt="Image" src="/img/image-21.png" />

   
        <img className="image-8" alt="Image" src="/img/image-25.png" />
        <img className="image-9" alt="Image" src="/img/image-26.png" />
        <img className="image-10" alt="Image" src="/img/image-27.png" />
        <img className="image-11" alt="Image" src="/img/image-29.png" />
        <img className="image-12" alt="Image" src="/img/image-30.png" />
        </div>



        <p className="segundafrase">
          Todos os arquivos que você enviar serão traduzidos. Nossas tecnologias de manipulação de arquivos se estendem
          desde um simples PDF até um arquivo complexo, como um modelo 3D altamente detalhado.
        </p>
      </div>
    </div>
  );
};
