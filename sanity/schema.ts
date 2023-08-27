import { type SchemaTypeDefinition } from 'sanity'
import { product } from './ProductList'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}
