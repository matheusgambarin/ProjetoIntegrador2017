package api.projetointegrador2017.dao;

import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.print.attribute.standard.DateTimeAtCompleted;

import api.projetointegrador2017.factory.ConnectionFactory;
import api.projetointegrador2017.model.Animal;
import sun.net.www.content.text.plain;

/**
 * Classe responsável por conter os metodos do CRUD
 * 
 * @author Matheus Gambarin
 *
 */
public class AnimalDAO extends ConnectionFactory {

	private static AnimalDAO instance;
	private EntityManager entityManager;

	/**
	 * Método responsavel por criar uma instancia
	 * 
	 * @author Matheus Gambarin
	 * @return new instance de AnimalDAO
	 */

	public static AnimalDAO getInstance() {
		if (instance == null)
			instance = new AnimalDAO();
		return instance;
	}

	/**
	 * Metódo responsável por listar todos os animais
	 * 
	 * @author Matheus Gambarin
	 * @return Lista de animais
	 */

	public List<Animal> listarTodos() {

		entityManager = getEntityManager();

		@SuppressWarnings("unchecked")
		List<Animal> animais = entityManager.createQuery("FROM " + Animal.class.getTypeName()).getResultList();
		return animais;

	}

	/**
	 * Metódo responsável por inserir um animal
	 * 
	 * @author Matheus Gambarin
	 * @param animal(json
	 *            do animal)
	 */

	public void inserirAnimal(Animal animal) {

		entityManager = getEntityManager();

		Animal animalPraInserir = new Animal();
		animalPraInserir.setEnderecoid(animal.getEnderecoid());
		animalPraInserir.setUsuarioid(animal.getUsuarioid());
		animalPraInserir.setData_Cadastro(new Date());
		animalPraInserir.setData_Alteracao(new Date());
		animalPraInserir.setExcluido(animal.isExcluido());
		animalPraInserir.setNovo(animal.isNovo());
		animalPraInserir.setPerdido(animal.isPerdido());
		animalPraInserir.setTipo(animal.getTipo());

		if (animal.getNome() != null) {
			animalPraInserir.setNome(animal.getNome());
		}
		if (animal.getComentario() != null) {
			animalPraInserir.setComentario(animal.getComentario());
		}
		if (animal.getRaca() != null) {
			animalPraInserir.setRaca(animal.getRaca());
		}
		if (animal.getUrl() != null) {
			animalPraInserir.setUrl(animal.getUrl());
		}

		try {
			entityManager.getTransaction().begin();
			entityManager.persist(animalPraInserir);
			entityManager.getTransaction().commit();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	/**
	 * @author Matheus Gambarin
	 * @param id
	 *            do animal
	 * @param animal(json
	 *            de animal)
	 * @return
	 * 
	 * 		Metodo responsável por Alterar um animal já existente
	 */

	public int alterarAnimal(int id, Animal animal) {

		entityManager = getEntityManager();

		try {
			entityManager.getTransaction().begin();
			String exe = "Update Animal set nome = :nome, comentario = :comentario, raca = :raca, url = :url, "
					+ "data_alteracao = :data_alteracao, id = :id, tipo = :tipo, perdido = :perdido  where id = :id";
			Query query = entityManager.createQuery(exe);
			query.setParameter("id", id);
			query.setParameter("nome", animal.getNome());
			query.setParameter("comentario", animal.getComentario());
			query.setParameter("raca", animal.getRaca());
			query.setParameter("data_alteracao", new Date());
			query.setParameter("url", animal.getUrl());
			query.setParameter("tipo", animal.getTipo());
			query.setParameter("perdido", animal.isPerdido());
			int linhasAfetadas = query.executeUpdate();
			entityManager.getTransaction().commit();
			return linhasAfetadas;

		} catch (Exception e) {
			System.out.println(e.getMessage());
			return 0;
		}
	}

	/**
	 * @author Matheus Gambarin
	 * @return lista de animais venda
	 * 
	 *         Metodo responsável por trazer todos os animais do tipo adocao
	 */

	public List<Animal> listarAnimaisAdocao() {

		entityManager = getEntityManager();

		try {
			@SuppressWarnings("unchecked")
			List<Animal> animais = entityManager.createQuery("FROM " + Animal.class.getTypeName() + " where tipo = 0")
					.getResultList();
			return animais;
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
	}

	/**
	 * @author Matheus Gambarin
	 * @return lista de animais venda
	 * 
	 *         Metodo responsável por trazer todos os animais do tipo venda
	 */

	public List<Animal> listarAnimaisVenda() {

		entityManager = getEntityManager();

		try {
			@SuppressWarnings("unchecked")
			List<Animal> animais = entityManager.createQuery("FROM " + Animal.class.getTypeName() + " where tipo = 1")
					.getResultList();
			return animais;
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
	}

	/**
	 * @author Matheus Gambarin
	 * @return lista de animais venda
	 * 
	 *         Metodo responsável por trazer todos os animais do tipo perdido
	 */

	public List<Animal> listarAnimaisPerdidos() {

		entityManager = getEntityManager();

		try {
			@SuppressWarnings("unchecked")
			List<Animal> animais = entityManager.createQuery("FROM " + Animal.class.getTypeName() + " where tipo = 2")
					.getResultList();
			return animais;
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
	}
}
