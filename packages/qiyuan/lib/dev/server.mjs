import consola from "consola";
class CliServer {
    run() {
        consola.info("Starting Server......");
    }
}

const server = new CliServer();


server.run();

export default server;
