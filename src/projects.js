const projects = {
  surface_group: {
    title: "Surface Group",
    description:
      "Currently, I work for a company called Surface Group International, a natural stone distributor. The company came to me with a vision for a complete rebrand and an E-Commerce website. I worked closely with the owner to redesign their aesthetic, logo and restructure their data model. This was quite an undertaking, due to the complex nature of the product base, and the specific vision the owner had envisioned. The website has gone through several phases since. Although the production site is a headless, Shopify Storefront API website interfacing with a React front end, we are relaunching a refined version I built and designed using Next.js + Typescript, Contentful, Apollo + GraphQL, Algolia Search, Snipcart and React Bootstrap with custom SCSS on top of it. The filtering within the shop page leverages GraphQL filtering, and the high res, optimized images are using the Cloudinary extension within Contentful. The custom calculator component on the product page helps users figure out the exact quantity of product needed for their application, and the Snipcart intergration allows for an easy checkout experience. This 'JAMstack' approach allowed me to utilize powerful 3rd party services, so I could focus on writing clean code an a quality UX/UI.",
    repo: "https://github.com/Arunscape224/headless-next-ecommerce",
    deploy: "https://flamboyant-mcclintock-010ddc.netlify.app/",
  },
  gopi_inspires: {
    title: "Gopi Inspires",
    description:
      "A blog I built using Contentful, Gatsby.js, Reacstrap and Stripe to manage merch / ecommerce. I am using the Disqus plugin to allow users to comment on posts.",
    deploy: "http://gopiinspires.com/",
  },
  halfdog: {
    title: "Halfdog",
    description:
      "A website I built for a band whose album I recorded. This site was a React project built using Gatsby.js.",
    deploy: "https://www.halfdogband.com/",
  },
}

export default projects
