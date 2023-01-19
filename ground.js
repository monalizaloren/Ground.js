// Para criar uma classe no javascript é preciso utiliza a palavra 'class' e logo após o nome da classe
// Crie a classe Ground na linha 4

????
{
  //Para definir características da classe, usamos o 'constructor', ele terá 'x,y,w,h' que corresponde a posição no eixo X, eixo Y, Width e Height
  //Complete o código na linha 8, usando 'constructor'
  ???(x, y, w, h) 
  {
    //Na linha 12, você precisa usar o código 'isStatic' como 'true', assim o chão ficará estático
    let options = {
      ???
    };
    
    //Na linha 20 está sendo criado um corpo para o solo usando a forma de retângulo e atribuímos isso a this.body.
   //Todas as variáveis da classe são referenciadas usando a palavra-chave 'this'.
   //Depois disso, iremos adicionar this.body ao mundo.
   //Utilize 'Bodies.rectangle' para criar um retângulo

    this.body = ???(x, y, w, h, options);
    this.w = w;
    this.h = h;
    //Utilize 'World.add' para adicionar o 'body' ao mundo.
    ??? (world, this.body);
  }

  
  // Para concluir o código acesse o link que a professora mandou no chat da plataforma.
