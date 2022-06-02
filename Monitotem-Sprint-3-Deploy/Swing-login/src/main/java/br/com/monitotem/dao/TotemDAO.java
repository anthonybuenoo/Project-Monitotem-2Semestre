package br.com.monitotem.dao;

import br.com.monitotem.entities.Totem;
import br.com.monitotem.entities.Usuario;
import br.com.monitotem.service.ConnectionFactorySQL;
import com.github.britooo.looca.api.core.Looca;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.Connection;
import java.sql.SQLException;
import java.time.LocalDateTime;

/**
 *
 * @author enzo.f.silvestre
 */
public class TotemDAO {

    private Connection con;

    public TotemDAO(Connection cnn) {
        this.con = cnn;
    }

    public void salvar(Totem totem, Integer idEmpresa) throws SQLException, UnknownHostException {

        ConnectionFactorySQL connectionFactory = new ConnectionFactorySQL();
        Connection con = connectionFactory.recuperarConexao();
        
        InetAddress infoMaquina = InetAddress.getLocalHost();

        Looca looca = new Looca();

        String sql = "INSERT INTO totem(hostname,sistema,frequenciaCpu,memoria,fabricante,modeloCpu,"
                + "ipTotem,dataRegistro,fk_empresa) VALUES(?,?,?,?,?,?,?,?,?)";

        String verify = "SELECT hostname from TOTEM WHERE hostname = ?";

        String hostName = "";

        try ( PreparedStatement pstm = con.prepareStatement(verify)) {
            pstm.setString(1, infoMaquina.getHostName());
            pstm.execute();
            try ( ResultSet rs = pstm.getResultSet()) {
                while (rs.next()) {
                    hostName = rs.getString(1);
                }
                System.out.println("HOSTNAME É: " + hostName);
            }

            if (!hostName.equals(infoMaquina.getHostName())) {
                try ( PreparedStatement pstm2 = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
                    pstm2.setString(1, infoMaquina.getHostName());
                    pstm2.setString(2, looca.getSistema().getSistemaOperacional().toString());
                    pstm2.setString(3, looca.getProcessador().getFrequencia().toString());
                    pstm2.setString(4, looca.getMemoria().getTotal().toString());
                    pstm2.setString(5, looca.getProcessador().getFabricante().toString());
                    pstm2.setString(6, looca.getProcessador().getMicroarquitetura().toString());
                    pstm2.setString(7, infoMaquina.getHostAddress());
                    pstm2.setString(8, LocalDateTime.now().toString());
                    pstm2.setInt(9, idEmpresa);

                    pstm2.execute();
                    System.out.println("adicionando maquina");
                    try ( ResultSet rs2 = pstm2.getGeneratedKeys()) {
                        while (rs2.next()) {
                            totem.setIdTotem(rs2.getInt(1));
                        }
                    }
                } catch (Exception e) {
                    e.getMessage();
                }
            } else {
                System.out.println("Máquina já está registrada ! ");
            }
        }
    }
}
