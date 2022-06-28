import { Module } from '@nestjs/common';
import { PokemonModule } from '@src/pokemon/pokemon.module';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/infrastructure/schema.gql'),
      
    }),
    PokemonModule,
  ],
})
export class AppModule {}
