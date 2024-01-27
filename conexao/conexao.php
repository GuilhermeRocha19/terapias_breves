<?php
   $conexao = mysqli_connect("localhost", "root", "", "cadastro");

   if (mysqli_connect_errno()) {
       die("Erro ao conectar : " . mysqli_connect_error());
   }




?>