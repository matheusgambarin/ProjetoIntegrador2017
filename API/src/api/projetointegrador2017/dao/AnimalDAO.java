package api.projetointegrador2017.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import api.projetointegrador2017.factory.ConnectionFactory;
import api.projetointegrador2017.model.Animal;

/**
 * Classe responsável por conter os metodos do CRUD
 * 
 * @author Matheus Gambarin
 *
 */
public class AnimalDAO extends ConnectionFactory {

	private static AnimalDAO instance;

	/**
	 * Método responsavel por criar uma instancia
	 * 
	 * @author Matheus Gambarin
	 * @return
	 */
	public static AnimalDAO getInstance() {
		if (instance == null)
			instance = new AnimalDAO();
		return instance;
	}

	private EntityManager entityManager;

	private EntityManager getEntityManager() {
		EntityManagerFactory factory = Persistence.createEntityManagerFactory("ProjetoIntegrador");
		if (entityManager == null) {
			entityManager = factory.createEntityManager();
		}

		return entityManager;
	}

	/**
	 * Metódo responsável por listar todos os animais
	 * 
	 * @author Matheus Gambarin
	 * @return
	 */

	@SuppressWarnings("unchecked")
	public List<Animal> listarTodos() {
		entityManager = getEntityManager();
		
		List<Animal> animais = entityManager.createQuery("FROM " + Animal.class.getName()).getResultList();
		
		return animais;
		
		
	}

}
