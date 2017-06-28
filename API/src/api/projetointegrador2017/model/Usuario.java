package api.projetointegrador2017.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;


/**
 * Classe responsável por obter os atributos do objeto usuário
 * 
 * @author Matheus Gambarin
 *
 */
@XmlRootElement
@Entity
@Table(name = "Usuario")
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private int id;
	@Column(name = "email")
	private String email;
	@Column(name = "senha")
	private String senha;
	@Column(name = "telefone")
	private String telefone;
	@Column(name = "nome")
	private String nome;
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

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

}
