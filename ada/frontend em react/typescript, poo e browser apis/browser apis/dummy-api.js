const headers = {
    'app-id': '6581f8df19a10d07a79eaeb3',
    'Content-Type': 'application/json',
};

async function getUsers() {
    const res = await fetch('https://dummyapi.io/data/v1/user?created=1', {
        headers: headers,
    });
    const users = await res.json();
    console.log(users.data);
}

async function getUser(id) {
    try {
        const res = await fetch(`https://dummyapi.io/data/v1/user/${id}`, {
            headers: headers,
        });
        const user = await res.json();
        console.log(user);
    } catch (erro) {
        console.log('Erro ao tentar obter dados do usuario:', erro);
    }
}

async function createUser() {
    const userData = {
        firstName: 'Filipe',
        lastName: 'Miranda',
        email: 'fifomiranda@email.com',
    };

    try {
        await fetch('https://dummyapi.io/data/v1/user/create', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(userData),
        });
    } catch (erro) {
        console.log('Erro ao tentar criar usuario:', erro);
    }
}

async function deleteUser(id) {
    try {
        await fetch(`https://dummyapi.io/data/v1/user/${id}`, {
            method: 'DELETE',
            headers: headers,
        });
    } catch (erro) {
        console.log('Erro ao tentar deletar usuario:', erro);
    }
}

// createUser();

// deleteUser('6581fb356380438c74ba8a9b')

getUsers();

getUser('6581fd53638043b97fbaaaf8');
