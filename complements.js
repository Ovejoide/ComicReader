function render(isInitial = false, direction = '') {
    if (!isInitial) {
        pageWrapper.classList.add('page-exit');
    }

    setTimeout(() => {
        pageWrapper.classList.remove('page-exit');
        
        if (currentIndex === 0) {
            pageWrapper.classList.add('cover-mode');
            leftImg.src = images[0];
            rightImg.style.display = 'none';
        } else {
            pageWrapper.classList.remove('cover-mode');
            leftImg.src = images[currentIndex];
            rightImg.src = images[currentIndex + 1] || '';
            rightImg.style.display = (currentIndex + 1 < images.length) ? 'block' : 'none';
        }

        if (!isInitial) {
            pageWrapper.classList.add('page-enter');
            setTimeout(() => pageWrapper.classList.remove('page-enter'), 500);
        }

        updateCounter();
    }, isInitial ? 0 : 300); 
}