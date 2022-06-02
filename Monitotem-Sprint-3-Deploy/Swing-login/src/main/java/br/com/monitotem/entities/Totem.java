package br.com.monitotem.entities;

import com.github.britooo.looca.api.core.Looca;
import java.time.LocalDateTime;

public class Totem {

    private Integer idTotem;
    private String sistema;
    private String frequenciaCpu;
    private String memoria;
    private String fabricate;
    private String modeloCpu;
    private String ipTotem;
    private String dataRegistro;
    private Integer fk_empresa;
    private String hostname;

    public Totem(Looca looca, String ip, String totem) {
        this.sistema = looca.getSistema().getSistemaOperacional().toString();
        this.frequenciaCpu = looca.getProcessador().getFrequencia().toString();
        this.memoria = looca.getMemoria().getTotal().toString();
        this.fabricate = looca.getProcessador().getFabricante().toString();
        this.modeloCpu = looca.getProcessador().getMicroarquitetura().toString();
        this.ipTotem = ipTotem;
        this.fk_empresa = fk_empresa;
        this.dataRegistro = LocalDateTime.now().toString();
        this.hostname = hostname;
    }

    public Totem() {

    }

    public Integer getIdTotem() {
        return idTotem;
    }

    public void setIdTotem(Integer idTotem) {
        this.idTotem = idTotem;
    }

    public String getSistema() {
        return sistema;
    }

    public void setSistema(String sistema) {
        this.sistema = sistema;
    }

    public String getFrequenciaCpu() {
        return frequenciaCpu;
    }

    public void setFrequenciaCpu(String frequenciaCpu) {
        this.frequenciaCpu = frequenciaCpu;
    }

    public String getMemoria() {
        return memoria;
    }

    public void setMemoria(String memoria) {
        this.memoria = memoria;
    }

    public String getFabricate() {
        return fabricate;
    }

    public void setFabricate(String fabricate) {
        this.fabricate = fabricate;
    }

    public String getModeloCpu() {
        return modeloCpu;
    }

    public void setModeloCpu(String modeloCpu) {
        this.modeloCpu = modeloCpu;
    }

    public String getIpTotem() {
        return ipTotem;
    }

    public void setIpTotem(String ipTotem) {
        this.ipTotem = ipTotem;
    }

    public String getDataRegistro() {
        return dataRegistro;
    }

    public void setDataRegistro(String dataRegistro) {
        this.dataRegistro = dataRegistro;
    }

    public Integer getFk_empresa() {
        return fk_empresa;
    }

    public void setFk_empresa(Integer fk_empresa) {
        this.fk_empresa = fk_empresa;
    }

    public String getHostname() {
        return hostname;
    }

    public void setHostname(String hostname) {
        this.hostname = hostname;
    }

    @Override
    public String toString() {
        return "Produto{" + "sistema=" + sistema + ", frequenciaCpu=" + frequenciaCpu + ", memoria=" + memoria + ", fabricate=" + fabricate + ", modeloCpu=" + modeloCpu + ", ipTotem=" + ipTotem + ", dataRegistro=" + dataRegistro + ", fk_empresa=" + fk_empresa + ", hostname=" + hostname + '}';
    }

}
