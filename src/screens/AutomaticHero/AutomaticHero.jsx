import React from "react";
import "./style.css";

export const AutomaticHero = () => {
  return (
    <div className="automatic-hero">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <img className="vector" alt="Vector" src="/img/vector.svg" />
            <p className="text-wrapper">
              Antes de mergulharmos nos pormenores, conte-nos um pouco sobre o seu projeto.
            </p>
            <div className="group">
              <div className="div">
                <p className="p">Sobre o que é seu conteúdo?</p>
                <div className="text-wrapper-2">Traduza para</div>
                <div className="text-wrapper-3">Upload de Arquivos</div>
                <div className="div-muiinputbase">
                  <div className="overlap-group-2">
                    <button className="button">
                      <div className="text-wrapper-4">Escolha na lista</div>
                    </button>
                    <img className="frame" alt="Frame" src="/img/frame.svg" />
                  </div>
                </div>
                <div className="text-wrapper-5">Traduza de</div>
                <button className="button-2">
                  <div className="text-wrapper-6">Selecione</div>
                  <img className="img" alt="Frame" src="/img/frame-1.svg" />
                </button>
                <button className="button-3">
                  <div className="text-wrapper-7">Selecione</div>
                  <img className="img" alt="Frame" src="/img/frame-2.svg" />
                </button>
                <button className="button-4">
                  <div className="text-wrapper-8">Clique para buscar</div>
                  <img className="img" alt="Frame" src="/img/frame-3.svg" />
                </button>
              </div>
            </div>
            <div className="group-2">
              <div className="div-sc-nakpo" />
              <div className="div-sc-nakpo-2" />
              <div className="div-sc-nakpo-3" />
            </div>
          </div>
          <p className="frase-hero">
            <span className="span">Plataforma de Tradução </span>
            <span className="text-wrapper-9">Online</span>
          </p>
          <div className="div-sc-kwmekh">
            <div className="button-5">
              <div className="text-wrapper-10">Mostrar Preços</div>
              <div className="text-wrapper-11">⟶</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
