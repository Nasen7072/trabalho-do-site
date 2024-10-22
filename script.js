// Toggle the main menu
document.querySelector('.menu-hamburguer').addEventListener('click', function() {
    document.querySelector('.menu-cascata').classList.toggle('show');
});

// Toggle the sub-menu for 'sucos'
document.querySelector('.menu-sucos > a').addEventListener('click', function(event) {
    event.preventDefault();
    const sucosMenu = document.querySelector('.menu-sucos');
    
    sucosMenu.classList.toggle('show-sucos');
    
    const ul = sucosMenu.querySelector('ul');
    if (sucosMenu.classList.contains('show-sucos')) {
        ul.style.display = 'block';
    } else {
        ul.style.display = 'none';
    }
});
