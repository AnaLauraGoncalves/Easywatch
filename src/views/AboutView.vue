<template>
  <div id="aboutview" class="about">
    <h1>About Easywatch</h1>
    <hr>
    <p> Easywatch é site informativo sobre o Linux e suas distribuições, que visa apresentar esse sistema operacional de 
      forma simples e intuitiva. Foi criado objetivando a divulgação e simplificação do entendimento a respeito do Linux e suas distribuições.</p>
      <p>De forma geral, é um software em que o usuário pode buscar informações sobre o Linux e suas distros de forma simples e intuitiva através de 
      mecanismos de busca inteligentes. Possui também: um ranking atualizado de distros mais usadas e a disposição de conteúdo de fácil acesso para qualquer tipo 
      de usuário (iniciante, intermediário ou avançado). </p>
      <p>
        Para além disso, o utilizador pode receber auxílio na escolha de uma distribuição que mais atenda às suas necessidades por meio de um quiz 
        que retorna o nível de compatibilidade com cada sistema. Pensando no suporte para troca de SO, foi implementada uma página de busca para softwares 
        alternativos a qual indica programas que trabalhem com a mesma função daquele pesquisado, já que alguns programas proprietários não possuem versão 
        para Linux. 
      </p>

    <br />
    <p>
      Esse projeto foi desenvolvido como um Trabalho de Conclusão de Curso (TCC) do curso de informática do CEFET-MG campus XI.
    </p>
  </div>
  <div class="about-devs">
    <p>
      <b>Desenvolvedores:</b>
      <br />
      Ana Laura Gonçalves
      <br />
      Jonatam Cordeiro da Silva Júnior
      <br />
      Luisa Eduarda Tibúrcio 
      <br />
      <br />
      Prof. Ms. Juliana Padilha
    </p>
</div>
  
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 4rem;
    margin: 20px;
  }

  .about-devs {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
  }

  #aboutview h1{
  color: white;
  font-style: normal;
  font-size: 40px;
  }
  
 p,
 .about-devs
 .aboutview{
    color: white;
  }


}
</style>
