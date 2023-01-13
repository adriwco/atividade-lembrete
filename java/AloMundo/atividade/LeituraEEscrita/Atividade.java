package LeituraEEscrita;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

public class Atividade {
  public static void main(String[] args) {
    java.sql.Statement st = null;
    ResultSet rs = null;
    try (Connection conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "system", "admin")) {
      if (conn != null) {
        System.out.println("Conexao realizada com sucesso.");
        String query = "SELECT * FROM alunos";
        st = conn.createStatement();
        rs = st.executeQuery(query);
        while (rs.next()) {
          System.out.println("\nRegistro");
          System.out.println("id: " + rs.getString(1));
          System.out.println("nome: " + rs.getString(2));
        }
        rs.close();
        st.close();
        conn.close();

      } else {
        System.out.println("Falha na conexao.");
      }
    } catch (SQLException e) {
      System.err.format("SQL State: %s\n%s", e.getSQLState(), e.getMessage());
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
