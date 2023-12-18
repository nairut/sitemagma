import React from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import "./style.css";

export const LogoCloudDois = () => {

  const { scrollY } = useScroll()

  const yNunca = useTransform(scrollY, [6112, 6727], [0, 520]);


  const yLogosSuperiores = useTransform(scrollY, [6000, 7000], [-50, -100]);



  const yLogosDoMeio = useTransform(scrollY, [6300, 7300], [0, -500]);

  const  yLogosQuaseEmBaixo = useTransform(scrollY, [6300, 7300], [0, -250]);



  const  yLogosEmBaixo = useTransform(scrollY, [6900, 8300], [200, -600]);


  return (
    <div className="logo-clouddois">
      <div className="div">

      <motion.div         style={{ y:yLogosEmBaixo}}>

      <div className="imagens-de-baixo">
          <img className="element" alt="Element" src="/img/21304097.png" />
          <img
            className="element-design-de"
            alt="Element design de"
            src="/img/21304096-design-de-icone-de-de-arquivo-html-gratis-vetor.png"
          />
          <img
            className="tiff-file-document"
            alt="Tiff file document"
            src="/img/tiff-file-document-icon-vector-24675841.png"
          />
          <img className="images" alt="Images" src="/img/images-3-1.png" />
          <img className="image" alt="Image" src="/img/image-19.png" />
          <img className="img" alt="Image" src="/img/image-25.png" />
          <img className="image-2" alt="Image" src="/img/image-29.png" />
        </div>
</motion.div>









        <div className="overlap">



        


          <motion.div         style={{ y:yLogosQuaseEmBaixo}}>


          <img className="imagens-quase-em" alt="Imagens quase em" src="/img/imagensquaseembaixo.png" />
         </motion.div>


 

          <motion.div         style={{ y:yLogosDoMeio}}>
          <div className="imagens-do-meio">
            <img className="traducao-de-psd" alt="Traducao de psd" src="/img/traducao-de-psd.png" />
            <img className="adobe-swf-icon" alt="Adobe swf icon" src="/img/adobe-swf-icon.png" />
            <img className="element-2" alt="Element" src="/img/29495.png" />
            <img className="i" alt="I" src="/img/i-441547.png" />
            <img className="element-3" alt="Element" src="/img/115692-200.png" />
            <img
              className="png-clipart-computer"
              alt="Png clipart computer"
              src="/img/png-clipart-computer-icons-music-mp3-mp3-text-logo.png"
            />
            <img className="image-3" alt="Image" src="/img/image-31.png" />
            <img className="image-4" alt="Image" src="/img/image-20.png" />
          </div>
         </motion.div>





          <p className="text-wrapper">
            Todos os arquivos que você enviar serão traduzidos. Nossas tecnologias de manipulação de arquivos se
            estendem desde um simples PDF até um arquivo complexo, como um modelo 3D altamente detalhado.
          </p>
        </div>




        <motion.div         style={{ y:yNunca}}                >

          
        <div className="Nunca">
            <div className="hero-text-tradu">
              <p className="p">Nunca Tantos arquivos foram Traduzidos</p>
            </div>
          </div>
 
          </motion.div>



          <motion.div         style={{ y:yLogosSuperiores}}>
          <div className="overlap-group">
        </div>
         </motion.div>

  




      </div>
    </div>
  );
};
