import { Module } from '@nestjs/common';
import { KeycloakConfigService } from './keycloak-config-service';


@Module({
  providers: [KeycloakConfigService],
  exports: [KeycloakConfigService],
})
export class keycloakConfigModules {
  static forRoot(arg0: { envFilePath: string[]; isGlobal: boolean; }): import("@nestjs/common").Type<any> | import("@nestjs/common").DynamicModule | Promise<import("@nestjs/common").DynamicModule> | import("@nestjs/common").ForwardReference<any> {
    throw new Error('Method not implemented.');
  }
}
// certificateKey=MIICmzCCAYMCBgGARysAhDANBgkqhkiG9w0BAQsFADARMQ8wDQYDVQQDDAZncmFoYWswHhcNMjIwNDIwMTMyOTAyWhcNMzIwNDIwMTMzMDQyWjARMQ8wDQYDVQQDDAZncmFoYWswggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCSaiVquqneW4zClGtIXKKgGm9W9AOy86mzX5BelTrslEEMIi3PvGXHGwlvXWbj6DYr0N57wEN9rLR/dsQAO129YOc/73fLh0ev8lrWNVTZK9azEz+h/YbD4jQDEL1BoyjshEma/epb3ygCKMzsjqOlOtTgxfckPTJOp5Oj7CUBXvCNSXooEZiP2/BaimEPymidLbm3P1Rj4+zfVxij2IPZInPR+NxccBvHUCMuUh6GzKCDmRBs//atOaP/RFgAyzG32RmrAMIvqWm2PmILPNVNHMahsxhd4soHRds0XITBqPogRRKKUWojeiukO2F/cz35gXrIparps3YeBCFr2k2NAgMBAAEwDQYJKoZIhvcNAQELBQADggEBAAMW3NYgAQUbbyiCGnOMA3St9vtLIWP5BhFU+xkJN3feR02w3YJriNtfwqUTm0qJl0rBK3YPiUvxZkWhiFt91maQMFQz62d+p4K5jMAZV+N+SF032kj/UsxJQ/PkwyzNriR+8Enm9qeUrW1ZWZgdjT2Yx4m0qWPVgXr4xTlwFaRFtch41eIjfBwDHvzGu9V8lOHKICfuk3+AQKRP/DDs2bLcY28LFBKSSAtRCRLjtMmhLc/hUAJf+rWnxJzzWsCNLbhSO0JSy/nyXYQeLE5YCYvRwMbZWWJLUnhlT1948V9gbL9JuC62416eW0WjFoVgYGkZXXVmfW/KgXIfotV2950=
