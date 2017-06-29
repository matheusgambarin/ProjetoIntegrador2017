package api.projetointegrador2017.resource;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import api.projetointegrador2017.controller.AnimalController;
import api.projetointegrador2017.model.Animal;

/**
 * Classe responsável por conter os metódos rest de acesso ao webservice
 * 
 * @author Matheus Gambarin
 *
 */

@Path("/animal")
public class AnimalResource {

	@GET
	@Path("/listartodos")
	@Produces("application/json")
	public List<Animal> listarTodos() {
		return new AnimalController().listarTodos();
	}

	@POST
	@Path("/inserir")
	@Consumes("application/json")
	public Response inserirAnimal(Animal animal) {
		new AnimalController().inserirAnimal(animal);
		return Response.ok().build();
	}

	@PUT
	@Path("/alterar/{id}")
	@Consumes("application/json")
	public Response alterarAnimal(@PathParam("id") int id, Animal animal) {
		int count = new AnimalController().alterarAnimal(id, animal);
		if (count == 0) {
			return Response.status(Response.Status.BAD_REQUEST).build();
		}
		return Response.ok().build();
	}

	@GET
	@Path("/venda")
	@Produces("application/json")
	public List<Animal> listarAnimaisVenda() {
		return new AnimalController().listarAnimaisVenda();
	}

	@GET
	@Path("/adocao")
	@Produces("application/json")
	public List<Animal> listarAnimaisAdocao() {
		return new AnimalController().listarAnimaisAdocao();
	}

	@GET
	@Path("/perdido")
	@Produces("application/json")
	public List<Animal> listarAnimaisPerdidos() {
		return new AnimalController().listarAnimaisPerdidos();
	}

}
