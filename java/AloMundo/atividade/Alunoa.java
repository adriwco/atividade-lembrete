public class Alunoa {
  public static void main(String[] args) {
    Aluno aluno = new Aluno("Adriano", "Weverton", 21);
    aluno.setIdade(67);
    System.out.println(aluno.getNome() + " " + aluno.getSobrenome() + ", " + aluno.getIdade());
  }
}
