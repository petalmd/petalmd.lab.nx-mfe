import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm";
import { environment } from "./src/environments/environment";
import { Workflow } from '@petal/features/nest/workflow';

export const AppDataSource = new DataSource({ ...environment.db,
  synchronize: false,
  logging: false,
  entities: [Workflow],
  migrations: ['apps/api/db/migrations/*.js'],
  subscribers: [],
  migrationsRun: true,
  autoLoadEntities: true,
} as DataSourceOptions)
