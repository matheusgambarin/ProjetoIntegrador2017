package api.projetointegrador2017.factory;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import api.projetointegrador2017.model.Animal;
import api.projetointegrador2017.model.Endereco;
import api.projetointegrador2017.model.Usuario;

public class GerarTabelas {

	public static void main(String[] args) {
		EntityManagerFactory factory = Persistence.createEntityManagerFactory("ProjetoIntegrador");
		EntityManager entityManager = factory.createEntityManager();
		
		Usuario user = new Usuario();
		user.setId(1);
		Endereco endereco  = new Endereco();
		endereco.setId(1);
		Animal cao = new Animal();
		cao.setNome("teste2");
		cao.setEnderecoid(1);
		//cao.setUsuario(user);
		cao.setUsuarioid(1);
		
		entityManager.getTransaction().begin();
		entityManager.persist(cao);
		entityManager.getTransaction().commit();
		
		
		List<Animal> animais = entityManager.createQuery("FROM " + Animal.class.getName()).getResultList();
		for (Animal animal : animais) {
			System.out.println(animal.getNome());
		}
		
		factory.close();
	}
}
