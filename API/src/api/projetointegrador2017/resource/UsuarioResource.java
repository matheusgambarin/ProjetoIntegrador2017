package api.projetointegrador2017.resource;

import java.net.URI;
import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import api.projetointegrador2017.controller.UsuarioController;
import api.projetointegrador2017.model.Usuario;

/**
 * Classe responsável por conter os metódos rest de acesso ao webservice
 * 
 * @author Matheus Gambarin
 *
 */

@Path("/usuario")
public class UsuarioResource {

	@GET
	@Path("/listartodos")
	@Produces("application/json")
	public ArrayList<Usuario> listarTodos() {
		return new UsuarioController().listarTodos();
	}

	@POST
	@Path("/inserir")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces("application/json")
	public String inserir(final String input) {
		return new UsuarioController().Inserir(input);
	}

}
