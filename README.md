## Introduction

This Github Repository provides the codes for the interactive graphs & maps of the MEL project. The project is made using a tool called ESRI, and the interactive visualizations are integrated using iframes.

Github is also used to host those interactive graphs. This means that if you go to [https://holtzy.github.io/MEL/](https://holtzy.github.io/MEL/) you will see the interactive graphs.

## Useful links

The final project (story) is visible online. If you have admin rights, you can go [here](https://storymaps.arcgis.com/stories/04e3a8477321491b97eb13a533634eb7/edit) to edit it.

The todo list is available [here](https://www.notion.so/parabolestudio/Chart-development-12f5c2fe53818055b2b8eaab6448058e). The designs to follow are [here](https://www.figma.com/design/zhHt8VHDxZhKSXCnUECIvl/Grand-cycle-de-l'eau-%7C-Final-design?node-id=1-5&p=f&t=ew0loWKbNrwSTr84-0)

The github repo is [here](https://github.com/holtzy/MEL).

## Technology used

Those graphs and maps are made using `Javascript`. It is actually a `React` application, developed using a very common framework called `Vite`.

`D3.js` is used for some helper functions, but shapes are always rendered using `SVG`. `react-spring` is used for the animation, and `shadcn-UI` for the UI components which are based on `Tailwind`.

Check the file called `package.json` for a (very short) list of dependencies.

## How to run locally & deploy

If you want to run this code locally, start by cloning this github repository. (`git clone`)

Then, install all the necessary dependencies using `npm install`.

Then, run `npm run dev` and the project will run locally. You can open a browser and go to `http://localhost:5173/MEL/` to see it live.

Once you're happy with your changes, run `npm run build`. This will create a folder called `public` that is a static version of the website, thus hostable on Github.

## Iframe insertion

It is **very** annoying to include the charts in the story using Iframes. If you want to update an iframe (for instance to change its height), you will have to delete the current iframe and insert a new one using a code that looks like this:

```
<iframe
    src="https://holtzy.github.io/MEL/?section=meteo"
    width="100%"
    height="900"
    style="border:none;">
    sandbox="allow-scripts allow-downloads allow-same-origin allow-forms"
</iframe>
```

Change `meteo` to `recharge` or something else depending on the chart you want to show. Note that the app uses this url parameter to redirect to the right chart type.

Good luck with tweaking the height, this will waste a lot of your time :(

Once the iframe is inserted:

- remove the legend
- click the box: "autoriser l'utilisateur a interagir directement..."
- click the box to keep showing the iframe on phones

## Note about data fetching

Pour renvoyer uniquement les champs « CARACT » et « ARRETE » par exemple dans la réponse JSON, il suffit de remplacer outFields=\* par outFields=CARACT,ARRETE. Voici l’URL modifiée :

```
https://gis.lillemetropole.fr/server2/rest/services/RESSOURCE_EAU/M%C3%A9t%C3%A9o_des_nappes/FeatureServer/1/query
?where=1%3D1
&outFields=CARACT,ARRETE
&returnGeometry=false
&f=json
```

Full documentation [here](https://developers.arcgis.com/rest/services-reference/enterprise/query-feature-service-layer/#request-parameters)
