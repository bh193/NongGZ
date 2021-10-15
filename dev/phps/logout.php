<?php
session_start();
unset($_SESSION["farm_id"]);
unset($_SESSION["farm_name"]);
unset($_SESSION["farm_gm"]);
unset($_SESSION["farm_email"]);

session_unset();
session_destroy();
?>