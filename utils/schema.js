import { makeSchema, queryType } from '@nexus/schema';
import path from 'path';

const Query = queryType({
    definition(t) {
        t.string('name', () => 'Jim Moriarty');
    }
})

const types = {
    Query
}

export const schema = makeSchema({
    types,
    outputs: {
        schema: path.join(process.cwd()) + "/utils/nexus/schema.graphql",
        typegen: path.join(process.cwd()) + "/utils/nexus/typings.ts",
    },
})