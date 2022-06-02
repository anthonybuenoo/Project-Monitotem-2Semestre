
package br.com.monitotem.test;
import br.com.monitotem.service.ConnectionFactorySQL;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;


public class TestaRemocao {

    public static void main(String[] args) throws SQLException {
        
        ConnectionFactorySQL factory = new ConnectionFactorySQL();
        Connection con = factory.recuperarConexao();
        
        PreparedStatement stmt =  con.prepareStatement("DELETE FROM usuario WHERE idUsuario = ?");
        stmt.setInt(1,11);
        stmt.execute();
        
    Integer linhasModificadas =   stmt.getUpdateCount();
    
        System.out.println("Quantidade de linhas que foram modificadas" + linhasModificadas);
        
    }
    
}
