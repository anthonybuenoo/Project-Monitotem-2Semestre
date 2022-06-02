package br.com.monitotem.service;

import java.sql.Connection;
import java.sql.SQLException;

public class ConexaoBanco {

    public static void main(String[] args) throws SQLException {

        ConnectionFactorySQL connectionFactory = new ConnectionFactorySQL();
        Connection con = connectionFactory.recuperarConexao();

        System.out.println("Fechando conexao!!");

        con.close();

    }

}
