const lista = document.getElementById('lista');

Sortable.create(lista, {
    animation: 150,
    chosenClass:"seleccionado",
    ghostClass: "fantasma",
    dragClass: "drag",

    onEnd: ()=> {
        console.log('Se inserto un elemento');
    },
    group:"lista-personas",
    store: {
        //guardamos el orden de la lista
        set: (sortable) => {
            const orden = sortable. toArray();
        },

        

    }

});