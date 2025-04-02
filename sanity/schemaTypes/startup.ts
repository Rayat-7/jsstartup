import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const startup = defineType({
    name:"startup",
    title:"Startups",
    type:"document",
    fields:[
        defineField({
            name: "title",
            type: "string",
          }),
        defineField({
            name:"slug",
            type:"slug",
            options:{
                source:'title'
            }
        }),
          defineField({
            name: "author",
            type: "reference",
            to:{type:"author"}
          }),
          defineField({
            name: "views",
            type: "number",
          }),
          defineField({
            name: "description",
            type: "text",
          }),
          defineField({
            name: "category",
            type: "string",
            validation:(Rule)=>Rule.min(1).max(20).required().error("plaease enter a catagory"),
          }),
          defineField({
            name: "image",
            type: "url",
            validation:(Rule) =>Rule.required(),
          }),
          defineField({
            name:"Ptich",
            type:"markdown"
          }),
    ],
    // preview: {
    //     select: {
    //       title: "name",
    //     },
    //   },
})