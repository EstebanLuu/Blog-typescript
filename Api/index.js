`use strict`;

import {sequelize} from "./src/database/db.js";
import app from "./src/app.js";
import "./src/models/posts.js"

async function main() {
 try {
    await sequelize.sync({force: true});
    console.log("La conexion se hizo con exito")
    app.listen(3000)
    console.log("Servidor iniciado en localhost:", 3000)
 } catch (error) {
    console.error("se hizo una mala conexion", error)
 }
}

main()
