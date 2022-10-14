import { Module } from "@nestjs/common";
import { ClientProxySupermarket } from "./client-proxy";

@Module({
  providers: [ClientProxySupermarket],
  exports: [ClientProxySupermarket],
})
export class ProxyModule {}