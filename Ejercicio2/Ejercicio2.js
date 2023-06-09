let container = document.getElementById("cardContainer");
let info = [{img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/harry-potter-y-la-piedra-filosofal-1549965998.jpg?crop=1xw:1xh;center,top&resize=980:*", title: "Harry Potter y la Piedra Filosofal", description: "El día de su cumpleaños, Harry Potter descubre que es hijo de dos conocidos hechiceros, de los que ha heredado poderes mágicos. Debe asistir a una famosa escuela de magia y hechicería, donde entabla una amistad con dos jóvenes que se convertirán en sus compañeros de aventura. Durante su primer año en Hogwarts, descubre que un malévolo y poderoso mago llamado Voldemort está en busca de una piedra filosofal que alarga la vida de quien la posee."}, 
            {img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/18b18f112ef76a9997f0235bf7913b96c2e50811582215ac16e37542c2af7882._RI_TTW_.jpg", title: "Harry Potter y la cámara secreta", description: "Terminado el verano, Harry no ve la hora de abandonar la casa de sus odiosos tíos. Inesperadamente se presenta en su dormitorio Dobby, un elfo doméstico, que le anuncia que correrá un gran peligro si vuelve a Hogwarts."}, 
            {img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/harry-potter-y-el-prisionero-de-azkaban-1549905982.jpg?crop=1xw:1xh;center,top&resize=980:*", title: "Harry Potter y el prisionero de Azkaban", description: "El tercer año de estudios de Harry en Hogwarts se ve amenazado por la fuga de Sirius Black de la prisión de Azkaban. Al parecer, se trata de un peligroso mago que fue cómplice de Lord Voldemort y que intentará vengarse de Harry Potter."}, 
            {img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/harry-potter-y-el-caliz-de-fuego-1549965604.jpg?crop=1xw:1xh;center,top&resize=980:*", title: "Harry Potter y el caliz de fuego", description: "Hogwarts se prepara para el Torneo de los Tres Magos, en el que competirán tres escuelas de hechicería. Para sorpresa de todos, Harry Potter es elegido para participar en la competencia, en la que deberá luchar contra dragones, internarse en el agua y enfrentarse a sus mayores miedos."}, 
            {img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/harry-potter-y-la-orden-del-fe-nix-1549965996.jpg?crop=1xw:1xh;center,top&resize=980:*", title: "Harry Potter y la Orden del Fénix", description: "En su quinto año en Hogwarts, Harry descubre que muchos integrantes de la comunidad de magos no conocen la verdad acerca de su encuentro con Lord Voldemort. Cornelius Fudge, ministro de magia, designa a Dolores Umbridge como maestra de defensa contra de las artes oscuras porque cree que el profesor Dumbledore planea apoderarse de su trabajo. Pero sus enseñanzas son inadecuadas, por lo que Harry prepara a los estudiantes para defender la escuela en contra del mal."},
            {img: "https://enciclopedias.com/wp-content/uploads/2018/02/Harry-Potter-y-el-Misterio-del-Pr%C3%ADncipe-1.jpg", title: "Harry Potter y el misterio del príncipe", description: "Harry descubre un poderoso libro y, mientras trata de descubrir sus orígenes, colabora con Dumbledore en la búsqueda de una serie de objetos mágicos que ayudarán en la destrucción de Lord Voldemort."},
            {img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/harry-potter-y-las-reliquias-de-la-muerte-1-1549905698.jpg?crop=1xw:1xh;center,top&resize=980:*", title: "Harry Potter y las Reliquias de la Muerte (Parte 1)", description: "Harry, Ron y Hermione se marchan de Hogwarts para iniciar su misión más importante: tienen que destruir los horrocruxes, el secreto del poder y la inmortalidad de Voldemort, en los que el temido mago oscuro guarda los fragmentos de su alma."},
            {img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/harry-potter-y-las-reliquias-de-la-muerte-2-1549905695.jpg?crop=1xw:1xh;center,top&resize=980:*", title: "Harry Potter y las Reliquias de la Muerte (Parte 2)", description: "Un enfrentamiento entre el bien y el mal espera cuando el joven Harry (Daniel Radcliffe), Ron (Rupert Grint) y Hermione (Emma Watson) se preparan para una última batalla en contra de Lord Voldemort (Ralph Fiennes). Harry se ha convertido en un joven fuerte que tiene la misión de librar al mundo del mal."}];
            
            


info.forEach(peliculas=> {
    let newCard = document.createElement("div");
    newCard.classList.add("card");

    let newImg = document.createElement("img");
    newImg.src = peliculas.img;
    newImg.width = "imagen";

    let newText = document.createElement("div");
    newText.classList.add("cardText");
    let newTitle = document.createElement("h1");
    newTitle.textContent = peliculas.title;
    let newDescription = document.createElement("p");
    newDescription.textContent = peliculas.description;
    newText.appendChild(newTitle)
    newText.appendChild(newDescription)

    newCard.appendChild(newImg)
    newCard.appendChild(newText)
    container.appendChild(newCard)
})