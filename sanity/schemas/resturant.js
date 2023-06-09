import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'resturant',
  title: 'Resturant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Resturant name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'image',
      title: 'Image of the Resturant',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of the Resturant',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitude of the Resturant',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Resturant address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Enter a Rating from (1-5 Stars)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).error("Please enter a Value"),
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'dish' } }],
    }),
  ],
})
