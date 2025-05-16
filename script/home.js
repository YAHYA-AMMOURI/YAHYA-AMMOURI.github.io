document.addEventListener('DOMContentLoaded', function() {
    const filterTabs = document.querySelectorAll('.filter-tabs button');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            // Add filtering logic here if needed
        });
    });

    const sliderControls = document.querySelectorAll('.slider-controls button');
    sliderControls.forEach(control => {
        control.addEventListener('click', function() {
            // Add slider logic here if needed
        });
    });
});
