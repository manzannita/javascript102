"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 2',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 3',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};

// Variable para almacenar el ítem actualmente seleccionado
let currentItem = null;

// Función para agregar opciones al select
function populateSelect() {
    const select = document.getElementById('items');
    
    // Limpiar opciones existentes (excepto la primera)
    while (select.children.length > 1) {
        select.removeChild(select.lastChild);
    }
    
    // Agregar cada ítem como opción
    Object.keys(itemData).forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = itemData[key].name;
        select.appendChild(option);
    });
}

// Función para mostrar los datos del ítem seleccionado
function displayItemData(itemKey) {
    if (!itemKey || itemKey === '-1') {
        currentItem = null;
        return;
    }
    
    const item = itemData[itemKey];
    currentItem = itemKey;
    
    // Actualizar la imagen
    document.getElementById('displayImage').src = item.image;
    document.getElementById('displayImage').alt = item.name;
    
    // Actualizar los campos de texto
    document.getElementById('photographer').value = item.photographer;
    document.getElementById('description').value = item.description;
    document.getElementById('score').value = item.score;
}

// Función para aumentar el puntaje
function increaseScore() {
    if (currentItem) {
        itemData[currentItem].score += 1;
        document.getElementById('score').value = itemData[currentItem].score;
    }
}

// Función para disminuir el puntaje
function decreaseScore() {
    if (currentItem) {
        itemData[currentItem].score -= 1;
        document.getElementById('score').value = itemData[currentItem].score;
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Poblar el select con los nombres de los ítems
    populateSelect();
    
    // Event listener para el select
    document.getElementById('items').addEventListener('change', function(e) {
        displayItemData(e.target.value);
    });
    
    // Event listeners para los botones
    document.getElementById('increaseScore').addEventListener('click', increaseScore);
    document.getElementById('decreaseScore').addEventListener('click', decreaseScore);
});