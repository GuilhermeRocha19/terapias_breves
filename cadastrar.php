<?php

$email = $_POST['email'];
$nome = $_POST['nome'];
$sobrenome = $_POST['sobrenome'];
$telefone = $_POST['telefone'];
$trabalho = $_POST['trabalho'];



$insert = "INSERT INTO tb_pessoas (email,nome,sobrenome,telefone)VALUES(:email,:nome,:sobrenome,:telefone)";

$dados = array(
    ':email' => $email,
    ':nome' => $nome,
    ':sobrenome' => $sobrenome,
    ':telefone' => $telefone
);

try {
    $stmt = $pdo->prepare($insert);
    $stmt->execute($dados);

    ?>
        <script>
            alert("Entraremos em contato!");
        </script>
    <?php
} catch (PDOException $e){
    ?>
        <script>
            alert("Não foi possível cadastrar!");
        </script>
    <?php
    header('index.html');
}
