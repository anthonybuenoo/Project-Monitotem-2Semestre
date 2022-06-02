package br.com.monitotem.test;
import br.com.monitotem.service.ConnectionFactoryMySQL;
import br.com.monitotem.service.ConnectionFactorySQL;
import java.beans.PropertyVetoException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


public class TestaInsercao {
    
    public static void main(String[] args) throws SQLException, PropertyVetoException {
        
        ConnectionFactoryMySQL connectionFactory = new ConnectionFactoryMySQL();
        Connection cnn = connectionFactory.recuperarConexao();
        
        Statement stmt = cnn.createStatement();
        stmt.execute("INSERT INTO usuario(nomeUsuario,emailUsuario,senhaUsuario,"
                + "telefoneUsuario, genero, fk_empresa) VALUES('Rodrigo','r@r.com',"
                + "'r123','123456','masculino',1)",Statement.RETURN_GENERATED_KEYS);
        
        ResultSet rs = stmt.getGeneratedKeys();
        
        while (rs.next()) {
        
            Integer id = rs.getInt(1);// Esse numero 1 seria a coluna que no caso é o id
            System.out.println(id);
            
        }
        
   
    }
    
}
