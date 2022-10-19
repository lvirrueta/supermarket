import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { RabbitMQ } from "./constants";

@Injectable()
export class ClientProxySupermarket {
  constructor(private readonly config: ConfigService) { }

  /** Proxy of module admin */
  clientProxyAdmin(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: this.config.get('AMQP_URL'),
        queue: RabbitMQ.AdminQueue,
      }
    })
  }

  /** Proxy of module manager */
  clientProxyManager(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: this.config.get('AMQP_URL'),
        queue: RabbitMQ.ManagerQueue,
      }
    })
  }

  /** Proxy of module auth */
  clientProxyAuth(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: this.config.get('AMQP_URL'),
        queue: RabbitMQ.AuthQueue,
      }
    })
  }

}
