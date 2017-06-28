package api.projetointegrador2017.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * 
 * @author Matheus Gambarin
 *
 *         Classe responsável por conter a relação produto x loja
 */
@Entity
@XmlRootElement
@Table(name = "ProdutoXLoja")
public class ProdutoXLoja {
	
	@Id
	@Column(name = "id")
	private int id;
	@Column(name = "produtoid")
	private int produtoid;
	@Column(name = "lojaid")
	private int lojaid;

	public int getProdutoid() {
		return produtoid;
	}

	public void setProdutoid(int produtoid) {
		this.produtoid = produtoid;
	}

	public int getLojaid() {
		return lojaid;
	}

	public void setLojaid(int lojaid) {
		this.lojaid = lojaid;
	}

}
