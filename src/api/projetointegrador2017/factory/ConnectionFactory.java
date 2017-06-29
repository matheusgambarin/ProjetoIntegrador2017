package api.projetointegrador2017.factory;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 * Classe responsável por conter os métodos de criar e fechar conexão com banco
 * 
 * @author Matheus Gambarin
 *
 */
public class ConnectionFactory {
	private static EntityManager entityManager;

	/**
	 * Método responsável por criar conexão com o banco
	 * 
	 * @author Matheus Gambarin
	 * @return
	 */

	public static EntityManager getEntityManager() {
		EntityManagerFactory factory = Persistence.createEntityManagerFactory("ProjetoIntegrador");
		if (entityManager == null) {
			entityManager = factory.createEntityManager();
		}

		return entityManager;
	}

	/**
	 * @author Matheus Gambarin
	 * 
	 * 		Método responsável por fechar conexão com o banco
	 */
	public static void fecharConexao() {
		if (entityManager != null) {
			entityManager.close();
		}
	}
}
