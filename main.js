const botoes=document.querySelectorAll("botao");
const textos=document.querySelectorAll(".aba-conteudo");
 for (let i=0;i<botoes.length;i++){
botoes[i].onclick = function(){
for (let j=0;j<botoes.length;j++){
botoes[j].classList.remove("ativo");
textos[j].classList.remove("ativo");
}
botoes[i].classList.add("ativo");
textos[i].classList.add("ativo");
}
}
  const tempoOnjetivo1 = const name = new Date("2023-10-05T00:00:00");
  const tempoOnjetivo2 = new Date("2023-12-05T00:00.00");
  const tempoOnjetivo3 = new Date("2023-12-01T00:00.00");
  const tempoOnjetivo4 = new Date("2024-02-01T00:00.00");
  const tempos = [tempoOnjetivo1, tempoOnjetivo2, tempoOnjetivo3, tempoOnjetivo4];