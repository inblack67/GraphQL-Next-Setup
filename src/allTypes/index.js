import { decorateType } from '@nexus/schema';
import { GraphQLDate } from 'graphql-scalars';

export const GQLDATE = decorateType(GraphQLDate, {
    rootTyping: 'Date',
    asNexusMethod: 'date'
})

export * from './Query'