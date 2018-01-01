(function($){

  /* ---------------------------------------------------------------------------
   * Filter publications.
   * --------------------------------------------------------------------------- */

  let $grid_pubs = $('#container-publications');
  $grid_pubs.isotope({
    itemSelector: '.isotope-item',
    percentPosition: true,
    masonry: {
      // Use Bootstrap compatible grid layout.
      columnWidth: '.grid-sizer'
    }
  });

  // Active publication filters.
  let pubFilters = {};

  // Flatten object by concatenating values.
  function concatValues( obj ) {
    let value = '';
    for ( let prop in obj ) {
      value += obj[ prop ];
    }
    return value;
  }

  $('.pub-filters').on( 'change', function() {
    let $this = $(this);

    // Get group key.
    let filterGroup = $this[0].getAttribute('data-filter-group');

    // Set filter for group.
    pubFilters[ filterGroup ] = this.value;

    // Combine filters.
    let filterValues = concatValues( pubFilters );

    // Activate filters.
    $grid_pubs.isotope({ filter: filterValues });

    // If filtering by publication type, update the URL hash to enable direct linking to results.
    if (filterGroup == "pubtype") {
      // Set hash URL to current filter.
      let url = $(this).val();
      if (url.substr(0, 9) == '.pubtype-') {
        window.location.hash = url.substr(9);
      } else {
        window.location.hash = '';
      }
    }
  });

  // Filter publications according to hash in URL.
  function filter_publications() {
    let urlHash = window.location.hash.replace('#','');
    let filterValue = '*';

    // Check if hash is numeric.
    if (urlHash != '' && !isNaN(urlHash)) {
      filterValue = '.pubtype-' + urlHash;
    }

    // Set filter.
    let filterGroup = 'pubtype';
    pubFilters[ filterGroup ] = filterValue;
    let filterValues = concatValues( pubFilters );

    // Activate filters.
    $grid_pubs.isotope({ filter: filterValues });

    // Set selected option.
    $('.pubtype-select').val(filterValue);
  }

  /* ---------------------------------------------------------------------------
   * On window load.
   * --------------------------------------------------------------------------- */

  $(window).on('load', function() {
    // Filter projects.
    $('.projects-container').each(function(index, container) {
      let $container = $(container);
      let $section = $container.closest('section');
      let layout = 'masonry';
      if ($section.find('.isotope').hasClass('js-layout-row')) {
        layout = 'fitRows';
      }

      $container.imagesLoaded(function() {
        // Initialize Isotope after all images have loaded.
        $container.isotope({
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: $section.find('.default-project-filter').text()
        });
        // Filter items when filter link is clicked.
        $section.find('.project-filters a').click(function() {
          let selector = $(this).attr('data-filter');
          $container.isotope({filter: selector});
          $(this).removeClass('active').addClass('active').siblings().removeClass('active all');
          return false;
        });
      });
    });

    // Enable publication filter for publication index page.
    if ($('.pub-filters-select')) {
      filter_publications();
      // Useful for changing hash manually (e.g. in development):
      // window.addEventListener('hashchange', filter_publications, false);
    }
  });

})(jQuery);
