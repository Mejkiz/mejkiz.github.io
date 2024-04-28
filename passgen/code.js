function generatePasswords() {
    var numbers = document.getElementById('numbers').checked;
    var lowercase = document.getElementById('lowercase').checked;
    var uppercase = document.getElementById('uppercase').checked;
    var special = document.getElementById('special').checked;
    var length = document.getElementById('length').value;
    var avoidRepetitive = document.getElementById('avoidRepetitive').checked;

    var passwordCharacters = '';
    if (numbers) passwordCharacters += '0123456789';
    if (lowercase) passwordCharacters += 'abcdefghijklmnopqrstuvwxyz';
    if (uppercase) passwordCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (special) passwordCharacters += '%*)?@#$~';

    var passwordsDiv = document.getElementById('passwords');
    passwordsDiv.innerHTML = '<span class="close" onclick="closePasswords()">×</span>';

    for (var i = 0; i < 10; i++) {
        var password = '';
        for (var j = 0; j < length; j++) {
            var randomIndex = Math.floor(Math.random() * passwordCharacters.length);
            var character = passwordCharacters[randomIndex];

            if (avoidRepetitive && password.includes(character)) {
                j--;
                continue;
            }

            password += character;
        }

        var passwordElement = document.createElement('p');
        passwordElement.textContent = (i + 1) + '. ' + password;
        passwordsDiv.appendChild(passwordElement);

        var copyButton = document.createElement('button');
        copyButton.textContent = 'Copy';
        copyButton.onclick = function() {
            var button = this;
            navigator.clipboard.writeText(button.previousSibling.textContent.split('. ')[1]).then(function() {
                button.textContent = 'Copied';
                button.style.backgroundColor = '#004d40';
                setTimeout(function() {
                    button.textContent = 'Copy';
                    button.style.backgroundColor = '#004d40';
                }, 2000);
            }).catch(function() {
                button.textContent = 'Error';
                button.style.backgroundColor = 'red';
                setTimeout(function() {
                    button.textContent = 'Copy';
                    button.style.backgroundColor = '#004d40';
                }, 1000);
            });
        };
        passwordsDiv.appendChild(copyButton);
    }

    passwordsDiv.style.display = 'block';
}

function closePasswords() {
    document.getElementById('passwords').style.display = 'none';
}
