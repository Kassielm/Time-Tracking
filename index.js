

$(document).ready(function() {
    $('.period').on('click', function() {
        // Remove active class from all periods
        $('.period').removeClass('active');

        // Add active class to the clicked period
        $(this).addClass('active');

        // Get the selected period
        var selectedPeriod = $(this).data('period');

        // Hide all period-specific paragraphs
        $('.daily, .weakly, .monthly').hide();

        // Show only the paragraphs for the selected period
        $('.' + selectedPeriod).show();
    });

    // Initially trigger a click on the active period to set initial state
    $('.period.active').trigger('click');
});