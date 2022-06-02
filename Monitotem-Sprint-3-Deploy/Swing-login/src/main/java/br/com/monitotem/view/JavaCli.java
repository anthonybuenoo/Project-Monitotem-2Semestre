package br.com.monitotem.view;

import br.com.monitotem.dao.TotemDAO;
import br.com.monitotem.dao.UserDao;
import br.com.monitotem.entities.Totem;
import br.com.monitotem.entities.Usuario;
import br.com.monitotem.service.ConnectionFactoryMySQL;
import br.com.monitotem.service.ConnectionFactorySQL;
import br.com.monitotem.service.Slack;
import br.com.monitotem.test.TestSelect;
import com.github.britooo.looca.api.core.Looca;
import java.beans.PropertyVetoException;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.sql.SQLException;
import java.util.Scanner;

public class JavaCli {

    public static void main(String[] args) throws SQLException, PropertyVetoException, UnknownHostException {
        Scanner leitorString = new Scanner(System.in);
        Scanner leitorNumber = new Scanner(System.in);
        Boolean autenticou = false;
        System.out.println("Escolha opção - 1 para JavaSwing ou 2 para Java CLI");
        String opcao = leitorString.nextLine();
        if (opcao.equals("1")) {
            new Cadastro().setVisible(true);
        } else {
            while (!autenticou) {

                System.out.println("Insira seu email");
                String emailUser = leitorString.nextLine();
                System.out.println("insira sua senha");
                String senhaUser = leitorNumber.nextLine();

                Usuario usuario = new Usuario(emailUser, senhaUser);
                UserDao userDao = new UserDao();

                InetAddress inetAddress;
                TestSelect ts = new TestSelect();
                Slack slack = new Slack();

                try {
                    System.out.println(usuario);

                    Usuario validar = userDao.validarLogin(usuario);
                    System.out.println(validar);

                    System.out.println("O retorno disso é " + validar);

                    if (validar.getEmailUsuario() != null && validar.getSenhaUsuario() != null) {
                        ts.Reinicia();
                        autenticou = true;
                        new ThreadHardware();

                        try {
                            slack.sendNewUser(usuario);
                        } catch (Exception ex) {
                            ex.printStackTrace();
                        }
                        System.out.println("Login efetuado com sucesso !");

                        try {
                            String infoMaquina = InetAddress.getLocalHost().toString();
                            String ip = InetAddress.getLocalHost().getHostAddress().toString();

                            Looca looca = new Looca();

                            Totem prod = new Totem(looca, infoMaquina, ip);

                            try ( java.sql.Connection con = new ConnectionFactorySQL().recuperarConexao()) {
                                TotemDAO totemDao = new TotemDAO(con);
                                totemDao.salvar(prod, validar.getIdEmpresa());
                            }
                            try ( java.sql.Connection con = new ConnectionFactoryMySQL().recuperarConexao()) {
                                TotemDAO totemDao = new TotemDAO(con);
                                totemDao.salvar(prod, validar.getIdEmpresa());
                            }
                        } catch (Exception e) {
                            e.printStackTrace();
                        }

                        Menu menu = new Menu();

                    } else {
                        autenticou = false;
                        System.out.println("Login inválido tente novamnte");
                    }
                } catch (SQLException ex) {
                    ex.getMessage();
                    System.out.println("error em");
                }
            }

        }
    }
}
