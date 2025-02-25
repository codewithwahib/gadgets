import { type SchemaTypeDefinition } from 'sanity';

export const carAccessories: SchemaTypeDefinition = {
  name: 'car-accessories',
  title: 'Charging',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string', // Allows both numbers and alphabets
    },
    {
      name: 'discountedPrice',
      title: 'Discounted Price',
      type: 'number', // Only numbers
    },
    {
      name: 'image',
      title: 'Primary Image',
      type: 'image',
      options: { hotspot: true }, // Enables hot spot for image cropping
    },
    {
      name: 'images',
      title: 'Additional Images',
      type: 'array',
      of: [{ type: 'image' }],
      options: { hotspot: true }, // Enables hot spot for image cropping
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
    },
    {
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean', // Indicates if the product is in stock
      description: 'Check this box if the product is available in stock.',
    },
  ],
};
