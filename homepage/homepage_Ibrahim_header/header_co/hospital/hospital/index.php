
<?php
session_start();
include("logedindb.php");

// Initialize MySQLi connection



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log in</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/CSS/style.css">
</head>
<body>
<div class="container" id="container">
        <div class="form-container sign-up-container">
            <form action="index.php" method="POST">
                <h1>Create Account</h1>
                <span>or use your email for registration</span>
                <input type="text" name="name" placeholder="Name" required />
<input type="email" name="email" placeholder="Email" required />
<input type="password" name="password" placeholder="Password" required />

<div class="phone-container">
    <select name="country_code" class="country-code" required>
        <option value="+1">+1 (USA)</option>
        <option value="+44">+44 (UK)</option>
        <option value="+">+86 (China)</option>
        <!-- Add more country codes as needed -->
    </select>
    <input type="tel" name="phone" placeholder="Phone Number" required />
</div>

<button type="submit">Sign Up</button>

            </form>
        </div>
        <div class="form-container sign-in-container">
            <form action="index.php" method="POST">
                <h1>Sign in</h1>
                <span>or use your account</span>
                <div>

                </div>
                <input type="email" placeholder="Email" required/>
                <input type="password" placeholder="Password" required />
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button class="ghost" id="signIn">Sign In</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Hello!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button class="ghost" id="signUp">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    <script src="assets/JS/main.js"></script>
</body>
</html>

<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['signup'])) {
        // Sign-up process
        $username = $_POST["name"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        $country_code = $_POST["country_code"];
        $phone = $_POST["phone"];

        // Validate input
        if (empty($username) || empty($email) || empty($password) || empty($country_code) || empty($phone)) {
            echo "Please fill in all fields!";
            exit();
        }

        // Check if email exists
        $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            echo "Email already exists. Please log in.";
        } else {
            // Hash password
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);

            // Insert new user data into database
            $stmt = $conn->prepare("INSERT INTO users (`Full name`, `email`, `password`, `country_code`, `phone`) VALUES (?, ?, ?, ?, ?)");
            $stmt->bind_param("sssss", $username, $email, $hashed_password, $country_code, $phone);
            
            if ($stmt->execute()) {
                $_SESSION['user_email'] = $email;
                header("Location: Home.php");
                exit(); // Stop further execution after redirection
            } else {
                echo "Error: " . $stmt->error;
            }
        }

        $stmt->close();

    } elseif (isset($_POST['signin'])) {
        // Sign-in process
        $email = $_POST["email"];
        $password = $_POST["password"];

        // Check if email exists
        $stmt = $conn->prepare("SELECT `password` FROM users WHERE `email` = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            $stmt->bind_result($hashed_password);
            $stmt->fetch();

            // Verify the password
            if (password_verify($password, $hashed_password)) {
                $_SESSION['user_email'] = $email;
                header("Location: Home.php");
                exit();
            } else {
                echo "Password incorrect. Please try again.";
            }
        } else {
            echo "Email not found. Please sign up.";
        }

        $stmt->close();
    }
}

$conn->close();
?>




