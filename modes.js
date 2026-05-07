let viewMode = 'double'; 
let formatMode = 'comic'; 

function setFormat(format) {

    formatMode = format;
    render(true);
}

function render(isInitial = false) {
    const leftImg = document.getElementById('leftImg');
    const rightImg = document.getElementById('rightImg');
    const pageWrapper = document.getElementById('canvas'); 

    if (!leftImg || !rightImg) return;

    if (!isInitial) pageWrapper.classList.add('page-exit');

    setTimeout(() => {
        pageWrapper.classList.remove('page-exit');
        
        if (currentIndex === 0 || viewMode === 'single') {
            pageWrapper.classList.add('cover-mode');
            leftImg.src = images[currentIndex];
            rightImg.src = "";
            rightImg.style.display = 'none';
        } else {
            pageWrapper.classList.remove('cover-mode');
    
 
            if (formatMode === 'manga') {
                leftImg.src = images[currentIndex + 1] || "";
                rightImg.src = images[currentIndex];
            } else {
                leftImg.src = images[currentIndex];
                rightImg.src = images[currentIndex + 1] || "";
            }
            rightImg.style.display = (currentIndex + 1 < images.length) ? 'block' : 'none';
        }

        if (!isInitial) {
            pageWrapper.classList.add('page-enter');
            setTimeout(() => pageWrapper.classList.remove('page-enter'), 50);
        }
        updateCounter();
    }, isInitial ? 0 : 300);
}

document.getElementById('nextBtn').onclick = () => {
    let step = (viewMode === 'single' || currentIndex === 0) ? 1 : 2;
    if (currentIndex + step < images.length) {
        currentIndex += step;
        render();
    }
};

document.getElementById('prevBtn').onclick = () => {
    let step = (currentIndex <= 2 || viewMode === 'single') ? 1 : 2;
    if (currentIndex - step >= 0) {
        currentIndex -= step;
        render();
    }
};