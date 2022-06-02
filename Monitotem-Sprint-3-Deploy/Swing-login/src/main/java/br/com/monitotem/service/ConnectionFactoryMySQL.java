package br.com.monitotem.service;

import com.mchange.v2.c3p0.ComboPooledDataSource;
import java.beans.PropertyVetoException;
import java.sql.SQLException;
import java.sql.Connection;
import javax.sql.DataSource;

/**
 *
 * @author enzo.f.silvestre
 */
public class ConnectionFactoryMySQL {

    public DataSource dataSource;

    public ConnectionFactoryMySQL() throws PropertyVetoException {

        ComboPooledDataSource comboPooledDataSource = new ComboPooledDataSource();
        comboPooledDataSource.setDriverClass("com.mysql.cj.jdbc.Driver");
        comboPooledDataSource.setJdbcUrl("jdbc:mysql://localhost:3306/monitotem");
        comboPooledDataSource.setUser("root");
        comboPooledDataSource.setPassword("mysqldb");

        // limitando quantidade de conexões feitas por vez
        comboPooledDataSource.setMaxPoolSize(15);

        this.dataSource = comboPooledDataSource;
    }

    public Connection recuperarConexao() throws SQLException {
        return this.dataSource.getConnection();
    }

}
