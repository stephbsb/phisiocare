import React from "react";

import "./ModalContent.css";

const ModalContent = (props) => {
  if (props.id === "modal1") {
    return (
      <div className="modal-content">
        <h4>Osteopatia</h4>
        <p>
          A OSTEOPATIA é um método de avaliação e tratamento que tem como
          premissa o EQUILÍBRIO CORPORAL, utilizando técnicas manuais sobre os
          tecidos moles, articulações, vísceras, crânio, fáscias, etc, para
          melhorar a funcionalidade corporal e diminuir as queixas dos
          pacientes.{" "}
        </p>

        <h5>Indicação:</h5>
        <ul>
          <li>Dores na coluna</li>
          <li>Dores nas articulações</li>
          <li>Hérnias discais</li>
          <li>Sinusites</li>
          <li>Enxaquecas</li>
          <li>Gastrites</li>
          <li>Outros</li>
        </ul>
      </div>
    );
  }

  if (props.id === "modal2") {
    return (
      <div className="modal-content">
        <h4>Pilates</h4>
        <p>
          O PILATES é um método de tratamento e exercício que quando criado era
          chamado de “contrologia”, o controle do seu corpo pela sua mente. Nele
          o foco é realizar exercícios com precisão, controle, coordenação e
          fluidez e para isso é necessário estar bem concentrado na prática e na
          respiração para conseguir oxigenar bem os tecidos e obter um melhor
          funcionamento do corpo.
        </p>
        <h5>Indicação:</h5>
        <ul>
          <li>Dores na coluna</li>
          <li>Dores nas articulações</li>
          <li>Fibromiálgia</li>
          <li>Pessoas com doenças auto imunes</li>
          <li>Outros</li>
        </ul>
      </div>
    );
  }

  if (props.id === "modal3") {
    return (
      <div className="modal-content">
        <h4>Método McKenzie</h4>
        <p>
          O método McKenzie é um sistema de avaliação, diagnóstico, tratamento e
          prevenção das dores na coluna vertebral e extremidades. A técnica foca
          no auto cuidado ativo. O tratamento consiste no uso de movimentos
          repetidos específicos para uma restauração de uma mecânica articular
          saudável e livres de dores.{" "}
        </p>
      </div>
    );
  }

  if (props.id === "modal4") {
    return (
      <div className="modal-content">
        <h4>RPG</h4>
        <p>
          A Reeducação postural global comumente conhecida como RPG, é uma
          técnica manual que consiste em estiramento de tecidos musculares
          retraídos, para uma reorganização celular, ganho de mobilidade e
          consequente ajustamento da postura. O tratamento é feito através da
          manutenção de posturas estáticas com o objetivo de atuar no conjunto
          das cadeias musculares, alongando os músculos estáticos e contraindo
          os dinâmicos. A técnica pode ser indicada tanto para pessoas saudáveis
          que buscam a melhora da sua postura quanto de pessoas com dores.
        </p>
      </div>
    );
  }

  if (props.id === "modal5") {
    return (
      <div className="modal-content">
        <h4>Liberação Miofascial</h4>
        <p>
          A liberação miofascial é uma técnica de terapia manual que utiliza
          alguns recursos e força manual para manipular o complexo miofascial
          com o objetivo de diminuir a dor e melhorar a função. Esta técnica
          produz um aumento da perfusão sanguínea local e da excitabilidade
          corticoespinal, levando a uma melhora no deslizamento fascial. Seus
          benefícios vão desde uma liberação de tensões e dores musculares
          crônica até a redução da rigidez arterial e melhora da função
          vascular.
        </p>
      </div>
    );
  }

  return (
    <div className="modal-content">
      <p>Texto não disponível</p>;
    </div>
  );
};

export default ModalContent;
