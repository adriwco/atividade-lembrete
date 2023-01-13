package sobreposicao_de_metodos;

public class LivroAventura implements Livro {

  @Override
  public void ler() {
    System.out.println("Lendo Aventura...");

  }

  @Override
  public void vender() {
    System.out.println("Vendendo Aventura...");

  }

}