package br.com.monitotem.test;

import br.com.monitotem.dao.TotemDAO;
import br.com.monitotem.service.ConnectionFactorySQL;
import br.com.monitotem.entities.Totem;
import com.github.britooo.looca.api.core.Looca;
import java.net.Inet4Address;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.sql.Connection;
import java.sql.SQLException;


public class TestaInsercaoEListagemComUsuario {

    public static void main(String[] args) throws SQLException, UnknownHostException {

        String infoMaquina = InetAddress.getLocalHost().toString();
        String ip = InetAddress.getLocalHost().getHostAddress().toString();

        
        
        Looca looca = new Looca();

        Totem prod = new Totem(looca,infoMaquina,ip);

        try ( Connection con = new ConnectionFactorySQL().recuperarConexao()) {

            TotemDAO usuarioDAO = new TotemDAO(con);

    
           
        }

    }
}
