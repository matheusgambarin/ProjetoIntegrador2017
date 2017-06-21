package api.projetointegrador2017.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * 
 * @author Matheus Gambarin
 *
 *         Classe responsável por conter os atributos do objeto Animal
 */

@XmlRootElement
@Entity
@Table(name = "animal")
public class Animal {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id")
	private int id;
	private String nome;
	private String raca;
	private String comentario;
	private String sexo;
	private int usuarioid;
	private int enderecoid;
	private boolean perdido;
	private int tipo;

	public int getId() {
		return id;
	}
	
	public int getUsuarioid() {
		return usuarioid;
	}

	public void setUsuarioid(int usuarioid) {
		this.usuarioid = usuarioid;
	}

	public int getEnderecoid() {
		return enderecoid;
	}

	public void setEnderecoid(int enderecoid) {
		this.enderecoid = enderecoid;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getRaca() {
		return raca;
	}

	public void setRaca(String raca) {
		this.raca = raca;
	}

	public String getComentario() {
		return comentario;
	}

	public void setComentario(String comentario) {
		this.comentario = comentario;
	}

	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	/*@ManyToOne
	@JoinColumn(name = "usuarioid", referencedColumnName = "id", insertable = false, updatable = false)
	public Usuario getUsuario() {
		return this.Usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.Usuario = usuario;
	}

	@ManyToOne
	@JoinColumn(name = "enderecoid", referencedColumnName = "id", insertable = false, updatable = false)
	public Endereco getEndereco() {
		return this.Endereco;
	}

	public void setEndereco(Endereco Endereco) {
		this.Endereco = Endereco;
	}*/

	public boolean isPerdido() {
		return perdido;
	}

	public void setPerdido(boolean perdido) {
		this.perdido = perdido;
	}

	public int getTipo() {
		return tipo;
	}

	public void setTipo(int tipo) {
		this.tipo = tipo;
	}

}
