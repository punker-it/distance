const icons = document.querySelectorAll('i');
icons.forEach(element => {
    let iconParent = element.parentNode;
    let iconClass = element.classList;
    for (let code in svg) {
        if(iconClass.contains(code)) {
            element.innerHTML = (svg[code]);
        }
    }
    //console.dir(svg[code]);
    for (let param in iconClass) {
        if(!isNaN(param)) {
            iconParent.querySelector('svg').classList.add(iconClass[param]);
            
        };
        
    }
    element.classList.value = '';
});

const menuBtn = document.querySelector('.m-menu');
const menu = document.querySelector('.menu-sidebar');

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('active');
});

