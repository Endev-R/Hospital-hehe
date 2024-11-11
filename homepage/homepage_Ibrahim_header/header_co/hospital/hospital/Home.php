
<?php
// Your PHP code or HTML content goes here
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h3> This is our home page</h3>
    <form action="Home.php" method="post">
        <input type= "submit" name="logout" value="Logout"><br>
        
    </form>
</body>
</html>

<?php
if(isset($_POST['logout'])){
    session_destroy();
    header("Location: index.php");
}
?>