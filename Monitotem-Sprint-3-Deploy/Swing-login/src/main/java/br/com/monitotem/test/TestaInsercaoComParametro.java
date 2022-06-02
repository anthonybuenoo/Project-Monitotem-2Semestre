package br.com.monitotem.test;
import br.com.monitotem.service.ConnectionFactorySQL;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class TestaInsercaoComParametro {
    
    public static void main(String[] args) throws SQLException {
        
        // AUTO CLOSABLE ativado
        
           ConnectionFactorySQL connectionFactory = new ConnectionFactorySQL();
      try( Connection con = connectionFactory.recuperarConexao()){
        // Esse comando é para não deixar inserir do banco sem meu controle
        con.setAutoCommit(false);
        
        /*
        
        String nomeUsuario ="fernando";
        String emailUsuario = "f@f.com";
        String senhaUsuario = "f123";
        String telefoneUsuario = "219999000";
        String genero = "Masculino";
        Integer fk_empresa = 2;
        */
        
        // Esse try com parenteses serve para fechar automaticamente o statement
        try(PreparedStatement stmt = con.prepareStatement("INSERT INTO usuario(nomeUsuario,emailUsuario,senhaUsuario,"
                + "telefoneUsuario, genero, fk_empresa) VALUES(?,?,?,?,?,?)",Statement.RETURN_GENERATED_KEYS)) {
            
        adicionarVariavel("uri", "uri@jo.com", "1111", "00000", "Masculino", 2, stmt);
        adicionarVariavel("calu", "cal@jo.com", "342", "9999", "Masculino", 2, stmt);
          con.commit();
      
            
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Rollback executado");
            con.rollback();
        }
        
      
      }    
        
    }
    
    public static void adicionarVariavel(String nomeUsuario,String emailUsuario,String senhaUsuario,String telefoneUsuario,String genero,Integer fk_empresa,PreparedStatement stmt) throws SQLException {
        
   
        
        stmt.setString(1, nomeUsuario);
        stmt.setString(2, emailUsuario);
        stmt.setString(3, senhaUsuario);
        stmt.setString(4, telefoneUsuario);
        stmt.setString(5, genero);
        stmt.setInt(6, fk_empresa);
        
        if (nomeUsuario.equals("uri")) {
            
            throw  new  RuntimeException("Deu  não mané");
            
        }
        
        stmt.execute();
        
 
        
       try( ResultSet rs = stmt.getGeneratedKeys()){
        
        while (rs.next()) {
        
            Integer id = rs.getInt(1);// Esse numero 1 seria a coluna que no caso é o id
            System.out.println(id);
            
        }
       }
        
        
    }
        
    
    
}
