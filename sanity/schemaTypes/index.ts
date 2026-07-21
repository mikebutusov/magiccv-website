import type { SchemaTypeDefinition } from "sanity";
import { objectTypes } from "./objects";
import { documentTypes } from "./documents";

export const schemaTypes: SchemaTypeDefinition[] = [...objectTypes, ...documentTypes];
