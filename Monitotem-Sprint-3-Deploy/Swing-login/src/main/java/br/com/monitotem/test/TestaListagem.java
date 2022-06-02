package br.com.monitotem.test;

import br.com.monitotem.service.ConnectionFactorySQL;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.sql.SQLException;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class TestaListagem {

    public static void main(String[] args) throws SQLException, UnknownHostException {

        ConnectionFactorySQL connectionFactory = new ConnectionFactorySQL();
        Connection con = connectionFactory.recuperarConexao();

        InetAddress infoMaquina = InetAddress.getLocalHost();
        Integer id = 0;
        String verify = "SELECT idTotem from TOTEM WHERE hostname = ?";
        try ( PreparedStatement pstm = con.prepareStatement(verify)) {
            pstm.setString(1, infoMaquina.getHostName());

            pstm.execute();

            try ( ResultSet rs = pstm.getResultSet()) {
                while (rs.next()) {
                    id = rs.getInt(1);
                }
            } catch (Exception ex) {
                ex.printStackTrace();
            }

        } catch (Exception ex) {
            ex.printStackTrace();
        }

        System.out.println(id);
    }
}
