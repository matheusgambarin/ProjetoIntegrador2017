package api.projetointegrador2017.controller;

import java.util.List;

import api.projetointegrador2017.dao.AnimalDAO;
import api.projetointegrador2017.model.Animal;

/**
 * Classe responsável por ser o controlador entre o resource e a camada DAO de
 * animal
 * 
 * @author Matheus Gambarin
 */
public class AnimalController {

	public List<Animal> listarTodos() {
		return AnimalDAO.getInstance().listarTodos();
	}

	public void inserirAnimal(Animal animal) {
		AnimalDAO.getInstance().inserirAnimal(animal);
	}

	public int alterarAnimal(int id, Animal animal) {
		return AnimalDAO.getInstance().alterarAnimal(id, animal);
	}

	public List<Animal> listarAnimaisVenda() {
		return AnimalDAO.getInstance().listarAnimaisVenda();
	}

	public List<Animal> listarAnimaisAdocao() {
		return AnimalDAO.getInstance().listarAnimaisAdocao();
	}

	public List<Animal> listarAnimaisPerdidos() {
		return AnimalDAO.getInstance().listarAnimaisPerdidos();
	}
}
