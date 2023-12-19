document.addEventListener('DOMContentLoaded', function () {
    var items = document.querySelectorAll(".item");

    function handleItemClick() {
        // Remove the "is-active" class from all "item" divs
        items.forEach(function (item) {
            if (item !== this) {
                item.classList.remove("is-active");
            }
        });

        // Toggle the "is-active" class on the clicked item
        this.classList.toggle("is-active");
    }

    // Loop through each element and attach the click event listener
    items.forEach(function (item) {
        item.addEventListener("click", handleItemClick);
    });

    // Click event listener on the document
    document.addEventListener("click", function (e) {
        // Check if the clicked element is not a descendant of any "item" div
        if (!e.target.closest(".item")) {
            // Remove the "is-active" class from all "item" divs
            items.forEach(function (item) {
                item.classList.remove("is-active");
            });
        }
    });
});

function openMenu()
{
    document.getElementById('container').style.right='0%';
    document.getElementById('menu').style.opacity='1';
}
function closeMenu()
{
    document.getElementById('container').style.right='-100%';
    document.getElementById('menu').style.opacity='0';
}

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active'); // Remove the dot before 'active'
                    span.classList.add('fade'); // Remove the dot before 'fade'
                }, (idx + 1) * 50);
            });
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2300);
        setTimeout(() => {
            homeMade.classList.add('active');
        }, 2900);
    });
});
