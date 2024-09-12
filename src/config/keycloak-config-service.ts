import { Injectable } from '@nestjs/common';
import {
  KeycloakConnectOptions,
  KeycloakConnectOptionsFactory,
  PolicyEnforcementMode,
  TokenValidation,
} from 'nest-keycloak-connect';

@Injectable()
export class KeycloakConfigService implements KeycloakConnectOptionsFactory {
  createKeycloakConnectOptions(): KeycloakConnectOptions {
    return {
        authServerUrl: process.env.authServerurl,
        realm: process.env.realm,
        clientId: process.env.clientId,
        secret: process.env.secret,
        cookieKey: 'KEYCLOAK_JWT',
        logLevels: ['verbose'],
        useNestLogger: true,
         public:false,
        "public-client":true,
        "realmPublicKey":process.env.realmPublicKey,
        "realm-public-key":process.env.realmPublicKey,
         bearerOnly:true,
         "ssl-required":process.env.sslrequired,
        policyEnforcement: PolicyEnforcementMode.PERMISSIVE,
        tokenValidation: TokenValidation.OFFLINE,
        
            
    };
  }
}
//4622 -1122