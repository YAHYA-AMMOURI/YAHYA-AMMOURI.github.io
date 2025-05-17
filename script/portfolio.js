document.addEventListener('DOMContentLoaded', function() {
    const filterTabs = document.querySelectorAll('.filter-tabs button');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            // Add filtering logic here if needed
        });
    });

    const ctaButton = document.querySelector('.cta button');
    ctaButton.addEventListener('click', function() {
        alert('Contact button clicked!');
    });
});
