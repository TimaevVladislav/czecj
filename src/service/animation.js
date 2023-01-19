


const animOnScroll = (animItems) => {
  for (let index = 0; index < animItems.length; index++) {
    const animItem = animItems[index];
    const animItemHeight = animItem.offsetHeight ;
    
    const animItemOffset = offset(animItem).top;

    const animStart = 8;

    let animItemPoint = window.innerHeight - animItemHeight / animStart;

    if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight / animStart;
    }

    if (pageYOffset > 1200) {
      document.querySelector('.global_arrow').classList.add('global_arrow-active')
    } else {
      document.querySelector('.global_arrow').classList.remove('global_arrow-active')
    }

    if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
      if (!animItem.classList.contains('anim-true')) {
        animItem.classList.add('_active')
        animItem.classList.add('anim-true')
      } 
    } else {
      if (!animItem.classList.contains('anim-true')) {
        animItem.classList.remove('_active')
      }
    }
  }
} 

const offset = (el) => {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  }
}

export {
  animOnScroll
}