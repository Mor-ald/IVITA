let animItems = document.querySelectorAll('._anim_block');

if (animItems.length != 0){
    window.addEventListener('scroll', animScroll);
    function animScroll(){
        for (let i = 0; i < animItems.length; i++){
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight - 100;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }


            if((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            } else{
                if(!animItem.classList.contains('_anim_no_hide')){
                    animItem.classList.remove('_active');
                }           
            }

        }
    }

    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
        }
}