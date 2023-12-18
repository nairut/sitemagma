import React from "react";
import * as React from "react";
import { useEffect } from "react"; // Import useEffect
import { useState } from "react"; 
import { useMotionValue } from "framer-motion";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { HeroCaysa } from "../HeroCaysa/HeroCaysa";
import { ComponenteInferior } from "../ComponenteInferior/ComponenteInferior";
import { TraducoesBem } from "../TraducoesBem";
import { Menu } from "../../components/Menu";
import { MenuComponent } from "../../components/MenuComponent";
import { LogoCloud } from "../LogoCloud/LogoCloud";
import { LogoCloudDois } from "../LogoCloudDois";

import { VideoPlayer } from "../VideoPlayer";
import { Fraseentradaebot } from "../../components/Fraseentradaebot";
import { ImagemHeho } from "../../components/ImagemHeho";
import { PremioImages } from "../../components/PremioImages";
import { SegundaParte } from "../SegundaParte";
import { FaleComUm } from "../../components/FaleComUm";
import { ContatoRapido } from "../../components/ContatoRapido";
import { TerceiraHero } from "../TerceiraHero";
import "./style.css";
import { EstudoDeCaso } from "../../components/EstudoDeCaso";



export const QualidadeShopee = () => {







  const { scrollY } = useScroll()

  const scale = useTransform(scrollY, [5050, 5200], [1, 2]);

  const yShopee = useTransform(scrollY, [5050, 5300], [0, 570]);

  const xShopee = useTransform(scrollY, [5050, 5300], [0, -200]);



  return (
    <div className="qualidade-shopee">
      <div className="div-6">
        <div className="group-7">
          <div className="ellipse-10" />
        </div>
        <div className="turian-13">
          <div className="ellipse-11" />
        </div>
        <div className="frame-10">
          <div className="frame-11">
            <p className="text-wrapper-3">Projetos avaliados para uma máxima qualidade</p>
            <p className="somente-com-a-avalia">
              Somente com a avaliação contínua da qualidade conseguimos atingir o que há de mais avançado em tradução
              humana. <br />
              Na Magma, avaliamos cada projeto, cada tradutor, sempre.
            </p>
          </div>
          <div className="graphic-square">
            <div className="overlap-group-7">
              <div className="group-8">
                <img className="line" alt="Line" src="/img/line-4.png" />
                <div className="group-9" />
                <div className="rectangle" />
              </div>
              <img className="line-2" alt="Line" src="/img/line-11.png" />
              <div className="frame-12">
                <div className="frame-13">
                  <img className="ellipse-12" alt="Ellipse" src="/img/ellipse-5.png" />
                  <div className="frame-14">
                    <div className="text-wrapper-4">Xīn Yí</div>
                    <div className="text-wrapper-5">1,3 milhões de palavras</div>
                    <div className="text-wrapper-6">98,87%</div>
                  </div>
                </div>
              </div>
              <div className="frame-15">
                <div className="frame-16">
                  <img className="ellipse-12" alt="Ellipse" src="/img/ellipse-5-1.png" />
                  <div className="frame-17">
                    <div className="text-wrapper-4">Xīn Yí</div>
                    <div className="text-wrapper-5">1,9 milhões de palavras</div>
                    <div className="text-wrapper-6">98,56%</div>
                  </div>
                </div>
              </div>
              <div className="frame-18">
                <div className="frame-19">
                  <img className="ellipse-13" alt="Ellipse" src="/img/ellipse-5-2.png" />
                  <div className="frame-20">
                    <div className="text-wrapper-7">Tradução para Mandarim</div>
                    <div className="text-wrapper-8">Escolha de Tradutor</div>
                  </div>
                </div>
              </div>
              <div className="frame-21">
                <div className="frame-22">
                  <img className="img-3" alt="Ellipse" src="/img/ellipse-5-3.png" />
                  <div className="frame-23">
                    <div className="text-wrapper-9">Aplicação de&nbsp;&nbsp;Glossário</div>
                    <div className="text-wrapper-8">Escolha de Tradutor</div>
                  </div>
                </div>
              </div>
              <div className="frame-24">
                <div className="frame-25">
                  <img className="ellipse-14" alt="Ellipse" src="/img/ellipse-5-4.png" />
                  <div className="frame-23">
                    <div className="text-wrapper-10">Correção</div>
                    <div className="text-wrapper-8">Escolha de Proofreader</div>
                  </div>
                </div>
              </div>
              <div className="frame-26">
                <div className="frame-27">
                  <img className="img-3" alt="Ellipse" src="/img/ellipse-5-5.png" />
                  <div className="frame-23">
                    <div className="text-wrapper-11">Quality Assurance</div>
                    <div className="text-wrapper-8">Technologia Magma</div>
                  </div>
                </div>
              </div>
            </div>
            <img className="line-3" alt="Line" src="/img/line-6.png" />
            <img className="line-4" alt="Line" src="/img/line-12.png" />
            <img className="line-5" alt="Line" src="/img/line-13.png" />
            <img className="line-6" alt="Line" src="/img/line-12.png" />
            <img className="line-7" alt="Line" src="/img/line-10.png" />
            <div className="avalia-o-dos">Avaliação dos linguistas</div>

            <div className="frame-31">
              <div className="frame-32">
                <img className="ellipse-15" alt="Ellipse" src="/img/ellipse-5-6.png" />
                <div className="frame-33">
                  <div className="text-wrapper-12">Qualidade do Projeto</div>
                  <div className="text-wrapper-13">98,87%</div>
                </div>
              </div>
            </div>

            <motion.div         style={{ scale, y:yShopee, x: xShopee}}>
            <div className="frame-28">


              <div className="frame-29">
                <img className="img-3" alt="Shopee tw png" src="/img/shopee-tw-png-0.png" />




                <div className="frame-30">
                  <div className="text-wrapper-9">Projeto Shopee</div>
                  <div className="text-wrapper-8">30 milhões de palavras</div>
                </div>

              </div>

            </div>

            </motion.div>

          </div>
        </div>
        <EstudoDeCaso className="estudo-de-caso-instance" property1="default" />
      </div>
    </div>
  );
};
