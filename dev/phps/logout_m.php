<?php
session_start();
unset($_SESSION["mem_id"]);
unset($_SESSION["mem_email"]);
unset($_SESSION["mem_name"]);
unset($_SESSION["mem_img"]);

session_unset();
session_destroy();
?>