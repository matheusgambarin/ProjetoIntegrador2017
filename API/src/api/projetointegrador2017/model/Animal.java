package api.projetointegrador2017.model;

import java.util.Date;

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
	@Column(name = "id")
	private int id;
	@Column(name = "nome")
	private String nome;
	@Column(name = "raca")
	private String raca;
	@Column(name = "comentario")
	private String comentario;
	@Column(name = "sexo")
	private String sexo;
	@Column(name = "usuarioid")
	private int usuarioid;
	@Column(name = "enderecoid")
	private int enderecoid;
	@Column(name = "perdido")
	private boolean perdido;
	@Column(name = "url")
	private String url;
	@Column(name = "tipo")
	private int tipo;
	@Column(name = "Data_Cadastro")
	private Date Data_Cadastro;
	@Column(name = "Data_Alteracao")
	private Date Data_Alteracao;
	@Column(name = "excluido")
	private boolean excluido;
	@Column(name = "novo")
	private boolean novo;

	public Date getData_Cadastro() {
		return Data_Cadastro;
	}

	public void setData_Cadastro(Date data_Cadastro) {
		Data_Cadastro = data_Cadastro;
	}

	public Date getData_Alteracao() {
		return Data_Alteracao;
	}

	public void setData_Alteracao(Date data_Alteracao) {
		Data_Alteracao = data_Alteracao;
	}

	public boolean isExcluido() {
		return excluido;
	}

	public void setExcluido(boolean excluido) {
		this.excluido = excluido;
	}

	public boolean isNovo() {
		return novo;
	}

	public void setNovo(boolean novo) {
		this.novo = novo;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

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
