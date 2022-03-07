# NATS Streaming  Server

 [NATS](https://nats.io/), a lightweight, high-performance cloud native messaging system. I explore the beauty of **NATS** by developing this elegant publishing and listening service. In the process, I created some set of abstracted reusable utilities. 

## Usage

- Make sure that [docker](https://www.docker.com/) is installed

- Start your docker desktop engine

- In the root of the project, run this command:

    ```shell
        docker-compose up 
    ```

- In the same vein, install all the dependencies by running this command:
    ```shell
        npm install
    ```

- Start the publisher with this command: 
    ```shell
        npm run publish
    ```

- Start the listener with this command:
    ```shell
        npm run listen
    ```
