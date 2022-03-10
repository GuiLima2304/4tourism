class Tables {
    init(connection) {
        this.connection = connection;
        this.CreateUsers();
    }

    CreateUsers() {
        const sql = 'CREATE TABLE IF NOT EXISTS Users (id int NOT NULL AUTO_INCREMENT, name varchar(11), PRIMARY KEY(id))'

        this.connection.query(sql, (erro) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Table created')
            }
        })
    }
}

module.exports = new Tables;