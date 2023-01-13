package sobreposicao_de_metodos;

public class LivroTerror implements Livro {

  @Override
  public void ler() {
    System.out.println("Lendo Terror...");

  }

  @Override
  public void vender() {
    System.out.println("Vendendo Terror...");

  }

}
