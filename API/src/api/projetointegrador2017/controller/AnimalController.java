package api.projetointegrador2017.controller;

import java.util.List;

import api.projetointegrador2017.dao.AnimalDAO;
import api.projetointegrador2017.model.Animal;

/**
 * Classe responsável por ser o controlador entre o resource e a camada DAO de animal
 * 
 * @author Matheus Gambarin
 */
public class AnimalController {

	public List<Animal> listarTodos() {
		return AnimalDAO.getInstance().listarTodos();
	}
}
