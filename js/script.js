$(document).ready(function() {
    $(".burger").click(function() {
        $(this).toggleClass("burger-open")
        $(".nav").toggleClass("nav-open")
        $("body").toggleClass("lock")
    })

    $(window).click(function() {
        $(".burger").removeClass("burger-open")
        $(".nav").removeClass("nav-open")
        $("body").removeClass("lock")
    });
      
    $('.nav-menu, .burger').click(function(event){
        event.stopPropagation();
    });

    const stickersSwiper = new Swiper('.stickers-swiper', {
        spaceBetween: 20,
        slidesPerView: 1,
        autoHeight: true,
        pagination: {
          el: ".stickers-pagination",
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
          clickable: true,
        },
      });

    $(".input-checkbox input").click(function() {
        $(this).parent().toggleClass("input-checkbox-active")
    })

    $(".subscribe-submit").click(function(e) {

        if (!document.getElementById("subscribe-approve").checked) {
            e.preventDefault()
        }
    })

    const fileInput = document.getElementById('become-file-input');
    const dropzone = document.getElementsByClassName("become-file-input-img")[0]
    fileInput.addEventListener('change', () => {
        const formats = ["image/jpeg", "image/png"];

        for (let index = 0; index < fileInput.files.length; index++) {
            const file = fileInput.files[index]
            if (file && formats.indexOf(file.type) != -1) {
                const reader = new FileReader();
                dropzone.innerHTML = '';
                document.getElementsByClassName("become-file-input-icon")[0].style.display = "none"
        
                reader.onload = () => {
                    const thumbnail = document.createElement('img');
                    thumbnail.src = reader.result;
                    thumbnail.style.maxWidth = '60%';
                    thumbnail.style.maxHeight = '200px';

                    dropzone.appendChild(thumbnail);
    
                };
        
                reader.readAsDataURL(file);
            }
            else
            {
                dropzone.innerHTML = '<p>Неверный формат изображения!</p> <p>.png / .jpg </p>';
                dropzone.style.borderColor = 'red';
            }
        }
        
    });

})