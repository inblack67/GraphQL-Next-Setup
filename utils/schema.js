import { makeSchema } from '@nexus/schema';
import path from 'path';
import * as types from './allTypes'

export const schema = makeSchema({
    types,
    outputs: {
        schema: path.join(process.cwd()) + "/utils/nexus/schema.graphql",
        typegen: path.join(process.cwd()) + "/utils/nexus/typings.ts",
    },
})