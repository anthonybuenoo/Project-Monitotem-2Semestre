package br.com.monitotem.dao;

import br.com.monitotem.service.ConnectionFactorySQL;
import br.com.monitotem.entities.Usuario;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UserDao {

    public UserDao() {

    }

    public Usuario validarLogin(Usuario user) throws SQLException {
        ConnectionFactorySQL connectionFactory = new ConnectionFactorySQL();
        Connection con = connectionFactory.recuperarConexao();

        String sql = "SELECT emailUsuario, senhaUsuario, fk_empresa FROM usuario where emailUsuario =? AND senhaUsuario = ?";
        Usuario usuario = new Usuario();

        try ( PreparedStatement pstm = con.prepareStatement(sql)) {

            pstm.setString(1, user.getEmailUsuario());
            pstm.setString(2, user.getSenhaUsuario());

            pstm.execute();

            try ( ResultSet rs = pstm.getResultSet()) {
                while (rs.next()) {
                    usuario.setEmailUsuario(rs.getString(1));
                    usuario.setSenhaUsuario(rs.getString(2));
                    usuario.setIdEmpresa(rs.getInt(3));
                }
            }
        }

        System.out.println(usuario);
        return usuario;
    }

}
