const avanca=document.querySelectorAll('.btn-proximo')
const reiniciarbtn=document.getElementById('btn-reiniciar')


avanca.forEach(button=>){
  button.addEventListener('click', function (){
    const atual=document.querySelector('.ativo');
  const proximopasso='passo-'+this.getAtribute('data-proxima');
  
atual.classList.remove('ativo');
const proximoelemento=document.getElementById(proximopasso);

if(proximoelemento){
 proximoselemento.classList.add('ativo');
} else{


})

}