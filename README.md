Current story:
https://storymaps.arcgis.com/stories/04e3a8477321491b97eb13a533634eb7

Story admin panel:
URL : https://storymaps.arcgis.com/stories
https://storymaps.arcgis.com/stories/04e3a8477321491b97eb13a533634eb7/edit

Dev:
npm run dev

Build:
npm run build

Deploy:
just push to github

Github Repo:
https://github.com/holtzy/MEL

Website:
https://holtzy.github.io/MEL/

Design:
https://www.figma.com/design/zhHt8VHDxZhKSXCnUECIvl/Grand-cycle-de-l'eau-%7C-Final-design?node-id=1-5&p=f&t=ew0loWKbNrwSTr84-0

Iframe example:
Do not forget to tick the box: "autoriser l'utilisateur a interagir directement..."
Height = météo: 900
Do not forget to remove the legend

<iframe
    src="https://holtzy.github.io/MEL/?section=meteo"
    width="100%"
    height="900"
    style="border:none;">
    sandbox="allow-scripts allow-downloads allow-same-origin allow-forms"
</iframe>

TODO
Pour renvoyer uniquement les champs « CARACT » et « ARRETE » par exemple dans la réponse JSON, il suffit de remplacer outFields=\* par outFields=CARACT,ARRETE. Voici l’URL modifiée :

https://gis.lillemetropole.fr/server2/rest/services/RESSOURCE_EAU/M%C3%A9t%C3%A9o_des_nappes/FeatureServer/1/query
?where=1%3D1
&outFields=CARACT,ARRETE
&returnGeometry=false
&f=json

Voici la documentation :
https://developers.arcgis.com/rest/services-reference/enterprise/query-feature-service-layer/#request-parameters
