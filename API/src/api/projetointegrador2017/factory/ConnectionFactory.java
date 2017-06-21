package api.projetointegrador2017.factory;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

/**
 * Classe responsável por conter os métodos de criar e fechar conexão com banco
 * @author Matheus Gambarin
 *
 */
public class ConnectionFactory {
	
	//Caminho Banco
	private static String  DRIVER = "org.postgresql.Driver";
	private static String  URL = "jdbc:postgresql://localhost:5432/ProjetoIntegrador";
	private static String  USUARIO = "postgres";
	private static String  SENHA = "projetointegrador";

	/**
	 * Método responsável por criar conexão com o banco
	 * @author Matheus Gambarin
	 * @return
	 */
	public Connection criarConexao(){
		Connection conexao = null;
		try{
			
			Class.forName(DRIVER);
			conexao = DriverManager.getConnection(URL, USUARIO, SENHA);
		} catch(Exception e){
			System.out.println("Erro ao criar conexão com o banco: " + URL);
			e.printStackTrace();
		}
		
		return conexao;
	}
}
