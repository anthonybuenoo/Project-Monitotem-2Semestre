//CADASTRO
function cadastrarEmpresa() {
        

    var cnpjVar = ipt_cnpj_empresa.value;
    var nomeVar = ipt_nome_empresa.value;
    var emailVar = ipt_email_empresa.value;
    var cepVar = ipt_cep_empresa.value;
    var telefoneVar = ipt_telefone_empresa.value;
    var senhaVar = ipt_senha_empresa.value;
    var confirmacaoSenhaVar = ipt_confirmar_senha_empresa.value;
    
    

    if (nomeVar == "" || emailVar == "" || senhaVar == "" || confirmacaoSenhaVar == "" ) {
        window.alert("Preencha todos os campos para prosseguir!")

        if (nomeVar == "") {
            console.log('nome está em branco')
        }
        if (emailVar == "") {
            console.log('email está em branco')
        }
        if (senhaVar == "") {
            console.log('senha está em branco')
        }
        if (confirmacaoSenhaVar == "") {
            console.log('confirmacaoSenha está em branco')
        } if (dataNascimentoVar == "") {
            alert('Data de nascimento não válida')
        }
        
        return false;

    }
    if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".com") == -1) {
        window.alert("Ops, e-mail inválido! Verifique e tente novamente.");
        
        return false;
    }

    if (senhaVar != confirmacaoSenhaVar) {
        window.alert("As senhas inseridas devem ser iguais para prosseguir!");
       
        return false;
    }

    fetch("/usuarios/cadastrarEmpresa", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            cnpjServer: cnpjVar,
            nomeServer: nomeVar,
            emailServer: emailVar,
            cepServer: cepVar,
            telefoneServer: telefoneVar,
            senhaServer: senhaVar,
        

        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Cadastro realizado com sucesso!");
            window.location = "homeEmpresa.html";
            limparFormulario();
           
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
       
    });

    return false;
}


//CADASTRO USUARIO
function cadastrarUsuario() {
        

    var nomeVar = ipt_nome_usuario.value;
    var emailUsuarioVar = ipt_email_usuario.value;
    var telefoneVar = ipt_telefone_usuario.value;
    var generoVar = slc_genero_usuario.value;
    var senhaUsuarioVar = ipt_senha_usuario.value;
    var confirmacaoSenhaVar = ipt_confirmar_senha_usuario.value;
    
    

    if (nomeVar == "" || emailUsuarioVar == "" || senhaUsuarioVar == "" || confirmacaoSenhaVar == "" ) {
        window.alert("Preencha todos os campos para prosseguir!")

        if (nomeVar == "") {
            console.log('nome está em branco')
        }
        if (emailUsuarioVar == "") {
            console.log('email está em branco')
        }
        if (senhaUsuarioVar == "") {
            console.log('senha está em branco')
        }
        if (confirmacaoSenhaVar == "") {
            console.log('confirmacaoSenha está em branco')
        } if (generoVar == "") {
            alert('Data de nascimento não válida')
        }
        
        return false;

    }
    if (emailUsuarioVar.indexOf("@") == -1 || emailUsuarioVar.indexOf(".com") == -1) {
        window.alert("Ops, e-mail inválido! Verifique e tente novamente.");
        
        return false;
    }

    if (senhaUsuarioVar != confirmacaoSenhaVar) {
        window.alert("As senhas inseridas devem ser iguais para prosseguir!");
       
        return false;
    }

    fetch("/usuarios/cadastrarUsuario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeServer: nomeVar,
            emailUsuarioServer: emailUsuarioVar,
            telefoneServer: telefoneVar,
            generoServer: generoVar,
            senhaUsuarioServer: senhaUsuarioVar,    

        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Cadastro realizado com sucesso!");
            window.location = "homeEmpresa.html";
            limparFormulario();
           
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
       
    });

    return false;
}


