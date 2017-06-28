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

		factory.close();
	}
}
