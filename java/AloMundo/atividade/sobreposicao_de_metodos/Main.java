package sobreposicao_de_metodos;

public class Main {
  public static void main(String[] args) {
    // Livro livroAventura = new LivroTerror();
    // livroAventura.ler();
    // livroAventura.vender();
    LivroAbstrato livro = new LivroRomance();
    livro.ler();
  }
}
