<!DOCTYPE html>
<html>
<head>
    <title>Password Generator</title>
    <style>
        body {
            background-color: #111;
            color: #fff;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            flex-direction: column;
        }
        #passwordForm {
            background-color: #333;
            color: #fff;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            margin-bottom: 20px;
        }
        button {
            background-color: #004d40;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
        }
        #passwords {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            max-height: 80%;
            background-color: rgba(0, 0, 0, 0.8);
            color: #fff;
            padding: 50px;
            box-sizing: border-box;
            overflow: auto;
            border-radius: 10px;
        }
        #passwords .close {
            position: absolute;
            right: 20px;
            top: 20px;
            font-size: 30px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Password Generator</h1>
    <form id="passwordForm">
        Numbers 0-9: <input type="checkbox" id="numbers" checked><br>
        Lowercase Letters a-z: <input type="checkbox" id="lowercase" checked><br>
        Uppercase Letters A-Z: <input type="checkbox" id="uppercase" checked><br>
        Special Characters (%, *, ),?, @, #, $, ~): <input type="checkbox" id="special" checked><br>
        Password Length (6-64): 
        <select id="length">
            <script>
                for (var i = 6; i <= 64; i++) {
                    document.write('<option value="' + i + '">' + i + '</option>');
                }
            </script>
        </select><br>
        Avoid repetitive characters: <input type="checkbox" id="avoidRepetitive"><br>
        <button type="button" onclick="generatePasswords()">Generate Passwords</button>
    </form>
    <div id="passwords">
        <span class="close" onclick="closePasswords()">×</span>
    </div>
    <script src="code.js"></script>
</body>
</html>
